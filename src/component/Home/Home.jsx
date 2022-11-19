import { useState } from 'react'
import Style from './Home.module.less'
import MTInput from '../../common/components/MTInput/MTInput'
const Home = () => {
    return (
        <div>
            <div className={Style.box}>
                意向信息填写
            </div>
            <div className={Style.info_box}>
                <MTInput label='称呼' placeholder='如：李先生' />
                <MTInput label='车型' placeholder='请填写车型' classname={Style.input_add}/>
                <MTInput label='电话号码' placeholder='请填写联系方式' classname={Style.input_add}/>
            </div>
            <div className={Style.submit}>
                提交
            </div>

        </div>

    )
}
export default Home