const Contact = () => {
  return (
    <div className="m-5">
      <h1 className="mt-26 text-4xl font-bold">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-b pl-1"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-b m-5 pl-1"
          placeholder="Query"
        />
        <button className="border border-black px-2 rounded-sm bg-gray-100 cursor-pointer hover:bg-gray-200">
          Submit
        </button>
      </form>
      <p>For any query mail to hungerhub.helpdesk@gmail.com</p>
    </div>
  );
};

export default Contact;
