# Technologies Used

- `pg` - PostreSQL module
- `knex` - Query builder
- `objection` - ORM built upon Knex
- `express` - API framework 

## What does it do

This is an Prototype Airline management system. Provides a REST api for checking the timetable of an Airport
(/api/airport/:id/departures and '/api/airport/:id/arrivals). Checks whether an airport is closed because of wheather conditions
or because it is closed due to other reasons.


## Airline Managment System

The idea behind this is. That a Flight can have two related Airports the Arrival airport and the Destination Airport.
The Airport has a name and a city. In order to check the status of an airport (whether is closed or not) we need to 
check of two things the weather and the current status of the airport which is described by the column `open` in the database.
Usually Wheather Report results should be provided by an API but because this is available right now, i described as another Entity in the database. I created a Service folder where i can place functionality that can be used accross the
whole application For now i created a service called AirportService and placed there the check of whether an airport is 
open or close. 

## Improvements in the future

- Add Jest tests for Services and Models
- Add Support of Docker
- Take care of production enviroment minimize codebase, deployment.

## Other Notes

I havent actually run the app because of lack of time. So this is mostly the codebase i had in mind and how i would develop it.






