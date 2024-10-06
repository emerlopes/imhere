import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

import { styles } from "@/components/participant/styles";
import { colors } from "@/styles/colors";
import Button from "../button";

type Props = {
    name: string
}

export default function Participant({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Button title="-" variant="secondary" />
        </View>
    );
}