type FormProps = {
  children: JSX.Element | JSX.Element[],
  handler: (event: React.FormEvent<HTMLFormElement>) => void
}

const FormAddNotes = ({ children, handler }: FormProps): JSX.Element => {
  return (
    <form className="form-add-note" onSubmit={handler}>
      <label className="form-add-note__wrap">
        <span className="form-add-note__title">New Note</span>
        <textarea className="form-add-note__text" name="note" ></textarea>
      </label>
      {children}
    </form>
  );
}

export default FormAddNotes;