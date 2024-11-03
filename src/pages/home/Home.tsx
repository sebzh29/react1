import { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../components/main/Main';

const Home = () => {
    // let number = 0;

    //state
    // on déclare une constante, on lui donne son nom puis on déclare le setter
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState("coucou"); // coucou valeur de depart

    const handleClick = () => {
        let copyNUmber = number;
        copyNUmber++;
        setNumber(copyNUmber);
    };
    const handleClick2 = () => {
        let copyNUmber = number;
        copyNUmber = copyNUmber+2;
        setNumber(copyNUmber);
    };

    //render 
    return (
        <div>
            <h1>je suis la home page</h1>
            <h2>{message}</h2>
            <div>{number}</div>
            <Link to="/contact">go to contact</Link>
            <br />
            <div>
                <button onClick={handleClick}>click</button>
            </div>
            <div>
                <button onClick={handleClick2}>click+2</button>
            </div>
            <Main />
        </div>
    );
};

export default Home;