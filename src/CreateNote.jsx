import React,{useState} from "react";
import Button from '@material-ui/core/Button';

const CreateNote=(props)=>{

    const[expand, setExpand] = useState(false);


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

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });

    };

    const expandIt=()=>{
        setExpand(true);

    };




    return(
    <>
    <div className="main_note">
    <form>
    {expand?
        <input 
        type="text" 
        name="title" 
        value={note.title} 
        onChange={InputEvent} 
        placeholder="Title" 
        autoComplete="off" /> :null}


        <textarea 
        row="" 
        name="content" 
        column="" 
        value={note.content} 
        onChange={InputEvent} 
        placeholder="Write a Note" 
        onClick={expandIt}
        />

        {expand?
        <Button onClick={addEvent}>
        <spamm className="plus_sign">+</spamm>
        </Button> :null}
    </form>
    </div>
        
    </>
    );

};

export default CreateNote;