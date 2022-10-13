using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration configuration) : base(configuration) { }

        private string TagQuery
        {
            get
            {
                return @"SELECT Id, Name
                         FROM Tag 
                        Order By Name";
            }
        }
        public List<Tag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = TagQuery;

                    var tags = new List<Tag>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        tags.Add(NewTag(reader));
                    }
                    reader.Close();

                    return tags;
                }
            }
        }

        public void Add(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Tag (Name)
                        OUTPUT INSERTED.ID
                        VALUES (@Name)";

                    DbUtils.AddParameter(cmd, "@Name", tag.Name);
                    tag.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Tag 
                           SET [Name] = @name, 
                         WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", tag.Id);
                    cmd.Parameters.AddWithValue("@name", tag.Name);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Tag WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        private Tag NewTag(SqlDataReader reader)
        {
            return new Tag()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                Name = DbUtils.GetString(reader, "Name")
            };
        }
    }
}
