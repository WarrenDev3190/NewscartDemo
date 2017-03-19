import supertest from 'supertest';
import app from '../../server';

describe('NewsCartv0.0', function () {
  it('responds to get /', function (done) {
    supertest(app)
    .get('/v1/')
    .expect(200, done());
  });
});
