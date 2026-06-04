import TodoItem from "./TodoItem";

export default function TodoList({
    filteredTasks,
    toggleTask,
    deleteTask
}) {
  return (
    <>
      {filteredTasks.length === 0 && (
        <p className="p-6 text-center text-gray-400">No tasks here.</p>
      )}

      {filteredTasks.map((task, i) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          isLast={i === filteredTasks.length - 1}
        />
      ))}
    </>
  );
}
