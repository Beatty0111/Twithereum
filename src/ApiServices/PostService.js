if (Config.mockup == false) {
	const PostService = {
		getPost: (address) => {

		},

		createPost: (post) => {

		},

		getComments: (address) => {

		}
	}
} else {
	// Mock Up
	const PostService = {
		getPost: (address) => {
			let data = {
				upvoteNum: 7,
				title: "Cool Post",
				description: "This stuff in here is pretty cool. The longer you look at it is just becomes that much cooler. I see you are still reading this. It really shows how awesome this post is right. Yeah.",
				authorUser: "0x0af9eb740c42edc3317240c6c6863f5316ead1018702ac3fca2e096198eecd85",
				comments: [
					"0xe0d293611b2aff750a8d9080d6f37f3df999cbb612715009125155b39edc13da",
					"0x3f696db18a17c16d9f46cc72945012d99e3778e9eabcda21fef034979b60aa85",
					"0xa7879c65c0ae64d023e515d2cb8efeefd9a84e8e8f58791082e8c194781372bf"
				]
			};
			
			return data;
		},

		creatPost: (post) => {
			return;
		},

		getComments: (address) => {
			let data = [
				"0xe0d293611b2aff750a8d9080d6f37f3df999cbb612715009125155b39edc13da",
				"0x3f696db18a17c16d9f46cc72945012d99e3778e9eabcda21fef034979b60aa85",
				"0xa7879c65c0ae64d023e515d2cb8efeefd9a84e8e8f58791082e8c194781372bf"
			];

			return  data;
		}
	}
}
