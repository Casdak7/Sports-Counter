import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, H1 } from 'react-native'

export default class TeamBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamName: props.teamName,
            players: props.players,
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.teamName}>
                    <Text>{this.state.teamName}</Text>
                </View>
                <View>
                    {this.state.players.map((player) => {
                        return (<Text key={player.id}>{player.name}</Text>)
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    teamName: {
        borderBottomWidth: 1,
        paddingHorizontal: 16,
        
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
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderWidth: 1,
    }
})