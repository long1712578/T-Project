using Application.Dtos.Conversations;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IConversationService
    {
        public Task<string> CreateAsync(CreateConversationDto conversation);
        public Task<List<Conversation>> GetAllAsync();
    }
}
