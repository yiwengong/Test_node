const expect = require('expect');
const utils = require('./utils');

describe('Utils', ()=>{
  describe('#add', ()=>{
    it('should add two numbers',()=>{
      var res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
      // if(res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}`);
      // }
    });

    it('should async add two numbers',(done)=>{
      utils.asyncAdd(4, 3, (sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })

  describe('#square', ()=>{
    it('should square a number',()=>{
      var res = utils.square(4);
      expect(res).toBe(16).toBeA('number');
    });

    it('should async square a number',(done)=>{
      utils.asyncSquare(5, (res)=>{
        expect(res).toBe(25).toBeA('number');
        done();
      });

    });
  });


  //should verify first and last names are set
  it('should verify first and last names are set', ()=>{
    var user = {location: 'Philadelphia', age: 25};
    var res = utils.setName(user,'Andrew Mead');

    expect(res).toInclude({
      firstName: 'Andrew',
      lastName:'Mead'
    });
  })
});



// it('should expect some values',()=>{
//   // expect(12).toNotBe(16);
//   // expect({name:'Andrew'}).toEqual({name:'Andrew'});
//   expect({
//     name:'Andrew',
//     age:12
//   }).toInclude({
//     age:12
//   });
// });
