import { View, Button, SafeAreaView, Text, Modal, FlatList } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import {InputSearch, TaskItem} from './components';

export default function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7')
  }

  const onHandlerChangeText = (text) => {
    setTask(text)
  }

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])

    setTask('')
  }

  const onHandlerModal = (item) => {
    setIsVisible(true)
    setSelectedTask(item)
  }

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    setIsVisible(false)
  }

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <InputSearch
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerCreateTask={onHandlerCreateTask}
          onHandlerFocus={onHandlerFocus}
          task={task}
        />        
        <FlatList
            data={tasks}
            renderItem={renderItem}
            style={styles.listContainer}
            contentContainerStyle={styles.list}
            alwaysBounceVertical={false}
            keyExtractor={item => item.id}
          />
      </View>
      <Modal visible={isVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Estas seguro que queres eliminar este contenido?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#424D9E'
              onPress={() =>  setIsVisible(false)}
            />
            <Button 
              title='Delete'
              color='red'
              onPress={() => onHandleDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}