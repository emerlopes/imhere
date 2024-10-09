import { TextInput, TextInputProps } from "react-native"

import { styles } from "@/components/input/styles";

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            {...rest}
        />
    )
}