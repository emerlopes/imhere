import { TextInput } from "react-native"

import { styles } from "@/components/input/styles";

export default function Input() {
    return (
        <TextInput
            style={styles.container}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
        />
    )
}