import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Ruler from './Ruler';
import ProgressBar from './ProgressBar';

Icon.loadFont();
const RulerPage = props => {
  const [value, setValue] = useState(34);
  const isLastPage = () => {
    return props.route.name === '8';
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.nav]}>
        <Icon
          name="arrowleft"
          size={25}
          color="#535a60"
          onPress={() => {
            if (props.route.name !== '1') {
              props.navigation.goBack();
            }
          }}
        />
        <ProgressBar percent={Number(props.route.name * 0.125)} />
        <Text>{props.route.name}/8</Text>
      </View>
      <Text style={[styles.text]}>How old are you?</Text>
      <View style={[styles.content]}>
        <View style={[styles.circle]}>
          <Text style={[styles.value]}>{value}</Text>
        </View>
        <View style={[styles.triangle]} />
        <Ruler onChange={setValue} />
      </View>
      <Pressable
        style={[styles.buttonContainer]}
        onPress={() => {
          if (!isLastPage()) {
            props.navigation.navigate(`${Number(props.route.name) + 1}`);
          }
        }}>
        <Text style={[styles.buttonText]}>
          {isLastPage() ? 'Submit' : 'Continue'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nav: {
    width: Dimensions.get('window').width,
    top: 55,
    position: 'absolute',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    top: 110,
    left: 30,
    position: 'absolute',
    fontSize: 24,
    fontWeight: '600',
    color: '#535a60',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  value: {
    fontSize: 40,
    fontWeight: '500',
    color: '#535a60',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#ecf4fb',
    borderRadius: 90,
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: 10,
    borderTopColor: '#ecf4fb',
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    borderRightColor: '#fff',
    margin: 0,
    padding: 0,
    marginTop: -1,
    marginLeft: 5,
  },
  buttonContainer: {
    width: 260,
    height: 45,
    justifyContent: 'center',
    bottom: 50,
    position: 'absolute',
    backgroundColor: '#7bccd6',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});

export default RulerPage;
