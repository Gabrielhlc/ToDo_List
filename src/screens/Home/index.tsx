import { Text, View } from "react-native";
import Header from "../../components/Header";

import { styles } from "./styles";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.listInfo}>
                <View>
                    <Text>Criadas</Text>
                    <Text>0</Text>
                </View>
                <View>
                    <Text>Concluídas</Text>
                    <Text>0</Text>
                </View>
            </View>
        </View>
    )
}