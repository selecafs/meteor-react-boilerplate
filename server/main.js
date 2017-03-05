import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/main.js';

Meteor.startup(() => {
  process.env.MAIL_URL=""; // define your mail setup - e.g mailgun
});
