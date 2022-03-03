import MessageForm from "./MessageForm";
import Mymessage from "./Mymessage";
import TheirMessage from "./TheirMessage";



const ChatFeed =(props) =>
{
    const { chats, activeChat , userName , messages } = props;
    const chat = chats  &&  chats[activeChat];
    console.log(chat)
    const renderMessages = () => {
        const Keys = Object.Keys(messages);
        console.log(Keys);
        return Keys.map((key, index) => {
            const message = message[key];
            const lastMessageKey = index ==0  ? null : Keys[index - 1];
            
            const isMyessage = userName == message.sender.username;
            return (
                    <div key={'msg_${index}'} style= {{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyessage
                            ? <Mymessage message = {message} />
                            : <TheirMessage message={message} lastMessage ={messages[lastMessageKey]}/>
                         }

                        
                    </div>
                    <div className="read-recipts" style = {{ marginRight: isMyessage ? '18px' : '0px' , marginLeft: isMyessage ? '0px' : '68px'}}>
                            read-receipts
                    </div>
                    </div>

            );
        }
        );
        
    }
 renderMessages()
   
 if (!chat) return 'loading....';

 return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ' ${person.person.username}')}
                </div>
            </div>
            {renderMessages()}
            <div style ={{height:'100 px'}} />
            <div className="message-form-container">
                <MessageForm{...props} chatid={activeChat}/>
            </div>
            </div>
            
    );
}
export default ChatFeed;