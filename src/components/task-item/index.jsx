import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onPressItem, item }) => {
  return (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.containerItem}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;