import { Video } from 'expo';
import React, { PureComponent } from 'react'

export default class VideoScreen extends PureComponent {
    render() {
        return (
            <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode="cover"
            shouldPlay
            style={{ flex: 1 }}
          />
        )
    }
}