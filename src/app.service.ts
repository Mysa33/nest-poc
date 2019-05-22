import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  
  getEmployees():Observable<object>{
    return this.httpService.get('http://localhost:3000/static/employees.json')
        .pipe(
            map(response => response.data)
        );        
  }

  getEmployee(id:number):Observable<object>{
      return this.httpService.get('http://localhost:3000/static/employees.json/' + id)
          .pipe(
              map(response => response.data)
          ); 
  }
}
