import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("null");
  const [showDetails, setShowDetails] = useState(false);
  const [disable, setDisable] = useState(true);
  //   const [result, setResult] = useState(false);
  function disableHandle() {
    if (user !== "" && userEmail !== "" && userGender !== "null") {
      setDisable(false);
    } else {
      setDisable(true);
    }
    console.log(user);
    console.log(userEmail);
    console.log(userGender);
  }

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
          onKeyUp={disableHandle}
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
          onKeyUp={disableHandle}
        />
        <br />
        <label>
          Gender:{" "}
          <select
            value={userGender}
            onChange={(e) => {
              setUserGender(e.target.value);
              setShowDetails(false);
              disableHandle();
            }}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"null"}>null</option>
          </select>
        </label>
        <br />
        <button type="submit" disabled={disable}>
          Submit
        </button>
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
