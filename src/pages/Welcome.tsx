import React from 'react'
import {
    SafeAreaView,
    View,
    Text, Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import watering from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export function Welcome() {
    const navigation = useNavigation();
    function headleStart() {
        navigation.navigate('Useridentification')

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>
                <Image
                    source={watering}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={headleStart} >
                    <Feather name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 38,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,

    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: fonts.text,
        paddingHorizontal: 21,
        color: colors.heading
    },

    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,

    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white,

    }
})