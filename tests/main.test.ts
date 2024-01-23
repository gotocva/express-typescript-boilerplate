// src/app.spec.ts
import request from 'supertest';
import app from '../src/config/app';


describe('Express App', () => {
  it('should return "Hello, World!" from the home route', async () => {
    const response = await request(app).get('/');

    console.log(response.body);
    
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  // Add more tests for other routes and functionality...
});
