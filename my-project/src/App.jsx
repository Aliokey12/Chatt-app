import './App.css'
import { ChatProvider } from './components/context/ChatContext';
import Container from './components/Container';
function App() {

  return <ChatProvider>
    <Container/>
    </ChatProvider> 

}

export default App
