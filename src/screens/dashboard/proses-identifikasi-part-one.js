import { Body, Form, Textarea, Badge, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, List, ListItem, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class ProsesIdentifikasiPartOne extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Title style={{color: "black"}}>Proses Identifikasi</Title>
        </Header>

        <ScrollView>
          <Content padder>
            <List>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>ID TIKET</Text>
                      <Text style={{fontWeight: "normal"}}>RPA_123456789</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>RUANGAN</Text>
                      <Text style={{fontWeight: "normal"}}>Tulip</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>AREA</Text>
                      <Text style={{fontWeight: "normal"}}>Kamar</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>KETERANGAN</Text>
                      <Text style={{fontWeight: "normal"}}>Nomor 1</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>WAKTU PERMINTAAN</Text>
                      <Text style={{fontWeight: "normal"}}>13.40.12 WIB | 11 Desember 2020</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>WAKTU CHECK IN</Text>
                      <Text style={{fontWeight: "normal"}}>13.40.12 WIB | 11 Desember 2020</Text>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
            </List>

            <H3 style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Permintaan Perbaikan Aset</H3>

            <List>
              <Card>
                <ListItem onPress={()=> this.props.navigation.navigate("ViewPermintaanPerbaikanPartTwo")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#F2994A"}}>Printer Epson 1800Li</Text>
                  </Left>
                  <Right>
                    <Badge style={{backgroundColor: "#2D9CDB"}}>
                      <Text>View</Text>
                    </Badge>
                  </Right>
                </ListItem>
                <ListItem>
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
              rounded onPress={() => this.props.navigation.navigate("ProsesIdentifikasiPartTwo")} block style={{backgroundColor: "#2D9CDB", marginTop: 16}}>
                <Text>IDENTIFIKASI</Text>
            </Button>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ProsesIdentifikasiPartOne;
