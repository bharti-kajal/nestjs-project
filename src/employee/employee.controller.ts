import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployees() {
        return 'Employee Data fetched successfully!';
    }
}
