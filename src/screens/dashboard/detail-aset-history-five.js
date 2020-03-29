import { Body, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, List, ListItem, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class DetailAsetHistoryPartFive extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Title style={{color: "#4F4F4F", fontSize: 10}}>Detail Aset History</Title>
          </Left>
          <Right>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("ViewPermintaanPerbaikanPartFive")}
            >
              <Icon style={{color:"#4F4F4F", fontSize: 14}} name="close" />
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
      </Container>
    );
  }
}

export default DetailAsetHistoryPartFive;
