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

class TiketMaintenance extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Icon style={{color:"#4F4F4F"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F"}}>Tiket Maintenance</Title>
          </Body>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>
            <Item rounded style={{backgroundColor: "white"}}>
              <Input placeholder='Pilih tanggal' />
              <Icon style={{color: "#4F4F4F"}} name='calendar' type="SimpleLineIcons" />
            </Item>

            <H3 style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Tiket Maintenance Anda</H3>

            <List>
              <Card>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketMaintenance")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#4F4F4F"}}>Tiket Maintenance</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#EB5757"}}>
                    <Text>Open</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketMaintenance")}>
                  <Left>
                    <Body>
                      <Text note>Ruang Tulip</Text>
                      <Text note>Rabu, 12 Maret 2020</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text  style={{fontSize: 12, color: "#4F4F4F"}}>Printer</Text>
                    <Text  style={{fontSize: 12, color: "#4F4F4F"}}>Epson J351</Text>
                  </Right>
                </ListItem>
              </Card>
              
              <Card>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketMaintenance")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#4F4F4F"}}>Tiket Maintenance</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#EB5757"}}>
                    <Text>Open</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketMaintenance")}>
                  <Left>
                    <Body>
                      <Text note>Ruang Tulip</Text>
                      <Text note>Rabu, 12 Maret 2020</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text  style={{fontSize: 12, color: "#4F4F4F"}}>Printer</Text>
                    <Text  style={{fontSize: 12, color: "#4F4F4F"}}>Epson J351</Text>
                  </Right>
                </ListItem>
              </Card>
            </List>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default TiketMaintenance;
