import Config from './../config.js';

if (Config.mockup == false) {
	const UserService = {

		getUser: (address) => {
			
		},
	}
} else {
	// Mock Up
	const UserService = {
		getInfo: (address) => {
			let data = {
				username: "pizzaMaster73",
				posts: [
					"0x7862cb5712fad171c68d03505fb8ce766ccfd78ecb638223d2f84b9077c1a3d6",
					"0xa3cdf304a876cf4f966c6fe9bfeacfd9f802ddf39761797e006c1283c9a0806d",
					"0x26f8e7fb137e0261e95ff4c349ef79c675f8d5b100d8de6fd1a27c58996ee884"
				]
			};

			return data;
		}
	}
}
