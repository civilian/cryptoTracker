// Every time we do a component we need to import it
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';

// nos devuelve el componente
const Stack = createStackNavigator();

const CoinStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Coins" 
                component={CoinsScreen} 
            />
            <Stack.Screen 
                name="Coin Detail" 
                component={CoinDetailScreen}
            />
        </Stack.Navigator>
    );
}

// Always export the component as you do it so you dont get weird errors
export default CoinStack;