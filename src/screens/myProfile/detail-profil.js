import { Badge, Body, Button, Card, Container, Content, Footer, FooterTab, Form, H3, Header, Icon, Left, List, ListItem, Right, Text, Textarea, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class DetailProfil extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("MyProfile")}>
              <Icon style={{color:"black"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "black"}}>Perosnal Info</Title>
          </Body>
          <Right>
            <Button onPress={()=> this.props.navigation.navigate("EditProfil")} small rounded style={{backgroundColor: "#6AC101"}}><Text>Edit Profil</Text></Button>
          </Right>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <H3 style={{color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Detail Tiket Perbaikan Anda</H3>

            <List>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Nama</Text>
                      <Text style={{fontWeight: "normal"}}>Wahyu Fatur Rizki</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Posisi</Text>
                      <Text style={{fontWeight: "normal"}}>Petugas IT</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>No. HP</Text>
                      <Text style={{fontWeight: "normal"}}>0822 7458 6011</Text>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Email</Text>
                      <Text style={{fontWeight: "normal"}}>wahyufaturrizkyy@gmail.com</Text>
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

export default DetailProfil;
