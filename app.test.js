const request = require('supertest');
const { response } = require('./app');
const app = require('./app');



describe('Todos API', () =>{
    it('GET /todos => [Todos]', () => {
        return request(app)
        .get('/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual(
                expect.arrayContaining(
                    [
                        {
                            id: expect.any(Number),
                            name: expect.any(String),
                            targetDate: expect.any(String),

                            done: expect.any(Boolean)
                        }
                    ]
                ));
        });
    });
 })
 
 
 
 
 
 