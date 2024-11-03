import { Link } from "react-router-dom";
import DetailsMessage from "../../components/DetailsMessage";
import MessageList from "./MessageList";

interface propsMessage {
    messageData : message[],
    test : string
}

interface message {
    id: number,
    title: string,
    category: string,
    content: string
}

const Message = (props: propsMessage) => {
    
    // const messageData = props.messages; 
    // const test = props.propsTest;

    // on destructure les props
    const {messages, propsTest} = props;

    //props enfant/parent   
    const test2 = "COUCOU2";

    console.log("🚀 ~ Message ~ test:", propsTest)

    return (
        
        <div> 
            <MessageList coucou={messages} />
        </div>
    );
};

export default Message;