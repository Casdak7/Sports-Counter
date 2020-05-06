import React, {Component} from 'react'
import { Stylesheet, View, Text } from 'react-native'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            minutes: props.time,
            seconds: props.time
        }
    }
    
    render(){
        return(
            <View>
                <Text style={styles.timerText}>{this.state.minutes}:{this.state.seconds}</Text>
            </View>
        )
    }
}

const styles = {
    timerView: {
        
    },
    timerText: {
        fontSize: 40,
        
    }
}