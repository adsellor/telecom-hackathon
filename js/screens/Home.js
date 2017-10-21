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
        backgroundColor: '#d9dde7',
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#1976D2',
        borderTopColor: '#1976D2',
        borderLeftColor: '#1976D2',
        borderRightColor: '#1976D2', 
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        
    },
    balance: {
        backgroundColor: '#d1e6fc'
    },
    balanceText: {
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
         color: '#687583',
         marginLeft: 3,
         marginRight: 3
    },
    border: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#1976D2',
        borderTopColor: '#1976D2',
        borderLeftColor: '#1976D2',
        borderRightColor: '#1976D2',
        padding: 15,
    },
    secondBorder: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#1976D2',
        borderTopColor: '#1976D2',
        borderRightColor: '#1976D2',
        padding: 15,
    },
    numericText: {
        fontSize: 24,
        color: '#687583'
    },
    button: {
        height: 50,
        borderRadius: 10,
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
    handleTimeOut = () => {
        this.setState(state => ({
            amd: 1100,
            points: 16,
        }))
    }
    componentDidMount() {
        return setTimeout(this.handleTimeOut, 8000)
    }

    render() {
        return (
            <Container>
                <DefaultHeader onPress={() => this.props.navigation.navigate('DrawerOpen')} name='Home' />
                <Card style={styles.card}>
                    <CardItem style={styles.type}>
                        <TouchableOpacity onPress={this.handleAmdChange} style={styles.border}>
                            <Text style={styles.typeText}>
                                AMD
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlePointsChange} style={styles.secondBorder}>
                            <Text style={styles.typeText} >
                                Points
                            </Text>
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem style={styles.balance} header>
                        <Text style={styles.balanceText}>
                            BALANCE
                        </Text>
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
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Video')} full light><Text style={styles.buttonText}>Watch Ads</Text></Button>
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Marketplace')} full light><Text style={styles.buttonText}>Marketplace</Text></Button>
            </Container>
        )
    }
}

export default HomeScreen