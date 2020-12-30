import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: "Hi, it's my first Post", likes: 12},
                {id: '2', message: "How are you?", likes: 42}
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                {id: '1', message: "Hello"},
                {id: '2', message: "How are you?"},
                {id: '3', message: "Yo"},
                {id: '4', message: "Yo"},
            ],
            dialogs: [
                {id: '1', name: "Mykyta"},
                {id: '2', name: "Patrick"},
                {id: '3', name: "Demis"},
                {id: '4', name: "Mike"},
            ],
            newMessageText: ''
        },
        sidebar: {}


    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;

