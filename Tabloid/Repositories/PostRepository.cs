using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }
        public List<Post> GetAllPosts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  p.Id, p.Title, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId,
                                p.Content, p.ImageLocation, p.CreateDateTime,
                                u.DisplayName, u.FirstName, u.LastName, u.UserTypeId, u.FirebaseUserId,
                                u.Email, u.CreateDateTime AS UserCreateDate, u.ImageLocation AS UserImage,
                                c.Name AS Category, t.Name as UserType
                        FROM Post p
                        LEFT JOIN UserProfile u ON p.UserProfileId = u.Id
                        LEFT JOIN Category c ON p.CategoryId = c.Id
                        LEFT JOIN UserType t ON u.UserTypeId = t.Id
                        WHERE IsApproved = 1 AND p.PublishDateTime < SYSDATETIME()
                        ORDER BY p.PublishDateTime DESC";

                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        posts.Add(NewPostFromReader(reader));
                    };
                    reader.Close();
                    return posts;
                }
            }
        }
        public Post GetPostById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  p.Id, p.Title, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId,
                                p.Content, p.ImageLocation, p.CreateDateTime,
                                u.DisplayName, u.FirstName, u.LastName, u.UserTypeId, u.FirebaseUserId,
                                u.Email, u.CreateDateTime AS UserCreateDate, u.ImageLocation AS UserImage,
                                c.Name AS Category, t.Name as UserType
                        FROM Post p
                        LEFT JOIN UserProfile u ON p.UserProfileId = u.Id
                        LEFT JOIN Category c ON p.CategoryId = c.Id
                        LEFT JOIN UserType t ON u.UserTypeId = t.Id
                        WHERE p.ID = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Post post = null;
                        if (reader.Read())
                        {
                            post = NewPostFromReader(reader);
                        }
                        reader.Close();
                        return post;
                    }
                }
            }
        }
        private Post NewPostFromReader(SqlDataReader reader)
        {
            return new Post()
            {
                Id = DbUtils.GetInt(reader, "id"),
                Title = DbUtils.GetString(reader, "title"),
                Content = DbUtils.GetString(reader, "content"),
                ImageLocation = DbUtils.GetString(reader, "imageLocation"),
                IsApproved = reader.GetBoolean(reader.GetOrdinal("isApproved")),
                CreateDateTime = DbUtils.GetDateTime(reader, "createDateTime"),
                PublishDateTime = DbUtils.GetDateTime(reader, "publishDateTime"),
                CategoryId = DbUtils.GetInt(reader, "categoryId"),
                Category = new Category()
                {
                    Id = DbUtils.GetInt(reader, "categoryId"),
                    Name = DbUtils.GetString(reader, "category")
                },
                UserProfileId = DbUtils.GetInt(reader, "userProfileId"),
                UserProfile = new UserProfile()
                {
                    Id = DbUtils.GetInt(reader, "userProfileId"),
                    FirebaseUserId = DbUtils.GetString(reader, "firebaseUserId"),
                    DisplayName = DbUtils.GetString(reader, "displayName"),
                    FirstName = DbUtils.GetString(reader, "firstName"),
                    LastName = DbUtils.GetString(reader, "lastName"),
                    Email = DbUtils.GetString(reader, "email"),
                    CreateDateTime = DbUtils.GetDateTime(reader, "userCreateDate"),
                    ImageLocation = DbUtils.GetString(reader, "userImage"),
                    UserTypeId = DbUtils.GetInt(reader, "userTypeId"),
                    UserType = new UserType()
                    {
                        Id = DbUtils.GetInt(reader, "userTypeId"),
                        Name = DbUtils.GetString(reader, "userType")
                    }
                }
            };
        }
    }
}
