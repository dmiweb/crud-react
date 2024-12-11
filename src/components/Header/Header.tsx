const Header = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  return (
    <div className='notes__header'>
      <h1 className='notes__header-title'>Notes</h1>
      {children}
    </div>
  );
}

export default Header;