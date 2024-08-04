using CarManagementApi.Models;

namespace CarManagementApi.Repositories
{
    public interface ICarModelRepository
    {
        Task<IEnumerable<CarModel>> GetAllAsync();
        Task<CarModel> GetByIdAsync(int id);
        Task AddAsync(CarModel carModel);
        Task UpdateAsync(CarModel carModel);
        Task DeleteAsync(int id);
    }

}
