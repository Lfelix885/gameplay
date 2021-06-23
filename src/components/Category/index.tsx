import React from "react";
import { View, Text, Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps, SvgUri } from 'react-native-svg';
import { theme } from "../../global/styles/theme";


import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    icon: string;
    checked?: boolean;
}

export function Category({ title, icon: Icon, checked = false, ...rest }: Props) {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <>
            <RectButton {...rest}> 
                <LinearGradient style={styles.container} colors={[theme.colors.secondary50, theme.colors.secondary70]}>
                    <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                        <View style={checked ? styles.checked : styles.check}></View>
                        <Image source={require('../../assets/ranked.svg')} width={300} height={300} />
                        <SvgUri uri='https://i.picsum.photos/id/1/200/300' width='48' height='48' /> 
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                </LinearGradient>

            </RectButton>
        </>
    )
}