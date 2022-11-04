import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/connectionAction";

const { connectionListStart, connectionListSuccess, connectionListFailure,
  acceptorDeclineconnectionListStart, acceptorDeclineconnectionListSuccess, acceptorDeclineconnectionListFailure,
  sendConnectionStart, sendConnectionSuccess, sendConnectionFailure,
  removeConnectionStart, removeConnectionSuccess, removeConnectionFailure,
} = actions;

export const ConnectionList = (params) => async (dispatch) => {
  dispatch(connectionListStart());
  try {
    const response = await authAxios.get(`https://api-rugby.appsmaventech.com/api/v1/user/getConnections?isPending=${params.isPending}&skip=0&limit=10`
    )
    dispatch(connectionListSuccess(response.data.response.data));
    return response.data.response.data

  } catch (error) {
    console.log(error)
    dispatch(connectionListFailure(error.message));
  }
};

export const sendConnection = (values, navigation) => async (dispatch) => {
  dispatch(sendConnectionStart());
  try {
    const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/sendConnectionRequest`, {
      otherUserId: values.otherUserId

    });
    dispatch(sendConnectionSuccess(response.data.response));
    return response.data.response

  } catch (error) {
    console.log(error)
    dispatch(sendConnectionFailure(error.message));
  }
};

export const AcceptDeclineConnectionList = (values, button) => async (dispatch) => {
  dispatch(acceptorDeclineconnectionListStart());
  try {
    const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/acceptRejectConnectionRequest`, {
      status: values.status,
      connectionId: values.connectionId

    });
    let params = {
      isPending: false
    }
    if (button === 'current') {
      dispatch(ConnectionList(params))

    } else {
      params.isPending = true
      dispatch(ConnectionList(params))
    }
    dispatch(acceptorDeclineconnectionListSuccess(response.data.response.data));
    return response.data.response.data

  } catch (error) {
    console.log(error)
    dispatch(acceptorDeclineconnectionListFailure(error.message));
  }
};

export const RemoveConnection = (values, button) => async (dispatch) => {
  dispatch(removeConnectionStart());
  try {
    const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/removeConnection`, {
      connectionId: values
    });
    dispatch(removeConnectionSuccess(response.data.response.data));
    return response.data.response.data

  } catch (error) {
    console.log(error)
    dispatch(removeConnectionFailure(error.message));
  }
};