import { Button , TextInput, View } from "react-native"
import { styles } from "../input-search/styles"

const InputSearch = ({borderColor, onHandlerFocus, onHandlerBlur, onHandlerChangeText, task, onHandlerCreateTask}) => {
    return (
        <View style={styles.inputContainer}>
          <TextInput 
              style={[styles.input, { borderColor: borderColor}]} 
              placeholder='agregar categorias'
              autoCapitalize='none'
              autoCorrect={false}
              cursorColor='#424D9E'
              selectionColor='#D4D7ED'
              placeholderTextColor='#C5C9E7'
              onFocus={onHandlerFocus}
              onBlur={onHandlerBlur}
              onChangeText={onHandlerChangeText}
              value={task}
            />
          <Button disabled={task.length === 0} title='Crear' color='#424D9E' onPress={onHandlerCreateTask}/>
        </View>
    )
}

export default InputSearch;