/**
 * flow
 */

import React from 'react';
import { Container, Left, Header, Icon, Body, Title, Right } from 'native-base';

type IHeaderProps = {
    name: string,
    onClick?: () => {},
}
const DefaultHeader = (props: IHeaderProps) => {
    return (
        <Header>
            <Left>
                <Icon onClick={props.onClick} name='menu' />
            </Left>
            <Body>
                <Title>
                    {props.name}
                </Title>
            </Body>
            <Right/>
        </Header>
    )
}

export default DefaultHeader;
