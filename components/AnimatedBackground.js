import React, { useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const STAR_COUNT = 50;

export default function AnimatedBackground() {
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: new Animated.Value(Math.random() * height),
    speed: Math.random() * 5000 + 3000,
  }));

  useEffect(() => {
    stars.forEach(({ y, speed }) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(y, {
            toValue: height,
            duration: speed,
            useNativeDriver: false,
          }),
          Animated.timing(y, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
        ])
      ).start();
    });
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      {stars.map((star, i) => (
        <Animated.View
          key={i}
          style={[
            styles.starContainer,
            {
              top: star.y,
              left: star.x,
            },
          ]}
        >
          <Svg height="60" width="60" viewBox="0 0 24 24">
            <Polygon
              points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8"
              fill="#FFF59D"
              opacity={0.3 + Math.random() * 0.7}
            />
          </Svg>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  starContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
