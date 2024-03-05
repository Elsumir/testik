import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardRequestAsync } from '../../store/getCardReduces/getCardReduces';

export const Cards = () => {
  const dispatch = useDispatch();

  const ids = useSelector((state) => state.getId.ids);
  const cards = useSelector((state) => state.getCard.card);

  useEffect(() => {
    dispatch(cardRequestAsync(ids));
  }, [ids]);

  const removeDuplicateIds = (data) => {
    if (!data) {
      return;
    }
    return data.reduce((acc, item) => {
      if (!acc.some((i) => i.id === item.id)) {
        acc.push(item);
      }

      return acc;
    }, []);
  };

  const noDublCards = removeDuplicateIds(cards);

  return (
    <>
      <div className='container'>
        {!cards ? (
          <h2>Загрузка...</h2>
        ) : (
          <div className='tabl'>
            <ul>
              <span>id</span>
              {noDublCards.map((card) => (
                <li key={card.id}>{card.id} </li>
              ))}
            </ul>
            <ul>
              <span>product</span>

              {noDublCards.map((card) => (
                <li key={card.id}>{card.product} </li>
              ))}
            </ul>
            <ul>
              <span>price</span>
              {noDublCards.map((card) => (
                <li key={card.id}>{`${card.price}p`} </li>
              ))}
            </ul>
            <ul>
              <span>brand</span>
              {noDublCards.map((card) => (
                <li key={card.id}>{card.brand ? card.brand : 'нет'} </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
// noDublCards.map((card) => (

//   <div className='card' key={card.id}>
//     <span>
//       id: {card.id}
//       <br />
//     </span>
//     <span>
//       name: {card.product} <br />
//     </span>
//     <span>
//       price: {card.price} <br />
//     </span>
//     <span>brand: {card.brand}</span>
//   </div>
// ))
// )}
