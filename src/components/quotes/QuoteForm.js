import { useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
  const [error, setError] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    if (authorInputRef.current.value && textInputRef.current.value) {
      const enteredText = textInputRef.current.value;
      const enteredAuthor = authorInputRef.current.value;
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
    } else {
      setError(true);
    }



    // optional: Could validate here
  }
  setTimeout(() => setError(false), 1000)

  // const onFocusHandler = () => {
  //     setIsEntering(true);
  // };
  // const finishEnteringHandler = () => {
  //   setIsEntering(false);
  // }

  return (
    <>
      {/* <Prompt when={isEntering} message={(location)=>'Are you sure you want to live? All your data will be lost!'}/> */}
      <Card>
        <form
          // onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={`${error ? classes.error : classes.control}`}>
            <label htmlFor="author">Author</label>

            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={`${error ? classes.error : classes.control}`}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            {/* <button onClick={finishEnteringHandler} className="btn"> */}
            <button className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
