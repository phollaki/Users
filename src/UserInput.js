import React, { useState } from "react";
import styles from "./UserInput.module.css";

function UserInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const getDataHandler = (e) => {
    console.log(enteredAge + " " + enteredName);
    e.preventDefault();
    const user = {
      name: enteredName,
      age: enteredAge,
    };
    if (user.name.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.getData(user);
    setEnteredAge("");
    setEnteredName("");
  };
  const enteredNameEventHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredName(event.target.value);
  };
  const enteredAgeEventHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };
  return (
    <form onSubmit={getDataHandler}>
      <div className="userInput">
        <div
          className={`${styles.userInput__inputField} ${
            !isValid && styles.invalid
          }`}
        >
          <h3>Username</h3>
          <input
            type="text"
            value={enteredName}
            onChange={enteredNameEventHandler}
          ></input>
          <h3>Age(Years)</h3>
          <input
            type="number"
            min="1"
            value={enteredAge}
            onChange={enteredAgeEventHandler}
          ></input>
          <div className="userInput__button">
            <button type="submit">Add User</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInput;
