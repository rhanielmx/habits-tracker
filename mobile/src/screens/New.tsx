import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View, NativeTouchEvent, NativeSyntheticEvent } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { api } from "../lib/axios";

const avaiableWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

export function New() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    function handleToggleWeekDay(weekDayIndex: number) {
        if (weekDays.includes(weekDayIndex)) {
            setWeekDays(prev => [...prev.filter((weekDay) => weekDay !== weekDayIndex)])
        } else {
            setWeekDays(prev => [...prev, weekDayIndex])
        }
    }

    async function handleCreateNewHabit() {
        try {
            if(!title.trim() || weekDays.length === 0){
                return Alert.alert('Novo Hábito', 'Informe o nome do hábito e escolha a periodicidade!')
            }
            await api.post('/habits', {
                title,
                weekDays
            })

            setTitle('')
            setWeekDays([])

            Alert.alert('Novo Hábito', 'Hábito Criado com sucesso')
           

        } catch (error) {
            Alert.alert('Oops!', 'Não foi possível criar o novo hábito')
            console.log(error)
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />
                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar Hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual seu comprometimento?
                </Text>

                <TextInput
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
                    placeholder="ex.: Exercícios, Dormir bem etc"
                    placeholderTextColor={colors.zinc[400]}
                    value={title}
                    onChangeText={setTitle}
                />

                <Text className="mt-4 mb-3 text-white font-semibold text-base">
                    Qual a recorrência?
                </Text>

                {
                    avaiableWeekDays.map((weekDay, index) => {
                        return (
                            <Checkbox
                                key={weekDay}
                                title={weekDay}
                                checked={weekDays.includes(index)}
                                onPress={() => handleToggleWeekDay(index)}
                            />
                        )
                    })
                }

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleCreateNewHabit}
                    className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
                >
                    <Feather
                        name="check"
                        size={20}
                        color={colors.white}
                    />
                    <Text className="font-semibold text-base text-white ml-2">
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}