type NoteProps ={
  id: string,
  content: string,
  handler: (id: string) => void
}

const Note = ({id, content, handler}: NoteProps): JSX.Element => {
  return(
    <li id={id} className="notes__item">
      <p className="notes__item-text">{content}</p>
      <button type="button" className="button notes__remove-btn" onClick={() => handler(id)}></button>
    </li>
  );
}

export default Note;