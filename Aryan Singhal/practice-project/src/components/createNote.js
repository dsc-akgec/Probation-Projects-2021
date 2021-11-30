import React, { useState } from 'react';

function CreateNote() {
    const [title,setTitle] = useState([]);
    const [Desc,setDesc] = useState([]);
   const [titleData,setTitleData] = useState(title);
   const [descData,setDescData] = useState(Desc);
    const titleChange=(e)=>{
    setTitle(e.target.value);

};
const handleChange=(e)=>{
    e.preventDefault();
setDescData(Desc);
setTitleData(title);
}
    const descChange=(e)=>{
        setDesc(e.target.value);
    };
    return (
        <div>
            <form>
                <input type='text' placeholder='Enter Title' value={title} onChange={titleChange}></input>
                <textarea rows="4" columns="4" placeholder='Enter About' value={Desc} onChange={descChange}></textarea>
                <button onClick={handleChange}>+</button>
            </form>
        </div>
    )
}

export default CreateNote;
