'use strict';
/* globals snakesLadders */

describe('Snakes and Ladders', function() {
  it('expects roll() to return a Number', function() {
    expect(snakesLadders.randomNumber('1', '6')).toEqual(jasmine.any(Number));
  });

  it('expects roll() to return a Number between `min` and' +
    ' `max` range', function() {
    // Do 25 test rolls...
    for (var i = 0; i < 25; i++) {
      var result = snakesLadders.randomNumber(1, 6);
      expect(result).not.toBeLessThan(1);
      expect(result).not.toBeGreaterThan(6);
    }
  });

  it('expects isGreaterThan() to return `true` if `num1` > `num2`', function() {
    expect(snakesLadders.isGreaterThan(2, 1)).toBe(true);
    expect(snakesLadders.isGreaterThan(0, 1)).toBe(false);
  });

  it('expects isLessThan() to return `true` if `num1` < `num2`', function() {
    expect(snakesLadders.isLessThan(2, 1)).toBe(false);
    expect(snakesLadders.isLessThan(0, 1)).toBe(true);
  });

  it('expects isSnake() to return `true` if `num` divisible by 9', function() {
    expect(snakesLadders.isSnake(9)).toBe(true);
    expect(snakesLadders.isSnake(18)).toBe(true);
    expect(snakesLadders.isSnake(27)).toBe(true);
    expect(snakesLadders.isSnake(36)).toBe(true);
  });

  it('expects isSnake() to return `false` if `num` NOT' +
    ' divisible by 9', function() {
    expect(snakesLadders.isSnake(8)).toBe(false);
    expect(snakesLadders.isSnake(19)).toBe(false);
    expect(snakesLadders.isSnake(97)).toBe(false);
    expect(snakesLadders.isSnake(52)).toBe(false);
  });

  it('expects isLadder() to return `true` if `num` === 25 || 55', function() {
    expect(snakesLadders.isLadder(25)).toBe(true);
    expect(snakesLadders.isLadder(55)).toBe(true);
  });

  it('expects isLadder() to return `false` if `num` !== 25 || 55', function() {
    expect(snakesLadders.isLadder(-25)).toBe(false);
    expect(snakesLadders.isLadder(-55)).toBe(false);
    expect(snakesLadders.isLadder(125)).toBe(false);
    expect(snakesLadders.isLadder(155)).toBe(false);
  });

  it('expects move() to return correct values landing' +
    ' on `ladder tile`', function() {
    expect(snakesLadders.move(4, 21, 100)).toEqual({
      position: 35,
      message: '4-ladder35'
    });

    expect(snakesLadders.move(6, 49, 100)).toEqual({
      position: 65,
      message: '6-ladder65'
    });
  });

  it('expects move() to return correct values landing' +
    ' on `snake tile`', function() {
    expect(snakesLadders.move(6, 57, 100)).toEqual({
      position: 60,
      message: '6-snake60'
    });

    expect(snakesLadders.move(5, 94, 100)).toEqual({
      position: 96,
      message: '5-snake96'
    });
  });

  it('expects move() to not increment position if roll doesn\'t exactly add' +
    ' up to 100', function() {
    expect(snakesLadders.move(6, 98, 100)).toEqual({
      position: 98,
      message: '6-98'
    });
  });
});
