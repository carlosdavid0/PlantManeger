
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { EnviromentButton } from '../componetes/EnviromentButton';
import { Header } from '../componetes/Header';
import { PLantCardsPrimary } from '../componetes/PlantCardPrimary';
import api from '../services/api';

import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface EnviromentProps {
    key: String;
    title: String;
}
interface PlantsProps {

    id: String,
    name: String,
    about: String,
    water_tips: String,
    photo: String,
    environments: [String],
    frequency: {
        times: number,
        repeat_every: String
    }
}

export function PlantSelect() {
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>();
    const [plants, setPlants] = useState<PlantsProps[]>();


    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos',

                },
                ...data
            ])
        }
        fetchEnviroment()
    }, [])

    useEffect(() => {
        async function fetchPlants() {
            const { data } = await api.get('plants')
            setPlants(data)
        }
        fetchPlants()
    }, [])


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header />
                <Text style={style.title}>
                    Em qual ambiente
                    </Text>

                <Text style={style.subtitle}>
                    você quer colocar sua planta?
                    </Text>
            </View>
            <View>
                <FlatList
                    data={enviroments}
                    renderItem={({ item }) => (
                        <EnviromentButton title={item.title} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={style.list}
                >

                </FlatList>
            </View>
            <View style={style.plants}>
                <FlatList
                    data={plants}
                    renderItem={({ item }) => (
                        <PLantCardsPrimary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={style.list}
                >

                </FlatList>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 30,
        color: colors.heading
    },
    list: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})
