const expect = require('expect');
var {request}=require('supertest');

var {app}=require('./../server');
var {Todo}=require('./../models/todo');

describe('POST /todos',()=>{

  it('should create new todo',(done)=>{
    var name='new todo 12';
    request(app)
    .post('/todos')
    .set({name})
    .expect(200)
    .expect((res)=>{
      expect(res.body.name).toBe(name);
    });
  });
});
