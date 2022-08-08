import { useContext } from "react";

import FavouritesContext from "store/favourites-context";
import MeetupList from "components/meetups/MeetupList";

const Favourite = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You got no favourites.Start adding some</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My favourites</h1>
      {content}
    </section>
  );
};

export default Favourite;
