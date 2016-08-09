import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =function(props){
	const VideoItems = props.videos.map(function(video){
						return(
							<div>
							<VideoListItem 
								onVideoSelect={props.onVideoSelect} 
								key={video.etag} 
								video={video} />
							</div>
						);
					});
	
	return(
		<ul className='col-md-4 list-group'>
			{VideoItems}
		</ul>
		);
}

export default VideoList;