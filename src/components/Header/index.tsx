import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Header() {
    return (
        <>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.svg')} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />

                <TouchableOpacity style={styles.formButton}>
                    <Text style={styles.formButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}