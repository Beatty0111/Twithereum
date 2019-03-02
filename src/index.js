import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './enums.js';
import './config.js';

window.addEventListener('load', function() {
	if (typeof window.ethereum !== 'undefined') {
		Global.metamask = false;
	} else {
		Global.metamask = true;
	}
});

if(Global.metamask || Config.environment == Environment.debug) {
	ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
