import mainConstant from "../../constant/mainConstant"
import MTNework from '../../network/MTNetwork'
export default {
    addInfoAction: function name(option, success) {
        return async (dispatch) => {
            let data = await MTNework.addInfoFetch({
                ...option
            })
            if (data && data.code === 200) {
                success()
                dispatch(this.setSuccessPanelAction(true))
            }
        }
    },
    setSuccessPanelAction: function (value) {
        return {
            type: mainConstant.CHANGE_SUCCESS_PANEL_STATUS,
            status: value
        }
    }
}