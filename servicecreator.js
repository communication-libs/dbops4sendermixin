function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib,
    execSuite = execlib.execSuite;

  function ServiceMixin (prophash) {
  }
  ServiceMixin.prototype.destroy = function () {
  };
  ServiceMixin.prototype.sendSingleMessage = execSuite.dependentServiceMethod([], ['CommunicationDBOps'], function (dbopssink, recipient, subject, body, notbefore, notafter, defer) {
    qlib.promise2defer(dbopssink.call('sendSingleMessage', this.sender, recipient, subject, body, notbefore, notafter), defer);
    //return this.jobs.run('.', new sendingjobs.SingleMessageSenderJob(this, recipient, subject, body, notbefore, notafter));
  });

  ServiceMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ServiceMixin
      ,'sendSingleMessage'
    );
  };

  return ServiceMixin;
}
module.exports = createServiceMixin;
