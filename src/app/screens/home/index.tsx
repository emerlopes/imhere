import { FlatList, Text, View } from 'react-native';

import { styles } from '@/app/screens/home/styles';
import Input from '@/components/input';
import Button from '@/components/button';
import Participant from '@/components/participant';
import { useState } from 'react';

export default function Home() {

    const [participantName, setParticipantName] = useState('');
    const [participantsList, setParticipantsList] = useState<string[]>([]);

    function handleParticipantAdd() {
        setParticipantsList([...participantsList, participantName]);
        console.log("Participante adicionado:", participantName);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        console.log("Removendo o participante " + name + " da lista")
        setParticipantsList(participantsList.filter(participant => participant !== name))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Segunda, 7 de Outubro de 2024</Text>

            <View style={styles.form}>
                <Input
                    value={participantName}
                    onChangeText={setParticipantName}
                />
                <Button title="+" onPress={handleParticipantAdd} />
            </View>

            <View style={styles.separator} />

            <FlatList
                data={participantsList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}