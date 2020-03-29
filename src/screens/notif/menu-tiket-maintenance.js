import { Badge, Col, Body, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Input, Item, Left, List, ListItem, Right, Text, Title, Grid } from "native-base";
import React, { Component } from "react";
import { Dimensions, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


class MenuTiketMaintenance extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Title style={{color: "black"}}>Riwayat Maintenance</Title>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <View style={{justifyContent: "space-between", flexDirection: "row"}}>
              <Button onPress={() => this.props.navigation.navigate("MenuTiketPerbaikan")} rounded style={{borderColor: "#007aff", borderWidth: 1, backgroundColor: "white"}}><Text  style={{color: "#007aff"}}>PERBAIKAN</Text></Button>
              <Button rounded style={{backgroundColor: "#007aff"}} ><Text>MAINTENANCE</Text></Button>
            </View>

            <Item rounded style={{backgroundColor: "white", marginTop: 24}}>
              <Input placeholder='Masukkan tanggal pencarian Anda' />
              <Icon active name='calendar' type="SimpleLineIcons" />
            </Item>

            <H3 style={{marginTop: 24, color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Tiket Maintenance Anda</H3>

            <List>
              <Card>
                <ListItem>
                  <Left>
                    <Text style={{fontWeight: "bold"}}>Tiket Maintenance</Text>
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
                    <Text style={{fontWeight: "bold"}}>Tiket Maintenance</Text>
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
            <Button onPress={() => this.props.navigation.navigate("Dashboard")} vertical  style={{backgroundColor: "white"}}  >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="home" />
              <Text>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("SparePartListView")} vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="wrench" />
              <Text>Part</Text>
            </Button>
            <Button vertical style={{backgroundColor: "white"}} >
              <Icon style={{color: "#6AC101"}} type="SimpleLineIcons" name="tag" />
              <Text style={{color: "#6AC101"}}>Tiket</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("MenuNotifPerbaikan")} vertical  style={{backgroundColor: "white"}} >
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

export default MenuTiketMaintenance;
