import React from "react";
import ReactDom from "react-dom";

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onErrorHandler}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onErrorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onErrorHandler={props.onErrorHandler}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorHandler={props.onErrorHandler}
        > </ModalOverlay>,
        document.getElementById("overlay-root")
       
      )}
    </React.Fragment>

    // <React.Fragment>
    //   <div className={classes.backdrop} onClick={props.onErrorHandler}>
    //     <Card className={classes.modal}>
    //       <header className={classes.header}>
    //         <h2>{props.title}</h2>
    //       </header>
    //       <div className={classes.content}>
    //         <p>{props.message}</p>
    //       </div>
    //       <footer className={classes.actions}>
    //         <Button onClick={props.onErrorHandler}>Okay</Button>
    //       </footer>
    //     </Card>
    //   </div>
    // </React.Fragment>
  );
};
export default ErrorModal;
