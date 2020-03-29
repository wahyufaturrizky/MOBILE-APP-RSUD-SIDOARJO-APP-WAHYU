import { Badge, Body, Button, Card, CardItem, Container, Content, Form, H3, Header, Icon, Input, Item, Left, List, ListItem, Picker, Right, Text, Textarea, Title } from "native-base";
import React, { Component } from "react";
import { Dimensions, Modal, TouchableHighlight, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;


class ProsesIdentifikasiPartThree extends Component {

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
          <Title style={{color: "black"}}>Proses Perbaikan</Title>
        </Header>

        <ScrollView style={{marginTop: 8}} >
          <Content padder>

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={()=> {
              Alert.alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22, paddingHorizontal: 16}}>
                <H3 style={{color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Pilih Sparepart</H3>

                <List>
                  <Card>
                    <ListItem>
                      <Left>

                        <Body>
                          <Text note style={{color: "#6AC101"}}>Cari Spaerpart</Text>
                          <Item rounded style={{marginTop: 8, backgroundColor: "white"}}>
                            <Icon active name='magnifier' type="SimpleLineIcons" />
                            <Input placeholder='Cari sparepart' />
                          </Item>
                        </Body>
                      </Left>
                    </ListItem>
                    <ListItem>
                      <Left>

                        <Body>
                          <Text note style={{color: "#6AC101"}}>Kategori</Text>
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
                          <Text note style={{color: "#6AC101"}}>Pilih Nama Aset</Text>
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
                  <Text>SUBMIT</Text>
                </Button>
              </View>
            </Modal>

            <H3 style={{color: "#6AC101", fontWeight: "bold", marginBottom: 16}}>Detail Tiket Perbaikan Anda</H3>

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

            <TouchableHighlight onPress={() => {
                this.setModalVisible(true);
              }}>
              <Card style={{marginTop: 16}}>
                <CardItem style={{backgroundColor:"#6AC101"}}>
                  <Left>
                    <Text style={{color:"white"}}>PILIH SPARE PART</Text>
                  </Left>
                  <Right>
                    <Icon style={{color:"white"}} name='wrench' type="SimpleLineIcons" />
                  </Right>
                </CardItem>
              </Card>
            </TouchableHighlight>

            <Text note style={{color: "#6AC101", marginTop: 24}}>Jumlah</Text>
            <Item rounded style={{marginTop: 8, backgroundColor: "white"}}>
              <Icon active name='wrench' type="SimpleLineIcons" />
              <Input placeholder='Masukkan jumlah sparepart' />
            </Item>
            
            <Button
              rounded 
              block 
              style={{backgroundColor: "#6AC101", marginTop: 16}}
              onPress={()=> this.props.navigation.navigate("HasilPekerjaan")}>
                <Text>TAMBAH</Text>
            </Button>

            <List style={{marginTop: 16}}>
              <Text note style={{color: "#6AC101"}}>LIST SPARE PART</Text>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontWeight: "normal", fontSize: 12}}>Catridge Epson 1800Li</Text>
                        <Text note>1 pcs</Text>
                        <Icon style={{color:"#EB5757"}} active name='trash' type="SimpleLineIcons" />
                      </View>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontWeight: "normal", fontSize: 12}}>Kabel</Text>
                        <Text note>1 pcs</Text>
                        <Icon style={{color:"#EB5757"}} active name='trash' type="SimpleLineIcons" />
                      </View>
                    </Body>
                  </Left>
                </ListItem>
              </Card>
              <Card>
                <ListItem>
                  <Left>
                    <Body>
                      <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontWeight: "normal", fontSize: 12}}>Tutup Tinta</Text>
                        <Text note>1 pcs</Text>
                        <Icon style={{color:"#EB5757"}} active name='trash' type="SimpleLineIcons" />
                      </View>
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
              onPress={()=> this.props.navigation.navigate("HasilPekerjaan")}>
                <Text>NEXT</Text>
            </Button>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ProsesIdentifikasiPartThree;
