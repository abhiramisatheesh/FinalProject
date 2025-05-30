using LibraryManagementSystem.Data;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class New : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public New(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("viewbooks")]
        public IActionResult ViewBooks()

        {
            var books = _context.Books.ToList();

            if (books == null)
            {
                return NotFound(new { message = "No data" });
            }

            return Ok(books);
        }
        [HttpPost("addbooks")]
        public IActionResult RegisterEmployee([FromBody] Model.Book books)
        {
            if (books == null)
                return BadRequest();

            _context.Books.Add(books);
            _context.SaveChanges();

            return Ok(new { message = "Sccessfull!" });
        }
        [HttpPost("addcategory")]
        public IActionResult AddCategory([FromBody] Model.Category cat)
        {
            if (cat == null)
                return BadRequest();

            _context.Categories.Add(cat);
            _context.SaveChanges();

            return Ok(new { message = "Sccessfull!" });
        }

        [HttpPost("addauthor")]
        public IActionResult AddAuthor([FromBody] Model.Author au)
        {
            if (au == null)
                return BadRequest();

            _context.Authors.Add(au);
            _context.SaveChanges();

            return Ok(new { message = "Sccessfull!" });
        }

        [HttpGet("viewcategory")]
        public IActionResult Viewcategory()

        {
            var cat = _context.Categories.ToList();

            if (cat == null)
            {
                return NotFound(new { message = "No data" });
            }

            return Ok(cat);
        }

    }
}
