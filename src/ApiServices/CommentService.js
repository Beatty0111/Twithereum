import Config from './../config.js';

if (Config.mockup) {
	const CommentService = {
		getComment: (address) => {

		}
	}
	export default CommentService;
} else {
	const CommentService = {
		getComment: (address) => {
			let data = {
				upvoteNum: 3,
				comment: "D OMEGALUL C",
				authorUser: "0x0000000000000000000000000000000000000000",
				timeStamp: "12-22-2018 00:12:54"
			};
		}
	}
	export default CommentService;
}
