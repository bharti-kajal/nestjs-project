import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity.js';
import { CreateStudentDto } from './dto/create-student.dto.js';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // 1. GET - Fetch all students
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // 1. GET - Fetch a single student by id
  async findOne(id: number): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  // 2. POST - Create a new student
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const existing = await this.studentRepository.findOneBy({
      email: createStudentDto.email,
    });
    if (existing) {
      throw new ConflictException(
        `Student with email "${createStudentDto.email}" already exists`,
      );
    }
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }
}
