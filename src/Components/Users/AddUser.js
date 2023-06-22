import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const [enteredAge, setenteredAge] = useState("");
  // const ageChangeHandler = (event) => {
  //   setenteredAge(event.target.value);
  // };

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log('nameInputRefnameInputRef',nameInputRef)
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Username or age cannot be empty",
        message: "Please enter valid username or age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please add valid age",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    // setEnteredUsername("");
    // setenteredAge("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
