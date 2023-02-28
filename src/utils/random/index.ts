import { random, sample } from "../calc"

export const getRandomColor = () =>
  sample(["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"])

export const getRandomSize = (parentSize: number) =>
  random(parentSize * 0.15, parentSize * 0.225)
