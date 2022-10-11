using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
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
