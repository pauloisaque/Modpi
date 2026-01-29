import { View, Text, Image, useColorScheme } from 'react-native'
import "../../global.css";
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';
import Logo from '../assets/Logo.png';


export default function TelaPrincipal() {
    const colorScheme = useColorScheme();
    const theme = colorScheme == "dark" ? Colors.dark : Colors.light;

    return (
        <>
            <View style={{ backgroundColor: theme.background }} className="flex-1 justify-center items-center">
                <Image className="w-10 h-10" resizeMode="cover" source={Logo}/>
                <Text style={{ color: theme.text }} className="text-2xl">Essa é a tela principal</Text>
                <Link href="/Lista" style={{ backgroundColor: theme.button, color: theme.textButton }} className="mt-4 px-4 py-2 rounded">Abrir Lista</Link>
            </View>
        </>
    )
}