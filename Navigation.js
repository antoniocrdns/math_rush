import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './context/ThemeContext';
import { ScoreProvider } from './context/ScoreContext';

import MenuPrincipal from './screens/MenuPrincipal';
import SelectorDificultad from './screens/SelectorDificultad';
import Juego from './screens/Juego';
import Marcadores from './screens/Marcadores';
import Opciones from './screens/Opciones';
import Tutorial from './screens/Tutorial';
import FinJuego from './screens/FinJuego';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <ScoreProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="MenuPrincipal">
                        <Stack.Screen 
                        name="MenuPrincipal" 
                        component={MenuPrincipal} 
                        options={{ headerShown: false }}
                        />
                        <Stack.Screen 
                        name="SelectorDificultad" 
                        component={SelectorDificultad} 
                        options={{ title: 'Menu Principal' }}
                        />
                        <Stack.Screen 
                        name="Juego" 
                        component={Juego} 
                        options={{ headerShown: true }}
                        />
                        <Stack.Screen 
                        name="Marcadores" 
                        component={Marcadores} 
                        options={{ title: 'Menu principal' }}
                        />
                        <Stack.Screen 
                        name="Opciones" 
                        component={Opciones} 
                        options={{ title: 'Menu Principal' }}
                        />
                        <Stack.Screen 
                        name="Tutorial" 
                        component={Tutorial} 
                        options={{ title: 'Menu Principal' }}
                        />
                        {/* <Stack.Screen 
                        name="FinJuego" 
                        component={FinJuego} 
                        options={{ headerShown: false }}
                        /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </ScoreProvider>
    );
};

export default Navigation;
