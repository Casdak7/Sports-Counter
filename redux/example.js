var top_player_id = 0;

//Library Code
function createStore(reducer) {
    
    let state 
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

//App code

//Action Types
const POINTS_UP = 'POINTS_UP'
const ADD_PLAYER = 'ADD_PLAYER'

//Action Creators
function addPlayerAction(name){
    return {
      type: ADD_PLAYER,
      player: {
        id: top_player_id++,
        name: name
      }
    }
}

function removePlayerAction(id){
    return {
      type: ADD_PLAYER,
      id: id
    }
}

function addPlayer(){
  let name = $('#player')

  store.dispatch(addPlayerAction(name.val()))
}

function addPlayerToDOM(player){
  const node = document.createElement('li')
  const text = document.createTextNode(player.name)
  const btn_remove = document.createElement('button')
  btn_remove.setAttribute('player_id', player.id)
  btn_remove.setAttribute('class', 'btn_remove')
  const text_remove = document.createTextNode('X')

  node.appendChild(text)
  btn_remove.appendChild(text_remove)
  node.appendChild(btn_remove)
  document.getElementById('player_list').appendChild(node)
}

function points(state = [], action){
    if(action.type === "POINTS_UP"){
        return state.concat([action.points])
    } else if(action.type === "POINTS_DOWN"){
        return state.filter((points) => points.id !== action.id)
    } else if(action.type === "POINTS_CHANGE"){
        return state.map((points) => points.id !== action.id ? points : 
        Object.assign({}, points, {player_id: action.player_id}))
    } else{

        return state
    }
}

function players(state = [], action){
    if(action.type === "ADD_PLAYER"){
        return state.concat([action.player])
    } else if(action.type === "REMOVE_PLAYER"){
        return state.filter((player) => player.id !== action.id)
    } else{
        return state
    }
}

function app(state = {}, action){
    return {
        points: points(state.points, action),
        players: players(state.players, action)
    }
}

const store = createStore(app)


// Test Code
store.subscribe(() => {
    const {players, points} = store.getState()

    document.getElementById('player_list').innerHTML = ''

    players.forEach(addPlayerToDOM)
})


