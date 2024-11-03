import { Link, useParams } from "react-router-dom";

const DetailsMessage = () => {
    const { id } = useParams();    
    //http request to backend (selecteur id)

    return (
        <div>
            <h1>{ id }</h1>
            <h2>Développeur</h2>
            <h4>fullstack</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.</p>
            <Link to="/message/"><button>Retour</button></Link>
        </div>
    );
};

export default DetailsMessage;

