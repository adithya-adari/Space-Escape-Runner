import React from "react";
import {
  View,
 Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface GameOverProps {
  score: number;
  onRestart: () => void;
}

export default function GameOver({
  score,
  onRestart,
}: GameOverProps) {
  return (
    <View style={styles.overlay}>

      <View style={styles.card}>

        <Text style={styles.emoji}>💥</Text>

        <Text style={styles.title}>
          GAME OVER
        </Text>

        <Text style={styles.subtitle}>
          Better Luck Next Time!
        </Text>

        <View style={styles.scoreBox}>

          <Text style={styles.scoreLabel}>
            Final Score
          </Text>

          <Text style={styles.score}>
            {score}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onRestart}
        >
          <Text style={styles.buttonText}>
            🔄 PLAY AGAIN
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.80)",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    backgroundColor: "#0F172A",
    padding: 30,
    borderRadius: 25,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#3B82F6",
  },

  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#CBD5E1",
    fontSize: 18,
    marginBottom: 25,
  },

  scoreBox: {
    width: "100%",
    backgroundColor: "#1E293B",
    borderRadius: 15,
    padding: 18,
    alignItems: "center",
    marginBottom: 25,
  },

  scoreLabel: {
    color: "#94A3B8",
    fontSize: 16,
  },

  score: {
    color: "#FACC15",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 5,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});