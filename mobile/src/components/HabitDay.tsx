import clsx from "clsx";
import dayjs from "dayjs";
import { TouchableOpacity, TouchableOpacityProps, Dimensions, View } from "react-native";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface HabitDayProps extends TouchableOpacityProps {
    amount?: number
    completed?: number
    date: Date
}

export function HabitDay({ amount = 0, completed = 0, date, ...rest }: HabitDayProps) {
    const amountAcomplishedPercentage = amount > 0 ? generateProgressPercentage(amount, completed) : 0
    const today = dayjs().startOf('day').toDate()
    const isCurrentDay = dayjs(date).isSame(today)
    
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={clsx(' rounded-lg border-2 m-1 ', {
                'bg-zinc-900 border-zinc-800': amountAcomplishedPercentage === 0,
                'bg-violet-900 border-violet-700': amountAcomplishedPercentage > 0 && amountAcomplishedPercentage <= 20,
                'bg-violet-800 border-violet-600': amountAcomplishedPercentage > 20 && amountAcomplishedPercentage <= 40,
                'bg-violet-700 border-violet-500': amountAcomplishedPercentage > 40 && amountAcomplishedPercentage <= 60,
                'bg-violet-600 border-violet-500': amountAcomplishedPercentage > 60 && amountAcomplishedPercentage <= 80,
                'bg-violet-500 border-violet-400': amountAcomplishedPercentage > 80,
                'border-white border-4': isCurrentDay
            })}
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            {...rest}
        />
    )
}