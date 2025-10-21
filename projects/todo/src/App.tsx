//Version Without Modularized Props 

// import { useState } from "react";
// import "./index.css";

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// export default function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [text, setText] = useState("");

//   const addTodo = () => {
//     if (!text.trim()) return;
//     const newTodo: Todo = { id: Date.now(), text, completed: false };
//     setTodos([...todos, newTodo]);
//     setText("");
//   };

//   const toggleTodo = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//       <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo App</h1>

//       <div className="flex w-full max-w-md gap-2 mb-6">
//         <input
//           type="text"
//           value={text}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setText(e.target.value)
//           }
//           placeholder="Add a Todo"
//           className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={addTodo}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition"
//         >
//           Add
//         </button>
//       </div>

//       <ul className="w-full max-w-md">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className="flex items-center justify-between bg-white shadow-sm rounded-lg px-4 py-2 mb-2"
//           >
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => toggleTodo(todo.id)}
//                 className="w-5 h-5 text-blue-500 accent-blue-500"
//               />
//               <span
//                 className={`${
//                   todo.completed ? "line-through text-gray-400" : "text-gray-800"
//                 }`}
//               >
//                 {todo.text}
//               </span>
//             </div>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               className="text-red-500 hover:text-red-700"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




import { useState } from "react";
import "./index.css";
import TodoList from "./TodoList";
import type { Todo } from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo App</h1>

      <div className="flex w-full max-w-md gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          placeholder="Add a Todo"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition"
        >
          Add
        </button>
      </div>

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}