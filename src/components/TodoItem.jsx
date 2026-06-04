export default function TodoItem({
    task,
    toggleTask,
    deleteTask,
    isLast
}) {
  return (
    <>
      <div
        key={task.id}
        className={`flex items-center gap-4 p-4 ${
          !isLast.length - 1
            ? "border-b border-gray-200 dark:border-gray-700"
            : ""
        }`}
      >
        <button
          type="button"
          onClick={() => toggleTask(task.id)}
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            task.completed
              ? "bg-purple-600"
              : "border-gray-300 border dark:border-gray-600"
          }`}
        >
          {task.completed && <span className="text-white text-xs">✓</span>}
        </button>

        <span
          className={`flex-1 ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {task.title}
        </span>

        <button
          type="button"
          onClick={() => deleteTask(task.id)}
          className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
        >
          ✕
        </button>
      </div>
    </>
  );
}
