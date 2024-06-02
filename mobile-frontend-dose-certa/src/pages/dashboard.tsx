import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get("window").width;

interface Remedio {
  id: string;
  nome: string;
  data: string;
}

interface Medicacao {
  id: string;
  data: string;
}

interface Visita {
  id: string;
  data: string;
}

const DashboardScreen = () => {
  const [patientCount, setPatientCount] = useState(0);
  const [chartData, setChartData] = useState({
    labels: ["Rémedios Registrados", "Medicações Registradas", "Visitas Agendadas"],
    datasets: [{ data: [0, 0, 0] }],
  });
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [remediosResponse, medicacoesResponse, visitasResponse, patientCountResponse] = await Promise.all([
          axios.get<Remedio[]>('http://192.168.0.0:5092/api/Remedio'),
          axios.get<Medicacao[]>('http:/192.168.0.0:5092/api/Medicacao'),
          axios.get<Visita[]>('http://192.168.0.0:5092/api/Visita'),
          axios.get('/api/users/patientCount'),
        ]);

        const filteredRemedios = startDate && endDate
          ? remediosResponse.data.filter((remedio: Remedio) => {
            const date = new Date(remedio.data);
            return date >= new Date(startDate) && date <= new Date(endDate);
          })
          : remediosResponse.data;

        const filteredMedicacoes = startDate && endDate
          ? medicacoesResponse.data.filter((medicacao: Medicacao) => {
            const date = new Date(medicacao.data);
            return date >= new Date(startDate) && date <= new Date(endDate);
          })
          : medicacoesResponse.data;

        const filteredVisitas = startDate && endDate
          ? visitasResponse.data.filter((visita: Visita) => {
            const date = new Date(visita.data);
            return date >= new Date(startDate) && date <= new Date(endDate);
          })
          : visitasResponse.data;

        setChartData({
          labels: ["Rémedios Registrados", "Medicações Registradas", "Visitas Agendadas"],
          datasets: [{ data: [filteredRemedios.length, filteredMedicacoes.length, filteredVisitas.length] }],
        });
        setPatientCount(patientCountResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  const handleFilter = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.cardIcon}>
              <Icon name="user" size={48} color="#666" />
            </View>
            <View style={styles.cardText}>
              <Text style={{ textAlign: 'center' }}>Total de Pacientes</Text>
              <Text style={[styles.cardCount, { textAlign: 'center' }]}>{patientCount}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Visão Geral</Text>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          <BarChart
            data={chartData}
            width={screenWidth - 40}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(4, 113, 218, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        )}
      </View>

      <View style={styles.filterContainer}>
        <View style={styles.calendarContainer}>
          <Text style={styles.filterTitle}>Filtre por período</Text>
          <View style={styles.calendarRow}>
            <Text>Data Inicial:</Text>
            <Calendar
              onDayPress={(day) => setStartDate(day.dateString)}
              markedDates={startDate ? { [startDate]: { selected: true, selectedColor: '#0C84F3' } } : {}}
            />
          </View>
          <View style={styles.calendarRow}>
            <Text>Data Final:</Text>
            <Calendar
              onDayPress={(day) => setEndDate(day.dateString)}
              markedDates={endDate ? { [endDate]: { selected: true, selectedColor: '#0C84F3' } } : {}}
            />
          </View>
        </View>
        <Button
          mode="contained"
          onPress={handleFilter}
          style={styles.filterButton}
        >
          Filtrar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    elevation: 3,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 15,
  },
  cardText: {

  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  },
  cardCount: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  chartContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  calendarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#0C84F3',
  },
});

export default DashboardScreen;
