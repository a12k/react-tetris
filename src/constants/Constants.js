export const NUM_ROWS = 20 //num of rows
export const NUM_COLS = 10 //num of columns
export const TICK_MS = 400 //time between board updates

//array of tetris pieces
export const pieces =
  [[[0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], //square
   [[0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]], //I piece
   [[0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]], //T piece
   [[0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], //S piece
   [[0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0]], //Z piece
   [[0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], //J piece
   [[0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]]] //L piece

//mapping keys to keycodes
export const KEY_ENTER = 13
export const KEY_SPACE = 32
export const KEY_LEFT = 37
export const KEY_RIGHT = 39
export const KEY_DOWN = 40
export const KEY_A = 65
export const KEY_D = 68
export const KEY_R = 82