import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// useReducer example

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + action.payload }
        case 'decrease':
            return { ...state, counter: state.counter + action.payload }
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    return (
        <View>
            <Text>Current Count: {state.counter} </Text>
            <Button 
                title="Increase" 
                onPress={() => 
                    dispatch({ type: 'increase', payload: 1 })
                }
            />
            <Button 
                title="Decrease" 
                onPress={() => 
                    dispatch({ type: 'decrease', payload: -1 })
                }        
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen




// useState example

// import React, { useState } from 'react'
// import { View, Text, StyleSheet, Button } from 'react-native'


// const CounterScreen = () => {
//     const [counter, setCounter] = useState(0)

//     return (
//         <View>
//             <Text>Current Count: {counter} </Text>
//             <Button 
//                 title="Increase" 
//                 onPress={() => 
//                     setCounter(counter + 1)
//                 }
//             />
//             <Button 
//                 title="Decrease" 
//                 onPress={() => 
//                     setCounter(counter - 1)
//                 }        
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({})

// export default CounterScreen