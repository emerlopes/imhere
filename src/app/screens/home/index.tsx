import { Text, View } from 'react-native';

import { styles } from '@/app/screens/home/styles';
import Input from '@/components/input';
import Button from '@/components/button';

export default function Home() {

    function handleParticipantAdd() {
        console.log("Participante adicionado")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Segunda, 7 de Outubro de 2024</Text>

            <View style={styles.form}>
                <Input />
                <Button title="+" onPress={handleParticipantAdd} />
            </View>

        </View>
    );
}