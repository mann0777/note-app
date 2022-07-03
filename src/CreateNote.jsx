import React from "react";
import Button from '@material-ui/core/Button';

const CreateNote=()=>{
    return(
    <>
    <div className="main_note">
    <form>
        <input type="text" placeholder="Title" />
        <textarea row="" column="" placeholder="Write a Note" />
        <Button>
        ADD
        </Button>
    </form>
    </div>
        
    </>
    );

};

export default CreateNote;