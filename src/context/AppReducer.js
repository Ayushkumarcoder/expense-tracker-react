// we have global state which stores the transaction details
// now if we want to give the state of transaction to multiple or any
// other variable like adding or for history or anything we need a app reducer
// that can return the state 

export default (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}