import React from 'react';
import './App.css';
import ListUI from './pages/todo-list/list-ui';

const App: React.FC = () => {
  return (
    <div className="App">
      <ListUI />
    </div>
  );
}

export default App;
