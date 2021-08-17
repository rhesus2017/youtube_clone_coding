// react
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './ListCard.css';

// img
import logo from './img/skeleton_background.png';

const Skeleton = ({ List }) => {

	let result = ''

	if ( List !== undefined ) {
		let publishedDate = new Date(List.snippet.publishedAt);
		let nowDate = new Date();
		let betweenDay = (nowDate.getTime() - publishedDate.getTime()) / 1000;

		if (betweenDay < 60) result = Math.floor(betweenDay) + '초 전';
		else if ( betweenDay >= 60 && betweenDay < 60*60 ) result = Math.floor(betweenDay / 60) + '분 전';
		else if ( betweenDay >= 60*60 && betweenDay < 60*60*24 ) result = Math.floor(betweenDay / (60*60)) + '시간 전';
		else if ( betweenDay >= 60*60*24 ) result = Math.floor(betweenDay / (60*60*24)) + '일 전'; 
	}

	return (
		<Link to='/Detail' className='skeleton_card'>
			<img
				src={List !== undefined ? List.snippet.thumbnails.medium.url : logo}
				alt={List !== undefined ? List.snippet.title : 'skeleton' }
			/>
			
			<div className='desc'>

				{List !== undefined ? <div className="title_img"></div> : <div className="title_img_skeleton"></div>}
				
				{
					List !== undefined 
						? <div className='title_text'>
								<span className='title'>{List.snippet.title}</span>
								<p className='channel_title'>{List.snippet.channelTitle}</p>
								<p className='views'>
									<span>조회수 {Math.floor(Math.random()*(100 - 1)) + 1}만회</span>
									<span className='dot'></span>
									<span>{result}</span>
								</p>
							</div>
						: <div className='title_text_skeleton'>
								<span className='title'><span></span><span></span></span>
								<p className='channel_title'></p>
								<p className='views'></p>
							</div>
				}
				
			</div>
		</Link>
	)
}

export default Skeleton;