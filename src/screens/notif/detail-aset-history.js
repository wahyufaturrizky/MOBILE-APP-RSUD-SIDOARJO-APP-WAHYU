import { 
  Button, 
  Card, 
  Container, 
  Content, 
  Footer, 
  FooterTab, 
  Header, 
  Icon, 
  Left, 
  Right, 
  Text, 
  Title,
  List,
  ListItem,
  Body,
  H3, 
  Badge} from "native-base";
import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

import {View} from "react-native";

class DetailAsetHistory extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Title style={{color: "black"}}>Detail Aset History</Title>
          </Left>
          <Right>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("ViewPermintaanPerbaikan")}
            >
              <Icon style={{color:"black"}} name="close" />
            </Button>
          </Right>
        </Header>

        <ScrollView>
          <Content padder>
            <List>
              <Card>
                <ListItem>
                  <Left><H3 style={{color: "#F2994A", fontWeight: "bold"}}>Perbaikan</H3></Left>
                  <Right><Text note>21 03 2020</Text></Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>PETUGAS IT</Text>
                      <Text style={{fontWeight: "normal"}}>Wahyu Fatur Rizki</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>SERVICE PART</Text>
                      <Text style={{fontWeight: "normal"}}>Catridge</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>KETERANGAN AKTIFITAS</Text>
                      <Text style={{fontWeight: "normal"}}>Ganti Catriddge</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>SPARE PART & BAHAN</Text>
                      <Text style={{fontWeight: "normal"}}>Catridge Epson (CTRD_123456789)</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>CATATAN</Text>
                      <Text style={{fontWeight: "normal"}}>Printer ini sudah sering rusak, terlalu boros di tinta. Kayaknya ada yang bocor.</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>Waktu Permintaan</Text>
                      <Text style={{fontWeight: "normal"}}>12.40.12 WIB | 14 Maret 2020</Text>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
              <Card>
                <ListItem>
                  <Left><H3 style={{color: "#F2994A", fontWeight: "bold"}}>Perbaikan</H3></Left>
                  <Right><Text note>12 01 2020</Text></Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>PETUGAS IT</Text>
                      <Text style={{fontWeight: "normal"}}>Wahyu Fatur Rizki</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>SERVICE PART</Text>
                      <Text style={{fontWeight: "normal"}}>Catridge</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>KETERANGAN AKTIFITAS</Text>
                      <Text style={{fontWeight: "normal"}}>Ganti Catriddge</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>SPARE PART & BAHAN</Text>
                      <Text style={{fontWeight: "normal"}}>Catridge Epson (CTRD_123456789)</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>CATATAN</Text>
                      <Text style={{fontWeight: "normal"}}>Printer ini sudah sering rusak, terlalu boros di tinta. Kayaknya ada yang bocor.</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>Waktu Permintaan</Text>
                      <Text style={{fontWeight: "normal"}}>12.40.12 WIB | 14 Maret 2020</Text>
                    </Body>
                  </Left>
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

export default DetailAsetHistory;
