using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IConversationRepository
    {
        public Task CreateAsync(Conversation conversation);
        public Task<List<Conversation>> GetAllAsync();
    }
}
