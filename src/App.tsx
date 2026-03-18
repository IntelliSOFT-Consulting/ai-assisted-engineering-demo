import { FormEvent, useMemo, useState } from "react";
import { Filter, Todo } from "./types";

const FILTER_OPTIONS: Array<{ label: string; value: Filter }> = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" }
];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const canAddTask = newTask.trim().length > 0;

  const visibleTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    return todos;
  }, [filter, todos]);

  const activeCount = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos]
  );

  const emptyStateText = useMemo(() => {
    if (filter === "active") {
      return "No active tasks right now.";
    }

    if (filter === "completed") {
      return "No completed tasks yet. Complete one to see it here.";
    }

    return "No tasks yet. Add your first task above.";
  }, [filter]);

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTask = newTask.trim();
    if (!trimmedTask) {
      return;
    }

    setTodos((prevTodos) => [
      {
        id: crypto.randomUUID(),
        text: trimmedTask,
        completed: false
      },
      ...prevTodos
    ]);
    setNewTask("");
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="app-shell">
      <section className="todo-card" aria-label="Todo application">
        <header className="card-header">
          <h1>Todo Demo</h1>
          <p>
            {activeCount} active, {todos.length} total
          </p>
        </header>

        <form className="todo-form" onSubmit={handleAddTodo}>
          <label htmlFor="new-task" className="visually-hidden">
            Add a task
          </label>
          <input
            id="new-task"
            type="text"
            autoFocus
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit" disabled={!canAddTask}>
            Add task
          </button>
        </form>

        <div className="filter-row" role="tablist" aria-label="Todo filters">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="tab"
              aria-selected={filter === option.value}
              className={filter === option.value ? "is-active" : undefined}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <ul className="todo-list" aria-live="polite">
          {visibleTodos.length === 0 ? (
            <li className="empty-state">{emptyStateText}</li>
          ) : (
            visibleTodos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? "todo-item-complete" : ""}`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    aria-label={`Mark ${todo.text} as ${todo.completed ? "active" : "completed"}`}
                  />
                  <span className={todo.completed ? "is-complete" : undefined}>
                    {todo.text}
                  </span>
                </label>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(todo.id)}
                  aria-label={`Delete ${todo.text}`}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
