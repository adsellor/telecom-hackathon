import React, { PureComponent } from 'react';
import { Container, Text } from 'native-base';

import DefaultHeader from '../components/header';

class HomeScreen extends PureComponent {
    render() {
        return (
            <Container>
                <DefaultHeader name='Home' />
            </Container>
        )
    }
}

export default HomeScreen