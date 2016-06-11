import React, { PropTypes } from 'react';
import DeckItem from './DeckItem';
import Score from '../containers/Score';

const Decks = ({ decks, score }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4"> Decks </h4>
    <Score />
    <div className="card-list">
      <div className="card-columns">
        {decks.map((deck, idx) => { 
          let level = store.getState().records.filter(function(record) {
            return record.deckId === deck._id;
          });
          return <DeckItem key={idx} deck={deck} record={level[0]}/>
        }

          )}
      </div>
    </div>
  </div>
);

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
};

export default Decks;
