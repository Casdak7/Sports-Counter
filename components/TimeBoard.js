import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, H1 } from 'react-native'
import Timer from './Timer'

export default class TimeBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: props.time,
        }
    }
    
    render(){
        return(
            <View style={styles.timeBoard}>
                <Text style={styles.timeBoardTitle}>Timer</Text>
                <View style={styles.timerRow}>
                    <Timer time='10'/>
                </View>
                <View>
                    <View style={styles.buttonRow}>
                        <View style={styles.button}>
                            <Button title="START"></Button>
                        </View>
                        <View style={styles.button}>
                            <Button title="RESET" ></Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    timerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
    },
    button: {
        marginHorizontal: 4,
    },
    timeButton: {
        alignItems: 'center'
    },
    timeBoardTitle: {
        fontSize: 14,
        alignSelf: 'center'
    },
    timeBoard: {
        justifyContent: 'flex-end', 
    }
})