import React, { PureComponent } from 'react';
import { Body, Container, Text, Button, Card, CardItem } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'

import DefaultHeader from '../components/header';

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    balance: {
        fontSize: 36,
        fontStyle: 'italic'
    },
    type: {
        fontSize: 30,
        margin: 5
    },
    numeric: {
        fontSize: 24,
    },
    button: {
        height: 75
    }
})

class HomeScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            amd: 1000,
            points: 15,
            displayAmd: true,
        }
    }

    handleAmdChange() {
        this.setState({
            displayAmd: true
        })
    }

    handlePointChange() {
        this.setState({
            displayAmd: false
        })
    }

    render() {
        return (
            <Container>
                <DefaultHeader onPress={() => this.props.navigation.navigate('DrawerOpen')} name='Home' />
                <Card style={styles.card}>
                    <CardItem header>
                        <Text style={styles.balance}>
                            BALANCE
                        </Text>
                    </CardItem>
                    <CardItem>
                        <TouchableOpacity onPress={() => this.handleAmdChange}>
                            <Text style={styles.type}>
                                AMD
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.type}>
                            /
                        </Text>
                        <TouchableOpacity onPress={() => this.handlePointChange}>
                            <Text style={styles.type} >
                                Points
                        </Text>
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.numeric}>
                            {this.state.amd ? this.state.amd : this.state.points}
                        </Text>
                    </CardItem>
                </Card>
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Video')} full light><Text>Watch Ads</Text></Button>
                <Button style={styles.button} full light><Text>Marketplace</Text></Button>
            </Container>
        )
    }
}

export default HomeScreen