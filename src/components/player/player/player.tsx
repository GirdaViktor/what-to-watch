import React from 'react';
import PlayerControl from "../player-control/player-control";

const Player = () => {
  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <PlayerControl/>
    </div>
  );
};

export default Player;
