import React, { PureComponent } from 'react';
import { Container } from 'native-base';

import DefaultHeader from '../components/header';

class HomeScreen extends PureComponent {
    render() {
        return (
            <Container>
                <DefaultHeader />
            </Container>
        )
    }
}

export default HomeScreen