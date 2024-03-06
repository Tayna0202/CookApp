import { Text, View } from "react-native"
import Animated from "react-native-reanimated"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./style"

type Props = {
    quantity: number
    onClear: () => void
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch}: Props){
    return(
        <Animated.View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.label}>3 ingredientes selecionados</Text>
            <MaterialIcons name="close" size={24} onPress={onClear} />
            </View>
        </Animated.View>
    )
}