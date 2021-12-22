using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using taegg.Models;

namespace taegg.DB
{
    public class PlayerContext : DbContext
    {
        public PlayerContext(DbContextOptions<PlayerContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Player> players { get; set; }
 

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

    }
}
