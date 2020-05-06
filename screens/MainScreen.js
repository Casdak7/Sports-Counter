import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ScoreBoard from '../components/ScoreBoard'
import GameLog from '../components/GameLog'
import ControlBoard from '../components/ControlBoard'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed3-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f2-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd97-145571e29d72',
      title: 'Third Item',
    },
];

const PLAYERS = [
    {
        id: '1',
        name: 'Player',
    },
    {
        id: '2',
        name: 'Player',
    },
    {
        id: '3',
        name: 'Player',
    },
    {
        id: '4',
        name: 'Player',
    },
    {
        id: '5',
        name: 'Player',
    },

];

const TeamA = {
    teamName: 'Team A',
    players: PLAYERS,
}

const TeamB = {
    teamName: 'Team B',
    players: PLAYERS,
}

export default class MainScreen extends Component {

    render(){
        return (
            <View style={styles.container}>
                <ScoreBoard style={styles.fit}/>
                <GameLog events={DATA}/>
                <ControlBoard teamA={TeamA} teamB={TeamB}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 16
    },
  });
