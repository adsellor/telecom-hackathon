import React from "react";
import { AppRegistry, Image, StatusBar, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem, Footer, FooterTab, Button, Right } from "native-base";
const routes = ["Home", "Profile", "Marketplace", "Invite", "Exit"];

const styles = StyleSheet.create({
  list: {
    width: 350,
    backgroundColor: '#353839'
  },
  listItem: {
    backgroundColor: '#353839',
    height: 83
  },
  text: {
    color: '#fff'
  },
  footerHeader: {
    color: '#82838f',
    marginBottom: 7
  },
  footerText: {
    color: '#82838f',
  },
  footer: {
    height: 300
  }
})

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={{
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 100,
      }}>
        <Content>
          <List
            style={styles.list}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  style={styles.listItem}
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text style={styles.text}>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button style={{
              backgroundColor: '#dbdce4',
            }} full>
              <Text style={styles.footerText}>MIT Licence</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}