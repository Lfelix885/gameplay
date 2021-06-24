import React from 'react';
import { View,Text,Image, StatusBar } from 'react-native'
import { ButtonIcon } from '../../components/ButtonIcon'

import {styles} from './styles'
import { Background } from '../../components/Background';
import IllustrationImg from '../../assets/illustration.png'
import { useNavigation } from '@react-navigation/native'



export function SignIn () {

    const navigation = useNavigation()
       
    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <Background>
        <View style={styles.container}> 
            <StatusBar barStyle={'light-content'} backgroundColor='transparent' translucent/>
            <Image source={IllustrationImg} style={styles.image} resizeMode='stretch'/>

            <View style={styles.content}>

                <Text style={styles.title}>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Text>
                <Text style={styles.subtitle}>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Text>
                <ButtonIcon title='Entrar com o Discord' onPress={handleSignIn}/>
            </View>
      </View>
      </Background>
    )
    }