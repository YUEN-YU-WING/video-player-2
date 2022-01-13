import './App.css';
import React from 'react';
// Import Video.js and Nenu.js
import { Menu } from '../menu/Menu';
import { Video } from '../video/Video';

/* 1. Click Save, and take a look at your video player in the browser. It looks pretty good! But if you try interacting with it, you’ll find that there’s zero functionality. Take a look at the App component class. This class has one property stored as state: a src containing the address of a video file. App‘s job is to pass this src down to a stateless component, and to pass the ability to change the src down to a different stateless component. Passing src is the easier part, so let’s do that first. Inside of App‘s render function, give <Video /> an attribute. Make this attribute’s name src, and the attribute’s value equal to the src property stored in this.state. */

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

//alert("hi");
/* If you pass chooseVideo to <Menu />, then you will give <Menu /> the ability to update <App />‘s state.

In App‘s render function , give Menu a chooseVideo attribute. Set chooseVideo‘s value equal to the chooseVideo function. */

class App extends React.Component {
  /*  In the constructor of App, bind .chooseVideo() to the current value of this and store it in this.chooseVideo. */
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = {
      src: VIDEOS.fast
    };
    
  }

  chooseVideo(newVideo) {
    this.setState({ src: VIDEOS[newVideo]} )
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

/* Give App a new property named chooseVideo. Set chooseVideo‘s value equal to a function with one parameter, named newVideo. chooseVideo is going to get passed a string: either 'fast', 'slow', 'cute', or 'eek'. It will use this string to choose a new src, which it will use to update this.state.src. */


// ReactDOM.render(
//   <App />, 
//   document.getElementById('app')
// );

export default App;
