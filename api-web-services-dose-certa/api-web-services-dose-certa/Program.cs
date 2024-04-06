using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<DoseCertaDatabaseSettings>(
    builder.Configuration.GetSection("DoseCertaDatabase"));
builder.Services.AddSingleton<NotesService>();
builder.Services.AddSingleton<MedicacaoService>();
builder.Services.AddSingleton<VisitaService>();
//builder.Services.AddSingleton<RemedioService>();

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
