import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { idRequestAsync } from './store/getIdReduces/getIdAction';
import { Cards } from './components/Cards/Cards';
import { Paggination } from './components/Paggination/Pagination';
import { Filter } from './components/Filter/Filter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(idRequestAsync({}));
  }, []);

  return (
    <>
      <Filter />
      <Paggination />
      <Cards />
      <Paggination />
    </>
  );
}

export default App;
