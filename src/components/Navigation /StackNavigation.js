import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountInformation from "../screens/AccountInformation/accountInformation";
import AdvanceSearchPlayer from "../screens/AcvanceSearchPlayer/advanceSearchPlayer";
import AddPlayerCareerInfo from "../screens/AddPlayerInfoCareer/addPlayerInfoCareer";
import AddPlayerInformation from "../screens/AddPlayerInformation/addPlayerInformation";
import CoachInformation from "../screens/coachInformation/coachInformatiomn";
import CoachProfile from "../screens/CoachProfiile/coachProfile";
import CoachReferences from "../screens/CoachReferences/coachReferences";
import Connections from "../screens/Connections/connections";
import CreateEvent from "../screens/CreateEvent/createEvent";
import CreateGroup from "../screens/CreateGroup/createGroup";
import CreateNewPost from "../screens/CreateNewPost/createNewPost";
import FeedPage from "../screens/Feed/FeedPage";
import InviteFriends from "../screens/InviteFriends/inviteFriends";
import InviteMembers from "../screens/InviteMembers/inviteMembers";
import MainProfile from "../screens/MainProfile/mainProfile";
import PersonalInformation from "../screens/PersonalInformation/personalInformation";
import PlayerComparisonView from "../screens/PlayerComarisonView/PlayerComarisonView";
import PlayerComparison from "../screens/PlayerComparison/PlayerComparison";
import PlayerInformation from "../screens/PlayerInformation/playerInformatiion";
import PlayerStats from "../screens/PlayerStats/playerStats";
import Posts from "../screens/Posts/Posts";
import Profile from "../screens/Profile/Profile";
import ProfileViews from "../screens/ProfileViews/profileviews";
import Roles from "../screens/role/roles";
import SearchPlayer from "../screens/SearchPlayer/searchPlayer";
import SendFeedback from "../screens/SendFeedback/sendfeedback";
import Settings from "../screens/Settings/settings";
import Stats from "../screens/Stats/stats";
import Notifications from "../screens/Notifications/Notifications";
import MyPost from "../screens/MyPost/MyPost";
import ProfileVisibility from "../screens/ProfileVisibility/ProfileVisibility";
import ChangePassword from "../screens/ChangePassword/changepassword";
import Events from "../screens/Events/Events";
import AddPlayer from "../screens/AddPlayer/AddPlayer";
import Messages from "../screens/Message/Message";
import Verification from "../screens/Veriification/Verification";
import Payment from "../screens/Payment/Payment";
import Groups from "../screens/Groups/Groups";
import RugbyGroup from "../screens/RugbyGroup/RugbyGroup";
import InviteParticipants from "../screens/InviteParticipants/InviteParticipants";
import EditRole from "../screens/EditRole/editRole";
import CoachData from "../screens/CoachInfo/coachInfo";
import CreateOpportunitiesandEvents from "../screens/CreateOpportunitiesandEvent/createOpportunitiesandEvent";
import OpportunitiesDetails from "../screens/OpportunitiesAndEventDetails/OpportunitiesDetails";
import EventDetails from "../screens/OpportunitiesAndEventDetails/EventDetails";

const Stack = createStackNavigator();

const AllNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="FeedPage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FeedPage" component={FeedPage} />
            <Stack.Screen name="Roles" component={Roles} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="CoachInfo" component={CoachInformation} />
            <Stack.Screen name="AccountInfo" component={AccountInformation} />
            <Stack.Screen name="AddPlayerInfo" component={AddPlayerInformation} />
            <Stack.Screen name="AddPlayerCareerInfo" component={AddPlayerCareerInfo} />
            <Stack.Screen name="PlayerStats" component={PlayerStats} />
            <Stack.Screen name="SearchPlayer" component={SearchPlayer} />
            <Stack.Screen name="AdvanceSearchPlayer" component={AdvanceSearchPlayer} />
            <Stack.Screen name="Connections" component={Connections} />
            <Stack.Screen name="CreateNewPost" component={CreateNewPost} />
            <Stack.Screen name="InviteMembers" component={InviteMembers} />
            <Stack.Screen name="CreateGroup" component={CreateGroup} />
            <Stack.Screen name="Posts" component={Posts} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="PlayerInformation" component={PlayerInformation} />
            <Stack.Screen name="InviteFriends" component={InviteFriends} />
            <Stack.Screen name="ProfileViews" component={ProfileViews} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="SendFeedback" component={SendFeedback} />
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
            <Stack.Screen name="MainProfile" component={MainProfile} />
            <Stack.Screen name="CoachProfile" component={CoachProfile} />
            <Stack.Screen name="CoachReferences" component={CoachReferences} />
            <Stack.Screen name="PlayerComparison" component={PlayerComparison} />
            <Stack.Screen name="PlayerComparisonView" component={PlayerComparisonView} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="MyPost" component={MyPost} />
            <Stack.Screen name="ProfileVisibility" component={ProfileVisibility} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="AddPlayer" component={AddPlayer} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Groups" component={Groups} />
            <Stack.Screen name="RugbyGroup" component={RugbyGroup} />
            <Stack.Screen name="OpportunitiesDetails" component={OpportunitiesDetails} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="InviteParticipants" component={InviteParticipants} />
            <Stack.Screen name="EditRole" component={EditRole} />
            <Stack.Screen name="CoachData" component={CoachData} />
            <Stack.Screen name="CreateOpportunitiesandEvents" component={CreateOpportunitiesandEvents} />
        </Stack.Navigator>
    )
}

export default AllNavigation