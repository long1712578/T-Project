using Application.Implements;
using Application.Interfaces;
using Core.Interfaces;
using Intrastructure.Data;
using Intrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<TProjectContext>(x => x.UseSqlServer(connectionString));

//DI
builder.Services.AddTransient<IMessageService, MessageService>();
builder.Services.AddTransient<IConversationService, ConversationService>();
builder.Services.AddTransient<IUniqueKey, SequentialUniqueKeyGenerator>();
builder.Services.AddTransient<IConversationRepository, ConversationRepository>();
builder.Services.AddTransient<IMessageRepository, MessageRepository>();
builder.Services.AddControllers();

//// Add services to the container.
//builder.Services.AddControllersWithViews();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
