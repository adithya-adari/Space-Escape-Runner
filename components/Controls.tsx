import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface ControlsProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
}

export default function Controls({
  onMoveLeft,
  onMoveRight,
}: ControlsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onMoveLeft}
      >
        <Text style={styles.icon}>⬅</Text>
        <Text style={styles.text}>LEFT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onMoveRight}
      >
        <Text style={styles.icon}>➡</Text>
        <Text style={styles.text}>RIGHT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 15,
    marginBottom: 20,
  },

  button: {
    width: 140,
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#60A5FA",
  },

  icon: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 4,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});