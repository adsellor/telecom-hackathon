import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Footer, FooterTab, Button, Right } from "native-base";
const routes = ["Home", "Marketplace"];
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
            style={{
              width: 800,
            }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{
              backgroundColor: '#1976D2'
            }} full>
              <Text>MIT Licence</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}