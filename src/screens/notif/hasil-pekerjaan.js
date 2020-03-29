import { Body, CardItem, Thumbnail, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, List, ListItem, Right, Text, Title, Col, Grid } from "native-base";
import React, { Component } from "react";
import {View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class HasilPekerjaan extends Component {

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
                onPress={() => this.props.navigation.navigate("ProsesIdentifikasiPartThree")}
              >
                <Icon style={{color:"black"}} name="md-arrow-back" />
              </Button>
          </Left>
          <Body>
            <Title style={{color: "black"}}>Hasil Perkerjaan</Title>
          </Body>
        </Header>

        <ScrollView>
          <Content padder> 

            <Grid>
              <Col>
                <Card>
                  <CardItem style={{backgroundColor: "#007aff"}}>
                    <Body style={{justifyContent: "center", alignItems: "center"}}>
                      <Icon style={{color: "white"}} type="Entypo" name="ticket" />
                      <Text style={{marginTop: 8, color: "white", fontSize: 12}}>INFORMASI TIKET</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem style={{backgroundColor: "#6AC101"}}>
                    <Body style={{justifyContent: "center", alignItems: "center"}}>
                      <Icon style={{color: "white"}} type="FontAwesome5" name="building" />
                      <Text style={{marginTop: 8, color: "white", fontSize: 12}}>INFORMASI ASET</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Grid>
            
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
                      <Text note style={{color: "#6AC101"}}>HASIL IDENTIFIKASI</Text>
                      <Text style={{fontWeight: "normal"}}>Proses</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>KETERANGAN</Text>
                      <Text style={{fontWeight: "normal"}}>Bisa dikerjakan tapi agak lambat</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>

                    <Body>
                      <Text note style={{color: "#6AC101"}}>SPARE PART</Text>
                      <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                        <Text style={{fontWeight: "normal"}}>Catridge Epson 1800Li</Text>
                        <Text note>1 pcs</Text>
                      </View>
                      <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                        <Text style={{fontWeight: "normal"}}>Tutup Tinta</Text>
                        <Text note>1 pcs</Text>
                      </View>
                      <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                        <Text style={{fontWeight: "normal"}}>Kabel</Text>
                        <Text note>1 pcs</Text>
                      </View>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
            </List>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default HasilPekerjaan;
