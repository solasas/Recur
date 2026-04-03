import {View,Text,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Link} from "expo-router";
const Signin=()=>{
    return(
        <View>
            <Text>SignIn</Text>
            <Link href={"/sign-up" as any}>Sign Up</Link>
        </View>
    )
}
export default Signin;
