import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
    return (
        <ChatEngine 
        height="100vh"
        projectID="
        cbaf6187-7b10-4a82-b59f-8de1a4e7d2d4"
        userName="admin"
        userSecret="admin"
        renderChatFeed = {(ChatAppProps) => <ChatFeed {... ChatAppProps}/>}
        />
        
        
    );
    }
    
    export default App;
    