import { Badge, Body, Button, Card, CardItem, Col, Container, Content, Footer, FooterTab, Grid, H1, H2, H3, Header, Icon, Left, List, ListItem, Right, Tab, Tabs, Text, Title } from "native-base";
import React, { Component } from "react";
import { Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


class Dashboard extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor="#fff">
          <Left>
            <Image style={{height: 30}} source={require("../../assets/img/logo-rsud.png")} />
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F", marginLeft: 32}}>Dashboard</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{color:"#4F4F4F"}} type="SimpleLineIcons" name="options-vertical" />
            </Button>
          </Right>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>
            <Card style={{paddingVertical: 8, backgroundColor: "#6AC101"}}>
              <Grid>
                <Col>
                  <CardItem style={{backgroundColor: "#6AC101"}}>
                    <Body  style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                      <Text style={{color: "white"}}>Open</Text>
                      <H1 style={{color: "white"}}>99</H1>
                    </Body>
                  </CardItem>
                </Col>
                <Col>
                  <CardItem style={{borderLeftColor: "white", borderLeftWidth: 1, backgroundColor: "#6AC101"}}>
                    <Body  style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                      <Text style={{color: "white"}}>Close</Text>
                      <H1 style={{color: "white"}}>99</H1>
                    </Body>
                  </CardItem>
                </Col>
                <Col>
                  <CardItem style={{borderLeftColor: "white", borderLeftWidth: 1, backgroundColor: "#6AC101"}}>
                    <Body  style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                      <Text style={{color: "white"}}>Pending</Text>
                      <H1 style={{color: "white"}}>99</H1>
                    </Body>
                  </CardItem>
                </Col>
              </Grid>
            </Card>

            <Tabs tabBarUnderlineStyle={{borderBottomColor: "#6AC101", borderBottomWidth: 2}}>
              <Tab tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'grey'}} activeTextStyle={{color: '#6AC101'}} activeTabStyle={{backgroundColor: 'white'}} heading="Perbaikan">
                <Card style={{paddingHorizontal: 8}}>
                  <CardItem>
                    <Body style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                      <Text style={{color: "#2D9CDB", fontWeight: "500"}}>TIKET PERBAIKAN HARI INI</Text>
                    </Body>
                  </CardItem>
                  <CardItem style={{borderBottomWidth: 1, borderBottomColor: "grey"}}>
                    <Left>
                      <Body><Text note>Kamis, 12 Maret 2020</Text></Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <H2 style={{color: "#4F4F4F"}}>Anda memiliki</H2>
                        <H3 style={{color: "#6AC101", marginTop: 8}}>09 Tiket Perbaikan</H3>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem  style={{borderBottomWidth: 1, borderBottomColor: "grey"}}>
                    <Left>
                      <Badge style={{backgroundColor: "#27AE60"}}><Text style={{fontSize: 12}}>03 Open</Text></Badge>
                      <Badge style={{backgroundColor: "#2D9CDB", marginLeft: 4}}><Text style={{fontSize: 12}}>05 Close</Text></Badge>
                      <Badge style={{backgroundColor: "#F2994A", marginLeft: 4}}><Text style={{fontSize: 12}}>01 Pending</Text></Badge>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body><Button onPress={() => this.props.navigation.navigate("TiketPerbaikan")} style={{backgroundColor: "#0677F9"}} block><Text>LIHAT TIKET</Text></Button></Body>
                  </CardItem>
                </Card>
              </Tab>
              <Tab  tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'grey'}} activeTextStyle={{color: '#6AC101'}} activeTabStyle={{backgroundColor: 'white'}} heading="Maintenance">
                <Card style={{paddingHorizontal: 8}}>
                  <CardItem>

                    <Body style={{flex:1,justifyContent: "center",alignItems: "center", fontWeight: "500"}}>
                      <Text style={{color: "#2D9CDB", fontWeight: "500"}}>TIKET PERBAIKAN HARI INI</Text>
                    </Body>
                  </CardItem>
                  <CardItem style={{borderBottomWidth: 1, borderBottomColor: "grey"}}>
                    <Left>

                      <Body><Text note>Kamis, 12 Maret 2020</Text></Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>

                      <Body>
                        <H2 style={{color: "#4F4F4F"}}>Anda memiliki</H2>
                        <H3 style={{color: "#6AC101", marginTop: 8}}>09 Tiket Perbaikan</H3>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem style={{borderBottomWidth: 1, borderBottomColor: "grey"}}>
                    <Left>
                      <Badge style={{backgroundColor: "#27AE60"}}><Text style={{fontSize: 12}}>03 Open</Text></Badge>
                      <Badge style={{backgroundColor: "#2D9CDB", marginLeft: 8}}><Text style={{fontSize: 12}}>05 Close</Text></Badge>
                      <Badge style={{backgroundColor: "#F2994A", marginLeft: 8}}><Text style={{fontSize: 12}}>01 Pending</Text></Badge>
                    </Left>
                  </CardItem>
                  <CardItem>

                    <Body><Button onPress={() => this.props.navigation.navigate("TiketMaintenance")} style={{backgroundColor: "#0677F9"}} block><Text>LIHAT TIKET</Text></Button></Body>
                  </CardItem>
                </Card>
              </Tab>
            </Tabs> 

            <H3 style={{marginTop: 16, color: "#6AC101", fontWeight: "normal", marginBottom: 8}}>Aktifitas Kerja</H3>
              <List>
                <Card>
                  <ListItem onPress={()=> this.props.navigation.navigate("ReviewHasilPekerjaan")}>
                    <Left>
                      <Text style={{fontWeight: "bold", color: "#4F4F4F"}}>Tiket Perbaikan</Text>
                    </Left>
                    <Right>
                      <Badge style={{backgroundColor: "#6AC101"}}>
                        <Text style={{fontSize: 12}}>Selesai</Text>
                      </Badge>
                    </Right>
                  </ListItem>
                  <ListItem onPress={()=> this.props.navigation.navigate("ReviewHasilPekerjaan")}>
                    <Left>

                      <Body>
                        <Text note>Ruang Tulip</Text>
                        <Text note>Rabu, 12 Maret 2020</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Text style={{fontSize: 12, color: "#4F4F4F"}}>Printer</Text>
                      <Text style={{fontSize: 12, color: "#4F4F4F"}}>Epson J351</Text>
                    </Right>
                  </ListItem>
                </Card>

                <Card>
                  <ListItem onPress={()=> this.props.navigation.navigate("ReviewHasilPekerjaan")}>
                    <Left>
                      <Text style={{fontWeight: "bold", color: "#4F4F4F"}}>Tiket Perbaikan</Text>
                    </Left>
                    <Right>
                      <Badge style={{backgroundColor: "#FF7200"}}>
                        <Text style={{fontSize: 12}}>Pending</Text>
                      </Badge>
                    </Right>
                  </ListItem>
                  <ListItem onPress={()=> this.props.navigation.navigate("ReviewHasilPekerjaan")}>
                    <Left>

                      <Body>
                        <Text note>Ruang Tulip</Text>
                        <Text note>Rabu, 12 Maret 2020</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Text style={{fontSize: 12, color: "#4F4F4F"}}>Printer</Text>
                      <Text style={{fontSize: 12, color: "#4F4F4F"}}>Epson J351</Text>
                    </Right>
                  </ListItem>
                </Card>
              </List>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button vertical  style={{backgroundColor: "white"}}  >
              <Icon style={{color: "#6AC101"}} type="SimpleLineIcons" name="home" />
              <Text style={{color: "#6AC101", fontSize: 9}}>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("SparePartListView")} vertical  style={{backgroundColor: "white"}} >
              <Icon style={{color: "grey"}} type="SimpleLineIcons" name="wrench"/>
              <Text style={{fontSize: 9}}>Part</Text>
            </Button>
            <Button  vertical style={{backgroundColor: "white"}} onPress={() => this.props.navigation.navigate("MenuTiketPerbaikan")}>
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

export default Dashboard;
