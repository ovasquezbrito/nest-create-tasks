import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { PeriodosModule } from './periodos/periodos.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PeriodosModule],
})
export class AppModule {}
