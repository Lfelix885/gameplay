import React, { useState } from "react";
import { View, FlatList} from 'react-native'

import { styles } from './styles';
import { Profile } from './../../components/Profile';
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Appointmetns } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '23/06/2021 ás 21:40',
            description: 'É hoje que  vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '23/06/2021 ás 21:40',
            description: 'É hoje que  vamos chegar ao challenger sem perder uma partida da md10'
        },

    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect categorySelected={category} setCategory={setCategory} />

            <View style={styles.content}>
                <ListHeader title='Patidas agendadas' subtitle='Total 6' />

                <FlatList data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointmetns data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches} showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    )
}