const fs = require("fs");
module.exports.config = {
  name: "rules",
  version: "2.0.0",
  permission: 1,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("x")==0 || (event.body.indexOf("x")==0 || (event.body.indexOf("aa")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "আসসালামু আলাইকুম 
🌺ভালোবাসার ক্যাম্পাস🌸࿐" 
ফ্যামেলি গ্রুপের কলিজার ভাই/বোন__😊🍒 

আমাদের গ্রুপে আসার জন্য আপনাকে অনেক ধন্যবাদ______!!🍒😘    

এটা আড্ডা বক্স, এখানে কোন বাজে বিহেভ অথবা ১৮+ কথা বলা যাবে না 💯

এখানে সবাই বন্ধুর মতো আড্ডা দিবা💯

তোমাদের নিয়ে আমাদের এইসব বক্স সো তোমরা মিলে মিশে আড্ডা দিবা 🌼

৩ দিনের বেশি এক্টিভ না থাকলে এডমিন  
আপনাকে বক্সের রুলস অনুযায়ী রিমুভ করতে বাধ্য হবে_______💚🍒
  

🌺ভালোবাসার ক্যাম্পাস🌸࿐ ফ্যামেলি গ্ৰুপের পক্ষ থেকে আপনাকে  জানায় ভালবাসা  অভিরাম_____💯🌸"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
