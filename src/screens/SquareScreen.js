import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

// example using Reducer 


const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    // state === { red: 0, green: 0, blue: 0}
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15|| -15 }

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount }
        case 'green':
            return { ...state, green: state.green + action.amount }
        case 'blue':
            return { ...state, blue: state.blue + action.amount }
        default:
            return state
    }
}

const SquareScreen = () => {

    
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    


    return (
        <View>
            <ColorCounter 
                onIncrease={() => }
                onDecrease={() => }
                color="Red">
            </ColorCounter>
            <ColorCounter 
                onIncrease={() => }
                onDecrease={() => }
                color="Green">
            </ColorCounter>
            <ColorCounter 
                onIncrease={() => }
                onDecrease={() => }
                color="Blue">
            </ColorCounter>
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen











// Example using useState
// const COLOR_INCREMENT = 15

// const SquareScreen = () => {
//     const [red, setRed] = useState(0)
//     const [green, setGreen] = useState(0)
//     const [blue, setBlue] = useState(0)

//     const setColor = (color, change) => {
//         // color is red green or blue 
//         // change would be the color increment +15 || -15
//         switch (color) {
//             case 'red':
//                 red + change > 255 || red + change < 0 ? null : setRed(red + change)
//                 return
//             case 'blue':
//                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
//                 return
//             case 'green':
//                 green + change > 255 || green + change < 0 ? null : setGreen(green +  change)
//                 return
//         } 
//     }

//     return (
//         <View>
//             <ColorCounter 
//                 onIncrease={() => setColor('red', COLOR_INCREMENT)}
//                 onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
//                 color="Red">
//             </ColorCounter>
//             <ColorCounter 
//                 onIncrease={() => setColor('green', COLOR_INCREMENT)}
//                 onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
//                 color="Green">
//             </ColorCounter>
//             <ColorCounter 
//                 onIncrease={() => setColor('blue', COLOR_INCREMENT)}
//                 onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
//                 color="Blue">
//             </ColorCounter>
//             <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>

//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({})

// export default SquareScreen