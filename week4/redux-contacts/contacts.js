const redux = require("redux");

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        data: amount
    }
}

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        data: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        data: contact
    }
}

const initialState = {
    count: 0,
    allContacts: [],
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.data
            }
        case "ADD_CONTACT":
            return {
                ...state,
                allContacts: [...state.allContacts, action.data]
            }
        case "REMOVE_CONTACT": 
            const arrCopy = [...state.allContacts]
            
            const updatedArr = state.allContacts.filter(contact => contact !== action.data)
            return {
                ...state,
                allContacts: updatedArr
            }
        
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name: "Arya Stark", phone: "345-678-9012", email: "aryastark@email.com"}))
store.dispatch(addContact({name: "John Snow", phone: "123-456-789", email: "jsnow@email.com"}))
store.dispatch(addContact({name: "Harry Potter", phone: "765-432-1098", email: "potter@email.com"}))
store.dispatch(removeContact({name: "Arya Stark", phone: "345-678-9012", email: "aryastark@email.com"}))
