test('Get list of planets', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/');
    expect(response.status).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
});

test('Get a specific planet by ID', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Tatooine');
});

test('Get list of starships', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/');
    expect(response.status).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
});

test('Get a specific starship by ID', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Death Star');
});

test('Get list of films', async () => {
    const response = await axios.get('https://swapi.dev/api/films/');
    expect(response.status).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
});

test('Get a specific film by ID', async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/');
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('A New Hope');
});

test('Get a non-existent route', async () => {
    try {
        await axios.get('https://swapi.dev/api/heroes/');
    } catch (error) {
        expect(error.response.status).toBe(404);
    }
});

test('Get list of species', async () => {
    const response = await axios.get('https://swapi.dev/api/species/');
    expect(response.status).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
});

test('Get a specific species by ID', async () => {
    const response = await axios.get('https://swapi.dev/api/species/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Human');
});

test('Get list of vehicles', async () => {
    const response = await axios.get('https://swapi.dev/api/vehicles/');
    expect(response.status).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
});
