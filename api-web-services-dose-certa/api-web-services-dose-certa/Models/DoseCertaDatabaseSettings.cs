namespace api_web_services_dose_certa.Models
{
    public class DoseCertaDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string NotesCollectionName { get; set; } = null!; 

        public string MedicacaoCollectionName { get; set; } = null!;

        public string VisitaCollectionName { get; set; } = null!;

        public string RemedioCollectionName { get; set; } = null!;

    }
}
