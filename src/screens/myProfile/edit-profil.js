import { Body, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Input, Item, Left, List, ListItem, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class EditProfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DetailProfil")}>
              <Icon style={{color:"black"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "black"}}>Perosnal Info</Title>
          </Body>
          <Right>
            <Button small rounded style={{backgroundColor: "#6AC101"}}><Text>Edit Profil</Text></Button>
          </Right>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <H3 style={{color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Edit Perosnal Info Anda</H3>

            <List>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Np. HP</Text>
                      <Item rounded style={{marginTop: 8, backgroundColor: "white"}}>
                        <Icon active name='phone' type="SimpleLineIcons" />
                        <Input placeholder='Please input No. HP' />
                      </Item>
                    </Body>
                  </Left>
                </ListItem>
                <ListItem>
                  <Left>
                    <Body>
                      <Text note style={{color: "#6AC101"}}>Email</Text>
                      <Item rounded style={{marginTop: 8, backgroundColor: "white"}}>
                        <Icon active name='envelope' type="SimpleLineIcons" />
                        <Input placeholder='Please input Email' />
                      </Item>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
            </List>

            <Button onPress={() => this.props.navigation.navigate("DetailProfil")} block rounded style={{backgroundColor: "#0677F9", marginTop: 8}}><Text>Save</Text></Button>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default EditProfil;
