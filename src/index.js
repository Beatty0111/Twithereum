import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Environment from './Enums/Environment.js';
import Config from './config.js';
import Global from './Global.js';

window.addEventListener('load', function() {
	if (typeof window.ethereum === 'undefined') {
		Global.metamask = false;
	} else {
		Global.metamask = true;
	}

	if(Global.metamask || Config.environment == Environment.debug) {
		ReactDOM.render(<App />, document.getElementById('root'));
	}

	getAccount();
});

async function getAccount() {
	const accounts = await window.ethereum.enable();
	const account = accounts[0];
	Global.account = account;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
