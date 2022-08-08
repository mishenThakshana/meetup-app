import { useContext } from "react";

import styles from "assets/css/modules/meetup-item.module.css";
import Card from "components/ui/Card";
import FavouritesContext from "store/favourites-context";

const MeetupItem = (props) => {
  const { id, title, address, description, image } = props;

  const favouriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(id);
    } else {
      favouriteCtx.addFavourite({
        id,
        title,
        address,
        description,
        image,
      });
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove from favourites' : 'Add to favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
