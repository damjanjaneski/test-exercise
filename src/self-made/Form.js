import { useState } from "react";

export default function Form() {
  const [inputText, setInputText] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = function (e) {
    const { name, value } = e.target;

    setInputText({ ...inputText, [name]: value });
  };

  const submitForm = function (e) {
    e.preventDefault();
    setSubmittedData(inputText);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "100%",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <form
        onSubmit={submitForm}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          alignItems: "center",
        }}
      >
        <label>Full Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={inputText.name}
        ></input>
        <label>Email:</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={inputText.email}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {submittedData ? <p>Name: {submittedData.name}</p> : ""}
      {submittedData ? <p>Email: {submittedData.email}</p> : ""}
      {/* {submittedData && (
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )} */}
    </div>
  );
}
