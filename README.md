# Book Reviewer


<img height="64px" src="https://cdn.svgporn.com/logos/express.svg"><br>

Book Reviewer is a simple api service for management book & review a book built with Node JS Express and MySQL Database

# Install

Download from branch master

```
git clone https://github.com/Zainal21/Book-Reviewer-with-Express-MySQL.git
```

Install node dependencies

```
npm install
```

Chage Configuration for Connection to Database

```
Change in app/Config/Connection.js
 
### Book Resource API

| Endpoint                  | Method | Description                                  | Data                                                                                             |
| ------------------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| /api/book                 | GET    | used for show all book                       | -                                                                                                |
| /api/book                 | POST   | used for store a new book                    | Body Request :<br>title: string, page: int, author: string, <br> isbn: int(10),                  |
|                           |        |                                              | publish_year: year,publisher: string                                                             |     
| /api/book/:id             | GET    | used for show detail book by id              | Request Params  :<br>id: int,                                                                    |
| /api/book/:id             | PUT    | used for update a book.                      | Request Params  :<br>id: int,                                                                    |
| /api/book/:id             | DELETE | used for delete a book by id .               | Request Params  :<br>id: int                                                                     |


### Review Book Resource API

| Endpoint                  | Method | Description                                  | Data                                                                                             |
| ------------------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| /api/review                 | GET    | used for show all review a book            | -                                                                                                |
| /api/review                 | POST   | used for store a new review                | Body Request :<br>book_id: int, review:text                                                      |
| /api/review/:id             | PUT    | used for update a review.                  | Request Params  :<br>id: int,                                                                    |
| /api/review/:id             | DELETE | used for delete a review by id .           | Request Params  :<br>id: int                                                                     |




--------------------------------------------------------------------------------------------------------------------
