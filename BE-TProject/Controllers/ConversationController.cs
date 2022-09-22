using Application.Dtos.Conversations;
using Application.Implements;
using Application.Interfaces;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BE_TProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConversationController: ControllerBase
    {
        private readonly IConversationService _conversationService;
        public ConversationController(IConversationService conversationService)
        {
            _conversationService = conversationService;
        }
        [HttpGet]
        public async Task<List<Conversation>> GetAll()
        {
            var conversations =await _conversationService.GetAllAsync();
            return conversations;
        }
        [HttpPost]
        public async Task<ActionResult> Create([FromBody]CreateConversationDto input)
        {
            string id = await _conversationService.CreateAsync(input);
            return Ok(id);
        }
    }
}
