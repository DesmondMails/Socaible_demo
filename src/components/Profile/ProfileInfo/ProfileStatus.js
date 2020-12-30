import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this: '+this);
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>  {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'There is no status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onBlur={this.deactivateEditMode.bind(this)}
                            onChange={this.onStatusChange}
                            value={this.state.status}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;