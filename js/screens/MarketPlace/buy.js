import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

class BuyScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg'}} />
                <Body>
                  <Text>Option 1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://static.beeline.am/upload/contents/346/683x334%20ka%20ka%20chka.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg'}} />
                <Body>
                  <Text>Option 1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://static.beeline.am/upload/contents/346/683x334%20ka%20ka%20chka.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg'}} />
                <Body>
                  <Text>Option 1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://static.beeline.am/upload/contents/346/683x334%20ka%20ka%20chka.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        
      </Container>
    );
  }
}

export default BuyScreen;