import Config from './../config.js';
import Global from './../Global.js';

let UserService = {};

if (Config.mockup == false) {
	UserService = {

		createUser: (username) => {

			let data = "507ffba500000000000000000000000000000000000000000000000000000000" +
					   "0000000000000000000000000000000000000000000000000000000000000020";
			let strLen = username.length.toString(16);
			let leftZeros = "";
			for(let i = 0; i < (64 - strLen); i++) {
				leftZeros += "0";
			}
			strLen = leftZeros + strLen;
			data += strLen;
			let str = Global.hexencode(username.substring(0, 32));
			for(let i = 0; i < (64 - str.length); i++) {
				str += "0";
			}

			data += str;

			let param = [{
				"from": Global.account,
				"to": Config.masterNodeAddr,
				"data": data
			}];
		},

		getUsers: () => {
			
		},

		getPosts: (user) => {

		},

		getFollowings: (user) => {

		},

		followUser:(user) => {

		},

		unfollowUser: (user) => {

		}
	}
} else {
	// Mock Up
	UserService = {
		createUser: (username) => {

			let data = "507ffba50000000000000000000000000000000000000000000000000000000000000020";
			let strLen = username.length.toString(16);
			console.log("strLen " + strLen);
			let leftZeros = "";
			for(let i = 0; i < (64 - strLen.length); i++) {
				leftZeros += "0";
			}
			strLen = leftZeros + strLen;
			data += strLen;
			let str = Global.hexencode(username.substring(0, 32));
			console.log("str " + str.length);
			let strLenTwo = str.length;
			for(let i = 0; i < (64 - strLenTwo); i++) {
				str += "0";
			}

			data += str;

			let param = [{
				"from": Global.account,
				"to": Config.masterNodeAddr,
				"data": data
			}];
			console.log(data);

			window.ethereum.sendAsync({
				method: "eth_sendTransaction",
				params: param
			}, function (err, result) {

			});
		},
		// EMITS Posts
		getUsers: () => {
			let data = [
				{username: "chickenmaster", address: "000000000000000000000000000000000000000000000000000000000000000b"},
				{username: "pizzaguy", address: "0x00000000000000000000000000000000000000000000000000000000000000a0"},
				{username: "masterchef", address: "0x0000000000000000000000000000000000000000000000000000000000000060"}
			]

			return data;
		},

		getPosts: (user) => {
			let data = [
				{data: "i woke up and ate cereal for breakfast", authorUser: "Al Gore", timestamp: "08-12-17 14:22:39"},
				{data: "Too much milkshakes...", authorUser: "Al Gore", timestamp: "08-23-18 16:12:23"},
				{data: "My pant look bluer than usual today :)", authorUser: "Al Gore", timestamp: "09-02-18 17:53:16"}
			];

			return data;
		},

		// EMITS Posts
		getFollowings: (user) => {
			let data = [
				{username: "RealObama", address: "0x0000000000000000000000000000000000000000000000000000000000000060"},
				{username: "Alex Jones", address: "0x000000000000000000000000000000000000000000000000000000000000006d"},
				{username: "Joe Rojan", address: "0x000000000000000000000000000000000000000000000000000000000000ba23"}
			];

			return data;
		},

		followUser: (user) => {
			return;
		},

		unfollowUser: (user) => {
			return;
		}

	}
}
export default UserService;
