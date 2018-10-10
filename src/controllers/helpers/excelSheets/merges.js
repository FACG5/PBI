const merges = [
  { start: { row: 3, column: 3 }, end: { row: 4, column: 15 } },

];
for (let i = 1; i < 38; i++) {
  const merge = { start: { row: 6, column: i }, end: { row: 7, column: i } };
  merges.push(merge);
}

module.exports = merges;
