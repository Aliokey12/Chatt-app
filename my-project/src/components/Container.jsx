import {useEffect} from 'react'
import Chatlist from './Chatlist';
import Chatform from './Chatform';

import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";

function Container() {
	const { setMessages } = useChat();

	useEffect(() => {
		init();

		subscribeInitialMessages((messages) => setMessages(messages));

		subscribeChat((message) => {
			setMessages((prevState) => [...prevState, { message }]);
		});
	}, []);

	return (
		<div className="App">
			<Chatlist />
			<Chatform />
		</div>
	);
}