import Config from './../config.js';

let PostService;

if (Config.mockup === false) {
	PostService = {
		
		getPost: (address) => {
			let param = [{
				"to": address,
				"data": "0x3bc5de30"
			}, "latest"];

			window.ethereum.sendAsync({
				method: "eth_call",
				params: param
			}, function (err, result) {
				let ret = {
					username: "username",
					data: result.result,
					timestamp: "01-01-19 00:00:00"
				};
				return ret;
			});
		},
		createPost: (data) => {

		}
	}
} else {
	// Mock Up
	PostService = {
		getPost: (address) => {
			let data = {
				data: "This stuff in here is pretty cool. The longer you look at it is just becomes that much cooler. I see you are still reading this. It really shows how awesome this post is right. Yeah.",
				authorUser: "Al Gore",
				timestamp: "09-12-18 07:23:54"
			}

			return data;
		},

		createPost: (post) => {
			return;
		}
	}
}

export default PostService;
