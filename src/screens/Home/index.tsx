import { useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Checkbox from 'expo-checkbox';
import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export default function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);



    function handleAddTask(task: string) {
        if (tasks.includes(task)) {
            return Alert.alert('Tarefa já existe', 'Esta tarefa já existe na lista')
        }
        setTasks(state => (
            [...state, task]
        ))
    }
    function handleRemoveTask(selectedTask: string) {
        Alert.alert('Remover', `Deseja remover esta task?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setTasks(state => state.filter(task => task !== selectedTask))
            },

        ])
    }

    return (
        <View style={styles.container}>
            <Header handleAddTask={handleAddTask} />

            <View style={styles.listInfo}>
                <View style={styles.infoHeaders}>
                    <Text style={styles.infoHeaderCreated}>Criadas</Text>
                    <Text style={styles.infoHeaderNumber}>0</Text>
                </View>
                <View style={styles.infoHeaders}>
                    <Text style={styles.infoHeaderDone}>Concluídas</Text>
                    <Text style={styles.infoHeaderNumber}>0</Text>
                </View>
            </View>

            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Checkbox
                            disabled={false}
                            style={styles.taskSwitch}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.taskText}>{item}</Text>
                        <TouchableOpacity style={styles.taskRemove} onPress={() => handleRemoveTask(item)}>

                            <Image source={require('../../../assets/trash.png')} />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyList />
                )}
            />
        </View >
    )
}