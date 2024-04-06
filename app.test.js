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



    it('POST /todos => Created Todo', () => {


        const body =   {
            id:121,
            name: "watch Aavatar 2",
            targetDate: new Date(),
            done: true
        };
        return request(app)
        .post('/todos')
        .send(body)
        .expect('Content-Type', /json/)
        .expect('Location',  "/"+body.id)
        .expect(201)
        .then((response)=>{
   
            expect(response.body).toEqual(
                expect.objectContaining(
                    {
                        id: expect.any(Number),
                        name: expect.any(String),
                        targetDate: expect.any(String), //should be date check [later]
                        done: expect.any(Boolean)
                    }
            ));
        });
    });

  

    it('should return the todo with the given ID', async () => {
        const todoId = 123; // Assuming the ID of the todo you want to retrieve
        
        const response = await request(app)
            .get(`/todos/${todoId}`)
            .expect(200);
        
        // Assert the response body contains the correct todo
        expect(response.body.id).toBe(todoId);
        expect(response.body.name).toBe("1st Todo");
        expect(response.body.done).toBe(false);
    });

 });
 
 
 
 
 
 
 