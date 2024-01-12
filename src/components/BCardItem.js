import React from 'react';
import { Link } from 'react-router-dom';

function BCardItem(props) {
  return (
    <>
      <li className='bcards__item'>
        <Link className='bcards__item__link' to={props.path}>
          <figure className='bcards__item__pic-wrap' data-category={props.label}>
            <img
              className='bcards__item__img'
              src={props.src}
            />
          </figure>
          <div className='bcards__item__info'>
            <h5 className='bcards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default BCardItem;