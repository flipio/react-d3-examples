import {times} from "lodash";

export function rand(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateLineData() {
  const data = [
    {
      x: rand(60, 100),
      y: rand(100, 120),
    },
  ];

  times(10, i => {
    const prev = data[i];

    data.push({
      x: prev.x + 10,
      y: rand(100, 120),
    });
  });

  return data;
}
