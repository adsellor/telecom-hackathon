import { Video } from 'expo';
import React, { PureComponent } from 'react';
import { Container, Icon } from 'native-base';

export default class VideoScreen extends PureComponent {
    state = {
        visible: false,
    }

    componentDidMount() {
        return setTimeout(() => this.setState({ visible: true }), 10000)
    }
    render() {
        return (
            <Container>
                { this.state.visible &&
                <Icon style={{marginTop: 20}} name="close" onPress={() => this.props.navigation.goBack()}/> }
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        resizeMode="cover"
                        shouldPlay
                        style={{ flex: 1 }}
                    />
            </Container>
        )
    }
}