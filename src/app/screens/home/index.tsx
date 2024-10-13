import { Alert, FlatList, Text, View } from 'react-native';

import { styles } from '@/app/screens/home/styles';
import Input from '@/components/input';
import Button from '@/components/button';
import Participant from '@/components/participant';
import { useState } from 'react';

export default function Home() {

    const [participantName, setParticipantName] = useState('');
    const [participantsList, setParticipantsList] = useState<string[]>([]);

    function handleParticipantAdd() {

        const name = participantName.trim()

        if (participantsList.includes(name)) {
            return Alert.alert("Participante", `O participante ${name} já está participando do evento`)
        }

        setParticipantsList(prevState => [...prevState, participantName]);
        console.log("Participante adicionado:", participantName);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Participante", `Deseja remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => setParticipantsList(participantsList.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
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
                ListEmptyComponent={() => (
                    <>
                        <View style={styles.viewEmptyList}>
                            <Text style={styles.viewEmptyListText}>Adicione os participantes ao evento</Text>
                        </View>
                    </>
                )}
            />
        </View>
    );
}