import React from 'react';
import './Cards.css';
import { cardsData } from '../../methods';
import RightSide from '../RigthSide/RightSide';

import Card from '../CardDashboard/Card';

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}

      <RightSide />
    </div>
  );
};

export default Cards;
