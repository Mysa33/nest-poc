import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
    getAll(){
      return this.appService.getEmployees();
    }

    @Get(':id')
    getOne(@Param('id') id:number){
      const employee = this.appService.getEmployee();
      return employee;
    }
}
