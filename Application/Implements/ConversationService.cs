using Application.Dtos.Conversations;
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
    public class ConversationService : IConversationService
    {
        private readonly IConversationRepository _conversationRepo;
        private readonly IUniqueKey _uniqueKey;
        public ConversationService(IConversationRepository conversationRepo, IUniqueKey uniqueKey)
        {
            _conversationRepo = conversationRepo;
            _uniqueKey = uniqueKey;
        }

        public async Task<string> CreateAsync(CreateConversationDto conversationDto)
        {
            var conversation = new Conversation
            {
                CreateTime = DateTime.Now,
                Id = _uniqueKey.CreateIdGen(),
                Phone = conversationDto.Phone,
                UserName = conversationDto.UserName,
                WidgetId = "24092022"
            };
            await _conversationRepo.CreateAsync(conversation);
            return conversation.Id;
        }

        public async Task<List<Conversation>> GetAllAsync()
        {
            return await _conversationRepo.GetAllAsync();
        }
    }
}
