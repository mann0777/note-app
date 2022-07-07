import React,{useState} from "react";
import Button from '@material-ui/core/Button';

const CreateNote=()=>{
    const [note, setNote]= useState({
        title: "",
        content: "",
    });

    const InputEvent =(event)=>{
        const{name, value}= event.target;
        setNote(
            (prevData)=>{
        return{
            ...prevData,
            [name]:value,
        };
    
    });
    console.log(note);
    };

    


    return(
    <>
    <div className="main_note">
    <form>
        <input 
        type="text" 
        name="title" 
        value={note.title} 
        onChange={InputEvent} 
        placeholder="Title" 
        autoComplete="off" />


        <textarea 
        row="" 
        name="content" 
        column="" 
        value={note.content} 
        onChange={InputEvent} 
        placeholder="Write a Note" />
        <Button onClick={addEvent}>
        <spamm className="plus_sign">ADD</spamm>
        </Button>
    </form>
    </div>
        
    </>
    );

};

export default CreateNote;