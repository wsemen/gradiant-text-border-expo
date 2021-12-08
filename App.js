import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, {
  text,
  linearGradient,
  stop
} from 'react-native-svg';


export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Svg style={styles.popular}>
          <linearGradient id="gradiant" x1="0" x2="0" y1="0" y2="80%" gradientUnits="userSpaceOnUse" >
            <stop stopColor="purple" offset="0%"/>
            <stop stopColor="#1e5d7d" offset="100%"/> 
          </linearGradient>
          <text
            fill="none"
            stroke="url(#gradiant)"
            fontSize="30vw"
            fontWeight="bold"
            y="100"
          >
            Popular
          </text>
          </Svg>
          <Text style={styles.trending}>Trending This Week</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: "monospace, monospace"
  },
  header: {
    backgroundColor: '#000',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popular: {
    width: '100%',
    height: 200
  },
  trending: {
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    bottom: 30,
    fontWeight: 600,
  }
});
