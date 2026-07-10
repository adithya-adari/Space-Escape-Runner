import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

interface AsteroidProps {
  x: number;
  y: number;
  score: number;
}
export default function Asteroid({
  x,
  y,
  score,
}: AsteroidProps) {

  const rotate = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {

    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();

  }, []);

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const asteroidSize = Math.min(
  46 + score*0.5,
  80
);

  return (
  <Animated.View
    style={[
      styles.container,
      {
        left: x,
        top: y,
        width: asteroidSize,
        height: asteroidSize,
        borderRadius: asteroidSize / 2,
        transform: [
          {
            rotate: spin,
          },
        ],
      },
    ]}
  >
    <View style={styles.crater1} />
    <View style={styles.crater2} />
    <View style={styles.crater3} />
  </Animated.View>
);
}

const styles = StyleSheet.create({

  container: {
    position: "absolute",
    
    backgroundColor: "#7C5A3A",
    borderWidth: 2,
    borderColor: "#5B3D22",
    justifyContent: "center",
    alignItems: "center",
  },

  crater1: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5B3D22",
    top: 8,
    left: 10,
  },

  crater2: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6B4423",
    bottom: 10,
    right: 8,
  },

  crater3: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#4B2E1A",
    top: 22,
    right: 15,
  },

});