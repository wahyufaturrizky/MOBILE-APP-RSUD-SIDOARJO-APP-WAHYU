import { Badge, Body, Button, Card, Container, Content, Footer, FooterTab, Form, H3, Header, Icon, Left, List, ListItem, Right, Text, Textarea, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


class DetailTiketMaintenancePartTwo extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("MenuTiketMaintenance")}>
              <Icon style={{color:"#4F4F4F"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F"}}>Check In</Title>
          </Body>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <H3 style={{color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Detail Tiket Maintenance Aset</H3>

            <List>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>ID Tiket</Text>
                      <Text style={{fontWeight: "normal"}}>RPA_123456789</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Ruangan</Text>
                      <Text style={{fontWeight: "normal"}}>Tulip</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Area</Text>
                      <Text style={{fontWeight: "normal"}}>Kamar</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Keterangan</Text>
                      <Text style={{fontWeight: "normal"}}>Nomor 1</Text>
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

            <H3 style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Permintaan Maintenance Aset</H3>

            <List>
              <Card>
                <ListItem onPress={() => this.props.navigation.navigate("ViewPermintaanMaintenancePartSix")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#F2994A"}}>Printer Epson 1800Li</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#2D9CDB"}}>
                    <Text>View</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("ViewPermintaanMaintenancePartSix")}>
                  <Left>
                    <Body>
                      <Text note style={{fontWeight: "bold"}}>EP_123456789</Text>
                      <Text note style={{fontWeight: "bold"}}>Peralatan</Text>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
            </List>

            <H3 style={{marginTop: 24, color: "#6AC101", fontWeight: "normal", marginBottom: 16}}>Keluhan Anda</H3>

            <Form>
              <Textarea rowSpan={5} bordered placeholder="Silahkan masukkan keluhan Anda" />
            </Form>
            
            <Button
              rounded onPress={() => this.props.navigation.navigate("CheckInScanQRCodeMaintenancePartTwo")} block style={{backgroundColor: "#2D9CDB", marginTop: 16}}>
                <Text>CHECK IN</Text>
            </Button>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default DetailTiketMaintenancePartTwo;
