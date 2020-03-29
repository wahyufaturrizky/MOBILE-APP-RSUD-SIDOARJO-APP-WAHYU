import { Badge, Thumbnail, Form, Picker, Body, Button, Card, Container, Content, Footer, FooterTab, H3, Header, Icon, Input, Item, Left, List, ListItem, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions, View, Modal, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const cardImage07 = require("../../../assets/drawer-cover_07.jpg");


const deviceWidth = Dimensions.get("window").width;


class SparePartListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      modalVisible: false,
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Icon style={{color:"#4F4F4F"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F"}}>List Spare Part</Title>
          </Body>
          <Right>
            <Body style={{paddingLeft: 100}}>
              <TouchableOpacity onPress={()=> {this.setModalVisible(true);}}>
                <Icon style={{fontSize: 30, color: "#6AC101"}} name='equalizer' type="SimpleLineIcons" />
              </TouchableOpacity>
              <Text style={{fontSize: 12, color: "#6AC101"}}>Filter</Text>
            </Body>
          </Right>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={()=> {
              Alert.alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22, paddingHorizontal: 16}}>
                <H3 style={{color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Filter Sparepart</H3>

                <List>
                  <Card>
                    <ListItem>
                      <Left>
                        <Body>
                          <Text note style={{color: "#6AC101", marginBottom: 8}}>Cari Spare Part</Text>
                          <Item rounded style={{backgroundColor: "white"}}>
                            <Input placeholder="Cari" />
                            <Icon active name="magnifier" type="SimpleLineIcons" />
                          </Item>
                        </Body>
                      </Left>
                    </ListItem>
                    <ListItem>
                      <Left>

                        <Body>
                          <Text note style={{color: "#6AC101"}}>Kategori Aset</Text>
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
                              <Picker.Item label="Lorem Ipsum" value="key0" />
                              <Picker.Item label="Lorem Ipsum" value="key1" />
                              <Picker.Item label="Lorem Ipsum" value="key2" />
                              </Picker>
                            </Item>
                          </Form>
                        </Body>
                      </Left>
                    </ListItem>
                    <ListItem>
                      <Left>

                        <Body>
                          <Text note style={{color: "#6AC101"}}>Sub Kategori Aset</Text>
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
                              <Picker.Item label="Lorem Ipsum" value="key0" />
                              <Picker.Item label="Lorem Ipsum" value="key1" />
                              <Picker.Item label="Lorem Ipsum" value="key2" />
                              </Picker>
                            </Item>
                          </Form>
                        </Body>
                      </Left>
                    </ListItem>
                    <ListItem>
                      <Left>

                        <Body>
                          <Text note style={{color: "#6AC101"}}>Detail Kategori Aset</Text>
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
                              <Picker.Item label="Lorem Ipsum" value="key0" />
                              <Picker.Item label="Lorem Ipsum" value="key1" />
                              <Picker.Item label="Lorem Ipsum" value="key2" />
                              </Picker>
                            </Item>
                          </Form>
                        </Body>
                      </Left>
                    </ListItem>
                  </Card>
                </List>

                <Button style={{backgroundColor: "#2D9CDB", marginTop: 8}} block onPress={()=> {
                  this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>FILTER</Text>
                </Button>
              </View>
            </Modal>

            <H3 style={{color: "#6AC101", fontWeight: "normal", marginBottom: 16}}>List Spare Part</H3>

              <List>
                <Card>
                  <ListItem onPress={() => this.props.navigation.navigate("DetailSparePart")} thumbnail>
                    <Left>
                      <Thumbnail square source={cardImage07} />
                    </Left>
  
                    <Body>
                      <Text>CATRIDGE CANON PG-810 BLACK INK ORIGINAL</Text>
                      <Text style={{color: "#F2994A", marginTop: 8}} note numberOfLines={1}>CTRD_123456789</Text>
                      <View style={{justifyContent: "space-between", flexDirection: "row", marginTop: 8}}>
                        <Badge style={{backgroundColor: "white", borderColor: "#2D9CDB", borderWidth: 1}}><Text style={{fontSize: 12, color: "#2D9CDB"}}>Umum</Text></Badge>
                        <Badge style={{backgroundColor: "white", borderColor: "#6AC121", borderWidth: 1}}><Text style={{fontSize: 12, color: "#6AC101"}}>Stock 42</Text></Badge>
                      </View>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </Card>
                <Card>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={cardImage07} />
                    </Left>
  
                    <Body>
                      <Text>CATRIDGE CANON PG-810 BLACK INK ORIGINAL</Text>
                      <Text style={{color: "#F2994A", marginTop: 8}} note numberOfLines={1}>CTRD_123456789</Text>
                      <View style={{justifyContent: "space-between", flexDirection: "row", marginTop: 8}}>
                        <Badge style={{backgroundColor: "white", borderColor: "#2D9CDB", borderWidth: 1}}><Text style={{fontSize: 12, color: "#2D9CDB"}}>Umum</Text></Badge>
                        <Badge style={{backgroundColor: "white", borderColor: "#6AC121", borderWidth: 1}}><Text style={{fontSize: 12, color: "#6AC101"}}>Stock 42</Text></Badge>
                      </View>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </Card>
                <Card>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={cardImage07} />
                    </Left>
  
                    <Body>
                      <Text>CATRIDGE CANON PG-810 BLACK INK ORIGINAL</Text>
                      <Text style={{color: "#F2994A", marginTop: 8}} note numberOfLines={1}>CTRD_123456789</Text>
                      <View style={{justifyContent: "space-between", flexDirection: "row", marginTop: 8}}>
                        <Badge style={{backgroundColor: "white", borderColor: "#2D9CDB", borderWidth: 1}}><Text style={{fontSize: 12, color: "#2D9CDB"}}>Umum</Text></Badge>
                        <Badge style={{backgroundColor: "white", borderColor: "#6AC121", borderWidth: 1}}><Text style={{fontSize: 12, color: "#6AC101"}}>Stock 42</Text></Badge>
                      </View>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </Card>
              </List>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button onPress={() => this.props.navigation.navigate("Dashboard")} vertical  style={{backgroundColor: "white"}}  >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="home" />
              <Text style={{fontSize: 9}}>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("SparePartListView")} vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "#6AC101"}} type="SimpleLineIcons" name="wrench" />
              <Text style={{color: "#6AC101", fontSize: 9}}>Part</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("MenuTiketPerbaikan")}  vertical style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="tag" />
              <Text style={{fontSize: 9}}>Tiket</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("MenuNotifPerbaikan")} vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="hourglass" />
              <Text style={{fontSize: 9}}>History</Text>
            </Button>
            <Button vertical  style={{backgroundColor: "white"}}  onPress={() => this.props.navigation.navigate("MyProfile")}>
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="user" />
              <Text style={{fontSize: 9}}>Profil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default SparePartListView;
