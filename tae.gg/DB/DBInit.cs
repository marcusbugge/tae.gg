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

            /*
            var player = new Player()
            {
                Gamertag = "Bugge",
                Game = "lol",
                Role = "Midlane"
            };
            var player2 = new Player()
            {
                Gamertag = "Bugge",
                Game = "lol",
                Role = "Midlane"
            };
            
            context.players.Add(player);
            context.players.Add(player2);
            */

            context.players.Add(new Player(){
                Gamertag = "Bugge",
                Game = "lol",
                Role = "midlane" });

            context.SaveChanges();
        }
    }
}
