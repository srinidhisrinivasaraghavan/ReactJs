import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
//To access the yoututbe API
const API_KEY = 'AIzaSyBr6nmwnPNaNhLixBfQksMccNP4mXSVA0w';

//Step1. Create new Functional Component
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			selectedVideo:null
		};

		this.videoSearch('Hello');
	}
	onVideoSelected(selectedVideo)
	{

		this.setState({selectedVideo}) 
	}
	videoSearch(term)
	{
		console.log(term);
		YTSearch({key:API_KEY, term:term}, (videos)=>{
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			}); 
		});
	}
	render(){
		return(
			<div>
				<SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList onVideoSelect={this.onVideoSelected.bind(this)} videos={this.state.videos}/>
		 	</div>
		);
	}
}

//Step2. Plug component's html into the page
ReactDOM.render(<App />,document.getElementById("root"));





//functional component
/*const App= () => {
	return(
		<div>
			<SearchBar />
		 </div>
	);
}*/