import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Stackroutes from './stack.routes'

const Routes = () => {
    return (
        <NavigationContainer>
            <Stackroutes />
        </NavigationContainer>
    )
}

export default Routes;