import React, {Component} from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native'
import Score from './Score'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TimeBoard from './TimeBoard'

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}

export default class GameLog extends Component {
    constructor(props){
        super(props)
        this.state = {
            events: props.events,
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>GameLog</Text>
                <FlatList
                    data={this.state.events}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 16,
      width: '100%',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  