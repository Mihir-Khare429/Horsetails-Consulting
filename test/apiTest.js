let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../index');

describe('Test',() => {
    it('it should check the status of server',(done) => {
        chai.request(server)
        .get('/')
        .end((err,res) => {
            (res).should.have.status(200);
            (res.body).should.be.a('object');
            done();
        })
    })
})