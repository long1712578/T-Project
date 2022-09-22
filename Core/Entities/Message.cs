using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Message
    {
        public string Id { get; set; }
        public string Content { get; set; }
        public string ConversationId { get; set; }
        public string cookie { get; set; }
        public DateTime Created { get; set; }
    }
}
