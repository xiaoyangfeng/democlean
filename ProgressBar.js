import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const WIDTH = Math.floor(Dimensions.get('window').width);
const BAR_WIDTH = WIDTH - 150;

const ProgressBar = props => {
  const innerWidth = BAR_WIDTH * props.percent || BAR_WIDTH * 0.25;
  console.log(innerWidth);
  return (
    <View style={[styles.container]}>
      <View style={[styles.inner, {width: innerWidth}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d2d9df',
    height: 5,
    width: BAR_WIDTH,
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  inner: {
    height: 5,
    position: 'absolute',
    left: 0,
    backgroundColor: '#7bccd6',
    borderRadius: 5,
  },
});

export default ProgressBar;
