import { Controller, Get } from '@nestjs/common';

@Controller('user') // decorators controller class with the route prefix 'user' // this is simple routes

export class UserController {
    @Get() // decorators method with the route 'user'
    getUser(): string {
        return 'User Data retrieved successfully!';
    }

}
