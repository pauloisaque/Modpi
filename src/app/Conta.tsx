import { View, Text, useColorScheme } from 'react-native'
import "../../global.css";
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function Conta() {
    
    const colorScheme = useColorScheme();
    const theme = colorScheme == "dark" ? Colors.dark : Colors.light;

    return (
        <>

        </>
    )
}