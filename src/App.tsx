import { useState, useEffect } from 'react';

interface Task {
  id: number;
  text: string;
}

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks) as Task[]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number) => {
    const currentTask = tasks.find((task) => task.id === id);
    const newTask = prompt('Edit task:', currentTask?.text || '');
    if (newTask !== null && newTask.trim() !== '') {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newTask } : task)));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-500 via-purple-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl p-10 rounded-3xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.01]">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide">
          📝 Modern To-Do List
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-grow px-5 py-4 rounded-xl bg-gray-100 text-gray-800 text-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl text-lg font-medium transition duration-300 shadow-md"
          >
            ➕ Add
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.length === 0 ? (
            <li className="text-center text-gray-500">No tasks yet. Add something to get started 🚀</li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl shadow hover:bg-gray-100 transition"
              >
                <span className="text-lg text-gray-800">{task.text}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => editTask(task.id)}
                    className="text-indigo-500 hover:text-indigo-700 transition"
                    title="Edit"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
