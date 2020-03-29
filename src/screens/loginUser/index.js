import { Body, Button, Card, Container, Content, Header, Icon, Input, Item, Left, List, ListItem, Right, Text } from "native-base";
import React, { Component } from "react";
import { Dimensions, Image, View } from 'react-native';


const deviceWidth = Dimensions.get("window").width;

class LoginUser extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#fff" style={{height:0}} />
        
          <Image source={require("../../assets/img/login-image.jpg")}
                style={{height: 300, width: deviceWidth,}} />
            <Content style={{position: "absolute", left: 18, right: 18}}>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image style={{marginTop: 80, height: 35, width: 35}} source={require("../../assets/img/logo-rsud-sidoarjo-original.png")} />
                <Text style={{color: "white" , fontSize: 12, fontWeight: "200", marginTop: 8}}>Welcome to</Text>
                <Text style={{color: "white" , fontSize: 12, fontWeight: "200"}}>RSUD Sidoarjo</Text>
                <Text style={{color: "white" , fontSize: 12, fontWeight: "200"}}>Service Managament Apps</Text>
                <Text style={{color: "white" , fontSize: 12, fontWeight: "bold", marginTop: 4}}>Service to others Lead to Greatness</Text>
              </View>
      
              <Card style={{marginTop: 8, borderRadius: 20}}>
                <View style={{paddingHorizontal: 16}}>
                  <List>
                    <ListItem noBorder thumbnail style={{marginLeft: 0, marginRight: 0}}>
                      <Left>
                        <Image source={require("../../assets/img/logo-rsud.png")} />
                      </Left>
      
                      <Body style={{borderWidth: 0}} />
                      <Right>
                        <Text style={{color:"#6AC101", fontWeight: "400"}}>LOGIN</Text>
                      </Right>
                    </ListItem>
                  </List>
                  <Text style={{marginTop: 8, paddingHorizontal: 8}} note>Silahkan masukkan username dan password untuk masuk
                    ke dalam
                    aplikasi</Text>
      
                  <Item rounded style={{marginTop: 12, backgroundColor: "white"}}>
                    <Icon active name='user' type="SimpleLineIcons" />
                    <Input placeholder='Username' />
                  </Item>
                  <Item rounded style={{marginTop: 16, backgroundColor: "white"}}>
                    <Icon active name='lock' type="SimpleLineIcons" />
                    <Input placeholder='Password' />
                  </Item>
      
                  <Button block rounded style={{marginTop: 24, backgroundColor: "#0677F9"}} onPress={()=>
                    this.props.navigation.navigate("Dashboard")}
                    >
                    <Text>LOGIN</Text>
                  </Button>
                  <Button block rounded bordered style={{marginTop: 16, borderColor: "#0677F9", marginBottom: 16}} onPress={()=>
                    this.props.navigation.navigate("ForgotPassword")}
                    >
                    <Text>FORGOT PASSWORD</Text>
                  </Button>
                </View>
              </Card>
    
              <View style={{justifyContent: "center", alignItems: "center", marginTop: 4}}>
                <Text note>RSUD Sidoarjo &copy; 2020 v - 1.0</Text>
              </View>
            </Content>
      </Container>
    );
  }
}

export default LoginUser;
