import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Button } from '../componetes/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Useridentification() {
    const navigation = useNavigation();
    const [isFocused, setisFocused] = useState(false);
    const [isFilled, setisFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setisFocused(false)
        setisFilled(!!name)
    }
    function handleInputFocus() {
        setisFocused(true)
    }
    function handleInputChange(value: string) {
        setisFilled(!!value);

        setName(value);
    }

    function headleConfirmation() {
        navigation.navigate('Confirmation')

    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>

                        <View style={styles.form}>

                            <Text style={styles.emoji}>
                                {isFilled ? '😄' : '😀'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos {'\n'} chamar você ?
                    </Text>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }

                                ]}
                                placeholder="Digite o nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button title="Confirmar"
                                    onPress={headleConfirmation}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    content: {
        flex: 1,
        width: "100%"
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',

    },
    emoji: {
        fontSize: 50,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

    },
    title: {
        marginTop: 20,
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    footer: {
        paddingHorizontal: 20,
        width: "100%",
        marginTop: 40,
    }
})