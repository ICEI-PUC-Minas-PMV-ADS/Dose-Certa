using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<DoseCertaDatabaseSettings>(
    builder.Configuration.GetSection("DoseCertaDatabase"));
builder.Services.AddScoped<INotesService, NotesService>();
builder.Services.AddScoped<IRemedioService, RemedioService>();
builder.Services.AddSingleton<MedicacaoService>();
builder.Services.AddSingleton<VisitaService>();
builder.Services.AddSingleton<ResidenciaService>();
builder.Services.AddScoped<INotificationsService, NotificationsService>();


builder.Services.Configure<MySqlDatabaseSettings>(
        builder.Configuration.GetSection(nameof(MySqlDatabaseSettings)));
builder.Services.AddSingleton<UserService>();
builder.Services.AddScoped<RequestVerifierService>();
builder.Services.AddScoped<AuthenticationService>();
builder.Services.AddScoped<MessageService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/error");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapGet("/error", () => Results.Problem());
app.MapControllers();

app.Run();
