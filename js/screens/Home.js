import React, { PureComponent } from 'react';
import { Body, Container, Text, Button, Card, CardItem } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import DefaultHeader from '../components/header';

const renderIf = (condition, content) => {
    if (condition) {
        return content
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1e6fc',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,         
    },
    balance: {
        backgroundColor: '#d1e6fc'
    },
    balanceText: {
        letterSpacing: 5,
        fontStyle: 'italic',
        fontSize: 36,
        color: '#687583'
    },
    type: {
        margin: 5,
        backgroundColor: '#d1e6fc'
    },
    typeText: {
         fontSize: 30,
         color: '#687583'
    },
    numericText: {
        fontSize: 24,
        color: '#687583'
    },
    button: {
        height: 75,
        borderRadius: 500,
        margin: 5,
        backgroundColor: '#1976D2'  
    },
    buttonText: {
        color: '#fff'
    },
    points: {
        backgroundColor: '#d1e6fc'
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
                <DefaultHeader onPress={() => this.props.navigation.navigate('DrawerOpen')} name='Home' />
                <Card style={styles.card}>
                    <CardItem style={styles.balance} header>
                        <Text style={styles.balanceText}>
                            BALANCE
                        </Text>
                    </CardItem>
                    <CardItem style={styles.type}>
                        <TouchableOpacity onPress={this.handleAmdChange}>
                            <Text style={styles.typeText}>
                                AMD
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.typeText}>
                            /
                        </Text>
                        <TouchableOpacity onPress={this.handlePointsChange}>
                            <Text style={styles.typeText} >
                                Points
                            </Text>
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem style={styles.points}>
                        {renderIf(this.state.displayAmd, 
                            <Text style={styles.numericText}>{this.state.amd}</Text>
                        )}
                        
                        {renderIf(!this.state.displayAmd,
                            <Text style={styles.numericText}>{this.state.points}</Text>
                        )}
                    </CardItem>
                </Card>
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Video')} full light><Text>Watch Ads</Text></Button>
                <Button style={styles.button} full light><Text>Marketplace</Text></Button>
            </Container>
        )
    }
}

export default HomeScreen