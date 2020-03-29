import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Card,
  Item,
  Body,
  H3,
  List,
  ListItem,
  Badge,
  Input
} from "native-base";

import { 
  Image,
  View,
  Dimensions} from 'react-native';

const deviceWidth = Dimensions.get("window").width;

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

class TiketPerbaikan extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Icon style={{color:"black"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "black"}}>Tiket Perbaikan</Title>
          </Body>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>
            <Item rounded style={{backgroundColor: "white"}}>
              <Input placeholder='Masukkan tanggal pencarian Anda' />
              <Icon active name='calendar' type="SimpleLineIcons" />
            </Item>

            <H3 style={{marginTop: 24, color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Tiket Perbaikan Anda</H3>

            <List>
              <Card>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketPerbaikan")}>
                  <Left>
                    <Text style={{fontWeight: "bold"}}>Tiket Perbaikan</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#EB5757"}}>
                    <Text>Open</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note>Ruang Tulip</Text>
                      <Text note>Rabu, 12 Maret 2020</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>Printer</Text>
                    <Text note>Epson J351</Text>
                  </Right>
                </ListItem>
              </Card>
              
              <Card>
                <ListItem>
                  <Left>
                    <Text style={{fontWeight: "bold"}}>Tiket Perbaikan</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#EB5757"}}>
                    <Text>Open</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note>Ruang Tulip</Text>
                      <Text note>Rabu, 12 Maret 2020</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>Printer</Text>
                    <Text note>Epson J351</Text>
                  </Right>
                </ListItem>
              </Card>
            </List>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button vertical  style={{backgroundColor: "white"}}  >
              <Icon style={{color: "#6AC101"}} type="SimpleLineIcons" name="home" />
              <Text style={{color: "#6AC101"}}>Home</Text>
            </Button>
            <Button vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="wrench" />
              <Text>Part</Text>
            </Button>
            <Button  vertical style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="tag" />
              <Text>Tiket</Text>
            </Button>
            <Button vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="hourglass" />
              <Text>Notif</Text>
            </Button>
            <Button vertical  style={{backgroundColor: "white"}}  onPress={() => this.props.navigation.navigate("MyProfile")}>
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="user" />
              <Text>Profil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default TiketPerbaikan;
