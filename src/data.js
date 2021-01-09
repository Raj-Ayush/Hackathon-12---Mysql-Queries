const locations = [
  // id(integer, primary key)  code(varchar)  name(varchar)
  [1, "JFK", "New York"],
  [2, "PVG", "Shanghai"],
  [3, "IST", "Istanbul"],
  [4, "LHR", "London"],
  [5, "SVO", "Moscow"],
  [6, "LIM", "Lima"],
  [7, "CDG", "Paris"],
  [8, "NRT", "Tokyo"],
];
const flights = [
  // id(integer, primary key) origin_id(integer) destination_id(integer) duration(integer)
  [1, 1, 4, 415],
  [2, 2, 7, 760],
  [3, 3, 8, 700],
  [4, 1, 7, 435],
  [5, 5, 7, 245],
  [6, 6, 1, 455],
];

const passengers = [
  // id(integer, primary key) name(varchar) flight_id(integer)
  [1, "Alice", 1],
  [2, "Bob", 1],
  [3, "Charlie", 2],
  [4, "Dave", 2],
  [5, "Erin", 4],
  [6, "Frank", 6],
  [7, "Grace", 6],
];

module.exports = {
  locations,
  flights,
  passengers,
};
