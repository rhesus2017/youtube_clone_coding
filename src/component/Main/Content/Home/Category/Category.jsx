// react
import React, { useState, memo } from 'react';

// css
import './Category.css';

const Category = memo(() => {

	const [ ActiveCategory, setActiveCategory ] = useState(0);
	const Categorys = [ { name: '전체' }, { name: '음악' }, { name: '실시간' }, { name: '축구' }, { name: '만화 영화' }, { name: '반려동물' }, { name: '액션 어드벤처 게임' }, { name: '최근에 업로드된 영상' }];
  

	return (
		<ul className='category'>
			{
				Categorys.map((Category, index) => {
					return <li key={index} className={ActiveCategory === index ? 'active' : ''} onClick={() => setActiveCategory(index)}>{Category.name}</li>
				})
			}
		</ul>
	)
})

export default Category;