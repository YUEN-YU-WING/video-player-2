/* 2.Let’s make <Video /> play its passed-in video file!
Select Video.js. In Video‘s render function, give <video /> a src attribute. Make src equal to the passed-in video file. */



import React from "react";

export class Video extends React.Component{
    render() {
        return (
            <div>
                <video controls autostart autoPlay muted src={this.props.src}/> 
            </div>
        )
    } 
}