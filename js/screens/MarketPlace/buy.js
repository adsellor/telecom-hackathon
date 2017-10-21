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
                  <Text>Free Calls</Text>
                  <Text note>Untill November 15, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://static.beeline.am/upload/contents/346/683x334%20ka%20ka%20chka.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Get 10 Mins of Free Calls
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg'}} />
                <Body>
                  <Text>Free Text</Text>
                  <Text note>Untill November 15, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://static.beeline.am/upload/contents/346/683x334%20ka%20ka%20chka.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Get 25 free text messages
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.panorama.am/news_images/501/1500474_3/f5672ddd201d9e_5672ddd201de0.thumb.jpg'}} />
                <Body>
                  <Text>Free Data</Text>
                  <Text note>Untill November 30, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://static.beeline.am/upload/contents/346/683x334%20ka%20ka%20chka.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Get 2GB of free data
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