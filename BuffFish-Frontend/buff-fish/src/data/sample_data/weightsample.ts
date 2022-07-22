import { ChartData } from "../types/ChartData";

function randomIntFromInterval(min: number, max: number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const weigthsample: ChartData[] = [
  {
    "id": "average",
    "color": "#90caf9",
    "data": [
      {
        "x": 0,
        "y": 69
      },
      {
        "x": 1,
        "y": 69
      },
      {
        "x": 2,
        "y": 70
      },
      {
        "x": 3,
        "y": 69
      },
      {
        "x": 4,
        "y": 69
      },
      {
        "x": 5,
        "y": 69
      },
      {
        "x": 6,
        "y": 70
      },
      {
        "x": 7,
        "y": 69
      },
      {
        "x": 8,
        "y": 69
      },
      {
        "x": 9,
        "y": 69
      },
      {
        "x": 10,
        "y": 69
      },
    ]
  },
  {
    "id": "actual",
    "data": [
      {
        "x": 0,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 1,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 2,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 3,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 4,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 5,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 6,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 7,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 8,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 9,
        "y": randomIntFromInterval(65, 72)
      },
      {
        "x": 10,
        "y": randomIntFromInterval(65, 72)
      },
    ]
  },
]
