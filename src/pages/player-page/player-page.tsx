import React from 'react';
import PlayerControl from "../../components/player/player-control/player-control";

const PlayerPage = () : JSX.Element => {
  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <PlayerControl/>
    </div>
  );
};

export default PlayerPage;
