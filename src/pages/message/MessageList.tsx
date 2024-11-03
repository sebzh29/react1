import { Link } from "react-router-dom";
import DetailsMessage from "../../components/DetailsMessage";

const MessageList = (props) => {
    
    const messageData = props.coucou; 
    
    return (
        
        <div>
            
            {messageData.length > 0 && messageData.map ((item, index) => (
                <div>
                    <div>    
                        <h2>{item.id}</h2>                    
                        <h2>{item.title}</h2>
                        <h4>{item.category}</h4>
                        <p>{item.content}</p>
                        <Link to={`/message/${item.id}`}><button>Voir</button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;