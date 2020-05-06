import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, H1 } from 'react-native'
import TeamBoard from './TeamBoard'

export default class ControlBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamA: props.teamA,
            teamB: props.teamB,
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <TeamBoard teamName={this.state.teamA.teamName} players={this.state.teamA.players}/>
                <View style={styles.buttons}>
                    <Button title="+1"></Button>
                    <Button title="+2"></Button>
                    <Button title="+3"></Button>
                </View>
                <TeamBoard teamName={this.state.teamB.teamName} players={this.state.teamB.players}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    buttons:  {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around', 
    }
})