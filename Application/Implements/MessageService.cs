using Application.Dtos.Messages;
using Application.Interfaces;
using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Implements
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;
        private readonly IUniqueKey _uniqueKey;
        public MessageService(IMessageRepository messageRepository, IUniqueKey uniqueKey)
        {
            _messageRepository = messageRepository;
            _uniqueKey = uniqueKey;
        }
        public async Task<string> CreateAsync(CreateMessageDto messageDto)
        {
            var message = new Message
            {
                Id = _uniqueKey.CreateIdGen(),
                Content = messageDto.Content,
                ConversationId = messageDto.ConversationId,
                cookie = messageDto.cookie,
                Created = DateTime.Now
            };
            await _messageRepository.CreateAsync(message);
            return message.Id;
        }

        public async Task<List<Message>> GetAllAsync(string conversationId)
        {
            return await _messageRepository.GetAllAsync(conversationId);
        }
    }
}
