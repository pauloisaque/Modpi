import { View, Text, useColorScheme } from 'react-native'
import "../../global.css";
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function Questao() {

    const colorScheme = useColorScheme();
    const theme = colorScheme == "dark" ? Colors.dark : Colors.light;

    return (
        <>
            <View style={{ backgroundColor: theme.background }} className="flex-1 justify-center items-center">
                <Text style={{ color: theme.text }} className="text-2xl">Essa é a questão</Text>
            </View>
        </>
    )
}