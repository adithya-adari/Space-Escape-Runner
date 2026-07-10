import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./components/Header";
import Controls from "./components/Controls";
import Spaceship from "./components/Spaceship";
import Asteroid from "./components/Asteroid";
import GameOver from "./components/GameOver";

import useGame from "./hooks/useGame";
import StarBackground from "./components/StarBackground";
export default function App() {
  const {
  shipPosition,
  score,
  highScore,
  gameStarted,
  gameOver,
  asteroidX,
  asteroidY,
  moveLeft,
  moveRight,
  restartGame,
  startGame,
} = useGame();

  return (
    <LinearGradient
      colors={["#020024", "#090979", "#000000"]}
      style={styles.container}
    >
      <StarBackground />
      {!gameOver && (
  <>
    <Header
      score={score}
      highScore={highScore}
      gameStarted={gameStarted}
      onStart={startGame}
    />

    <Controls
      onMoveLeft={moveLeft}
      onMoveRight={moveRight}
    />
  </>
)}

     <Asteroid
  x={asteroidX}
  y={asteroidY}
  score={score}
/>

<Spaceship
  position={shipPosition}
/>

      {gameOver && (
  <GameOver
    score={score}
    onRestart={restartGame}
  />
)}
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});