import { useState, useEffect, useCallback } from "react";
import axios from "axios";


const useFetch = ( Page ) => {

  const [ Lists, setLists ] = useState([]);
	const [ Url, setUrl ] = useState('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCnPp6rOQb_ZN351JQpX2UAQf04czT_OF4&part=snippet&chart=mostPopular&maxResults=20&regionCode=kr');

  const getList = useCallback(() => {

		axios.get(Url).then(function (response) {
      for (const item of response.data.items) { setLists(prev => [...prev, item]);}
      setUrl(prev => prev + '&pageToken=' + response.data.nextPageToken)
    });

  }, [Page]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
		getList();
  }, [Page]); // eslint-disable-line react-hooks/exhaustive-deps

  return { Lists };
}

export default useFetch;
