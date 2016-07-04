var request = require('supertest');

describe('UserController', function() {
  describe('#login()', function() {
    it('should redirect to /mypage', function(done) {
      request(sails.hooks.http.app)
        .post('/user/login')
        .send({name: 'test', password: 'test'})
        .expect(302)
        .expect('location', '/mypage', done);
    });
  });
});
