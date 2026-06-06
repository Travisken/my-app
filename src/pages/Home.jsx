import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

export default function Home() {
  const API = "http://localhost:3000/tasks";

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const activeCount = tasks.filter((t) => !t.completed).length;

  
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const addTask = async () => {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      title: inputValue.trim(),
      completed: false,
    };

    setInputValue("");
    setTasks((prev) => [...prev, newTask]);

    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
    } catch (err) {
      setTasks((prev) => prev.filter((t) => t.id !== newTask.id));
      console.log(err);
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const updated = { ...task, completed: !task.completed };

    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));

    try {
      await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: updated.completed }),
      });
    } catch (err) {
      setTasks((prev) => prev.map((t) => (t.id === id ? task : t)));
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    const previous = tasks;

    setTasks((prev) => prev.filter((t) => t.id !== id));

    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
    } catch (err) {
      setTasks(previous);
      console.log(err);
    }
  };

  const clearCompleted = async () => {
    const completed = tasks.filter((t) => t.completed);

    setTasks((prev) => prev.filter((t) => !t.completed));

    try {
      await Promise.all(
        completed.map((t) => fetch(`${API}/${t.id}`, { method: "DELETE" })),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 prevents page reload
    addTask();
  };

  return (
    <div className="">
      <div className="min-h-screen bg-[#9c9c9c] dark:bg-[#171823] font-[Josefin_Sans] relative">
        {/* HERO */}
        <div className="absolute top-0 left-0 right-0 h-75 bg-linear-to-br from-indigo-600 via-purple-500 to-pink-500" />
        Home-
        <main className="relative max-w-xl mx-auto px-6 pt-16 pb-20">
          {/* HEADER */}
          <Header />

          {/* INPUT */}
          <TodoInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
          />

          {/* TASK LIST */}
          <div className="bg-white dark:bg-[#25273c] rounded-md shadow-lg overflow-hidden">
            <TodoList
              filteredTasks={filteredTasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />

            {/* FOOTER */}
            <Footer
              activeCount={activeCount}
              filter={filter}
              setFilter={setFilter}
              clearCompleted={clearCompleted}
            />
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            Drag and drop to reorder list
          </p>
        </main>
      </div>
    </div>
  );
}
