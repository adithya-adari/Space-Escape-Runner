import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface HeaderProps {
  score: number;
  highScore: number;
  gameStarted: boolean;
  onStart: () => void;
}

export default function Header({
  score,
  highScore,
  gameStarted,
  onStart,
}: HeaderProps) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🚀 Space Escape Runner
      </Text>

      <View style={styles.scoreCard}>

        <Text style={styles.scoreTitle}>
          Current Score
        </Text>

        <Text style={styles.scoreValue}>
          {score}
        </Text>

      </View>

      <View style={styles.highScoreCard}>

        <Text style={styles.scoreTitle}>
          High Score
        </Text>

        <Text style={styles.highScoreValue}>
          🏆 {highScore}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onStart}
      >
        <Text style={styles.buttonText}>
          {gameStarted
            ? "🚀 Game Running"
            : "▶ Start Game"}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    letterSpacing: 1,
  },

  scoreCard: {
    width: "90%",
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },

  highScoreCard: {
    width: "90%",
    backgroundColor: "#172554",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },

  scoreTitle: {
    color: "#CBD5E1",
    fontSize: 16,
  },

  scoreValue: {
    color: "#FACC15",
    fontSize: 30,
    fontWeight: "bold",
  },

  highScoreValue: {
    color: "#22C55E",
    fontSize: 28,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 15,
    elevation: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

});