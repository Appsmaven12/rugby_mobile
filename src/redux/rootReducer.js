import { combineReducers } from "redux";
import { CoachSignUpReducer } from "./reducers/CoachReducer";
import { ConnectionListReducer } from "./reducers/ConnectionReducer";
import { getMainEventsReducer } from "./reducers/createEventReducer";
import { FanSignUpReducer } from "./reducers/FanReducer";
import { FeedPostReducer } from "./reducers/GetFeedPostReducer";
import { getGroupDetailsReducer } from "./reducers/getGroupDetailsReducer";
import { getGroupReducer } from "./reducers/getGroupListReducer";
import { editMyPostsReducer, MyPostsReducer } from "./reducers/GetMyPostReducer";
import { GetProfileReducer } from "./reducers/GetProfileReducer";
import { getUserDetailsReducer } from "./reducers/GetUserDetailsReducer";
import LoginReducer from "./reducers/LoginReducer";
import LogoutReducer from "./reducers/LogoutReducer";
import { eventDetailsReducer, opportunityDetailsReducer } from "./reducers/opportunityAndEvents";
import { playerSignUpReducer, addplayerSignUpReducer, addplayerCareerSignUpReducer, playerStatsReducer } from "./reducers/PlayerSignUPReducer";
import { searchUserReducer } from "./reducers/searchReducer";
import { SendFeedBackReducer } from "./reducers/sendFeedBackReducer";
import SignUpReducer from "./reducers/SignUpReducer";
import socialLoginReducer from "./reducers/SocialLoginReducer";

const rootReducer = combineReducers({
    signUp: SignUpReducer,
    playersignUp: playerSignUpReducer,
    addplayersignUp: addplayerSignUpReducer,
    addplayercareersignUp: addplayerCareerSignUpReducer,
    playerStats: playerStatsReducer,
    loginData: LoginReducer,
    fansignUp: FanSignUpReducer,
    coachSignUp: CoachSignUpReducer,
    userlogout: LogoutReducer,
    feedPost: FeedPostReducer,
    connectionPost: ConnectionListReducer,
    profileData: GetProfileReducer,
    myPosts: MyPostsReducer,
    myEditPost: editMyPostsReducer,
    socialLogin: socialLoginReducer,
    searchUsers: searchUserReducer,
    userDetails: getUserDetailsReducer,
    getGroup: getGroupReducer,
    groupDetail: getGroupDetailsReducer,
    opportunityDetails: opportunityDetailsReducer,
    eventDetail: eventDetailsReducer,
    sendFeedback: SendFeedBackReducer,
    mainEventList: getMainEventsReducer
})

export default rootReducer;