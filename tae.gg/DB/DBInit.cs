using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using tae.gg.DAL;
using taegg.Models;
using static taegg.DB.Context;

namespace taegg.DB
{
    public class DBInit
    {
        public static void Init(IApplicationBuilder app)
        {

            var serviceScope = app.ApplicationServices.CreateScope();
            var db = serviceScope.ServiceProvider.GetService<Context>();


            db.Database.EnsureDeleted();
            db.Database.EnsureCreated();

           
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
            
            db.players.Add(player);
            db.players.Add(player2);
            db.players.Add(player3);
            db.players.Add(player4);
            db.players.Add(player5);

            db.players.Add(player6);
            db.players.Add(player7);
            db.players.Add(player8);
            db.players.Add(player9);
            db.players.Add(player10);


            var user = new Users();
            user.Username = "Admin";
            string passord = "Test11";
            byte[] salt = UserRepository.LagSalt();
            byte[] hash = UserRepository.LagHash(passord, salt);
            user.Password = hash;
            user.Salt = salt;
            db.users.Add(user);

            db.SaveChanges();
        }
    }
}
