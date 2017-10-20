import React, { PureComponent } from 'react';
import { Container, Text, Button } from 'native-base';

import DefaultHeader from '../components/header';

class HomeScreen extends PureComponent {
    render() {
        return (
            <Container>
                <DefaultHeader name='Home' />
                <Button light><Text>Watch Ads</Text></Button>
                <Button light><Text>Marketplace</Text></Button>
            </Container>
        )
    }
}

export default HomeScreen