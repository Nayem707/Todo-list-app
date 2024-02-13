import { useState } from 'react';
import Card from './ToDoCard';
import InprogressCad from './InprogressCad';

function DragAndDrop() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'todo' },
    { id: 3, title: 'Task 3', status: 'inprogress' },
    { id: 4, title: 'Task 4', status: 'inprogress' },
  ]);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='flex gap-2'>
      <div
        className='border-r pr-5 grid grid-cols-2 gap-5'
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'todo')}
      >
        {tasks.map(
          (task) =>
            task.status === 'todo' && (
              <div
                key={task.id}
                draggable
                onDragStart={(event) => handleDragStart(event, task.id)}
                className=' cursor-move'
              >
                <Card title={task.title} />
              </div>
            )
        )}
      </div>
      <div
        className=' grid grid-cols-2 gap-5 pl-2'
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'inprogress')}
      >
        {tasks.map(
          (task) =>
            task.status === 'inprogress' && (
              <div
                key={task.id}
                draggable
                onDragStart={(event) => handleDragStart(event, task.id)}
                className=' cursor-grab '
              >
                <InprogressCad />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default DragAndDrop;
