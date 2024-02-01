import { useState } from "react";
import { AppButton } from "./components/AppButton";
import { AppInput } from "./components/AppInput";
import { AppList } from "./components/AppList";
import { HoverVisible } from "./components/HoverVisible";

export type TTodo = {
  title: string;
  id: string;
};

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState<TTodo[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    setTodoList([{ title: value, id: Date.now().toString() }, ...todoList]);
    setValue("");
  };
  return (
    <>
      <h3>Fill & Click</h3>
      <AppInput value={value} onChange={handleChange} />
      <AppButton onClick={onClick} />
      <AppList todoList={todoList} />

      <HoverVisible></HoverVisible>
    </>
  );
}

export default App;
