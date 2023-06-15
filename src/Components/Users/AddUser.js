import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErroModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const [enteredAge, setenteredAge] = useState("");
  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Username or age cannot be empty",
        message: "Please enter valid username or age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please add valid age",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setenteredAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
