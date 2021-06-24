import React from "react";
import { View, Text, Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from 'react-native-svg';
import { theme } from "../../global/styles/theme";


import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    icon: string;
    hasCheckBox ?: boolean;
    checked?: boolean;
}

export function Category({ title, icon: Icon, checked = false, hasCheckBox = false, ...rest }: Props) {
    const { secondary40,secondary50, secondary70, secondary85 } = theme.colors;

    return (
        <>
            <RectButton {...rest}> 
                <LinearGradient style={styles.container} colors={[theme.colors.secondary50, theme.colors.secondary70]}>
                    <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
                        colors={[checked ? secondary85 : secondary50, secondary40 ]}
                    >
                        {
                            hasCheckBox &&
                            <View style={checked ? styles.checked : styles.check}></View>
                        }
                        <Image source={require(`../../assets/${Icon}`)} style={{width:48, height:48}}/>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </LinearGradient> 
                </LinearGradient>

            </RectButton>
        </>
    )
}