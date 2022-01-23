import { useState } from 'react'
import Form from './Form';

function Notice( props ) {

const [ editFormVisible, setEditFormVisible ] = useState(false)

function toggleForm() {
  setEditFormVisible(!editFormVisible)
}  

    return (
      <>
      { editFormVisible ?
        <Form 
          notice={props.notice}
          toggleForm={toggleForm}
        />
        :
        <div className="notice">
         <h3>{props.notice.title}</h3>
         <p>{props.notice.author}</p>
         <small>{props.notice.phone}</small>
         <button onClick={()=> props.handleDelete(props.notice)}>X</button>
       </div>
    }
      </>
    );
}

export default Notice;
