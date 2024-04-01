function knightPosition(pawnPositions: string[]): string[] {
  const convertToCoordinates = (position: string): number[] => {
    const file = position.charCodeAt(0) - 97;
    const rank = 8 - parseInt(position.charAt(1));
    return [file, rank];
  };

  const isValid = ([file, rank]: number[]): boolean => {
    return file >= 0 && file <= 7 && rank >= 0 && rank <= 7;
  };

  // langkah kuda. kuda langkah 3
  const knightMoves: number[][] = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const hitungLangkah = (knightPosition: number[]): number => {
    let i = 0;
    for (const [dx, dy] of knightMoves) {
      const [nx, ny] = [knightPosition[0] + dx, knightPosition[1] + dy];
      if (
        isValid([nx, ny]) &&
        pawnPositions.includes(String.fromCharCode(97 + nx) + (8 - ny))
      ) {
        i++;
      }
    }
    return i;
  };

  let maxI = 0;
  let posisi: string[] = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const currentPosition = [i, j];
      const count = hitungLangkah(currentPosition);
      if (count > maxI) {
        maxI = count;
        posisi = [String.fromCharCode(97 + i) + (8 - j)];
      } else if (count === maxI) {
        posisi.push(String.fromCharCode(97 + i) + (8 - j));
      }
    }
  }

  return posisi;
}

// Testing
console.log(knightPosition(["a1", "b6", "c3", "e5", "f8", "h4"]));
