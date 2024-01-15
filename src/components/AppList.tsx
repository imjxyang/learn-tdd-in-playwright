import { TTodo } from "../App";

type TAppListProps = {
  todoList: TTodo[];
};
export function AppList({ todoList }: TAppListProps) {
  return (
    <ul data-testid="app-list">
      {todoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
