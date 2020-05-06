import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, H1 } from 'react-native'
import Score from './Score'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TimeBoard from './TimeBoard'

export default class ScoreBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            score: props.score,
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.scoreBoard}>
                    <Text style={styles.scoreBoardTitle}>Score</Text>
                    <View style={styles.scoreRow}>
                        <View style={styles.score}>
                            <Score score='12' />
                        </View>
                        <TimeBoard/>
                        <View style={styles.score}>
                            <Score score='08' />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    button: {
        backgroundColor: '#f59a1b'
    },
    score: {
        margin: 16
    },
    scoreBoardTitle: {
        fontSize: 20,
        alignSelf: 'center'
    },
    scoreBoard: {
        justifyContent: 'space-around',
        backgroundColor: '#F0F0FF'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    }
})