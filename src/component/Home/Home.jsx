import { useEffect, useRef, useState } from 'react'
import Style from './Home.module.less'
import MTInput from '../../common/components/MTInput/MTInput'
import MTNework from '../../network/MTNetwork'
const Home = () => {
    const [name, setName] = useState('')
    const [car, serCar] = useState('')
    const [phone, setPhone] = useState('')

    let nameRef = useRef(null)
    let carRef = useRef(null)
    let phoneRef = useRef(null)
    useEffect(() => {
        // _addCount()
    }, [])
    let _addCount = () => {
        MTNework.addCount()
    }

    let _nameChange = (value) => {
        setName(value)
    }
    let _carChange = (value) => {
        serCar(value)
    }
    let _phoneChange = (value) => {
        setPhone(value)
    }
    let _check = () => {
        let result = false
        let phoneReg = /^1[3-9]\d{9}$/
        if (name === '') {
            nameRef.current.setTip('称呼不能为空！')
            return false
        } else {
            nameRef.current.cleanTip()
            result = true
        }
        if (phone === '') {
            phoneRef.current.setTip('号码不能为空！')
            return false
        } else {
            phoneRef.current.cleanTip()
            result = true
        }
        if (!phoneReg.test(phone)) {
            phoneRef.current.setTip('号码格式不正确！')
            return false
        } else {
            phoneRef.current.cleanTip()
            result = true
        }
        return result
    }
    let _submit = () => {
        let result = _check()
        if (result) {
            MTNework.addInfoFetch({
                name,
                car,
                phone
            }).then((data) => {
                console.log(data);
            })
        }
    }
    return (
        <div>
            <div className={Style.box}>
                意向信息填写
            </div>
            <div className={Style.info_box}>
                <MTInput
                    request
                    value={name}
                    change={_nameChange}
                    label='称呼'
                    placeholder='如：李先生'
                    ref={nameRef}
                />
                <MTInput
                    value={car}
                    change={_carChange}
                    label='车型'
                    placeholder='请填写车型'
                    classname={Style.input_add}
                    ref={carRef}
                />
                <MTInput
                    request
                    value={phone}
                    change={_phoneChange}
                    label='电话号码'
                    placeholder='请填写联系方式'
                    classname={Style.input_add}
                    ref={phoneRef}
                />
            </div>
            <div className={Style.submit} onClick={_submit}>
                提交
            </div>
        </div>
    )
}
export default Home