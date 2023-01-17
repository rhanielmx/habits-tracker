import { Habit } from "./components/Habit"

function App() {

  return (
    <div className="bg-zinc-900 text-zinc-500">
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={1} />
      <Habit completed={4} />
      <Habit completed={3} />
      <Habit completed={1} />
      <Habit completed={1} />
    </div>
  )
}

export default App
