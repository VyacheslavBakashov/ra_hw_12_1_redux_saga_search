import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { getSkillsBySearch, setLoadingTrue, setSearchFalse, setSearchTrue } from './redux/actions';

const App = () => {
  const { skills, loading, empty, search } = useSelector((s) => s.skills);
  const dispatch = useDispatch();

  const onSearchSkill = (e) => {
    if (!e.target.value.trim()) {
      return dispatch(setSearchFalse());
    }
    dispatch(setSearchTrue());
    dispatch(setLoadingTrue());
    dispatch(getSkillsBySearch(e.target.value));
  };

  const contentWithEmpty = useMemo(() => {
    return empty ? 'Not found' : skills.map((s) => <li key={s.id}>{s.name}</li>);
  }, [empty, skills]);

  const contentWithLoading = useMemo(() => {
    return loading ? 'Loading...' : contentWithEmpty;
  }, [loading, contentWithEmpty]);

  return (
    <div className="app">
      <input type="search" onChange={onSearchSkill} id="inp-search" />
      <ul>{search ? contentWithLoading : 'Type something to search...'}</ul>
    </div>
  );
};

export default App;