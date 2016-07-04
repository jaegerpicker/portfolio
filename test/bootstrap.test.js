var sails = require('sails');

before(function(done) {
  this.timeout(5000);
  //console.log('Calling before');
  sails.lift({

  }, function(err, server) {
    if(err) {
      return done(err);
    }
    done(err, sails);
  });
});

after(function(done) {
  //console.log('Calling after');
  sails.lower(done);
});
