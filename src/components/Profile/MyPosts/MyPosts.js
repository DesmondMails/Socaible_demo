import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

    let postsElements = props.posts
        .map(post => <Post message={post.message} likes={post.likes}/>
        )

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <ReduxPostForm
                    onSubmit={onAddPost}
                />
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostText'
                    validate={[required, maxLength10]}
                />

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const ReduxPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(PostForm)

export default MyPosts;