import styles from "assets/css/modules/meetup-list.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            image={meetup.image}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
