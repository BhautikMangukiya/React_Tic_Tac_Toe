import Icon from "../Icon/Icon";
import "./Card.css";


function Card({ player, onPlay, index, gameEnd }) {
  let icon = <Icon />;

  // Set the icon to a "Cross" if the player is "x".
  if (player == "x") {
    icon = <Icon name="Cross" />;
  } else if (player == "o") {
    icon = <Icon name="Circle" />;
  }

  return (
    <div className="Card" onClick={() => !gameEnd && player== onPlay(index)}>
      {icon}
    </div>
  );
}

export default Card;
