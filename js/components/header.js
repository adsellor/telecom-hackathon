/**
 * flow
 */

import React from 'react';
import { Container, Left, Header, Icon, Body, Title, Right } from 'native-base';
import { Image, StyleSheet } from 'react-native'

type IHeaderProps = {
    name: string,
    onClick?: () => {},
}

const DefaultHeader = (props: IHeaderProps) => {
    return (
        <Header style={{height: 75}}>
            <Left>
                <Icon onClick={props.onClick} name='menu' />
            </Left>
            <Body>
                <Title>
                    {props.name}
                </Title>
            </Body>            
            <Right>
                <Image style={{width: 50, height: 50, borderRadius: 25}} source={require('../../assets/me.jpg')} />
            </ Right>
        </ Header >
    )
}

export default DefaultHeader;
