import { TestApp } from './test-app';
import TestKnexDb from './test-knex-db';
import Knex from '../src/knex';

describe('e2e tests', () => {
  let app: TestApp;

  beforeEach(async () => {
    const db = new TestKnexDb();
    await db.setUpDb();
    app = new TestApp(db.dbUrl);
  });

  afterEach(async () => {
    await app.close();
  });

  describe('given first move has been done at the position 0, 0', () => {
    beforeEach(async () => {
      const res = await app
        .supertestRequest()
        .post('/moves')
        .set('Authorization', 'Bearer first-player')
        .send({ x: 0, y: 0 });
      //expect(res.status).toEqual(200);
      //expect(res.body).toEqual({ success: true });
    });

    it('places the black color on the board in the right spot', async () => {
      const boardRes = await app
        .supertestRequest()
        .get('/board');
      expect(boardRes.status).toEqual(200);
      expect(boardRes.body).toEqual({ 
        board: [
          ['black', 'empty'],
          ['empty', 'empty'],
        ],
      });
    });

    describe('given secound move has been done at position 1, 0', () => {
      beforeEach(async () => {
        const res = await app
          .supertestRequest()
          .post('/moves')
          .set('Authorization', 'Bearer secound-player')
          .send({ x: 1, y: 0 });
        //expect(res.status).toEqual(200);
        //expect(res.body).toEqual({ success: true });
      });

      it.only('places the white color on the board in the right spot', async () => {
        const boardRes = await app
          .supertestRequest()
          .get('/board');
        expect(boardRes.status).toEqual(200);
        expect(boardRes.body).toEqual({ 
          board: [
            ['black', 'white'],
            ['empty', 'empty'],
          ],
        });
      });
    });
  });

  it('As a first player I do a first move', async () => {
    const res = await app
      .supertestRequest()
      .post('/moves')
      .set('Authorization', 'Bearer first-player')
      .send({ x: 0, y: 0 });
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ success: true });

    const boardRes = await app
      .supertestRequest()
      .get('/board');
    expect(boardRes.status).toEqual(200);
    expect(boardRes.body).toEqual({ 
      board: [
        ['black', 'empty'],
        ['empty', 'empty'],
      ],
    });

    const secoundMoveRes = await app
      .supertestRequest()
      .post('/moves')
      .set('Authorization', 'Bearer first-player')
      .send({ x: 1, y: 0 });
    expect(secoundMoveRes.status).toEqual(200);
    expect(secoundMoveRes.body).toEqual({ success: true });

    const boardRes2 = await app
      .supertestRequest()
      .get('/board');
    expect(boardRes2.status).toEqual(200);
    expect(boardRes2.body).toEqual({ 
      board: [
        ['black', 'black'],
        ['empty', 'empty'],
      ],
    });
  });

  it('As a client I can create and get created pet', async () => {
    await app
      .supertestRequest()
      .post('/pets')
      .send({ name: 'John', species: 'cat' });

    const res = await app
      .supertestRequest()
      .get('/pets')
      .send();
    expect(res.body).toEqual({
      pets: [{ name: 'John' }],
    });
  });

  it('As a client I get empty pets list', async () => {
    const res = await app
      .supertestRequest()
      .get('/pets')
      .expect('Content-Type', /json/)
      .expect(200)
      .send();
    expect(res.body).toEqual({ pets: [] });
  });
});
