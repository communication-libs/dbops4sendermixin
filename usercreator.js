function createUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function UserMixin (prophash) {
  }
  UserMixin.prototype.destroy = function () {
  };

  UserMixin.prototype.sendSingleMessage = function(recipient, subject, body, notbefore, notafter, defer){
    qlib.promise2defer(this.__service.sendSingleMessage(recipient, subject, body, notbefore, notafter), defer);
  };

  UserMixin.addMethods = function (klass) {
    lib.inheritMethods (klass, UserMixin
      ,'sendSingleMessage'
    );
  };

  return UserMixin;
}
module.exports = createUserMixin;
