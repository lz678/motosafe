import { useEffect,useRef } from 'react'
import { useSelector } from 'react-redux'
import Home from './component/Home/Home'
import SuccessPanel from './component/SuccessPanel/SuccessPannel'

const AppContent = () => {
    let { showSuccessPanel } = useSelector((state) => {
        return {
            showSuccessPanel: state.mainReducer.showSuccessPanel
        }
    })
    let originHeight = useRef(null)
    useEffect(() => {
        _bindHeightLister()
        return () => {
            _unbindHeightLister()
        }
    }, [])
    let _bindHeightLister = () => {
        originHeight.current = document.body.clientHeight
        window.addEventListener("resize", _judgeKeyboardState);
    }
    let _unbindHeightLister = () => {
        window.removeEventListener("resize", _judgeKeyboardState);
    }
    let _judgeKeyboardState = () => {
        const resizeHeight = document.body.clientHeight
        var u = navigator.userAgent;
        let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
        if (isAndroid) {
            if (resizeHeight < originHeight.current) {
                // 键盘弹起
                document.querySelector('body').setAttribute('style', 'height:' + originHeight.current + 'px;');
            } else {
                // 键盘收起
                document.querySelector('body').setAttribute('style', 'height:100%;');
            }
        }
    }
    return (
        <>
            <Home />
            {showSuccessPanel && <SuccessPanel />}
        </>
    )
}
export default AppContent