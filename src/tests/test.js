import personHealth from '../js/function.js';

test('Здоров', () => {
  const person = {
    name: 'Маг',
    health: 90,
  };
  const received = personHealth(person);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('Ранен', () => {
  const person = {
    name: 'Маг',
    health: 40,
  };
  const received = personHealth(person);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('Критично ранен', () => {
  const person = {
    name: 'Маг',
    health: 5,
  };
  const received = personHealth(person);
  const expected = 'critical';
  expect(received).toBe(expected);
});
