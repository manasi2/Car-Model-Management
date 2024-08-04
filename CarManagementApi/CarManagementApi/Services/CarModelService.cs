using CarManagementApi.Models;
using CarManagementApi.Repositories;

namespace CarManagementApi.Services
{
    public class CarModelService : ICarModelService
    {
        private readonly ICarModelRepository _carModelRepository;

        public CarModelService(ICarModelRepository carModelRepository)
        {
            _carModelRepository = carModelRepository;
        }

        public async Task<IEnumerable<CarModel>> GetAllAsync()
        {
            return await _carModelRepository.GetAllAsync();
        }

        public async Task<CarModel> GetByIdAsync(int id)
        {
            return await _carModelRepository.GetByIdAsync(id);
        }

        public async Task AddAsync(CarModel carModel)
        {
            await _carModelRepository.AddAsync(carModel);
        }

        public async Task UpdateAsync(CarModel carModel)
        {
            await _carModelRepository.UpdateAsync(carModel);
        }

        public async Task DeleteAsync(int id)
        {
            await _carModelRepository.DeleteAsync(id);
        }
    }

}
