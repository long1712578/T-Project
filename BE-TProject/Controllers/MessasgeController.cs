using Application.Dtos.Messages;
using Application.Interfaces;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BE_TProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessasgeController: ControllerBase
    {
        private readonly IMessageService _messageService;
        public MessasgeController(IMessageService messageService)
        {
            _messageService = messageService;
        }
        [HttpGet]
        public async Task<List<Message>> GetAll(string conversationId)
        {
            var messages = await _messageService.GetAllAsync(conversationId);
            return messages;
        }
        [HttpPost]
        public async Task<ActionResult> Create(CreateMessageDto input)
        {
            var id =await _messageService.CreateAsync(input);
            return Ok(id);
        }
    }
}
