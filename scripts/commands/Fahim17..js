const fs = require("fs");
module.exports.config = {
  name: "fahim.18",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Israt Jahan")==0 || (event.body.indexOf("israt")==0 || (event.body.indexOf("Israt")==0 || (event.body.indexOf("ISRAT")==0)))) {
		var msg = {
				body: "ওরে কেউ মেনসন দিবি না ও বস সৌরভ এর ভালোবাসা and বউ 😍🥰 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
