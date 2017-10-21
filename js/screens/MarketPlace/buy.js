import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

class BuyScreen extends PureComponent {
  state={
    isVisible: false,
    isVisible2: false,
    isVisible3: false
  }
  _showModal = () => this.setState({ isVisible: true })
  _showModal2 = () => this.setState({ isVisible2: true })
  _showModal3 = () => this.setState({ isVisible3: true })
  _hideModal = () => this.setState({ isVisible: false, isVisible2: false, isVisible3: false })
  
  render() {
    return (
      <Container>
        <Content>
        <TouchableOpacity onPress={this._showModal} >
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg' }} />
                <Body>
                  <Text>Free Calls</Text>
                  <Text note>Untill November 15, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get 100 Mins of Free Calls with 1000pts
                </Text>
                <Image source={{ uri: 'https://static.beeline.am/upload/images/Home-600-195x139.jpg' }} style={{ height: 200, width: 320, flex: 1 }} />

              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <Modal isVisible={this.state.isVisible}>
          <CardItem onPress={this._hideModal}>
              <Left>
                <Thumbnail source={{ uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg' }} />
                <Body>
                  <Text>Free Calls</Text>
                  <Text note>Untill November 15, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get 100 Mins of Free Calls with 1000pts
                </Text>
                <Button onPress={this._hideModal} block primary><Text> Get </Text></Button>
              </Body>
            </CardItem>
          </Modal>
          <TouchableOpacity  onPress={this._showModal2}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg' }} />
                <Body>
                  <Text>Free Text</Text>
                  <Text note>Untill November 15, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get 25 free text messages With 500pts
                </Text>
                <Image source={{ uri: 'https://static.beeline.am/upload/dpcupload/contents/342/SMS-715x350.jpg' }} style={{ height: 200, width: 320, flex: 1 }} />
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <Modal isVisible={this.state.isVisible2}>
          <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg' }} />
                <Body>
                  <Text>Free Text</Text>
                  <Text note>Untill November 15, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get 25 free text messages With 500pts
                </Text>
                <Button onPress={this._hideModal} block primary><Text> Get </Text></Button>
              </Body>
            </CardItem>
            </Modal>
            <TouchableOpacity onPress={this._showModal3}>
          <Card  style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg' }} />
                <Body>
                  <Text>Free Data</Text>
                  <Text note>Untill November 30, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get 2GB of free data with  800pts
                </Text>
                <Image source={{ uri: 'https://static.beeline.am/upload/dpcupload/contents/342/4G-LTE-715x350new.jpg' }} style={{ height: 200, width: 320, flex: 1 }} />
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Content>
        <Modal isVisible={this.state.isVisible3}>
          <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg' }} />
                <Body>
                  <Text>Free Data</Text>
                  <Text note>Untill November 30, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get 2GB of free data with  800pts
                </Text>
                <Button onPress={this._hideModal} block primary><Text> Get </Text></Button>
              </Body>
            </CardItem>
            </Modal>

      </Container>
    );
  }
}

export default BuyScreen;