import { Badge, CardItem, Body, Button, Card, Container, Content, Footer, FooterTab, Form, H3, Header, Icon, Item, Left, List, ListItem, Picker, Right, Text, Textarea, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


class ProsesIdentifikasiPartTwoMaintenance extends Component {

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
          <Title style={{color: "#4F4F4F"}}>Proses Identifikasi</Title>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <List>
              <Card>
                <ListItem onPress={()=> this.props.navigation.navigate("ViewPermintaanMaintenancePartThree")}>
                  <Left>
                    <Text style={{fontWeight: "bold", color: "#F2994A"}}>Printer Epson 1800Li</Text>
                  </Left>
                  <Right>
                  <Badge style={{backgroundColor: "#2D9CDB"}}>
                    <Text>View</Text>
                  </Badge>
                  </Right>
                </ListItem>
                <ListItem onPress={()=> this.props.navigation.navigate("ViewPermintaanMaintenancePartThree")}>
                  <Left>
                    <Body>
                      <Text note style={{fontWeight: "bold"}}>EP_123456789</Text>
                      <Text note style={{fontWeight: "bold"}}>Peralatan</Text>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
            </List>

            <H3 note style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Keluhan Anda</H3>

            <Form>
              <Textarea rowSpan={5} bordered placeholder="Silahkan masukkan keluhan Anda" />
            </Form>

            <Card style={{marginTop: 16}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("SparePartListView")}>
                <CardItem style={{backgroundColor:"#6AC101"}}>
                  <Left/>
                  <Body><Text style={{color:"white"}}>SPARE PART</Text></Body>
                  <Right>
                    <Icon style={{color:"white"}} name='wrench' type="SimpleLineIcons" />
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>

            <List style={{marginTop: 16}}>
              <H3  style={{color: "#6AC101"}}>Hasil Identifikasi</H3>
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

            <H3 note style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Keterangan</H3>

            <Form>
              <Textarea rowSpan={5} bordered placeholder="Silahkan masukkan keterangan Anda" />
            </Form>
            
            <Button
              rounded 
              block 
              style={{backgroundColor: "#2D9CDB", marginTop: 16}}
              onPress={()=> this.props.navigation.navigate("ProsesIdentifikasiPartThreeMaintenance")}>
                <Text>NEXT</Text>
            </Button>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ProsesIdentifikasiPartTwoMaintenance;
