import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { CheckBox, Input, Button } from '@rneui/themed';

export default function App() {

  const [tasks, setTasks] = useState([
    { id: '1', description: 'React Native: Expo Todo List', completed: true },
    { id: '2', description: 'React Native LinkedIn Learning', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      return; 
    }

    const newItem = {
      id: Date.now().toString(), 
      description: newTask,
      completed: false,
    };

    setTasks([...tasks, newItem]);
    setNewTask(''); 
  };

  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <CheckBox
          checked={item.completed}
          onPress={() => toggleTask(item.id)}
          containerStyle={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 0,
            padding: 2,
          }}
        />

        <Text
          style={
            item.completed
              ? styles.completedText
              : styles.normalText
          }
        >
          {item.description}
        </Text>
      </View>
    );
  };

 
  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Todo List</Text>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Input
        placeholder="Enter a new task"
        value={newTask}
        onChangeText={setNewTask}
      />

      <Button title="Add Task" onPress={addTask} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  normalText: {
    fontSize: 18,
  },

  completedText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
});