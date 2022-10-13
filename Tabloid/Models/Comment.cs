using System;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public int UserProfileId { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreateDateTime { get; set; }

        public UserProfile Commenter { get; set; }
    }
}
