interface HabitProps {
    completed: number
}
export function Habit(props:HabitProps){
    return <div>{props.completed}</div>
}