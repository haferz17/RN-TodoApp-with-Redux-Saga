import React, { Component } from 'react';
import {
    Modal, 
    Text, 
    TouchableOpacity, 
    View, 
    Alert,
    Dimensions,
    StyleSheet,
    TextInput,
    Picker
} from 'react-native';
import data from './CategoryData';
const { width, height } = Dimensions.get('window')

export default class EditTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
        modalVisible: true,
        todo: '',
        category: '',
    } 
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const { todo, category } = this.props.data
    console.log(this.props.action);
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
          <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
            <View style={styles.modal}>
              <View style={{backgroundColor:'#fff',elevation:5,borderRadius:10,height:'90%',width:'90%'}}>
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:25,fontWeight:'bold',marginBottom:15}}>Edit Todo </Text>
                  <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Your To Do' value={todo} onChangeText={(text) => this.setState({categoryName: text})}/>
                  <Picker
                      selectedValue={category}
                      style={{height: 50, width: '80%',marginBottom:10}}
                      onValueChange={(itemValue, itemIndex) =>
                          this.setState({category: itemValue})
                  }>
                    <Picker.Item label="Choose Category" value="" />
                    {
                      data.map((item, index)=>{
                        return <Picker.Item key={index} label={item.name} value={item.name} />
                      })
                    }
                  </Picker>
                  <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:20}}>
                    <TouchableOpacity>
                      <Text style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'#1de9b6',color:'#fff',borderRadius:5,fontWeight:'bold'}}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.action()}}>
                      <Text style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'#F48FB1',color:'#fff',borderRadius:5,fontWeight:'bold'}}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>     
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    modal: {
      backgroundColor:'#FFE082', 
      borderTopLeftRadius: 70,
      borderBottomRightRadius: 70,
      elevation: 10, 
      height: height*0.4, 
      width: width*0.8,
      alignItems: 'center',
      justifyContent: 'center'
    }
})