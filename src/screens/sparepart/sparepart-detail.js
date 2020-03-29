import { Badge, Button, Card, CardItem, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { Image, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const cardImage08 = require("../../../assets/drawer-cover_08.jpg");

class DetailSparePart extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Title style={{color: "black", fontSize: 13}}>Detail Sparepart</Title>
          </Left>
          <Right>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("SparePartListView")}
            >
              <Icon style={{color:"black"}} name="close" />
            </Button>
          </Right>
        </Header>

        <ScrollView>
          <Content padder>

            <Card>
              <CardItem cardBody>
                <Image source={cardImage08} style={{height: 200, width: null, flex: 1}} />
              </CardItem>
            </Card>

            <H3 style={{color: "#F2994A", fontWeight: "bold", marginTop: 16}}>CATRIDGE CANON PG-810 BLACK INK ORIGINAL</H3>

            <View style={{justifyContent: "space-between", marginTop: 8, flexDirection: "row"}}>
              <Text style={{fontWeight: "bold", marginBottom: 8}}>CTRD_123456789</Text>
              <Badge style={{backgroundColor: "#6AC101"}}><Text>SPARE PART</Text></Badge>
            </View>

            <Button style={{borderColor: "#0677F9", marginTop: 16, backgroundColor: "white", borderWidth: 1}} block><Text style={{color: "#0677F9"}}>STOCK 56 PCS</Text></Button>

            <Text style={{marginTop: 16}}>Informasi Sparepart</Text>
            <Text note style={{marginTop: 8}}>Untuk printer Canon type:</Text>
            <Text note>IP 2770</Text>
            <Text note>IP 2770</Text>
            <Text note>IP 2770</Text>
            <Text note>IP 2770</Text>
            <Text note>IP 2770</Text>
            <Text note>IP 2770</Text>
            <Text note>IP 2770</Text>


          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default DetailSparePart;
