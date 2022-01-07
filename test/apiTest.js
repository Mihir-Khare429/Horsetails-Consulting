/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const server = require('../index');

describe('Test', () => {
  it('it should check the status of server', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        (res).should.have.status(200);
        (res.body).should.be.a('object');
        done();
      });
  });
});
