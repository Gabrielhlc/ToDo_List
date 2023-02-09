import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
    handleAddTask: (task: string) => void;
}

export function Header({ handleAddTask }: HeaderProps) {
    const [task, setTask] = useState<string>('');


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
                    onChangeText={setTask}
                    value={task}
                />

                <TouchableOpacity style={styles.formButton} onPress={() => {
                    handleAddTask(task)
                    setTask('')
                }}>
                    <Text style={styles.formButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}