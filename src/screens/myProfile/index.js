import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, H3, Header, Icon, Left, ListItem, Right, Text, Thumbnail, Title } from "native-base";
import React, { Component } from "react";
import { TouchableHighlight, TouchableOpacity, Image, View, Alert, Modal } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const cardImage05 = require("../../../assets/drawer-cover_05.jpg");
const wahyu = require("../../assets/img/author.jpg");

class MyProfile extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent  androidStatusBarColor="#fff">
          <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("Dashboard")}
            >
              <Icon style={{color:"#4F4F4F"}} name="user" type="SimpleLineIcons" />
            </Button>
          </Left>

          <Body>
            <Title style={{color: "#4F4F4F"}}>My Profile</Title>
          </Body>
          <Right/>
        </Header>

        <ScrollView>
          <Content padder>

            <Card>
              <TouchableOpacity onPress={() => {this.setModalVisible(true);}} cardBody>
                <Image source={cardImage05} style={{height: 200, width: null, flex: 1}} />
              </TouchableOpacity>
              <CardItem>
                <Left>
                  <Thumbnail source={wahyu} />

                  <Body>
                    <Text style={{color: "#4F4F4F"}}>Wahyu Fatur Rizki</Text>
                    <Text style={{marginTop: 8}} note><Icon style={{fontSize: 16}} name="map" type="SimpleLineIcons" /> Indonesia, Batam</Text>
                    <Text style={{marginTop: 8}} note><Icon style={{fontSize: 16}} name="phone" type="SimpleLineIcons" /> 0822 7458 6011</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <H3 style={{marginTop: 24}}>Info Saya</H3>

            <ListItem onPress={() => this.props.navigation.navigate("DetailProfil")} style={{marginTop: 24}} icon>
              <Left>
                <Button style={{ backgroundColor: "#e74645" }}>
                  <Icon active type="SimpleLineIcons" name="user" />
                </Button>
              </Left>
              <Body>
                <Text style={{color: "#4F4F4F"}}>Info Personal</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{marginTop: 16}} icon>
              <Left>
                <Button style={{ backgroundColor: "#1ac0c6" }}>
                  <Icon active type="SimpleLineIcons" name="lock" />
                </Button>
              </Left>

              <Body>
                <Text style={{color: "#4F4F4F"}}>Ubah Kata Sandi</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{marginTop: 16}} icon>
              <Left>
                <Button onPress={() => this.props.navigation.navigate("LoginUser")} style={{ backgroundColor: "#e64545" }}>
                  <Icon active type="SimpleLineIcons" name="logout" />
                </Button>
              </Left>

              <Body>
                <Text style={{color: "#4F4F4F"}}>Log Out</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <Modal animationType="fade" transparent={false} visible={this.state.modalVisible} onRequestClose={()=> {
              Alert.alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>
                  <Text>Hello World!</Text>

                  <TouchableHighlight onPress={()=> {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button onPress={() => this.props.navigation.navigate("Dashboard")} vertical  style={{backgroundColor: "white"}}  >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="home" onPress={() => this.props.navigation.navigate("Dashboard")} />
              <Text style={{fontSize: 9}}>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("SparePartListView")} vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="wrench" />
              <Text style={{fontSize: 9}}>Part</Text>
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
              <Icon style={{color: "#6AC101"}} type="SimpleLineIcons" name="user" />
              <Text style={{color: "#6AC101", fontSize: 9}}>Profil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MyProfile;
