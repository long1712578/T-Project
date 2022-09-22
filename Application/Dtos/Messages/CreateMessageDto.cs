using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dtos.Messages
{
    public class CreateMessageDto
    {
        public string Content { get; set; }
        public string ConversationId { get; set; }
        public string cookie { get; set; }
    }
}
