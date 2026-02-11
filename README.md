[SBA 319 Mongoose Database Application](https://www.canva.com/design/DAFrigp0V5U/76Et4j_4KjlIyGSiv6gNsw/edit)

# AnimalLog
-   An Animal Log that gives you various information on all kinds of animals. 3 Collection (Fish, Mammal, Bird)

## Setups For User
-   `npm run seed` - to seed all three databases
-   `npm run dev` - to run server

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/bird | Index of All Birds |
POST | /api/bird | Create A Bird|
GET | /api/bird/:id | Index of A Single Bird (By ID) |
PATCH | /api/bird/:id | Update A Single Bird |
DELETE | /api/bird/:id| Delete A Single Bird |
GET | /api/fish | Index of All Fish |
POST | /api/fish | Create An Fish |
GET | /api/fish/:id | Index of A Single Fish (By ID) |
PATCH | api/fish/:id | Update A Single Fish |
DELETE | /api/fish/:id | Delete A Single Fish |
GET | /api/mammal | Index of All Mammal |
POST | /api/mammal | Create An Mammal |
GET | /api/mammal/:id | Index of A Single Mammal (By ID) |
PATCH | api/mammal/:id | Update A Single Mammal |
DELETE | /api/mammal/:id | Delete A Single Mammal |

### Starter Steps
-   `touch server.js`
-   `npm init -y`
-   `"dev": "nodemon server.js" & "type": "module"`
-   `npm i express dotenv mongoose`
-   `touch .gitignore .env`
-   `node_modules/` inside .gitignore
-   `.env` inside. .gitignore
