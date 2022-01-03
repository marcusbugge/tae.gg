using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using taegg.Models;
using tae.gg.Models;
using System.ComponentModel.DataAnnotations;

namespace taegg.DB
{
    public class Context : DbContext
    {

        public class Users
        {
            public int Id { get; set; }
            public string Username { get; set; }
            public byte[] Password { get; set; }
            public byte[] Salt { get; set; }
        }




        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Player> players { get; set; }
        public DbSet<Users> users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

    }
}
