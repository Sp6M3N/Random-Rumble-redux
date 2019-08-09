import React from 'react';
import PlayerCard from './PlayerCard';
import connect from "react-redux/es/connect/connect";

const mapStateToProps = state => {
  return {players: state.players
  }
};

const PlayerConnect = ({players}) => {
  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  };
  return (
      <div className='row'>
        {displayPlayers()}
      </div>
  );
};

const PlayerList = connect(mapStateToProps)(PlayerConnect);


export default PlayerList;