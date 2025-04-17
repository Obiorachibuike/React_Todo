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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 flex justify-center items-center py-12">
      <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <h1 className="text-5xl font-semibold text-center text-gray-800 mb-8">My To-Do List</h1>
        
        <div className="mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-4 bg-gray-100 text-lg text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
        </div>
        
        <button
          onClick={addTask}
          className="w-full bg-blue-600 text-white p-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Add Task
        </button>

        <ul className="mt-8 space-y-6">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <span className="text-lg text-gray-800">{task.text}</span>
              <div className="space-x-6">
                <button
                  onClick={() => editTask(task.id)}
                  className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out"
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-600 transition duration-300 ease-in-out"
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
