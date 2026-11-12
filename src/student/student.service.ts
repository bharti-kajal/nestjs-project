import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity.js';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';
import { PatchStudentDto } from './dto/patch-student.dto.js';

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

  // 3. PUT - Full update of an existing student
  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);

    if (updateStudentDto.email && updateStudentDto.email !== student.email) {
      const emailTaken = await this.studentRepository.findOneBy({
        email: updateStudentDto.email,
      });
      if (emailTaken) {
        throw new ConflictException(
          `Student with email "${updateStudentDto.email}" already exists`,
        );
      }
    }

    student.name = updateStudentDto.name;
    student.email = updateStudentDto.email;
    student.age = updateStudentDto.age ?? student.age;

    return this.studentRepository.save(student);
  }

  // 4. PATCH - Partial update of an existing student
  async patch(id: number, patchStudentDto: PatchStudentDto): Promise<Student> {
    const student = await this.findOne(id);

    if (patchStudentDto.email && patchStudentDto.email !== student.email) {
      const emailTaken = await this.studentRepository.findOneBy({
        email: patchStudentDto.email,
      });
      if (emailTaken) {
        throw new ConflictException(
          `Student with email "${patchStudentDto.email}" already exists`,
        );
      }
      student.email = patchStudentDto.email;
    }

    if (patchStudentDto.name !== undefined) {
      student.name = patchStudentDto.name;
    }

    if (patchStudentDto.age !== undefined) {
      student.age = patchStudentDto.age;
    }

    return this.studentRepository.save(student);
  }

  // 5. DELETE - Remove an existing student
  async remove(id: number): Promise<{ message: string; deletedStudent: Student }> {
    const student = await this.findOne(id);
    await this.studentRepository.remove(student);
    return {
      message: `Student with id ${id} successfully deleted`,
      deletedStudent: student,
    };
  }
}
