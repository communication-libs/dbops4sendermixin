function createMixins(execlib) {
  'use strict';

  return {
    service: require('./servicecreator')(execlib),
    user: require('./usercreator')(execlib),
    methoddescriptors: {
      user: require('./methoddescriptors/user')
    }
  };
}
module.exports = createMixins;
