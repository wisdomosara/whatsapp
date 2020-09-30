import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Camera extends Component {
    componentDidMount(){
        const video = document.querySelector('video');
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            console.log("Let's get this party started")
            const stream = navigator.mediaDevices.getUserMedia({video: true})
            video.src = stream;
            video.play()
          }
    }
    render() {
        return (
            <div>
                <Navbar/>
                <h2>Camera coming soon!</h2>
                <video>

                </video>
            </div>
        )
    }
}
