import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    },
    listInfo: {
        width: '87.2%',

        flexDirection: 'row',
        justifyContent: 'space-between',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    infoHeaders: {
        flexDirection: 'row',
    },
    infoHeaderCreated: {
        marginRight: 8,

        color: '#4EA8DE',
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 17,
    },
    infoHeaderDone: {
        marginRight: 8,

        color: '#8284FA',
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 17,
    },
    infoHeaderNumber: {
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 2,
        paddingHorizontal: 8,

        fontWeight: "700",
        fontSize: 12,
        lineHeight: 15,
        color: '#D9D9D9',
        backgroundColor: '#333',
        borderRadius: 999,
    },
    taskContainer: {
        width: '87.2%',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,

        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    taskSwitch: {
        marginLeft: 8,
    },
    taskText: {
        lineHeight: 14,
        color: '#F2F2F2',

    },
    taskRemove: {
        marginRight: 8,
    },
})  