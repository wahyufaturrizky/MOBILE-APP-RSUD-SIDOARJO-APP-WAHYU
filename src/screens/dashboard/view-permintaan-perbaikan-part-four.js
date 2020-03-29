import { Badge, Button, Card, CardItem, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { Image, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const cardImage04 = require("../../../assets/drawer-cover_04.jpg");

class ViewPermintaanPerbaikanPartFour extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Title style={{color: "black"}}>Detail Aset</Title>
          </Left>
          <Right>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("ProsesIdentifikasiPartThree")}
            >
              <Icon style={{color:"black"}} name="close" />
            </Button>
          </Right>
        </Header>

        <ScrollView>
          <Content padder>

            <Card>
              <CardItem cardBody>
                <Image source={cardImage04} style={{height: 200, width: null, flex: 1}} />
              </CardItem>
            </Card>

            <H3 style={{color: "#F2994A", fontWeight: "bold", marginTop: 16}}>Printer Epson 1800Li</H3>

            <View style={{justifyContent: "space-between", marginTop: 8, flexDirection: "row"}}>
              <Text style={{fontWeight: "bold", marginBottom: 8}}>EP_123456789</Text>
              <Badge style={{backgroundColor: "#6AC101"}}><Text>PERALATAN</Text></Badge>
            </View>

            <Text style={{marginTop: 16}} note>Informasi Aset</Text>
            <Text>Sub Kategori - Hardware, Detail kategori - printer, keterangan - EPSON 1800Li</Text>
            <Button onPress={()=> this.props.navigation.navigate("DetailAsetHistoryPartFour")} style={{backgroundColor: "#0677F9", marginTop: 16}} block><Text>View History</Text></Button>

            <Text style={{marginTop: 16}} note>Informasi Lokasi</Text>
            <Text>Ruangan Tulip - Area Ruangan Kamar - Keterangan kamar No 1</Text>


          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ViewPermintaanPerbaikanPartFour;
