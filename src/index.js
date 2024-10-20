import React from 'react';
import ReactDOM from 'react-dom/client';
import '@atlaskit/css-reset'
import initialData from './initial-data';
import Column from './column';

class App extends React.Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.tasksIds.map(taskId => this.state.tasks[taskId])  
      // test

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
