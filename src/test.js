const axios = require('axios');

describe('SWAPI Starship Tests', () => {
    test('Get list of starships', async () => {
        const response = await axios.get('https://swapi.dev/api/starships/');
        expect(response.status).toBe(200);
        expect(response.data.count).toBeGreaterThan(0);
    });

    test('Get a specific starship by name', async () => {
        // Obtendo a lista de naves
        const starshipsResponse = await axios.get('https://swapi.dev/api/starships/');
        
        // Buscando a nave pela nome "Millennium Falcon"
        const starship = starshipsResponse.data.results.find(starship => starship.name === 'Millennium Falcon');
    
        expect(starship).toBeDefined(); // Verifica se a nave foi encontrada
    
        // Fazendo a requisição para a URL da nave
        const response = await axios.get(starship.url);
        expect(response.status).toBe(200); // Verifica se o status da resposta é 200
        expect(response.data.name).toBe('Millennium Falcon'); // Verifica se o nome é correto
    });
}); 
    
    // test('Get list of starships', async () => {
    //     const response = await axios.get('https://swapi.dev/api/starships/');
    //     expect(response.status).toBe(200);
    //     expect(response.data.count).toBeGreaterThan(0);
    // });
    
    // test('Get a specific starship by ID', async () => {
    //     const response = await axios.get('https://swapi.dev/api/starships/10/');
    //     expect(response.status).toBe(200); // Verifica se o status da resposta é 200
    //     expect(response.data.name).toBe('Millennium Falcon'); // Verifica se o nome é o correto
    // });
    
    // test('Get list of films', async () => {
    //     const response = await axios.get('https://swapi.dev/api/films/');
    //     expect(response.status).toBe(200);
    //     expect(response.data.count).toBeGreaterThan(0);
    // });
    
    // test('Get a specific film by ID', async () => {
    //     const response = await axios.get('https://swapi.dev/api/films/1/');
    //     expect(response.status).toBe(200);
    //     expect(response.data.title).toBe('A New Hope');
    // });
    
    // test('Get a non-existent route', async () => {
    //     try {
    //         await axios.get('https://swapi.dev/api/heroes/');
    //     } catch (error) {
    //         expect(error.response.status).toBe(404);
    //     }
    // });
    
    // test('Get list of species', async () => {
    //     const response = await axios.get('https://swapi.dev/api/species/');
    //     expect(response.status).toBe(200);
    //     expect(response.data.count).toBeGreaterThan(0);
    // });
    
    // test('Get a specific species by ID', async () => {
    //     const response = await axios.get('https://swapi.dev/api/species/1/');
    //     expect(response.status).toBe(200);
    //     expect(response.data.name).toBe('Human');
    // });
    
    // test('Get list of vehicles', async () => {
    //     const response = await axios.get('https://swapi.dev/api/vehicles/');
    //     expect(response.status).toBe(200);
    //     expect(response.data.count).toBeGreaterThan(0);
    // });