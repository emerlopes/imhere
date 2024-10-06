import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "@/components/button/styles";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
    title: string
    variant?: string
}

export default function Button({ title, variant="primary", ...rest }: Props) {
    const backgroundColor = variant === "primary" ? "#31CF67" : "#FF0000"

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}