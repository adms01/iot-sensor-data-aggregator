## IoT Sensor Ingestion Server

This app ingests data from sensors and stores datapoints so they can be retrieved later.
This project also allows threshold limits to be set on data and alerts users via. email
if a datapoint goes over the threshold.

## How to run this project?

This app is pre-configured. For development mode simply run:

1. yarn
2. yarn migrate
3. yarn seed
4. yarn develop

## Endpoints

PUT localhost:4000/data (Add SensorData)
GET localhost:4000/data (Get SensorData)
PUT localhost:4000/alert (Set Threshold)

## Test coverage

85%
