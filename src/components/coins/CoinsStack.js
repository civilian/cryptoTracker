// Every time we do a component we need to import it
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import colors from '../../res/colors';

// nos devuelve el componente
const Stack = createStackNavigator();

const CoinStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle : {
                    backgroundColor : colors.blackPearl,
                    shadowColor: colors.blackPearl
                },
                headerTintColor: colors.white
            }}
        >
            <Stack.Screen 
                name="Coins" 
                component={CoinsScreen} 
            />
            <Stack.Screen 
                name="CoinDetail" 
                component={CoinDetailScreen}
            />
        </Stack.Navigator>
    );
}

// Always export the component as you do it so you dont get weird errors
export default CoinStack;