import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idRequestAsync } from '../../store/getIdReduces/getIdAction';
// import { counterSlice } from '../../store/countReduces/countSlice';
import { decrement, increment } from '../../store/countReduces/countSlice';

export const Paggination = () => {
  const count = useSelector((state) => state.count.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(idRequestAsync({}));
  }, [count]);

  return (
    <>
      <div className='paggination'>
        <div className='prev' onClick={() => dispatch(decrement())}>
          &#60;
        </div>
        <div className='count'>{count + 1}</div>
        <div className='next' onClick={() => dispatch(increment())}>
          &#62;
        </div>
      </div>
    </>
  );
};
