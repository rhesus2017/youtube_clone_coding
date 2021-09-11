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

  const [ ListCount, setListCount ] = useState(20);
  const Target = useRef(null);
  const { Lists } = useFetch(ListCount);
  const setStorage = (item, value) => { window.localStorage.setItem(item, JSON.stringify(value)) }

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setListCount(prev => prev + 20);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const option = { rootMargin: "10px", threshold: 1 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (Target.current) observer.observe(Target.current);
  }, [handleObserver]);

  useEffect(() => {
    if ( ListCount >= 120 ) {
      setListCount(120);
    }
  }, [ListCount])

  useEffect(() => {
    setStorage('text', '');
  }, []);

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

export default Home;