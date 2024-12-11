const NotesBoard = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  return (
    <ul className="notes__list">
      {children}
    </ul>
  );
}

export default NotesBoard;