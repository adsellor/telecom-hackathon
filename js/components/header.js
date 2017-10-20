/**
 * flow
 */

import React from 'react';
import { Left, Header, Icon, Body, Title } from 'native-base';

type IHeaderProps = {
    name: string,
}
const DefaultHeader = (props: IHeaderProps) => {
    return (
            <Header>
                <Left>
                    <Icon name='menu' />
                </Left>
                <Body>
                    <Title>
                        {props.name}
                    </Title>
                </Body>
            </Header>
    )
}

export default DefaultHeader;
