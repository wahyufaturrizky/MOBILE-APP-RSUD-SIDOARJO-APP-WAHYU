import { Badge, Button, Card, CardItem, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, Right, Text, Title, Body } from "native-base";
import React, { Component } from "react";
import { Image, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const cardImage04 = require("../../../assets/drawer-cover_06.jpg");

class CheckInScanQRCode extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("DetailTiketPerbaikan")}>
              <Icon style={{color:"#4F4F4F"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F"}}>Check In</Title>
          </Body>
        </Header>

        <ScrollView>
          <Content padder>

            <Card>
              <CardItem cardBody>
                <Button onPress={() => this.props.navigation.navigate("ProsesIdentifikasiPartOne")} block style={{height:300, width: null, flex: 1}} transparent><Image source={cardImage04}  /></Button>
              </CardItem>
            </Card>

            <H3 style={{color: "#6AC101", fontWeight: "bold", marginTop: 16}}>QR Scan</H3>

            <Text style={{marginTop: 16}} note>Panduan Penggunaan</Text>
            <Text style={{marginTop: 8}}>Scan QR Code yang terdapat pada rungan tempat terjadi permintaan perbaikan.</Text>
            <Text>Dengan melakukan Scan QR Code berarti Anda telah berada di ruangan (Check In), dan siap untuk melakukan proses perbaikan.</Text>


          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default CheckInScanQRCode;
