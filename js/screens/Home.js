import React, { PureComponent } from 'react';
import { Body, Container, Text, Button, Card, CardItem } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import DefaultHeader from '../components/header';

const renderIf = (condition, content) => {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

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
    state = {
        amd: 1000,
        points: 15,
        displayAmd: true,
    }

    handleAmdChange = () => {
        this.setState(state => ({
            displayAmd: true
        }))
    }

    handlePointsChange = () => {
        this.setState(state => ({
            displayAmd: false
        }))
    }

    render() {
        return (
            <Container>
                <DefaultHeader name='Home' />
                <Card style={styles.card}>
                    <CardItem header>
                        <Text style={styles.balance}>
                            BALANCE
                        </Text>
                    </CardItem>
                    <CardItem>
                        <TouchableOpacity onPress={this.handleAmdChange}>
                            <Text style={styles.type}>
                                AMD
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.type}>
                            /
                        </Text>
                        <TouchableOpacity onPress={this.handlePointsChange}>
                            <Text style={styles.type} >
                                Points
                            </Text>
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem>
                        {renderIf(this.state.displayAmd, 
                            <Text>{this.state.amd}</Text>
                        )}
                        
                        {renderIf(!this.state.displayAmd,
                            <Text>{this.state.points}</Text>
                        )}
                    </CardItem>
                </Card>
                <Button style={styles.button} full light><Text>Watch Ads</Text></Button>
                <Button style={styles.button} full light><Text>Marketplace</Text></Button>
            </Container>
        )
    }
}

export default HomeScreen