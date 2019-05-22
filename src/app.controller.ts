import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

@Controller('employee')
export class AppController {
  constructor(private readonly _appService: AppService) {}

  @Get()
    getAll(){
      return this._appService.getEmployees();
    }

    @Get(':id')
    getOne(@Param('id') id:number){
      const employee = this._appService.getEmployee(id);
      return employee;
    }
}
