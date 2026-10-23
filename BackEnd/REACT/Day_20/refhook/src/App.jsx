import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const clearInputs = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  const handleSubmit = () => {
    alert(
      "Name: " + nameRef.current.value +
      "\nEmail: " + emailRef.current.value
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Input Focus and Clear</h1>

      <input
        ref={nameRef}
        type="text"
        placeholder="Enter Name"
        className="border p-2 rounded"
      />

      <div className="flex gap-2">
        <button
          onClick={() => nameRef.current.focus()}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Focus Name
        </button>

        <button
          onClick={() => emailRef.current.focus()}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Focus Email
        </button>
      </div>

      <input
        ref={emailRef}
        type="email"
        placeholder="Enter Email"
        className="border p-2 rounded"
      />

      <div className="flex gap-2">
        <button
          onClick={clearInputs}
          className="bg-red-500 text-white p-2 rounded"
        >
          Clear
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;