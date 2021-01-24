import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, H1, Modal, TouchableHighlight, TextInput  } from 'react-native'
import Timer from './Timer'

export default class TimeBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 600,
            maxTime: 600,
            timeModalVisible: false,
            isCountdown: false,
            intervalID: 0,
            maxMinutes: 10,
            maxSeconds: 0,
        }
    }

    toggleTimeModal = () => {
        this.setState((prevState, props) => ({timeModalVisible: !prevState.timeModalVisible, ...prevState.items}))
    }

    setTime = (value) => {
        this.setState({time: value})
    }

    countdownTime = () => {
        this.setState((prevState, props) => ({time: prevState.time - 1, ...prevState.items}))
    }

    toggleCountdown = () =>{
        if(this.state.isCountdown){
            clearInterval(this.intervalID)
        } else {
            this.intervalID = setInterval(this.countdownTime, 1000);
        }

        this.setState((prevState, props) => ({isCountdown: !prevState.isCountdown, ...prevState.items}))
    }

    resetTime = () => {
        this.setTime(this.state.maxTime)
    }

    setMaxMinutes = (value) => {
        this.setState({maxMinutes: value ? value : 0})
    }

    setMaxSeconds = (value) => {
        this.setState({maxSeconds: value ? value : 0})
    }

    setMaxTime = () => {
        console.log(this.state.maxMinutes * 60 + this.state.maxSeconds);
        const newTime = this.state.maxMinutes * 60 + this.state.maxSeconds
        this.setState({maxTime: newTime, time: newTime })
        this.toggleTimeModal()
    }
    
    render(){
        const modalVisible = this.state.timeModalVisible
        const isCountdown = this.state.isCountdown
        const time = this.state.time
        const maxMinutes = this.state.maxMinutes
        const maxSeconds = this.state.maxSeconds
        return(
            <View style={styles.timeBoard}>
                <Text style={styles.timeBoardTitle}>Timer</Text>
                <TouchableHighlight style={styles.timerRow} onPress={this.toggleTimeModal} disabled={isCountdown}>
                    <Timer key={time} time={time}/>
                </TouchableHighlight>
                <View>
                    <View style={styles.buttonRow}>
                        <View style={styles.button}>
                            <Button title={isCountdown ? "PAUSE" : "START"} onPress={this.toggleCountdown}></Button>
                        </View>
                        <View style={styles.button}>
                            <Button title="RESET" disabled={isCountdown} onPress={this.resetTime}></Button>
                        </View>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Set Initial Timer</Text>
                            <View style={styles.timerRow}>
                                <TextInput
                                style={{ height: 60, width: 60, borderColor: 'gray', borderWidth: 1, fontSize:48, margin: 16 }}
                                onChangeText={this.setMaxMinutes}
                                value={maxMinutes.toString()}
                                maxLength={2}
                                />
                                <Text style={{alignSelf: 'center'}}>:</Text>
                                <TextInput
                                style={{ height: 60, width: 60, borderColor: 'gray', borderWidth: 1, fontSize:48, margin: 16}}
                                onChangeText={this.setMaxSeconds}
                                value={maxSeconds.toString()}
                                />
                            </View>
                            <View style={{...styles.buttonRow, marginTop: 16}}>
                                <View style={styles.button}>
                                    <Button title={"FECHAR"} onPress={this.toggleTimeModal}></Button>
                                </View>
                                <View style={styles.button}>
                                    <Button title="SALVAR" onPress={this.setMaxTime}></Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})