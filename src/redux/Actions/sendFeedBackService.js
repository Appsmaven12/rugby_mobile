import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/sendFeedBackAction";

const {
    sendFeedBackStart, sendFeedBackSuccess, sendFeedBackFailure,
} = actions;

export const sendFeedBack = (values, navigation) => async (dispatch) => {
    dispatch(sendFeedBackStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addFeedback`, {
            text: values.text
        });
        dispatch(sendFeedBackSuccess(response.data.response));
        return response.data.response
    } catch (error) {
        console.log(error)
        dispatch(sendFeedBackFailure(error.message));
    }
};
