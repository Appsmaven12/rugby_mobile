import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/opportunityAndEventsAction";

const { createOpportunityStart, createOpportunitySuccess, createOpportunityFailure, createEventsStart, createEventsSuccess, createEventsFailure,
    opportunityDetailsStart, opportunityDetailsSuccess, opportunityDetailsFailure, eventDetailsStart, eventDetailsSuccess, eventDetailsFailure
} = actions

export const createOpportunityService = (values, navigation) => async (dispatch) => {
    console.log("createOpportunity", values);
    dispatch(createOpportunityStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addGroupOpportunities`, {
            type: values.type,
            forType: values.forType,
            isTeamOrClub: values.isTeamOrClub,
            about: values.about,
            groupId: values.groupId,
            location: values.location
        });
        console.log("createOpportunitySuccess", response)
        dispatch(createOpportunitySuccess(response.data.response));
        return response.data.response
    } catch (error) {
        console.log(error)
        dispatch(createOpportunityFailure(error.message));
    }
};

export const createEventsService = (values, navigation) => async (dispatch) => {
    console.log("createEvents", values);
    dispatch(createEventsStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addGroupEvents`,
            {
                title: values.title,
                time: values.time,
                date: values.date,
                image: values.image,
                description: values.description,
                groupId: values.groupId,
                location: values.location,
                categories: values.categories
            }
        );
        console.log("createEventsSuccess", response)
        dispatch(createEventsSuccess(response.data.response));
        return response.data.response

    } catch (error) {
        console.log(error)
        dispatch(createEventsFailure(error.message));
    }
};

export const OpportunityDetailService = (values, navigation) => async (dispatch) => {
    console.log("OpportunityDetailService---values", values);
    dispatch(opportunityDetailsStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/getGroupOpportunitiesDetails`, {
            id: values
        });
        console.log("Opportunity-response", response)
        dispatch(opportunityDetailsSuccess(response?.data?.response?.data));
        return response?.data?.response?.data

    } catch (error) {
        console.log(error)
        dispatch(opportunityDetailsFailure(error.message));
    }
};

export const EventDetailService = (values, navigation) => async (dispatch) => {
    console.log("eventDetails--id", values);
    dispatch(eventDetailsStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/getGroupEventDetails`,
            {
                id: values,
            }
        );
        console.log("eventDetailsSuccess-response", response)
        dispatch(eventDetailsSuccess(response?.data?.response?.data));
        return response?.data?.response?.data

    } catch (error) {
        console.log(error)
        dispatch(eventDetailsFailure(error.message));
    }
};
