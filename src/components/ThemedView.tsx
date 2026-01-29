import { View } from 'react-native'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

export default function ThemedView() {

    const colorScheme = useColorScheme();
    const theme = colorScheme == "dark" ? Colors.dark : Colors.light;

    return (
        <>
            <View style={{ flex: 1, backgroundColor: theme.background }}>
            </View>
        </>
    )
}