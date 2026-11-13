
____________________________________
File and folder structure of nestjs 
____________________________________

1. Dist - always say about distribution of when we build then genrte autmaticaly dist folder me complie version bnaya jata h and that compile version go on the production server
this is non editable this automatically genered 

2. Node modules - all pacakages that used in our pacakages and library that sed in our projects 

3. SRC - is the main directory of any project every this in development sed inside src directory 

    3.1. app.controller.spec.ts - this used for unit testing not for beginers work 
    3.2. controller file - req takes and response give 
    3.3  services - business logics 
    
4. main.ts - main file of nest js that register port and app 
5.test - for testing directory 
tsconfig.build - build ke liye 
6.package-lock.json - explain 
7.package.json - explain



<!-- Create your first controller with cli  -->

<!-- Decorators -->
@function is decorators 
@injectable() descorators 

CLI se controller 
cmd - nest g controller user

NOTE : If you want every changes should reflects 
npm run start:dev

Nest js services: generate and inject

What is services 

Create services using cli cmd - 
nest g s product

Modules in Nest js 
nest g module employee

Nest js architecture explained
nest js architecture imterview questions 

12 November 2026

REST APIS

1.GET 
2.POST
3.PUT
4.PATCH
5.DELETE


---
### Database Connection (PostgreSQL + TypeORM)
- **Packages**: `@nestjs/typeorm`, `typeorm`, `pg`, `@nestjs/config`
- **Config**: Configured in `app.module.ts` via `TypeOrmModule.forRootAsync()` using `.env`.
- **Entity**: `Student` entity created with id, name, email, age, createdAt, updatedAt.

---
### 1. GET API
Used to retrieve data from the server/database.
- **GET /student**: Returns an array of all students (`studentRepository.find()`).
- **GET /student/:id**: Returns a single student by id (`studentRepository.findOneBy({ id })`). Throws `NotFoundException` if student is not found.

---
### 2. POST API
Used to create a new resource in the database.
- **POST /student**: Receives `CreateStudentDto` (validated via `class-validator`) in the request body.
- Checks if the email is already registered; if yes, throws `ConflictException` (HTTP 409).
- Saves new student using `studentRepository.create()` and `studentRepository.save()`.
- Returns HTTP 201 Created with the saved student entity.

---
### 3. PUT API
Used to update or replace an entire existing resource.
- **PUT /student/:id**: Replaces the student data with the payload from `UpdateStudentDto`.
- Ensures student exists (throws `NotFoundException` if not).
- Checks for email uniqueness if updating to a new email (throws `ConflictException` if already taken).
- Updates name, email, age and updates timestamp.

---
### 4. PATCH API
Used to perform a partial update on an existing resource (only modifying fields that are sent).
- **PATCH /student/:id**: Accepts `PatchStudentDto` where all fields are optional.
- If a new email is provided, verifies uniqueness against other records.
- Updates only the provided fields (`name`, `email`, and/or `age`), leaving other fields unchanged.
- Saves and returns the updated student.

---
### 5. DELETE API
Used to remove a resource from the database.
- **DELETE /student/:id**: Finds the student by id (throws `NotFoundException` if student does not exist).
- Calls `studentRepository.remove()` to delete the record from PostgreSQL.
- Returns a success confirmation message along with the deleted student details.

12 nov 
Class validator and class transformer 

Custom pipes 

nest g pipe uppercase

Custom pipe in specific folder CMD
nest g pipe common/pipes/uppercase

pipetransform 
//pipes reach before your controller 
Protecting Routes
what are guards


v.16
Custom filter - using this show errror message 
we can use globally, method controller 
nest g filter filters/http-exception

SwitchtoHttp 
nest g controller exception 
npm run start:dev

Middleware Runs before the request reaches the controller 
1.Logging incoing request 
request transformation 
blocking redirecting request setting headers 

middleware vs guard 
middleware is the concept of express js / we dont use decorators 
guard is the nest js features 

nest g middleware middleware/logger
middleware use next to forward function 

next(); // function stuck not move to another function 

consumer.apply - what middlearw used in what methods 
npm run start:dev 

originalurl, url - difference in nest js 

V.19. life cycle Events in nest js / Hooks 

Life cycle methods 
Hooks in nest js 
special methods 

life cycle events 

why are life cycle methods useful 

special events ke trigger prr node js automaticlly call 

v.19 - Life cycle hooks in nestjs | OnModuleinit & onAppShutdown 
nest g service database 
nest g controller database 

OnModuleInit()
onApplicationShutDown()

HTTPException methods 
life cyctle start with "on"

by default you not able to use hooks 
you need to tell app.js 
app.enableShutDownHooks()

V.20  Enviroment variables in nest js | .env file explained 

