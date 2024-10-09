import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    eventDate: {
        color: "#6B6B6B",
        fontSize: 16
    },
    form: {
        marginTop: 36,
        marginBottom: 42,
        width: "100%",
        flexDirection: "row",
        gap: 12,
    },
    separator: {
        height: 1,
        backgroundColor: '#FDFCFE',
        marginVertical: 8,
    },
});