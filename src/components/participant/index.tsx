import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

import { styles } from "@/components/participant/styles";
import { colors } from "@/styles/colors";
import Button from "../button";

type Props = {
    name: string,
    onRemove: () => void
}

export default function Participant({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Button title="-" variant="secondary" onPress={onRemove} />
        </View>
    );
}