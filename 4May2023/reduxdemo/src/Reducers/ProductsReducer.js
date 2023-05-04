export default function (state = [], action) {
    console.log("reducer called");
    console.log("action", action);

    switch (action.type) {
        case 'GET_PRODUCTS': return action.payload.data;
        default: return state;
    }
} 