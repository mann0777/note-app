import React from "react";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Header from "./Header";
import Note from "./Note";



const App=()=>{
  return<>
  <Header />
    <CreateNote/>
    <Note/>
    <Footer />
  </>;


};



export default App;
