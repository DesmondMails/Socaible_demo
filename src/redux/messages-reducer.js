const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: "Mykyta"},
        {id: '2', name: "Patrick"},
        {id: '3', name: "Demis"},
        {id: '4', name: "Mike"},
    ],
    messages: [
        {id: '1', message: "Hello"},
        {id: '2', message: "How are you?"},
        {id: '3', message: "Yo"},
        {id: '4', message: "Yo"},
    ]
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 7,
                message: action.newMessageBody
            };
            return  {
                ...state,
                messages: [...state.messages,newMessage]
            };

        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})


export default messagesReducer;