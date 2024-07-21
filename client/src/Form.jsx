function Form() {
  return (
    <div>
      <form action="" className="flex flex-col p-5 pb-7 gap-5">
        <div className="flex flex-col">
          <label htmlFor="">Store name:</label>
          <input type="text" className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Owner:</label>
          <input type="text" className="border" />
        </div>

        <input type="hidden" />
        <input type="hidden" />
      </form>
    </div>
  );
}

export default Form;
