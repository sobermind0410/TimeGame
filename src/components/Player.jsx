import { useState, useRef } from "react";

export default function Player() {
  const player = useRef();

  const [isPlayer, setIsPlayer] = useState(null);
  

  function handleClick() {
    setIsPlayer(player.current.value);
    player.current.value = null;
  }

  return (
    <section id="player">
      <h2>Welcome {isPlayer ? isPlayer : "unknown entity"}</h2>
      <p>
        <input
          ref={player}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
