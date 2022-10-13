using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        void Delete(int id);
        List<Tag> GetAll();
        void Add(Tag tag);
        void Update(Tag tag);
    }
}