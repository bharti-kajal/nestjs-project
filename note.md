
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
