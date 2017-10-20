/**
 * flow
 */

import React, { PureComponent } from 'react';
import { Image, StyleSheet } from 'react-native'
import { Container, Left, Header, Icon, Body, Title, Right, Button } from 'native-base';

type IHeaderProps = {
    name: string,
    onPress?: () => {}
}

class DefaultHeader extends PureComponent {
    props: IHeaderProps;
    render() {
        const {
            onPress,
            name
        } = this.props
        return (
            <Header style={{ height: 75 }}>
                <Left>
                    <Button
                        transparent
                        onPress={onPress}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>
                        {name}
                    </Title>
                </Body>
                <Right>
                    <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../../assets/me.jpg')} />
                </ Right>

            </Header >
        )
    }
}

export default DefaultHeader
