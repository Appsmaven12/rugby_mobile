import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import AntIcon from 'react-native-vector-icons/AntDesign';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';

export default function StatsModal() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Modal isVisible={isModalVisible}>
            <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 10 }}>
                <TouchableOpacity onPress={toggleModal} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <AntIcon name="closecircle" color={'#616061'} size={20} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                    <Image style={{ height: 90, width: 90, resizeMode: 'contain' }} source={require('../../../assests/images/terms-condition.png')} />
                    <Text style={{ fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Terms and Conditions</Text>
                    <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}` }}>jkbcewuc b iugcuevue uhcge hgcuhevf bieubfuevf hbuyewvchgve uvcghewe viucew jbvewv jhvcehuwgvcew vchgewvc ejhbvghewvce hvuwevc ew jhcvehwcjhwbchewvcjew jchbewj</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button
                        buttonStyle={{
                            backgroundColor: "#DFDEDF",
                            borderRadius: 5,
                            height: 40,
                            width: responsiveWidth(37)
                        }}
                        containerStyle={{
                            justifyContent: 'center',
                            opacity: 1,
                            paddingBottom: 10
                        }}
                        titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                        title="Decline"
                    />
                    <Button
                        buttonStyle={{
                            backgroundColor: "#152D68",
                            borderRadius: 5,
                            height: 40,
                            width: responsiveWidth(37)
                        }}
                        containerStyle={{
                            justifyContent: 'center',
                            opacity: 1,
                            paddingBottom: 10
                        }}
                        titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                        title="Accept"
                    />
                </View>
            </View>
        </Modal>
    )
}
