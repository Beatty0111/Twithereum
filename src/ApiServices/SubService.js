import Config from './../config.js';

if (Config.mockup == false ) {
	const SubService = {
		getSub: (address) => {

		},

		exists: (subName) => {

		}
	}
	export default SubService;
} else {
	const SubService = {
		getSub: (address) => {
			let data = {
				name: "news",
				posts: [
					"0x747f9da8dffbe1310ec71794f22c37eaee791810f9676d26c0251a465a50f0a1",
					"0x7ff2e589ca340a50523a827f2a0fc4d5fa3155f1b3d5aed33c8c3376f4d5ddda",
					"0x9486083f1abbb2173703602d0f08dff521aa27c44e1d720e5aec53b7f4a73774"
				]
			};
		},

		exists: (subName) => {
			return false;
		}
	}
	export default SubService;
}
