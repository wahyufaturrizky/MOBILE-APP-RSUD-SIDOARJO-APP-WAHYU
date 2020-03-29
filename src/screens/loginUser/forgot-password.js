import { Body, Button, Container, Content, Header, Icon, Input, Item, Left, Right, Text, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions, Image, View } from 'react-native';
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


class ForgotPassword extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Button onPress={() => this.props.navigation.navigate("LoginUser")} transparent>
              <Icon style={{color:"black"}} name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "black"}}>Forgot Password</Title>
          </Body>
          <Right/>
        </Header>

        <Image source={require("../../assets/img/background-forgot-password.jpg")}
          style={{height: 300, width: deviceWidth, flex: 1}} />

          <View style={{position: "absolute", left: 8, right: 8, top: 250}}>
            <Content padder>

              <Text style={{marginBottom: -15}} note>Masukkan email yang terdaftar</Text>
              <Item rounded style={{marginTop: 24, backgroundColor: "white"}}>
                <Icon active name="envelope" type="SimpleLineIcons" />
                <Input placeholder="Email"/>
              </Item>
  
              <Button 
                block 
                rounded 
                style={{marginTop: 24, backgroundColor: "#0677F9"}}
                >
                <Text>SEND</Text>
              </Button>

              <View style={{justifyContent: "center", alignItems: "center", marginTop: 100}}>
                <Text note>RSUD Sidoarjo &copy; 2020</Text>
                <Text note>V - 1.0</Text>
              </View>
  
            </Content>
          </View>
      </Container>
    );
  }
}

export default ForgotPassword;
