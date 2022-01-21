function Notice( props ) {
    return (
      <div className="notice">
         <h3>{props.notice.title}</h3>
         <p>{props.notice.author}</p>
         <small>{props.notice.phone}</small>
         <button onClick={()=> props.handleDelete(props.notice.id)}>X</button>
       </div>
    );
}

export default Notice;
