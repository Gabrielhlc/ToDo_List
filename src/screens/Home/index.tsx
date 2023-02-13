import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";

import { styles } from "./styles";
import { Task } from "../../components/Task";
import { ListInfo } from "../../components/ListInfo";

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [createdTasks, setCreatedTasks] = useState(0);
    const [doneTasks, setDoneTasks] = useState(0);


    // useEffect(() => {
    //     let count = 0
    //     tasks.map(task => {
    //         if (task.isChecked) {
    //             count += 1
    //         }
    //     })
    //     setDoneTasks(count)
    // }, [tasks])


    function handleAddTask(newTask: Task) {
        tasks.map(task => {
            if (task.text === newTask.text) {
                return Alert.alert('Tarefa já existe', 'Esta tarefa já existe na lista')
            }
        })
        setTasks(state => (
            [...state, newTask]
        ))
        setCreatedTasks(state => (
            state + 1
        ))
    }
    function handleRemoveTask(selectedTask: Task) {
        Alert.alert('Remover', `Deseja remover esta task?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(state => state.filter(task => task.text !== selectedTask.text))
                    setCreatedTasks(state => state - 1)
                }
            },

        ])
    }

    return (
        <View style={styles.container}>
            <Header handleAddTask={handleAddTask} />

            <ListInfo
                createdTasks={createdTasks}
                doneTasks={doneTasks}
            />

            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Task
                        task={item}
                        removeTask={() => handleRemoveTask(item)}
                        doneTask={setDoneTasks}
                    />
                )}
                ListEmptyComponent={() => (
                    <EmptyList />
                )}
            />
        </View >
    )
}