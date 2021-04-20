import React from 'react'
import Load from 'expo-app-loading'
import { Useridentification } from './src/pages/Useidentification'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })
  if (!fontsLoaded)
    return <Load />



  return (
    <Useridentification />)

}