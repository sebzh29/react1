import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Message from "./pages/message/Message";
import Footer from "./components/footer/Footer";
import DetailsMessage from "./components/DetailsMessage";
import Profile from "./pages/profile/Profile";
import { useState } from "react";

const App = () => {
  
  //apres se sera acces a  BDD
  const [messageData, setMessageData] = useState([
    {
        id: 1,
        title: "Développeur1",
        category: "fullstack",
        content: "id1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
        id: 2,
        title: "Développeur2",
        category: "Backend",
        content: "id 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
        id: 3,
        title: "Développeur3",
        category: "Frantend",
        content: "id 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
]);

const test = "COUCOU";

const handleSendApp = (params) => {
  console.log("🚀 ~ Coucou c est le handleSendForm", params)
  }
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact handleSendForm={handleSendApp}/>} />
        <Route path="/message" element={< Message messages={messageData} propsTest={test}/>} />
        <Route path="/message/:id" element={<DetailsMessage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>      
      <Footer />
    </BrowserRouter>

  )
}

export default App;