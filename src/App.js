import React, { useState, useRef } from "react";
import Router from './Router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useScript } from "./helpers/useScript";

const CLIENT_ID = "41896975238-d3a9774pt2vro31bqk5of55ommavpbi3.apps.googleusercontent.com";

const App = () => {
	const googlebuttonref = useRef();

	// const onGoogleSignIn = (user) => {
	// 	let userCred = user.credential;
	// 	// let payload = jwt_deocde(userCred);
	// 	// console.log(payload);
	// 	// setuser(payload);
	// };
	// useScript("https://accounts.google.com/gsi/client", () => {
	// 	window.google.accounts.id.initialize({
	// 		client_id: '41896975238-d3a9774pt2vro31bqk5of55ommavpbi3.apps.googleusercontent.com', // here's your Google ID
	// 		callback: onGoogleSignIn,
	// 		auto_select: false,
	// 	});

	// 	window.google.accounts.id.renderButton(googlebuttonref.current, {
	// 		size: "medium",
	// 	});
	// });
	return (
		<div className='App'>
			<Router />
			{/* <GoogleOAuthProvider clientId='41896975238-d3a9774pt2vro31bqk5of55ommavpbi3.apps.googleusercontent.com'> */}
			{/* </GoogleOAuthProvider> */}
		</div>
	);
}

export default App;
