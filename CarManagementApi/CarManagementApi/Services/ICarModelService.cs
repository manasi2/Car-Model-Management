using CarManagementApi.Models;

namespace CarManagementApi.Services
{
    
    public interface ICarModelService
    {
        Task<IEnumerable<CarModel>> GetAllAsync();
        Task<CarModel> GetByIdAsync(int id);
        Task AddAsync(CarModel carModel);
        Task UpdateAsync(CarModel carModel);
        Task DeleteAsync(int id);
    }

}
