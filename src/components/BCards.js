import React from 'react';
import './BCards.css';
import BCardItem from './BCardItem';

function BCards() {
  return (
    <div className='bcards'>
     
      <div className='bcards__container'>
        <div className='bcards__wrapper'>
          <ul className='bcards__items'>
            <BCardItem
              src='images/a.png'
              text='Seminars/Webinars'
              path='/Webinar'
            />
            <BCardItem
              src='images/b.png'
              text='Conferences'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <BCardItem
              src='images/d.png'
              text='Trade Show'
              path='/'
            />
            <BCardItem
              src='images/c.png'
              text='Product Launch'
              path='/'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BCards;