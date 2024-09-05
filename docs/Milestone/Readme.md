#### Welcome to my Milestone directory!
**Owen Lindsey**

**CST-391**

_All work is my own_

_Summary provided by instructor_ 


- instructor noted that the milestone proposal looked well defined
---
**Summary**


## UPDATE MILESTONE 5 


- This web application must host a product

- We will use two javaScript Frameworks React and Angular both on an Express.js server. 

![Project outline example flowchart](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/Cst-391_milestoneExampleFlowchart.png)


- our product should include properties with at least three different data types in the MySQL database. The web application should implement the abilities to list, create, read, update, and delete a "product.

- Design and develop back-end services using Express and NodeJS that will be used by two front-end web applications. The implementation of the REST API should simply be a façade over any business logic required to process the back-end data and relational database using MySQL.

- Design and develop a front-end web application using the Angular JavaScript Framework. The web application should be integrated with the REST APIs developed using Express.

- You will redevelop the same front-end web application, this time using the React JavaScript Framework. 

- Christian Theme. As an option, consider using a biblical or Christian worldview theme for the project. Consider building an app that serves an organization you support. Consider looking for "products" such as bible verses, prayers, contacts, events, images, devotions, commentary, songs, etc. that you could track via this application. Finally, for inspirational ideas, look at some lists of existing mobile apps designed for Christian communities, located in the topic Resources. 

- Document all technical decisions and technical designs via the design report. This report will capture all appropriate UML diagrams, ER diagrams, UI designs, and other technical artifacts to support the design of the end-to-end solution and application.

---
### Table of contents

| date  | Description | folders        |
| ------ | ------ | ----------- | 
| Milestone  |  For Milestone , you will create a project proposal that defines the functionality for the complete web application.      | Diagrams- hold all uml / wireframes / UI site maps/ UI wireframes / ER diagrams |
| APP | serves as the front end angular web application for our milestone| all code for front end will be here | 
| API | serves as the backend for our application. Our API endpoints and implementation has not changed too much however I did reorganize the structure of the directory| all code for back end api endpoint / CRUD operation | 

---

### Description

- I want to develope a web application that will act as a store front for my buisness. The buisness will sell modified gamecubes with various modification such as raspberry pi installation, cubeboot software modification etc. The business will also offer services for individuals to select modifications and send their personal gamecubes to me so I can then install them for a fraction of the cost.

  
---

### List of requirements:

  
- as a user I want to be able to add aircraft components performance metrics.

- as a user I want to be able to select an aircraft to update it with maintenance information. 
  

- as a user I want to be able to add aircraft to our hangar spaces whenever a new aircraft comes in for acceptance. 


- as a user I want to be able to veiw and update graphs that give a visual display of maintenance and performance metrics such as maintenance down time; flight hours; engine hours, etc.
 

---

### Rest API 

- Get All aircraft
  - Endpoint: /aircrafts
  - HTTP Method: GET
  - Description: Retrieve a list of all GameCubes available in the store.

- Get a Specific aircraft
  - Endpoint: /aircrafts/{AircraftId}
  - HTTP Method: GET
  - Description: Retrieve details of a specific GameCube identified by its unique ID.

- Add a New aircraft
  - Endpoint: /aircrafts
  - HTTP Method: POST
  - Description: Add a new Aircraft to the maintenance centers inventory. The request body should contain the details of the new aircraft.

- Update a GameCube
  - Endpoint: /aircrafts/{AircraftId}
  - HTTP Method: PUT
  - Description: Update the details of a specific aircarft identified by its unique ID. The request body should contain the updated information.

- Remove a GameCube
  - Endpoint: /aircrafts/{AircraftId}
  - HTTP Method: DELETE
  - Description: Remove a specific aircraft from the store's inventory identified by its unique ID.
---

### Postman API documentation: https://documenter.getpostman.com/view/32764813/2sA2rCU2Sb
### API Src Code Location: https://github.com/omniV1/CST-391/tree/main/src/Milestone/src
# Diagrams 

### ER diagram 
![ER](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/CST-391-ERDiagram.png)

---

### UML DIAGRAMS

![Services UML](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/CST391-ServicesUML-Milestone1.drawio.png)

![Shopping Cart UML](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/CST391-ShoppingCartUML-Milestone1.drawio%20(1).png)

![GameCube UML](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/GameCube-Class.drawio.png)

---

### Wire frames 

![page 1](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/Cst391-Wireframe-page-1.drawio.png)

![page 2](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/CSt391-Wirefram-Page2.drawio.png)

![page 3](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/CSt391-Wireframe-Page3.drawio.png)

![page 4](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/CSt391-Wireframe-Page4.drawio.png)

---

### Site map

![Site map](https://github.com/omniV1/CST-391/blob/main/docs/Milestone/Diagrams/Cst-391-Sitemap-Milestone1.drawio.png)


# Updates for Milestone 4: 
## Updates Summary

| Feature                 | Status     | Description                                               |
|-------------------------|------------|-----------------------------------------------------------|
| CRUD Operations         | Completed  | Implemented functionality to list, create, read, update, and delete a "product". |
| Navigation              | Completed  | Utilized application navigation and Bootstrap NavBar. |

## Known Issues

No known issues at the moment.

## Challenges Encountered

1. **Route Matching**: Encountered challenges with route matching, leading to navigation errors. Resolved by ensuring correct route configurations.
2. **Integration with Backend**: Initial difficulties in integrating frontend with backend API due to mismatched URL endpoints. Addressed by aligning frontend API calls with backend routes.

## Pending Bugs/Issues

currently my routes are in error: 

## Lessons Learned

1. **Consistent API Configuration**: Ensured consistency between frontend and backend API configurations to avoid communication errors.
2. **Effective Debugging**: Learned the importance of thorough debugging techniques for identifying and resolving issues promptly.
3. **Angular Routing**: Gained a deeper understanding of Angular routing and navigation mechanisms.
4. **API Documentation**: Acknowledged the significance of well-documented APIs for seamless integration between frontend and backend.
5. **Bootstrap Integration**: Leveraged Bootstrap for responsive and visually appealing user interfaces, enhancing user experience.

---

1. **Setup Environment Configuration**:
   - Created an environment file (`environment.ts`) to store configuration variables, including the API URL.
   - Used the environment variable `apiUrl` to define the base URL for API requests.

2. **Defined Angular Components**:
   - Created Angular components for various functionalities:
     - `ProductListComponent` to display a list of GameCube products.
     - `ProductCreateComponent` to create new GameCube products.
     - `ProductDetailsComponent` to view details of a specific GameCube product.
     - `ProductUpdateComponent` to update existing GameCube products.

3. **Configured Angular Routing**:
   - Defined routes in the `AppRoutingModule` to navigate between different components based on URL paths.
   - Configured routes for viewing product list, creating new product, viewing product details, and updating product.

4. **Implemented Angular Services**:
   - Created a service named `GameCubeService` to handle HTTP requests to the backend API.
   - Implemented methods in the service to perform CRUD operations on GameCube products:
     - `getAllGameCubes()`: Retrieves all GameCube products.
     - `getGameCubeById(id)`: Retrieves a specific GameCube product by ID.
     - `createGameCube(gameCube)`: Creates a new GameCube product.
     - `updateGameCube(gameCube)`: Updates an existing GameCube product.
     - `deleteGameCube(id)`: Deletes a GameCube product by ID.

5. **Integrated with Backend API**:
   - Configured the `apiUrl` in the environment file to point to the backend API URL.
   - Utilized the `HttpClientModule` to send HTTP requests from Angular to the backend API.
   - Verified API integration by testing CRUD operations using Postman.

6. **Troubleshooting and Debugging**:
   - Identified and resolved issues related to route matching and handling of HTTP requests.
   - Ensured that frontend components and services interacted correctly with the backend API.
  
  ## Navbar screenshot 

  
