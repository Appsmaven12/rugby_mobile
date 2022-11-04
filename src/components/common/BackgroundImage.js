import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

const AppBackGroundImage = ({ children }) => {

    return (
        <ImageBackground
            source={require('../../assests/images/background.png')}
            resizeMode="cover"
            style={styles.image}>
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
})

export default AppBackGroundImage
