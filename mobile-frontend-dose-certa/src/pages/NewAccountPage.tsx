import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Text,
} from "react-native-paper";
import { NavigationProp } from '@react-navigation/native';

const NewAccountPage = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <Text>NewAccountPage</Text>
      <Button
        mode="contained"
        buttonColor="#0C84F3"
        textColor="#fff"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate('LoginPage')}
      >
        Login
      </Button>
      <Button
        mode="contained"
        buttonColor="#0C84F3"
        textColor="#fff"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate('LandingPage')}
      >
        Landing Page
      </Button>
    </View>
  );
};

export default NewAccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
});