

const initialState = {
    players: {
        1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
    },
    monster : {pv: 800, pvMax: 800}
};

function rootReducer(state = initialState, action) {
let playerRandom = Math.floor(Math.random()*4)+1;
    if (action.type === 'HIT_MONSTER') {
        return {
            ...state,
            monster: {pv: state.monster.pv -= action.payload, pvMax: state.monster.pvMax}
        }
    }if (action.type === 'HIT_BACK') {
        return {
            ...state,
            players: {
                ...state.players,
                [playerRandom]: {
                    ...state.players[playerRandom],
                    pv: state.players[playerRandom].pv -= action.payload.hit}
                }
            }
        }
    return state;
}

export default rootReducer;