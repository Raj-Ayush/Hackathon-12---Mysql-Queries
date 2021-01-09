const { locations, flights, passengers } = require("./data");
const mysql = require("mysql");
//create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

// populate data
const populateData = async () => {
  connection.query("DROP TABLE IF EXISTS locations", (err, result) => {
    if (err) throw err;
    console.log("Old locations TABLE is dropped.....");
  });
  connection.query("DROP TABLE IF EXISTS flights", (err, result) => {
    if (err) throw err;
    console.log("Old flights TABLE is dropped.....");
  });
  connection.query("DROP TABLE IF EXISTS passengers", (err, result) => {
    if (err) throw err;
    console.log("Old passengers TABLE is dropped.....");
  });
  // create locations table
  connection.query(
    "CREATE TABLE locations(id INTEGER  NOT NULL, code VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL)",
    (err, result) => {
      if (err) throw err;
      console.log("New locations TABLE has been created....");
    }
  );
  // insert locations data
  locations.forEach((loc) => {
    connection.query(
      `INSERT INTO locations(id, code, name) VALUES (${loc[0]}, '${loc[1]}', '${loc[2]}')`,
      (err, result) => {
        if (err) throw err;
      }
    );
  });
  console.log("Locations data inserted....");
  // create flights table
  connection.query(
    "CREATE TABLE flights(id INTEGER NOT NULL, origin INTEGER NOT NULL, destination INTEGER NOT NULL, duration INTEGER NOT NULL)",
    (err, result) => {
      if (err) throw err;
      console.log("New flights TABLE has been created....");
    }
  );
  // // insert flights data
  flights.forEach(async (flight) => {
    connection.query(
      `INSERT INTO flights(id, origin, destination, duration) VALUES (${flight[0]}, ${flight[1]}, ${flight[2]}, ${flight[3]})`,
      (err, result) => {
        if (err) throw err;
      }
    );
  });
  console.log("Flights data inserted....");
  // create passengers table
  connection.query(
    "CREATE TABLE passengers(id INTEGER NOT NULL, name VARCHAR(255) NOT NULL, flight_id INTEGER NOT NULL)",
    (err, result) => {
      if (err) throw err;
      console.log("New passenger table in created....");
    }
  );
  // insert passengers data
  passengers.forEach(async (pass) => {
    connection.query(
      `INSERT INTO passengers(id, name, flight_id) VALUES (${pass[0]}, '${pass[1]}', ${pass[2]})`,
      (err, result) => {
        if (err) throw err;
      }
    );
  });
  console.log("passengers data inserted....");
};

populateData();
connection.end((err) => {
  if (err) throw err;
  console.log("SETUP complete....");
});
