using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using taegg.Models;

namespace taegg.DB
{
    public class DBInit
    {
        public static void Init(IApplicationBuilder app)
        {

            var serviceScope = app.ApplicationServices.CreateScope();
            var context = serviceScope.ServiceProvider.GetService<PlayerContext>();


            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

           
            var player = new Player()
            {
                Gamertag = "Bugge",
                Game = "lol",
                Role = "Midlane"
            };
            var player2 = new Player()
            {
                Gamertag = "Feppe",
                Game = "lol",
                Role = "Jungle"
            };
            var player3 = new Player()
            {
                Gamertag = "Jago848",
                Game = "lol",
                Role = "Toplane"
            };
            var player4 = new Player()
            {
                Gamertag = "MegaCast",
                Game = "lol",
                Role = "ADC"
            };
            var player5 = new Player()
            {
                Gamertag = "Jan",
                Game = "lol",
                Role = "Support"
            };


            var player6 = new Player()
            {
                Gamertag = "Fatdrian",
                Game = "valorant",
                Role = "Role"
            };
            var player7 = new Player()
            {
                Gamertag = "Canute",
                Game = "valorant",
                Role = "Role"
            };
            var player8 = new Player()
            {
                Gamertag = "Sondre?",
                Game = "valorant",
                Role = "Role"
            };
            var player9 = new Player()
            {
                Gamertag = "Player?",
                Game = "valorant",
                Role = "Role"
            };
            var player10 = new Player()
            {
                Gamertag = "Player?",
                Game = "valorant",
                Role = "Role"
            };

            context.players.Add(player);
            context.players.Add(player2);
            context.players.Add(player3);
            context.players.Add(player4);
            context.players.Add(player5);
         
            context.SaveChanges();
        }
    }
}
