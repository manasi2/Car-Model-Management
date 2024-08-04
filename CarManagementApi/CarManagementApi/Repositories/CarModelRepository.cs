using CarManagementApi.Models;
using Dapper;
using System.Data.SqlClient;

namespace CarManagementApi.Repositories
{
    public class CarModelRepository : ICarModelRepository
    {
        private readonly string _connectionString;

        public CarModelRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task<IEnumerable<CarModel>> GetAllAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<CarModel>("SELECT * FROM CarModels");
            }
        }

        public async Task<CarModel> GetByIdAsync(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryFirstOrDefaultAsync<CarModel>(
                    "SELECT * FROM CarModels WHERE Id = @Id", new { Id = id });
            }
        }

        public async Task AddAsync(CarModel carModel)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.ExecuteAsync("INSERT INTO CarModels (...) VALUES (...)", carModel);
            }
        }

        public async Task UpdateAsync(CarModel carModel)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.ExecuteAsync("UPDATE CarModels SET ... WHERE Id = @Id", carModel);
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.ExecuteAsync("DELETE FROM CarModels WHERE Id = @Id", new { Id = id });
            }
        }
    }

}
