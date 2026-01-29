import { StatusBar, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from "../constants/Colors";

export default function RootLayout() {

    const colorScheme = useColorScheme();
    const theme = colorScheme == "dark" ? Colors.dark : Colors.light;
    console.log("Tema atual: " + colorScheme);

    return (
        <>
            <StatusBar backgroundColor={theme.statusBar} />
            <Stack screenOptions={{headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text }}>
                <Stack.Screen name="index" options={{ title: "Tela inicial" }}/>
                <Stack.Screen name="TelaPrincipal" options={{ title: "Tela Principal" }}/>
                <Stack.Screen name="Lista" options={{ title: "Lista de Questões" }}/>
                <Stack.Screen name="Questao" options={{ title: "Questão" }}/>
                <Stack.Screen name="Conta" options={{ title: "Minha Conta" }}/>
            </Stack>
        </>
    )
}