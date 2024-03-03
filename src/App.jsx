import { useEffect, useState } from 'react';
import './App.css';
import { token } from './api/const';

function App() {
  const [id, setId] = useState([]);
  const [cards, setcard] = useState([]);
  const [countPage, setCountPage] = useState(0);
  const [valueName, setValueName] = useState(null);
  const [valuePrice, setValuePrice] = useState(null);
  const [valueBrand, setValueBrand] = useState(null);

  const getFetch = async (action, params, card) => {
    await fetch('http://api.valantis.store:40000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth': token },
      body: JSON.stringify({ action: action, params: params }),
    }).then((res) => {
      res.json().then((results) => {
        let result = results;
        if (result !== undefined) {
          if (!card) {
            setId(result.result);
          } else {
            setcard(result.result);
          }
        }
      });
    });
  };

  useEffect(() => {
    getFetch('get_ids', { offset: 50 * countPage, limit: 50 });
  }, [countPage]);

  useEffect(() => {
    getFetch('get_items', { ids: id }, true);
  }, [id]);

  const removeDuplicateIds = (data) => {
    return data.reduce((acc, item) => {
      if (!acc.some((i) => i.id === item.id)) {
        acc.push(item);
      }

      return acc;
    }, []);
  };

  const handleCnangeName = (event) => {
    setValueName(event.target.value);
  };
  const handleCnangePrace = (event) => {
    let num = Number(event.target.value);
    setValuePrice(num);
  };
  const handleCnangeBrand = (event) => {
    setValueBrand(event.target.value);
  };

  const filterParams = () => {
    const obj = [];
    if (valuePrice) {
      obj.push(['price', valuePrice]);
    }
    if (valueName) {
      obj.push(['product', valueName]);
    }
    if (valueBrand) {
      obj.push(['product', valueBrand]);
    }

    return Object.fromEntries(obj);
  };

  const cardOutput = removeDuplicateIds(cards);
  const params = filterParams();
  return (
    <>
      <div className='filter'>
        <h3>Фильтр</h3>
        <div className='inputs'>
          <div onChange={handleCnangeName}>
            name: <input type='text' />
          </div>
          <div onChange={handleCnangePrace}>
            price: <input type='text' />
          </div>
          <div onChange={handleCnangeBrand}>
            brand: <input type='text' />
          </div>
        </div>
        <div
          className='btn'
          onClick={() => {
            getFetch('filter', params);
          }}
        >
          поиск
        </div>
      </div>
      <div className='paggination'>
        <div
          className='prev'
          onClick={() => countPage > 0 && setCountPage(countPage - 1)}
        >
          &#60;
        </div>
        <div className='count'>{countPage + 1}</div>
        <div className='next' onClick={() => setCountPage(countPage + 1)}>
          &#62;
        </div>
      </div>
      <div className='container'>
        {!cardOutput.length ? (
          <h2 className='loading'>Загрузка</h2>
        ) : (
          cardOutput.map((card) => (
            <div className='card' key={card.id}>
              <span>
                id: {card.id}
                <br />
              </span>
              <span>
                name: {card.product} <br />
              </span>
              <span>
                price: {card.price} <br />
              </span>
              <span>brand: {card.brand}</span>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
