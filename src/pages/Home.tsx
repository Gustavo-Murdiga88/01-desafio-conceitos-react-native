import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    setTasks((prevState) => ([...prevState, {
        id: new Date().getTime(),
        done: false,
        title: newTaskTitle,
    }]))

  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    setTasks((prevState) => prevState.map((task) => {
      if(id === task.id){
        return {
          ...task,
          done: !task.done
        }
      }
      return task;
    }) )
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((prevState) => prevState.filter((task) => task.id !== id ) )
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})