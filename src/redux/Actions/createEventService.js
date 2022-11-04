import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/createEventAction";

const { createMainEventsStart, createMainEventsSuccess, createMainEventsFailure,
    getMainEventsStart, getMainEventsSuccess, getMainEventsFailure } = actions

export const createMainEventsService = (values, navigation) => async (dispatch) => {
    console.log("createMainEventsService", values);
    dispatch(createMainEventsStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addEvents`,
            {
                title: values.title,
                time: values.time,
                date: values.date,
                image: values.image,
                description: values.description,
                location: values.location,
                categories: values.categories
            }
        );
        console.log("createMainEventsSuccess", response)
        dispatch(createMainEventsSuccess(response.data.response));
        return response.data.response

    } catch (error) {
        console.log(error)
        dispatch(createMainEventsFailure(error.message));
    }
};


export const getMainEventsService = (params) => async (dispatch) => {
    console.log("getMainEventsService", params);
    dispatch(getMainEventsStart());
    try {
        const response = await authAxios.get(`https://api-rugby.appsmaventech.com/api/v1/user/getEventsList?date=${params.date}&skip=0&limit=10`);
        console.log("getMainEventsSuccess", response)
        dispatch(getMainEventsSuccess(response?.data?.response));
        return response.data.response

    } catch (error) {
        console.log(error)
        dispatch(getMainEventsFailure(error.message));
    }
};
