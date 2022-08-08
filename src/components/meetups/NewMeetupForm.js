import { useRef } from "react";

import styles from "assets/css/modules/new-meetup-form.module.css";
import Card from "components/ui/Card";

const NewMeetupForm = (props) => {
  const titleInput = useRef(); //for readonly purposes
  const imgInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInput.current.value;
    const enteredImage = imgInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imgInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" ref={descriptionInput}></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add new meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
