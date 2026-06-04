export default function TodoInput({
    inputValue,
    setInputValue,
    handleSubmit,
}) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4 bg-white dark:bg-[#25273c] p-4 rounded-md shadow-lg mb-6"
      >
        <div className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600" />

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Create a new todo..."
          className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
        />
      </form>
    </>
  );
}
