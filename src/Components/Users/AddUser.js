import React,{useState} from 'react';
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from '../UI/Button';

const AddUser = (props) => {

    const[enteredUsername,setEnteredUsername] = useState('')
    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value)
    }

    const[enteredAge,setenteredAge] = useState('')
    const ageChangeHandler = (event) =>{
        setenteredAge(event.target.value)
    }


  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(enteredUsername,enteredAge)
  };



  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
