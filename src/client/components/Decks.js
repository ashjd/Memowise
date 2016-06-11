import React, { PropTypes } from 'react';
import DeckItem from './DeckItem';
import Score from '../containers/Score';

const Decks = ({ decks, score }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4"> Decks </h4>
    <div className="card-list">
      <div className="card-columns">
        {decks.map((deck, idx) => { 
          let level = store.getState().records.filter(function(record) {
            return record.deckId === deck._id;
          });
          console.log(level, 'level');
          return <DeckItem key={idx} deck={deck} record={level[0]}/>
        }

          )}
      </div>
    </div>
    <Score />
  </div>
);

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
};

export default Decks;
