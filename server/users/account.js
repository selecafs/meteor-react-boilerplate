// Deny all client-side updates to user documents
Meteor.users.deny({
  update() { return true; }
});
Accounts.config({
    sendVerificationEmail: true
});
Accounts.emailTemplates.siteName = "meteor-react-boilerplate";
Accounts.emailTemplates.from = "meteor-react-boilerplat <accounts@meteor-react-boilerplat.com>";
Accounts.onCreateUser(function(options, user) {
  user.yfAuthorized = false; // this is where you define custom user related properties
  return user;
});
// e.g. define a publication currentUserData to client
Meteor.publish("currentUserData", function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId}, {
      fields : {
        'userKey' : 1
      }
    });
  }  else {
    this.ready();
  }
});
Meteor.methods({
    'sendWelcomeEmail'({to, from, subject, text}) {
       check([to, from, subject, text], [String]);

      Email.send({
         to: to,
         from: from,
         subject: subject,
         text: text
       });
    }
});
