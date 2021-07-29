// react
import React, { useState, useEffect, useRef, useCallback } from 'react';

// component
import ListCard from './ListCard/ListCard';
import Category from './Category/Category';

// css
import './Home.css';

// hook
import useFetch from './../../../../hook/useFetch';


const Home = () => {

  const [ ListCount, setListCount ] = useState(20)
  const [ Page, setPage ] = useState(0)
  const Target = useRef(null);
  const { Lists } = useFetch(Page);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
      setListCount((prev) => prev + 20)
    }
		
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const option = { rootMargin: "10px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (Target.current) observer.observe(Target.current);
  }, [handleObserver]);


  return(
    <React.Fragment>
      
      <Category />

      <div className='list'>
        {[...Array(ListCount)].map((number, index) => { return <ListCard key={index} List={Lists[index]}/> })}
      </div>

      <div ref={Target}></div>

    </React.Fragment>
  )
    
}

export default Home;