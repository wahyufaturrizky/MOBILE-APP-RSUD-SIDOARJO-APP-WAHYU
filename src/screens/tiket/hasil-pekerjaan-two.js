import { Body, Button, Card, CardItem, Col, Container, Content, Grid, H3, Header, Icon, Left, List, ListItem, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class HasilPekerjaanPartTwo extends Component {

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
                onPress={() => this.props.navigation.navigate("ProsesIdentifikasiPartFour")}
              >
                <Icon style={{color:"#4F4F4F"}} name="md-arrow-back" />
              </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F"}}>Hasil Perkerjaan</Title>
          </Body>
        </Header>

        <ScrollView>
          <Content padder> 

            <Grid>
              <Col>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("TiketKeluhanPerbaikanThree")}>
                  <Card>
                    <CardItem style={{backgroundColor: "#007aff"}}>
                      <Body style={{justifyContent: "center", alignItems: "center"}}>
                        <Icon style={{color: "white"}} type="Entypo" name="ticket" />
                        <Text style={{marginTop: 8, color: "white", fontSize: 12}}>INFORMASI TIKET</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("ViewPermintaanPerbaikanPartTwelve")}>
                  <Card>
                    <CardItem style={{backgroundColor: "#6AC101"}}>
                      <Body style={{justifyContent: "center", alignItems: "center"}}>
                        <Icon style={{color: "white"}} type="FontAwesome5" name="building" />
                        <Text style={{marginTop: 8, color: "white", fontSize: 12}}>INFORMASI ASET</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
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

            <Button
              rounded 
              block 
              style={{backgroundColor: "#2D9CDB", marginTop: 16}}
              onPress={()=> this.props.navigation.navigate("CheckOutScanQRCodePerbaikanPartTwo")}>
                <Text>CHECK OUT</Text>
            </Button>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default HasilPekerjaanPartTwo;
