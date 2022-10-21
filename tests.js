const should = require('chai').should();
const solution = require('solution');

describe('should do a lot of parsing thing', () =>{
    it('should read  JSON data',() => {
        const city = 'Berkhout';
        const data = solution.findPeopleInCity(city);
        expect(data).should.not.be.empty;
    });
})