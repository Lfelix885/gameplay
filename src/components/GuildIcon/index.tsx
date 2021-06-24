import React from "react";
import { Image } from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { styles } from "./styles";


export function GuildIcon() {
    const uri = 'https://www.ultimaficha.com.br/wp-content/uploads/2021/03/baixados-20.jpg';
    return (
     
            <Image source={{uri}} style={styles.image} resizeMode='cover'/>

  
    )
}