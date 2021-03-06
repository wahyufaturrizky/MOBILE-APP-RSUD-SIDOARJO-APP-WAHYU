import { Badge, CardItem, Body, Button, Card, Container, Content, Footer, FooterTab, Form, H3, Header, Icon, Item, Left, List, ListItem, Picker, Right, Text, Textarea, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


class ProsesIdentifikasiPartTwo extends Component {

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
          <Title style={{color: "black"}}>Proses Identifikasi</Title>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <List>
              <Card>
                <ListItem>
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

            <Text note style={{marginTop: 24, color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Keluhan Anda</Text>

            <Form>
              <Textarea rowSpan={5} bordered placeholder="Silahkan masukkan keluhan Anda" />
            </Form>

            <Card style={{marginTop: 16}}>
              <CardItem style={{backgroundColor:"#6AC101"}}>
                <Left/>
                <Body><Text style={{color:"white"}}>SPARE PART</Text></Body>
                <Right>
                  <Icon style={{color:"white"}} name='wrench' type="SimpleLineIcons" />
                </Right>
              </CardItem>
            </Card>

            <List style={{marginTop: 16}}>
              <Text  style={{color: "#6AC101"}}>Hasil Identifikasi</Text>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      
                      <Form>
                        <Item picker>
                          <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />}
                          style={{ width: undefined }}
                          placeholder="Select your SIM"
                          placeholderStyle={{ color: "#bfc6ea" }}
                          placeholderIconColor="#007aff"
                          selectedValue={this.state.selected2}
                          onValueChange={this.onValueChange2.bind(this)}
                          >
                          <Picker.Item label="Proses" value="key0" />
                          <Picker.Item label="Pending" value="key1" />
                          <Picker.Item label="Salah Unit" value="key2" />
                          </Picker>
                        </Item>
                      </Form>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
            </List>

            <Text note style={{marginTop: 24, color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Keterangan</Text>

            <Form>
              <Textarea rowSpan={5} bordered placeholder="Silahkan masukkan keterangan Anda" />
            </Form>
            
            <Button
              rounded 
              block 
              style={{backgroundColor: "#2D9CDB", marginTop: 16}}
              onPress={()=> this.props.navigation.navigate("ProsesIdentifikasiPartThree")}>
                <Text>NEXT</Text>
            </Button>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ProsesIdentifikasiPartTwo;
