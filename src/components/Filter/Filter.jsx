import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { idRequestAsync } from '../../store/getIdReduces/getIdAction';
import { typeAction } from '../../store/typeActionReduces/typeActionReduces';

export const Filter = () => {
  const [valueName, setValueName] = useState(null);
  const [valuePrice, setValuePrice] = useState(null);
  const [valueBrand, setValueBrand] = useState(null);
  const dispatch = useDispatch();

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
      obj.push(['brand', valueBrand]);
    }
    return Object.fromEntries(obj);
  };

  const params = filterParams();
  console.log(params);
  return (
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
      <div className='btns'>
        <div
          className='btn primary'
          onClick={() => {
            dispatch(typeAction('filter'));
            dispatch(idRequestAsync(params));
          }}
        >
          поиск
        </div>
        <div
          className='btn red'
          onClick={() => {
            dispatch(typeAction('get_ids'));
            dispatch(idRequestAsync({}));
          }}
        >
          сброс
        </div>
      </div>
    </div>
  );
};
