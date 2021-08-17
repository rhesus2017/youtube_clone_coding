import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = ( ListCount, Text ) => {

  const getStorage = (item) => { return JSON.parse(window.localStorage.getItem(item)) }
  const [ Lists, setLists ] = useState([]);
  const [ Url, setUrl ] = useState(`${process.env.REACT_APP_BASE}/search?key=${process.env.REACT_APP_KEY}&part=snippet&maxResults=20&q=${Text}&regionCode=kr`);
  
  const getList = () => {
		axios.get(Url).then(function (response) {
      for ( const item of response.data.items ) { setLists(prev => [...prev, item]);}
      setUrl(prev => prev + '&pageToken=' + response.data.nextPageToken)
    });

  }; // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if ( ListCount < 140 ) {
      getList(); 
    }
  }, [ListCount, getStorage('text')]); // eslint-disable-line react-hooks/exhaustive-deps

  return { Lists };
}

export default useFetch;
