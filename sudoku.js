function check(sudoku) {
    let [row, col, sub] = [Array(9).fill(0), Array(9).fill(0), Array(9).fill(0)];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            row[r] ^= (1<<sudoku[r][c]);
            col[c] ^= (1<<sudoku[r][c]);
            sub[Math.floor(r/3)*3 + Math.floor(c/3)] ^= (1<<sudoku[r][c]);
        }
    }
    return row.every(e => e === 1022) && col.every(e => e === 1022) && sub.every(e => e === 1022);
}


let sudoku = [
    [7, 5, 1, 8, 4, 3, 9, 2, 6],
    [8, 9, 3, 6, 2, 5, 1, 7, 4],
    [6, 4, 2, 1, 7, 9, 5, 8, 3],

    [4, 2, 5, 3, 1, 6, 7, 9, 8],
    [1, 7, 6, 9, 8, 2, 3, 4, 5],
    [9, 3, 8, 7, 5, 4, 6, 1, 2],

    [3, 6, 4, 2, 9, 7, 8, 5, 1],
    [2, 8, 9, 5, 3, 1, 4, 6, 7],
    [5, 1, 7, 4, 6, 8, 2, 3, 9]
];

if (check(sudoku)) {
    console.log("Pass");
} else {
    console.log("Fail");
}

