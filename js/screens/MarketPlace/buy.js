import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

class BuyScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Content>
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
          <Card style={{ flex: 0 }}>
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
        </Content>

      </Container>
    );
  }
}

export default BuyScreen;