const express = require('express');
const moxios = require('moxios');
const request = require('supertest');
const app = require('../app')


describe('GET /api/greeting', () => {
	const url = "/api/greeting";
    test('It should give status code 200', () => {
        return request(app).get(url).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });

    test('It should return Hello World! with No name', () => {
        return request(app).get(url).then(response => {
		  	let obj = JSON.parse(response.text);
            expect(obj.greeting).toBe('Hello World!')
        })
    });

    test('It should return Hello aaa with Name aaa!', () => {
        return request(app).get(url + "?name=aaa").then(response => {
		  	let obj = JSON.parse(response.text);
            expect(obj.greeting).toBe('Hello aaa!')
        })
    });
})

describe('GET /api/showAllJobs', () => {
    
    jest.setTimeout(10000);
    const url = "/api/showAllJobs";

    test('It should give status code 200', async () => {

        const response = await request(app).get(url);
        expect(response.statusCode).toBe(200);
    });

/*    test('It should return Array', async () => {
      
        const response = await request(app).get(url);
        let obj = JSON.parse(response.text);
        expect(obj).toContain('beer');
    });*/
})


describe('GET /api/addJob', () => {
	
	jest.setTimeout(30000);
	const url = "/api/addJob";
	let params = "?name=addJobTest&description=addJobTest&skills=math&qualifications=degree&extra=male&contact=1";

    test('It should give status code 200 with Query Parameters', async () => {

        const response = await request(app).get(url + params);
        expect(response.statusCode).toBe(200);
    });


    test('It should return Success with Query Parameters', async () => {

        const response = await request(app).get(url + params);
        let obj = JSON.parse(response.text);
        expect(obj).toBe('{"Insert": "Success"}');
    });

    test('It should give status code 200 with No Query Parameters', async () => {
        let params = "?name=aaaa";
        const response = await request(app).get(url + params);
        expect(response.statusCode).toBe(200);
    });

    test('It should return Failure with No Query Parameters', async () => {

        let params = "?name=aaaa";
        const response = await request(app).get(url + params);
        let obj = JSON.parse(response.text);
        expect(obj.insert).toBe('Failure');
        expect(obj.errorType).toBe('QueryParamMissing');
    });

    test('It should give status code 200 with Wrong Query Input', async () => {
        let params = "?name=&description=&skills=&qualifications=&extra=&contact=";
        const response = await request(app).get(url + params);
        expect(response.statusCode).toBe(200);
    });

    test('It should return Failure with Wrong Query Input', async () => {

        let params = "?name=&description=&skills=&qualifications=&extra=&contact=";
        const response = await request(app).get(url + params);
        let obj = JSON.parse(response.text);
        expect(obj.insert).toBe('Failure');
        expect(obj.errorType).toBe('QueryInputError');
    });
})

describe('AddJob functionality check', () => {
	
	jest.setTimeout(30000);
	const add_url = "/api/addJob";
	const show_url = "/api/showAllJobs";

    test('The count of jobs should increase by 1 when Add succeeds', async () => {
        const response1 = await request(app).get(show_url);
        let obj1 = JSON.parse(response1.text);
        let count = obj1.length;

        let params = "?name=IncreaseByOneTest&description=IncreaseByOneTest&skills=math&qualifications=degree&extra=male&contact=1";
        const response2 = await request(app).get(add_url + params);
        let obj2 = JSON.parse(response2.text);
        expect(obj2).toBe('{"Insert": "Success"}');

       	const response3 = await request(app).get(show_url);
       	let obj3 = JSON.parse(response3.text);
        let count3 = obj3.length;
        expect(count3).toBe(count+1);
    });

    test('It should have the newly added jobpost when Add succeeds', async () => {

        let params = "?name=ElementCheck&description=ElementCheck&skills=math&qualifications=degree&extra=male&contact=1";
        const response2 = await request(app).get(add_url + params);
        let obj2 = JSON.parse(response2.text);
        expect(obj2).toBe('{"Insert": "Success"}');

        const response1 = await request(app).get(show_url);
        let obj1 = JSON.parse(response1.text);
        let last = obj1[obj1.length-1];

        expect(last.StartUp).toBe('ElementCheck');

    });

    test('The count of jobs should not increase when Add fails', async () => {
        const response1 = await request(app).get(show_url);
        let obj1 = JSON.parse(response1.text);
        let count = obj1.length;
        let params = "?name=&description=&skills=&qualifications=&extra=&contact=";

        const response2 = await request(app).get(add_url + params);
        let obj2 = JSON.parse(response2.text);
        expect(obj2.insert).toBe('Failure');
        expect(obj2.errorType).toBe('QueryInputError');

        const response3 = await request(app).get(show_url);
        let obj3 = JSON.parse(response3.text);
        let count3 = obj3.length;
        expect(count3).toBe(count);
    });
})














describe('GET /api/greeting', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  /*test('It should fetch HugoDF from GitHub', async () => {
    moxios.stubRequest(/api.github.com\/users/, {
      status: 200,
      response: {
        blog: 'https://codewithhugo.com',
        location: 'London',
        bio: 'Developer, JavaScript',
        public_repos: 39,
      }
    });
    const app = express();
    await request(app).get('http://localhost:3001/api/greeting');
    expect(moxios.requests.mostRecent().url).toBe('https://api.github.com/users/HugoDF');
  });*/



  /*test('It should 200 and return a transformed version of GitHub response', async () => {
    moxios.stubRequest(/api.github.com\/users/, {
      status: 200,
      response: {
        blog: 'https://codewithhugo.com',
        location: 'London',
        bio: 'Developer, JavaScript',
        public_repos: 39,
      }
    });
    const app = express();
    const res = await request(app).get('/api/greeting');
    expect(res.body).toEqual({
      blog: 'https://codewithhugo.com',
        location: 'London',
        bio: 'Developer, JavaScript',
        publicRepos: 39,
    });
  });*/
});