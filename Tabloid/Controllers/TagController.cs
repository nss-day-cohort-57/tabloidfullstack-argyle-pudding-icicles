using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Runtime.InteropServices;
using Tabloid.Repositories;
using Tabloid.Models;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        public TagController(
        ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAll());
        }
 
        [HttpPut("{id}")]
        public IActionResult Put(int id, Tag tag)
        {
            if (id != tag.Id)
            {
                return BadRequest();
            }

            _tagRepository.Update(tag);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post(Tag tag)
        {
            _tagRepository.Add(tag);

            return CreatedAtAction("Get", new { id = tag.Id }, tag);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tagRepository.Delete(id);
            return NoContent();
        }
    }
}
