import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("null");
  const [showDetails, setShowDetails] = useState(false);
  //   const [result, setResult] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowDetails(true);
        }}
      >
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
            setShowDetails(false);
          }}
        />
        <br />
        <label for="email1">Email:</label>
        <input
          type="email"
          id="email1"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
            setShowDetails(false);
          }}
        />
        <br />
        <label>
          Gender:{" "}
          <select
            value={userGender}
            onChange={(e) => {
              setUserGender(e.target.value);
              setShowDetails(false);
            }}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>female</option>
            <option value={"null"}>null</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      {showDetails === true ? (
        <div>
          <div>User:{user}</div>
          <div>Email:{userEmail}</div>
          <div>Gender:{userGender}</div>
        </div>
      ) : null}
    </>
  );
}
