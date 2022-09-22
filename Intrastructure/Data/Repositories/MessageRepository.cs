using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intrastructure.Data.Repositories
{
    public class MessageRepository : IMessageRepository
    {
        private readonly TProjectContext _projectContext;
        public MessageRepository(TProjectContext projectContext)
        {
            _projectContext = projectContext;
        }

        public async Task CreateAsync(Message message)
        {
            _projectContext.Messages.Add(message);
            await _projectContext.SaveChangesAsync();
        }

        public async Task<List<Message>> GetAllAsync(string conversationId)
        {
            return await _projectContext.Messages.Where(x => x.ConversationId == conversationId).ToListAsync();
        }
    }
}
