using CarManagementApi.Models;
using CarManagementApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarManagementApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarModelController : ControllerBase
    {
        private readonly ICarModelService _carModelService;

        public CarModelController(ICarModelService carModelService)
        {
            _carModelService = carModelService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var carModels = await _carModelService.GetAllAsync();
            return Ok(carModels);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var carModel = await _carModelService.GetByIdAsync(id);
            if (carModel == null)
                return NotFound();

            return Ok(carModel);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CarModel carModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _carModelService.AddAsync(carModel);
            return CreatedAtAction(nameof(GetById), new { id = carModel.Id }, carModel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CarModel carModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _carModelService.UpdateAsync(carModel);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _carModelService.DeleteAsync(id);
            return NoContent();
        }
    }

}
