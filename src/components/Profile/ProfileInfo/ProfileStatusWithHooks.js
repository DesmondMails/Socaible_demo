import React, {useEffect, useState} from 'react'
import style from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)

        props.updateStatus( status);
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'There is no status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    value={status}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;