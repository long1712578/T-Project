using Application.Dtos.Messages;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IMessageService
    {
        public Task<string> CreateAsync(CreateMessageDto messageDto);
        public Task<List<Message>> GetAllAsync(string conversationId);
    }
}
