import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
    title: String
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={style.container} {...rest}>
            <Text style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.heading
    }
})
