import React from "react";
import styles from './FormsControls.module.css'

const FormControl = (tag) => {

    return ({input, meta, child, ...props}) => {
        const hasError = meta.touched && meta.error;
        return (
            <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
                <div>
                    {React.createElement(tag, {...input, ...props})}
                </div>
                {hasError && <span>{meta.error}</span>}
            </div>
        )
    }
}
export const Textarea = FormControl('textarea');

export const Input = FormControl('input');