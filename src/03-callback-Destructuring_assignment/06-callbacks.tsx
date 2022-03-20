import React, {MouseEvent} from "react";

// const callback = () => {
//     console.log('hey')
// }
//
// setTimeout(callback, 1000);


export const User = () => {

    const deleteUser = (event : MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)

    }

    const saveUser = () => {
        console.log('User saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onBlurHandler = () => {
        console.log('focus lost')
    }

    // use callback functions
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={onBlurHandler} defaultValue={'Dimych'}>
            </textarea>
            <button name={'delete'} onClick={deleteUser}>Delete</button>
            <button name={'save'} onClick={deleteUser}>Save</button>
        </div>
    )
}