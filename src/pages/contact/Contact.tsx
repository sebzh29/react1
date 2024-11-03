import { useState } from "react";
import React from "react";


const Contact = (props: { handleSendForm: (form: { title: string; category: string; message: string }) => void }) => {

    const {handleSendForm} = props;
    const [form, setForm] = useState({
        title: '',
        category: '',
        message: ''
    })

    // const form = {
    //     title: '',
    //     category: '',
    //     message: ''
    // }

    function handleSubmit(e:unknown): void {
       //console.log("🚀 ~ handleSubmit ~ e:", e)
       e.preventDefault();
    //    console.log("🚀 ~ handleSubmit ~ form:", form)
       // prpops enfant/parent 
       handleSendForm(form);       
    }

    function handleChange(e:unknown): void {
        console.log("🚀 ~ handleChange ~ e:", e.target.value)
        console.log("🚀 ~ handleChange ~ e:", e.target.name) 

        const { name, value } = e.target;             

        //const test = {...form, [name]: value};    
        
        // modifier le state
        setForm({...form, [name] : value});


    }

    return (
        <div>
            <h4>Formulaire de contact</h4>
            <br />
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre :</label>
                    <input className="" type="text" name='title' id='title'
                    onChange={(e) => handleChange(e)}/>
                    <br />
                    <br />
                    <label htmlFor="category">Categorie :</label>

                    <select name="category" id="category" onChange={(e) => handleChange(e)}>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="fullstack">Fullstack</option>
                        <option value="conception">Conception</option>
                        
                    </select>

                    <br />
                    <br />
                    <label htmlFor="message">Message :</label>
                    <br />
                    <textarea name="message" id="message" onChange={(e) => handleChange(e)}></textarea>
                    <br />
                    <br />
                    <input 
                        type="submit"
                        value="Envoyer votre message"
                        className='btn btn-secondary'                    
                        />
                </form>
            </div>
            <h2>
                {form.title}
            </h2>
            <h2>
                {form.category}
            </h2>
            <h2>
                {form.message}
            </h2>
        </div>
    );
};

export default Contact;