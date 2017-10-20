import React, { PureComponent } from 'react';

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