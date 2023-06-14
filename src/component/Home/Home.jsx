import {useEffect, useRef, useState} from 'react'
import Style from './Home.module.less'
import MTInput from '../../common/components/MTInput/MTInput'
import MTNetwork from "../../network/MTNetwork";
import {useDispatch} from 'react-redux'
import mainAction from '../../redux/action/mainAction'
import backgroundTwo from '../../assets/moto_two.jpg'

const Home = () => {
    let dispatch = useDispatch()
    const [name, setName] = useState('')
    const [car, serCar] = useState('')
    const [phone, setPhone] = useState('')

    let nameRef = useRef(null)
    let carRef = useRef(null)
    let phoneRef = useRef(null)
    useEffect(() => {
        _addCount()
    }, [])
    let _addCount = () => {
        try {
            let userAgent = window.navigator.userAgent
            let model = userAgent.match(/\(.*?\)/)[0]
            MTNetwork.addCount({model})
        } catch (error) {
            console.log(error);
        }
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
            dispatch(mainAction.addInfoAction({
                name,
                car,
                phone
            }, () => {
                setName('')
                serCar('')
                setPhone('')
            }))
        }
    }
    return (
        <div className={Style.home_box} id='home_box_id'>
            <div className={Style.left_content}>
                <img src={backgroundTwo} alt="" loading='lazy'/>
                <a href="https://beian.miit.gov.cn/" target="_blank" className={Style.ICP}>蜀ICP备2022027478号-2</a>
            </div>
            <div className={Style.right_content}>

                <div className={Style.introduce_box}>
                    <span className={Style.look_for}>Look for us!</span>
                    <h1 className={Style.h_title}>专业摩托车保险</h1>
                    {/* <span className={Style.select}>交强 | 三者</span> */}
                    <span className={Style.desc}>
                        我们将会为您提供办理摩托车保险的业务<br/>专人一对一服务，给出最专业意见和建议
                    </span>
                </div>

                <div className={Style.input_content}>
                    <div className={Style.title}>
                        信息填写
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
                    <div className={Style.tip_box}>
                        <div className={Style.icon_box}>
                            <svg t="1669184659009" viewBox="0 0 1024 1024" width="18" height="18">
                                <path d="M512 958.016611c-245.919634 0-446.016611-200.064292-446.016611-446.016611
                                     0-245.919634 200.095256-446.016611 446.016611-446.016611 245.952318 0 446.016611
                                     200.064292 446.016611 446.016611S757.952318 958.016611 512 958.016611zM512
                                      129.983389c-210.655557 0-382.016611 171.359333-382.016611 382.016611 0 210.624593
                                       171.359333 382.016611 382.016611 382.016611 210.624593 0 382.016611-171.359333
                                        382.016611-382.016611S722.624593 129.983389 512 129.983389z" p-id="2790" fill="#ffffff"
                                            />
                                <path d="M463.99957 304.00043c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445
                                 48.00043-48.00043-21.490445-48.00043-48.00043-48.00043S463.99957 277.490445 463.99957
                                 304.00043z" p-id="2791" fill="#ffffff"
                                />
                                <path d="M512 768c-17.664722 0-32.00086-14.303454-32.00086-32.00086L479.99914 
                                    448c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086
                                    32.00086l0 287.99914C544.00086 753.696546 529.664722 768 512 768z" p-id="2792" fill="#ffffff"
                                />
                            </svg>
                        </div>

                        <span className={Style.tip_text}>
                            提交成功后，工作人员会在1~2天内电话联系您！
                        </span>

                    </div>
                    <div className={Style.submit} onClick={_submit}>
                        提交
                    </div>
                </div>
                <a href="https://beian.miit.gov.cn/" target="_blank" className={Style.ICP}>蜀ICP备2022027478号-2</a>
            </div>
        </div>
    )
}
export default Home