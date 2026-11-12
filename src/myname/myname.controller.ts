import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe.js';

@Controller('myname')
export class MynameController {
    @Post('custom')
    myname(@Body('name', new UppercasePipe()) name: string): { message: string } {
        return { message: `Hello, ${name}!` };
    }
}

