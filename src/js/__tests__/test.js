import healthCheck from "../healthCheck";

const dataList = [
  [60, { name: "Маг", health: 60 }, "healthy"],
  [50, { name: "Маг", health: 50 }, "wounded"],
  [10, { name: "Маг", health: 10 }, "critical"],
  [0, { name: "Маг", health: 0 }, "dead"],
  [-5, { name: "Маг", health: -5 }, "Некорректное значение"],
];

test.each(dataList)(
  "test healthCheck function with %s health",
  (_, object, expected) => {
    const result = healthCheck(object);

    expect(result).toBe(expected);
  }
);
