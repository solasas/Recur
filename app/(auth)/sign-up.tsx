import {View,Text,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Link} from "expo-router";
const SignUp=()=>{
    // @ts-ignore
    return(
        <View>
            <Link href={"/sign-in" as any}>Sign Up</Link>

        </View>
    )
}
export default SignUp;
