import profileReducer, {addPostActionCreator, deletePost, setStatus} from "./profile-reducer";

let state = {
    posts: [
        {id: '1', message: "Hi, it's my first Post", likes: 12},
        {id: '2', message: "How are you?", likes: 42}
    ],
    status: ''
}
test('length in new post should be incremented', () => {
    let action = addPostActionCreator("TDD it's cool, but who care?")

    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(3)
});
test('message of new post post should be expected', () => {
    let action = addPostActionCreator("TDD it's cool, but who care?")

    let newState = profileReducer(state,action)

    expect(newState.posts[2].message).toBe("TDD it's cool, but who care?")
});

test("Status should be changed", () => {
    let action = setStatus("Hey, it's a new status")

    let newState = profileReducer(state,action)

    expect(newState.status).toBe("Hey, it's a new status")
});

test('length of posts after deleting should be decremented', () => {
    let action = deletePost(1)

    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(1)
});
test('length of posts after deleting shouldn\'t be decremented if id is incorected', () => {
    let action = deletePost(10)

    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(2)
});