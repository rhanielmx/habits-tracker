import { useNavigation, useFocusEffect } from "@react-navigation/native";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";

import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";

import { api } from '../lib/axios'
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

type SummaryProps = Array<{
    id: string
    date: string
    amount: number
    completed: number
}>

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSize = 13 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length

export function Home() {
    const [loading, setLoading] = useState(true)
    const [summary, setSummary] = useState<SummaryProps | null>(null)

    const { navigate } = useNavigation()

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get('summary')
            setSummary(response.data)
        } catch (err) {
            Alert.alert('Ops!', 'Não foi possível carregar o sumário de hábitos!')
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchData()
    }, []))

    if (loading) {
        return <Loading />
    }


    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />
            <View className="flex-row mt-6 mb-2">
                {weekDays.map((weekDay, index) => (
                    <Text
                        key={`${weekDay}-${index}`}
                        className="text-xl text-zinc-400 text-bold text-center mx-1"
                        style={{ width: DAY_SIZE }}
                    >
                        {weekDay}
                    </Text>
                ))}
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            >
                {summary && (
                    <View className="flex-row flex-wrap">
                        {
                            datesFromYearStart.map(date => {
                                const dayWithHabits = summary.find(day => {
                                    return dayjs(date).isSame(day.date, 'day')
                                })
                                return (
                                    <HabitDay
                                        date={date}
                                        amount={dayWithHabits?.amount}
                                        completed={dayWithHabits?.completed}
                                        key={date.toISOString()}
                                        onPress={() => navigate('habit', { date: date.toISOString() })}
                                    />
                                )
                            })
                        }
                        {
                            amountOfDaysToFill > 0 && Array
                                .from({ length: amountOfDaysToFill })
                                .map((_, index) => (
                                    <View key={index}
                                        className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                                        style={{ width: DAY_SIZE, height: DAY_SIZE }}
                                    />
                                ))
                        }
                    </View>
                )}
            </ScrollView>

        </View>
    )
}