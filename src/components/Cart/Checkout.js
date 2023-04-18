import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal code">Postal Code</label>
        <input type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Submit</button>
      </div>
    </form>
  );
};

export default Checkout;
