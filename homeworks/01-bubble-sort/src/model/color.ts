export const getRainbowColor = (index: number, length: number) =>
  `hsl(${(360 * index) / length}, 100%, 50%)`
