import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StudentService } from './student.service.js';
import { Student } from './entities/student.entity.js';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // 1. GET: Get all students
  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  // 1. GET: Get student by id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }
}
