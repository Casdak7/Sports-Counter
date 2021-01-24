import React, {Component} from 'react'
import { Stylesheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

/**
 * Timer that receives time in seconds and displays it in a MM:SS format.
 */
export default class Timer extends Component {
    static propTypes = {
        /** Time in seconds, must be bigger than 0 and less than 5999 */
        time: PropTypes.number,
    }

    constructor(props){
        super(props)
        this.state = {
            minutes: parseInt(props.time/60),
            seconds: parseInt(props.time % 60),
        }
    }
    
    render(){
        return(
            <View>
                <Text style={styles.timerText}>{this.state.minutes.toString().padStart(2,"0")}:{this.state.seconds.toString().padStart(2,"0")}</Text>
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