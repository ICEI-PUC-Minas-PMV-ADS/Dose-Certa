namespace api_web_services_dose_certa.Services;

public class RequestVerifierService
{
    private const string SharedSecret = "WKKTxXNEyayNn7frBp0ErULwxQYvaZaU";

    public bool VerifyHash(string key)
    {
        return SharedSecret.Equals(key);
    }
}
