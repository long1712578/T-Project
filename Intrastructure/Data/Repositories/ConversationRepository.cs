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
    public class ConversationRepository : IConversationRepository
    {
        private readonly TProjectContext _projectContext;
        public ConversationRepository(TProjectContext projectContext)
        {
            _projectContext = projectContext;
        }
        public async Task CreateAsync(Conversation conversation)
        {
            _projectContext.Conversations.Add(conversation);
            await _projectContext.SaveChangesAsync();
        }

        public async Task<List<Conversation>> GetAllAsync()
        {
            return await _projectContext.Conversations.ToListAsync();
        }
    }
}
