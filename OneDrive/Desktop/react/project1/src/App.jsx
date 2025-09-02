import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setTodoList([...todoList, newTask]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedList = todoList.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedList);
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  const clearAll = () => setTodoList([]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 My To-Do List</h1>

      <div style={styles.inputSection}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addButton}>Add</button>
      </div>

      {todoList.length === 0 ? (
        <p style={styles.emptyMessage}>🎉 No tasks yet. Add something!</p>
      ) : (
        <ul style={styles.list}>
          {todoList.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span
                onClick={() => toggleComplete(index)}
                style={{
                  ...styles.taskText,
                  textDecoration: item.completed ? 'line-through' : 'none',
                  color: item.completed ? '#888' : '#333',
                  cursor: 'pointer',
                }}
              >
                {item.completed ? '✅ ' : '⬜ '} {item.text}
              </span>
              <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      {todoList.length > 0 && (
        <button onClick={clearAll} style={styles.clearButton}>
          🧹 Clear All
        </button>
      )}
    </div>
  );
}

// 🎨 Styling
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  inputSection: {
    display: 'flex',
    gap: '10px',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.6rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.6rem',
    borderBottom: '1px solid #eee',
  },
  taskText: {
    flex: 1,
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    color: 'red',
    cursor: 'pointer',
  },
  clearButton: {
    marginTop: '1.5rem',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#dc3545',
    color: '#fff',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  emptyMessage: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#555',
  },
};

export default App;
