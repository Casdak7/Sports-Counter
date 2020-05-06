import React, {Component} from 'react'
import { Stylesheet, View, Text } from 'react-native'

export default class Score extends Component {
    constructor(props){
        super(props)
        this.state = {
            score: props.score,
        }
    }
    
    render(){
        return(
            <View>
                <Text style={styles.scoreText}>{this.state.score}</Text>
            </View>
        )
    }
}

const styles = {
    scoreView: {
        
    },
    scoreText: {
        fontSize: 80,
    }
}