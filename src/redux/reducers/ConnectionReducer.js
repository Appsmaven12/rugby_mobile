import action from "../actionsType/connectionAction"

const connection = {
    loading: true,
    data: [],
    error: null,
};

const {
    CONNECTIOIN_LIST_START,
    CONNECTIOIN_LIST_SUCCESS,
    CONNECTIOIN_LIST_FAILURE,

    ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_START,
    ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_SUCCESS,
    ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_FAILURE,

    SEND_CONNECTION_START,
    SEND_CONNECTION_SUCCESS,
    SEND_CONNECTION_FAILURE,

    REMOVE_CONNECTION_START,
    REMOVE_CONNECTION_SUCCESS,
    REMOVE_CONNECTION_FAILURE,
} = action;

export function SendConnectionReducer(state = connection, action) {
    switch (action.type) {
        case SEND_CONNECTION_START:
            return {
                ...state,
                loading: true,
            };
        case SEND_CONNECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case SEND_CONNECTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function ConnectionListReducer(state = connection, action) {
    switch (action.type) {
        case CONNECTIOIN_LIST_START:
            return {
                ...state,
                loading: true,
            };
        case CONNECTIOIN_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case CONNECTIOIN_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function AcceptorDeclineConnectionReducer(state = connection, action) {
    switch (action.type) {
        case ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_START:
            return {
                ...state,
                loading: true,
            };
        case ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function removeConnectionReducer(state = connection, action) {
    switch (action.type) {
        case REMOVE_CONNECTION_START:
            return {
                ...state,
                loading: true,
            };
        case REMOVE_CONNECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case REMOVE_CONNECTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

