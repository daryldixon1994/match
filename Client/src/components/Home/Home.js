import React, { useRef } from "react";
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import "./Home.css"




const Home = () => {
   const bottomRef = useRef(null);
   const scrollToBottom = () => {
     bottomRef.current.scrollIntoView({ behavior: "smooth" });
   };
  return (
    <div>
      <Main scrollToBottom={scrollToBottom} />
      <Footer bottomRef={bottomRef} />
    </div>
  );
}

export default Home