import Config from './../config.js';

if (Config.mockup == false) {
	const UserService = {

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
	export default UserService;
} else {
	// Mock Up
	const UserService = {
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
				{username: "RealObama", "0x0000000000000000000000000000000000000000000000000000000000000060"},
				{username: "Alex Jones", "0x000000000000000000000000000000000000000000000000000000000000006d"},
				{username: "Joe Rojan", "0x000000000000000000000000000000000000000000000000000000000000ba23"}
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
	export default UserService;
}
