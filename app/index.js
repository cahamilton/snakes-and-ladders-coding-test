'use strict';

var snakesLadders = {};

/**
 * Init function - with optional config options
 * @param {Object} config - Object of configuration options
 * @param {Number} config.numberStart - Starting tile number
 * @param {Number} config.numberFinish - Finishing tile number
 * @param {Number} config.rollInterval - Time interval in ms between dice rolls
 * @param {Number} config.rollMin - Minimum number for a dice roll
 * @param {Number} config.rollMax - Maximum number for a dice roll
 */
snakesLadders.play = config => {
  var opts = config || {};

  // Set defaults values
  var numberStart = opts.numberStart || 1;
  var numberFinish = opts.numberFinish || 100;
  var rollInterval = opts.rollInterval || 1000;
  var rollMin = opts.rollMin || 1;
  var rollMax = opts.rollMax || 6;

  var numberCurrent = numberCurrent || numberStart;

  // Loop until we reach numberFinish
  var loop = () => {
    var roll = snakesLadders.randomNumber(rollMin, rollMax);
    var move = snakesLadders.move(roll, numberCurrent, numberFinish);

    // Update current position and log message to console
    numberCurrent = move.position;
    console.log(move.message);

    if (numberCurrent !== numberFinish) {
      setTimeout(loop, rollInterval);
    }
  };

  // Start loop
  loop();
};

/**
 * Calculates and returns new position on board and log messages
 * @param {Number} roll - Number of dice roll
 * @param {Number} numberCurrent - Current number position on board
 * @param {Number} numberFinish - Finishing number position on board
 * @return {{position: *, message: *}} - Returns object with new position
 * and log message
 */
snakesLadders.move = (roll, numberCurrent, numberFinish) => {
  var message;
  var position = numberCurrent += roll;

  var isSnake = snakesLadders.isSnake(position);
  var isLadder = snakesLadders.isLadder(position);
  var isGreaterThanFinish = snakesLadders.isGreaterThan(position, numberFinish);

  if (isGreaterThanFinish) {
    position = (numberCurrent -= roll);
    message = roll + '-' + numberCurrent;
  } else if (isSnake) {
    position = (numberCurrent -= 3);
    message = roll + '-snake' + numberCurrent;
  } else if (isLadder) {
    position = (numberCurrent += 10);
    message = roll + '-ladder' + numberCurrent;
  } else {
    position = numberCurrent;
    message = roll + '-' + numberCurrent;
  }

  return {
    position: position,
    message: message
  };
};

/**
 * Returns a random integer value
 * @param {Number} min - The min value range
 * @param {Number} max - The max value range
 * @return {Number} - Returns an integer between `min` and `max` value range
 */
snakesLadders.randomNumber = (min, max) => {
  return Math.floor((Math.random() * parseInt(max, 10)) + parseInt(min, 10));
};

/**
 * Checks if one value is less than the other
 * @param {Number} num1 - The value to compare
 * @param {Number} num2 - The value to compare against
 * @return {Boolean} - Returns `true` if `num1` is less than `num2`
 */
snakesLadders.isLessThan = (num1, num2) => {
  return num1 < num2;
};

/**
 * Checks if one value is greater than the other
 * @param {Number} num1 - The value to compare
 * @param {Number} num2 - The value to compare against
 * @return {Boolean} - Returns `true` if `num1` is greater than `num2`
 */
snakesLadders.isGreaterThan = (num1, num2) => {
  return num1 > num2;
};

/**
 * Checks if number is `snake tile`
 * @param {Number} num - The value to compare
 * @return {Boolean} - Returns `true` if divisible by `9`
 */
snakesLadders.isSnake = num => {
  return num % 9 === 0;
};

/**
 * Checks if number is a `ladder tile`
 * @param {Number} num - The value to compare
 * @return {Boolean} - Returns `true` if divisible by `9`
 */
snakesLadders.isLadder = num => {
  return num === 25 || num === 55;
};

// Lets play a game...
snakesLadders.play();
