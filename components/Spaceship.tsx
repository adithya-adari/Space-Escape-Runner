import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

interface SpaceshipProps {
  position: number;
}

export default function Spaceship({
  position,
}: SpaceshipProps) {

  const flameHeight = useRef(
    new Animated.Value(12)
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(flameHeight, {
          toValue: 22,
          duration: 180,
          useNativeDriver: false,
        }),
        Animated.timing(flameHeight, {
          toValue: 12,
          duration: 180,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          left: position,
        },
      ]}
    >

      <View style={styles.engine} />

      <View style={styles.leftWing} />

      <View style={styles.body}>
        <View style={styles.window} />
      </View>

      <View style={styles.rightWing} />

      <View style={styles.engine} />

      <Animated.View
        style={[
          styles.fireLeft,
          {
            height: flameHeight,
          },
        ]}
      />

      <Animated.View
        style={[
          styles.fireRight,
          {
            height: flameHeight,
          },
        ]}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  engine: {
    width: 8,
    height: 25,
    backgroundColor: "#6B7280",
    borderRadius: 5,
  },

  leftWing: {
    width: 20,
    height: 18,
    backgroundColor: "#2563EB",
    transform: [{ rotate: "-20deg" }],
    marginRight: -3,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  body: {
    width: 44,
    height: 80,
    backgroundColor: "#E5E7EB",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#94A3B8",
  },

  window: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#38BDF8",
    borderWidth: 2,
    borderColor: "#E0F2FE",
  },

  rightWing: {
    width: 20,
    height: 18,
    backgroundColor: "#2563EB",
    transform: [{ rotate: "20deg" }],
    marginLeft: -3,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  fireLeft: {
    position: "absolute",
    bottom: -15,
    left: 18,
    width: 8,
    backgroundColor: "#F97316",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  fireRight: {
    position: "absolute",
    bottom: -15,
    right: 18,
    width: 8,
    backgroundColor: "#FACC15",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});