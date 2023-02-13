import { Dispatch, SetStateAction, useState } from 'react'
import Checkbox from "expo-checkbox";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
// import { Dispatch, SetStateAction } from "react";

export type Task = {
    text: string
    isChecked: boolean

}

interface TaskProps {
    task: Task
    removeTask: (taskText: string) => void
    doneTask: Dispatch<SetStateAction<number>>
}

export function Task({ task, removeTask }: TaskProps) {
    const [checked, setChecked] = useState(false);
    task.isChecked = checked

    return (
        <View style={styles.taskContainer}>
            <Checkbox
                disabled={false}
                style={styles.taskSwitch}
                value={checked}
                onValueChange={setChecked}
                color={checked ? "#5E60CE" : undefined}
            />
            <Text style={styles.taskText}>{task.text}</Text>
            <TouchableOpacity style={styles.taskRemove} onPress={() => removeTask(task.text)}>

                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}