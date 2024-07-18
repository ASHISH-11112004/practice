import React from 'react'
import { TouchableOpacity, View,Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';




const SignIn = () => {
  return (
    <View  style={{ flex: 1, padding: 20,marginTop:30 }}>
        <TouchableOpacity>
       <AntDesign name="arrowleft" size={24} color="black" /> 
        </TouchableOpacity>
        <Text style={{fontSize:30,marginTop:20,fontWeight:'bold',marginBottom:20}}>
            Let's Sign you in.
        </Text>
        <Text style={{marginTop:34,textAlign:'left',fontSize:31,color:"grey"}}>
            welcome back
        </Text>
        <Text style={{marginTop:1,textAlign:'left',fontSize:31,color:"grey"}}>
            you've been missed!
        </Text>
        <Text style={{marginTop:40,fontWeight:'bold'}}>
           Username or Email
        </Text>
       

         <TextInput placeholder='Enter username or email' style={{backgroundColor:"white",paddingVertical:12,paddingHorizontal:12,borderRadius:22,marginTop:5,height:60}}>

         </TextInput>
        <Text style={{marginTop:5,fontWeight:'bold'}}>
           Password
        </Text>
        <TextInput placeholder='Enter password' style={{backgroundColor:"white",paddingVertical:12,paddingHorizontal:12,borderRadius:22,marginTop:5,height:60}}>

         </TextInput>
         <View style={{marginTop:25,paddingHorizontal:80,flexDirection:"row",justifyContent:'space-around'}}>
         <AntDesign name="google" size={24} color="black" /><AntDesign name="linkedin-square" size={24} color="black"/><AntDesign name="facebook-square" size={24} color="black" />
         </View>
         <Text style={{marginTop:60,paddingLeft:10,color:'grey'}}>
            Don't have an account?
            <Text style={{color:'black', flexDirection:'row'}}>
            Register
         </Text>
         </Text>
         <TouchableOpacity onPress={()=>console.log("hiii")} style={{backgroundColor:"black",paddingVertical:12,paddingHorizontal:5,borderRadius:12}}>
           <Text style={{color:"white",textAlign:"center",fontSize:20}}>
           Login
            </Text> 
           </TouchableOpacity>

    </View>
  )
}

export default SignIn