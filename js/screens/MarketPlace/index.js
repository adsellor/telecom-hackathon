/**
 * flow
 */

import React, { PureComponent } from 'react';

import { Container, Tabs, Tab, TabHeading, Button, Text } from 'native-base';

import DefaultHeader from '../../components/header';
import BuyScreen from './buy';
// import SellScreen from './sell';

class MarketPlace extends PureComponent {
    render() {
        return (
            <Container>
                <DefaultHeader
                    hasTabs
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    name="Marketplace" />
                <BuyScreen />
            </Container>
        )
    }
}

export default MarketPlace