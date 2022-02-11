import './App.css';
import React from 'react';
import { Menu } from '../menu/Menu';
import { Video } from '../video/Video';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = {
      src: VIDEOS.fast,
    };
  }

  chooseVideo(newVideo) {
    this.setState({ src: VIDEOS[newVideo]});
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src} />
      </div>
    )
  }
}

export default App;
