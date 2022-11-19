import { useState } from 'react'
import Style from './MTIput.module.less'
import classNames from 'classnames'
const MTInput = (props) => {
    let { label, placeholder, classname } = props
    const [value, setValue] = useState('')

    let _change = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={classNames(Style.out_box, classname)}>
            {label && <span className={Style.label}>{label}</span>}
            <div className={Style.input_box}>
                <input value={value} placeholder={placeholder} onChange={_change} className={Style.input} />
            </div>

        </div>

    )
}
export default MTInput