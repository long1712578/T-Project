using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Conversation
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string WidgetId { get; set; }
        public DateTime? CreateTime { get; set; }
    }
}
