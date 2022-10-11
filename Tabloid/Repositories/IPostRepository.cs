using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllPosts();
        public Post GetPostById(int id);
    }
}