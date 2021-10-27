// react
import React, { useState, useRef, useCallback, useEffect } from 'react';

// component
import ListCard from './ListCard/ListCard';
import Category from './Category/Category';

// css
import styles from './Home.module.css';

// hook
import useFetch from '../../../../hook/useFetch';


const Home = () => {

  const getStorage = (item) => { return JSON.parse(window.localStorage.getItem(item)) }
  const setStorage = (item, value) => { window.localStorage.setItem(item, JSON.stringify(value)) }
  const [ ListCount, setListCount ] = useState(20);
  const { Lists } = useFetch(ListCount);
  const Target = useRef(null);
  
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if ( getStorage('ListCount') < 100 ) {
        setListCount(prev => prev + 20);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const option = { rootMargin: "10px", threshold: 1 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (Target.current) observer.observe(Target.current);
  }, [handleObserver]);

  useEffect(() => {
    window.onbeforeunload = function() { window.scrollTo(0, 0); }
    setStorage('ListCount', 0);
    setStorage('text', '');
  }, []);

  return(
    <React.Fragment>
      
      <Category />
      <div className={styles.list}>
        {[...Array(ListCount)].map((number, index) => { return <ListCard key={index} List={Lists[index]}/> })}
      </div>

      <div ref={Target}></div>
      
    </React.Fragment>
  )
    
}

export default Home;