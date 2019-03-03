import Config from './../config.js';

if (Config.mockup == false) {
	const PostService = {
		getPost: (address) => {
			
		},
		createPost: (data) => {

		}
	}
	export default PostService;
} else {
	// Mock Up
	const PostService = {
		getPost: (address) => {
			let data = {
				data: "This stuff in here is pretty cool. The longer you look at it is just becomes that much cooler. I see you are still reading this. It really shows how awesome this post is right. Yeah.",
				authorUser: "Al Gore",
				timestamp: "09-12-18 07:23:54"
			}

			return data;
		},

		creatPost: (post) => {
			return;
		}
	}
	export default PostService;
}
