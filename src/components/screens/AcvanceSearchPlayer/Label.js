import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalFont } from '../../../utils/FontFamily';

const Label = ({ text, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#4499ff',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: `${GlobalFont}`

  },
});

export default memo(Label);