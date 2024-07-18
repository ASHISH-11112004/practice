import React from 'react'
import { View,Text, TouchableOpacity, Image } from 'react-native'

const Home = () => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{marginBottom:15}}>
            <Image style={{height:300,width:270,padding:20}} source={{uri:"https://threedio-cdn.icons8.com/YiqFvSLlqHW95vfbTHXe8D-IW-hUbZHL7OKEbM6nWBo/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzI2OS8xNDg1/MzQ4NC0wZTIxLTRi/MTQtODRkOC1mMTE2/YzVkMTg0ZmEucG5n.png"}}/></View>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>
                Welcome to
            </Text>
            <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold'}}>
                SeekJob
            </Text>
            <Text style={{marginTop:20,textAlign:'center'}} >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil pariatur, nisi minus imped
            </Text>
            <View style={{marginTop:25}}>
           <TouchableOpacity onPress={()=>console.log("hiii")} style={{backgroundColor:"black",paddingVertical:12,paddingHorizontal:5,borderRadius:12}}>
           <Text style={{color:"white",textAlign:"center",fontSize:20}}>
           Login
            </Text> 
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>console.log("hiii")} style={{backgroundColor:"grey",paddingVertical:12,paddingHorizontal:5,borderRadius:12,marginTop:5}}>
           <Text style={{color:"white",textAlign:"center",fontSize:20}}>
           register
            </Text> 
           </TouchableOpacity>
           </View>
        </View>
    )
}

export default Home