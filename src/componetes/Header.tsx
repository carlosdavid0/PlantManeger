import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../styles/colors';
import userimg from '../assets/david.png'
import fonts from '../styles/fonts';
import { color } from 'react-native-reanimated';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}> Olá,</Text>
                <Text style={styles.username}> David</Text>
            </View>
            <Image source={userimg} style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    username: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    }

})