import { Badge, Body, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Input, Item, Left, List, ListItem, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


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
              <Icon style={{color:"#4F4F4F"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F"}}>Tiket Perbaikan</Title>
          </Body>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>
            <Item rounded style={{backgroundColor: "white"}}>
              <Input placeholder='Pilih tanggal' />
              <Icon style={{color: "#4F4F4F"}} name='calendar' type="SimpleLineIcons" />
            </Item>

            <H3 style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Tiket Perbaikan Anda</H3>

            <List>
              <Card>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketPerbaikan")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#4F4F4F"}}>Tiket Perbaikan</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#EB5757"}}>
                    <Text>Open</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketPerbaikan")}>
                  <Left>
                    <Body>
                      <Text note>Ruang Tulip</Text>
                      <Text note>Rabu, 12 Maret 2020</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text style={{fontSize: 12, color: "#4F4F4F"}}>Printer</Text>
                    <Text style={{fontSize: 12, color: "#4F4F4F"}}>Epson J351</Text>
                  </Right>
                </ListItem>
              </Card>
              
              <Card>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketPerbaikan")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#4F4F4F"}}>Tiket Perbaikan</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#EB5757"}}>
                    <Text>Open</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("DetailTiketPerbaikan")}>
                  <Left>
                    <Body>
                      <Text note>Ruang Tulip</Text>
                      <Text note>Rabu, 12 Maret 2020</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text style={{fontSize: 12, color: "#4F4F4F"}}>Printer</Text>
                    <Text style={{fontSize: 12, color: "#4F4F4F"}}>Epson J351</Text>
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

export default TiketPerbaikan;
