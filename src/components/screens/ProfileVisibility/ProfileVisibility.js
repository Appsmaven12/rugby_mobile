import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView, 
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Row, Col } from 'react-native-responsive-grid-system';
import CheckBox from '@react-native-community/checkbox';

const ProfileVisibility = ({ navigation }) => {

    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center'}}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Profile Visibility</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <Row>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Player{'\n'}Interests</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events{'\n'}Categories</Text>
                                    </Col>
                                    <Col xs={3} >
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Notification{'\n'}in Email</Text>
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Notification{'\n'}in App</Text>
                                        </View>
                                    </Col>
                                    <View style={styles.line}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                </Row>
                            </View>
                        </View>
                        <View style={styles.otherView}>
                            <View
                                style={styles.whiteview}>
                                <Row>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Player{'\n'}Interests</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events{'\n'}Categories</Text>
                                    </Col>
                                    <Col xs={3} >
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Notification{'\n'}in Email</Text>
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Notification{'\n'}in App</Text>
                                        </View>
                                    </Col>
                                    <View style={styles.line}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                </Row>
                            </View>
                        </View>
                        <View style={styles.otherView}>
                            <View
                                style={styles.whiteview}>
                                <Row>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Player{'\n'}Interests</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events{'\n'}Categories</Text>
                                    </Col>
                                    <Col xs={3} >
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Notification{'\n'}in Email</Text>
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Notification{'\n'}in App</Text>
                                        </View>
                                    </Col>
                                    <View style={styles.line}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                    <Col xs={2} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Coach</Text>
                                    </Col>
                                    <Col xs={4} >
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Events, Coach, Coach, Coach</Text>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <Col xs={3} >
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 16, height: 16 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                            />
                                        </View>
                                    </Col>
                                    <View style={styles.rowline}></View>
                                </Row>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        padding: 15
    },
    otherView: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -10
    },
    line: {
        height: 2,
        width: "100%",
        marginVertical: 10,
        backgroundColor: '#CBCBCA'
    },
    rowline: {
        height: 1,
        width: "100%",
        marginVertical: 10,
        backgroundColor: '#CBCBCA'
    }
});

export default ProfileVisibility;
