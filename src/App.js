import React, { useState } from "react";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Header from "./Header";
import Note from "./Note";



const App=()=>{

  const[addItem, setAddItem] = useState([]);

  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return[...prevData, note];
    });    

  };

  const onDelete=(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currdata, indx)=>{
      return indx !== id;
    }
    )) 

  };


  return<>
  <Header />
    <CreateNote passNote={addNote}/>
    

    {addItem.map((val, index)=>{
      return(<Note
      key = {index}
      id = {index}
      title = {val.title}
      content = {val.content}
      deleteItem={onDelete}
       />
    );
    })}


    <Footer />
  </>;


};



export default App;
