import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
 SHIP_WIDTH,
  SHIP_HEIGHT,
  ASTEROID_SIZE,
  SHIP_SPEED,
  ASTEROID_SPEED,
} from "../constants/GameConstants";

export default function useGame() {
  const [shipPosition, setShipPosition] = useState(
    SCREEN_WIDTH / 2 - SHIP_WIDTH / 2
  );

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [asteroidX, setAsteroidX] = useState(
    Math.random() * (SCREEN_WIDTH - ASTEROID_SIZE)
  );

  const [asteroidY, setAsteroidY] = useState(-ASTEROID_SIZE);
  const [asteroidDirection, setAsteroidDirection] = useState(1);
  

  // ----------------------------
  // Move Left
  // ----------------------------
  const moveLeft = () => {
    if (!gameStarted || gameOver) return;

    setShipPosition((prev) =>
      Math.max(0, prev - SHIP_SPEED)
    );
  };

  // ----------------------------
  // Move Right
  // ----------------------------
  const moveRight = () => {
    if (!gameStarted || gameOver) return;

    setShipPosition((prev) =>
      Math.min(
        SCREEN_WIDTH - SHIP_WIDTH,
        prev + SHIP_SPEED
      )
    );
  };

  // ----------------------------
  // Start Game
  // ----------------------------
  const startGame = () => {
    setScore(0);

    setGameOver(false);

    setGameStarted(true);

    setShipPosition(
      SCREEN_WIDTH / 2 - SHIP_WIDTH / 2
    );

    setAsteroidX(
      Math.random() * (SCREEN_WIDTH - ASTEROID_SIZE)
    );

    setAsteroidY(-ASTEROID_SIZE);
   
  };

  // ----------------------------
  // Restart Game
  // ----------------------------
  const restartGame = () => {
    startGame();
  };
  useEffect(() => {
  const loadHighScore = async () => {
    const savedScore = await AsyncStorage.getItem("HIGH_SCORE");

    if (savedScore !== null) {
      setHighScore(Number(savedScore));
    }
  };

  loadHighScore();
}, []);

  // ----------------------------
  // Game Loop
  // ----------------------------
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setAsteroidY((prevY) => { //sety
        const currentSpeed =
          Math.min(
            ASTEROID_SPEED + score * 0.2,
                14
            );

const newY = prevY + currentSpeed;
setAsteroidX((prevX) => {

  let newX = prevX + asteroidDirection * 5;

  if (newX <= 0) {

    setAsteroidDirection(1);
    newX = 0;

  }

  if (newX >= SCREEN_WIDTH - ASTEROID_SIZE) {

    setAsteroidDirection(-1);
    newX = SCREEN_WIDTH - ASTEROID_SIZE;

  }

  return newX;

});

        const asteroidBottom =
          newY + ASTEROID_SIZE;

        const shipTop =
          SCREEN_HEIGHT - SHIP_HEIGHT - 40;

        const collision =
          asteroidBottom >= shipTop &&
          asteroidX + ASTEROID_SIZE >
            shipPosition &&
          asteroidX <
            shipPosition + SHIP_WIDTH;

        if (collision) {

  Haptics.notificationAsync(
    Haptics.NotificationFeedbackType.Error
  );

  setGameOver(true);

  return -ASTEROID_SIZE;

}

        if (newY > SCREEN_HEIGHT) {

  setScore((prev) => {

    const newScore = prev + 1;

    if (newScore > highScore) {

      setHighScore(newScore);

      AsyncStorage.setItem(
        "HIGH_SCORE",
        newScore.toString()
      );

    }

    return newScore;

  });
  


  let randomX =
  Math.random() *
  (SCREEN_WIDTH - ASTEROID_SIZE);

// Prevent spawning almost at the same place
while (
  Math.abs(randomX - asteroidX) < 80
) {
  randomX =
    Math.random() *
    (SCREEN_WIDTH - ASTEROID_SIZE);
}

setAsteroidX(randomX);
setAsteroidDirection(
  Math.random() > 0.5 ? 1 : -1
);

  return -(
  ASTEROID_SIZE +
  Math.random() * 250
);

}

        return newY;
      });
      
    }, 30);

    return () => clearInterval(interval);
 }, [
  gameStarted,
  gameOver,
  asteroidX,
  shipPosition,
  score,
]);

  return {
    shipPosition,
    score,
    highScore,
    gameStarted,
    gameOver,
    asteroidX,
    asteroidY,

    
    moveLeft,
    moveRight,
    startGame,
    restartGame,
  };
  
}