import Data from "./data/data";

const initialState = {
    data: Data,
}

const reducer = (state = initialState, action) => {
    
    const newState = { ...state };
    if (action.type === "ASIM_BILAL") {
        newState.data.team.toShow = newState.data.team.aboutAsim;
    }
    if (action.type === "FARAZ_NADEEM") {
        newState.data.team.toShow = newState.data.team.aboutFaraz;
    }
    if (action.type === "FAHEEM_SALEEM") {
        newState.data.team.toShow = newState.data.team.aboutFaheem;
    }
    if (action.type === "ABDUL_WAHAB") {
        newState.data.team.toShow = newState.data.team.aboutWahab;
    }
    if (action.type === "AHMED_RAIZ") {
        newState.data.team.toShow = newState.data.team.aboutAhmed;
    }
    

    return newState;
}

export default reducer;