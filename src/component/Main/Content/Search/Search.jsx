// react
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';

// component
import ListCard from './ListCard/ListCard';
import Category from './Category/Category';

// css
import styles from './Search.module.css';

// hook
import useFetch from '../../../../hook/useSearch';


const Search = () => {

  const history = useHistory();
  const Target = useRef(null);
  const getStorage = (item) => { return JSON.parse(window.localStorage.getItem(item)) }
  const [ ListCount, setListCount ] = useState(20);
  const { Lists } = useFetch(ListCount, getStorage('text'));

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setListCount(prev => prev + 20);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const option = { rootMargin: "10px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (Target.current) observer.observe(Target.current);
  }, [handleObserver]);

  useEffect(() => {
    if ( ListCount >= 120 ) {
      setListCount(120);
    }
  }, [ListCount])

  useEffect(() => {
    if ( getStorage('text') === '' ) {
      history.push('/')
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return(
    <React.Fragment>
      
      <Category />
      <div className={styles.list}>
        {[...Array(ListCount)].map((number, index) => { return <ListCard key={index} List={Lists[index]}/> })}
      </div>

      <div ref={Target} className={styles.ref}></div>

    </React.Fragment>
  )
    
}

export default Search;