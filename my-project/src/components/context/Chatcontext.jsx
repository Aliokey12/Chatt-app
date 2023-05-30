import { createContext, useState, useContext } from "react";

const Chatcontext = createContext();

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);

	const values = {
		messages,
		setMessages,
	};

	return <Chatcontext.Provider value={values}>{children}</Chatcontext.Provider>;
};

export const useChat = () => useContext(Chatcontext);