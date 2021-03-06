import React ,{Component} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
import InputFiled from './inputFiled';
import NextArrowButton from "./nextArrowButton"


export default class Login extends Component
{

    handleNextButton()
    {
        alert('Clicked Login');
    }
    render(){
        return(
            <KeyboardAvoidingView style = {styles.wrapper}>
                <View style = {styles.scrollViewWrapper} > 
                    <ScrollView style = {styles.scrollView}>
                        <Text style = {styles.loginHeader}>
                            Login Page
                        </Text>
                        <InputFiled 
                         labelText ="EMAIL ADDRESS" 
                         labelTextSize ={14} 
                         labelColor = '#CD5C5C' 
                         inputType="email"
                         customStyle = {{marginBottom : 30}}>
                        </InputFiled>
                        <InputFiled 
                        labelText ="PASSWORD" 
                        labelTextSize ={14} 
                        labelColor = '#CD5C5C' 
                        inputType ="password" 
                        customStyle = {{marginBottom : 30}}>
                        </InputFiled>
                    </ScrollView>
                    <View> 
                        <NextArrowButton style = {styles.nextButton} handleNextButton ={this.handleNextButton}/> 
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper :
    {
    display : 'flex',
    flex : 1,
    backgroundColor: '#20B2AA',
    width : 375,
    height : 375
},
scrollViewWrapper :{
    marginTop : 70,
    flex :1,
},
ScrollView :{
paddingLeft : 30,
paddingRight:30,
paddingTop: 20,
flex : 1
},
loginHeader:{
    fontSize : 28,
    color: '#8FBC8F',
    fontWeight : '300',
    marginBottom:40
},
nextButton :
{
    position : 'absolute',    
    alignItems : 'flex-end',
    right : 20,
    bottom : 10,
}
});