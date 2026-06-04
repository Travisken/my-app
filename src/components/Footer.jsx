export default function Footer({
    activeCount,
    filter,
    setFilter,
    clearCompleted
}) {
  return (
    <>
      <div className="flex items-center justify-between p-4 text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <span>{activeCount} items left</span>

        <div className="flex gap-3">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-bold capitalize ${
                filter === f
                  ? "text-blue-500"
                  : "hover:text-gray-700 dark:hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={clearCompleted}
          className="hover:text-gray-700 dark:hover:text-white"
        >
          Clear
        </button>
      </div>
    </>
  );
}
