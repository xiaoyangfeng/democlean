import React, {Component} from 'react';
import {StyleSheet, ScrollView, Dimensions, Text, View} from 'react-native';

const MIN = 5;
const MAX = 80;
const RULER_WIDTH = Math.floor(Dimensions.get('window').width);
const LINE_DISTANCE = 18;
const OFFSETS = new Array(MAX - MIN + 1)
  .fill()
  .map((e, index) => index * LINE_DISTANCE);

export default class Ruler extends Component {
  constructor(props) {
    super(props);

    this.currentValue = 34;
    this.state = {
      contentOffset: Math.round((this.currentValue - MIN) * LINE_DISTANCE),
    };
  }

  onScroll(event) {
    let offset = event.nativeEvent.contentOffset.x;
    if (offset === 0) {
      return;
    }

    let val = Math.round(offset / LINE_DISTANCE + 5);
    if (val !== this.currentValue) {
      this.currentValue = val;
      this.props.onChange(val);
    }
  }

  onEnd(event) {
    let offset = event.nativeEvent.contentOffset.x;
    let val = Math.round(offset / LINE_DISTANCE + 5);
    if (val !== this.currentValue) {
      this.currentValue = val;
      this.props.onChange(val);
    }
  }

  renderRuler() {
    let result = [];

    for (let i = MIN; i <= MAX; i++) {
      let lineStyle = i % 10 === 8 ? 'long' : 'short';
      result.push(
        <View key={i} style={styles.rulerContainer}>
          <View style={[styles.line, styles[lineStyle]]} />

          {lineStyle === 'long' && <Text style={[styles.lineValue]}>{i}</Text>}
        </View>,
      );
    }
    return result;
  }

  render() {
    return (
      <View style={[styles.container]}>
        <ScrollView
          horizontal
          decelerationRate="normal"
          showsHorizontalScrollIndicator={false}
          onScroll={e => this.onScroll(e)}
          onMomentumScrollEnd={e => this.onEnd(e)}
          scrollEventThrottle={100}
          fadingEdgeLength={280}
          contentOffset={{x: this.state.contentOffset}}
          snapToOffsets={OFFSETS}>
          <View style={[styles.horizontalline]} />
          <View style={[styles.ruler]}>{this.renderRuler()}</View>
        </ScrollView>
        <View style={[styles.centerline]} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 70,
    width: RULER_WIDTH,
  },
  ruler: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RULER_WIDTH / 2,
    marginHorizontal: -LINE_DISTANCE / 2,
  },
  rulerContainer: {
    width: LINE_DISTANCE,
    alignItems: 'center',
  },
  line: {
    width: 1,
    marginRight: -1,
    backgroundColor: '#d2d9df',
  },
  lineValue: {
    top: 3,
    fontSize: 12,
    color: '#535a60',
    fontWeight: 'bold',
  },
  short: {
    marginBottom: 23,
    height: 10,
  },
  long: {
    backgroundColor: '#d2d9df',
    width: 2,
    height: 18,
  },
  centerline: {
    marginTop: 7,
    height: 54,
    width: 3,
    fontWeight: 'bold',
    backgroundColor: '#7bccd6',
    position: 'absolute',
    left: RULER_WIDTH / 2,
    zIndex: 999,
  },
  horizontalline: {
    marginTop: 35,
    height: 2,
    width: 75 * 18,
    fontWeight: 'bold',
    backgroundColor: '#d2d9df',
    position: 'absolute',
    left: RULER_WIDTH / 2,
  },
});
