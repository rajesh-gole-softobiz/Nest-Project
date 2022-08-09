/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        // if we have any filters defined, call tasksService.getTasksWilFilters
        //otherwise, just get all tasks
        if(Object.keys(filterDto).length){
            return this.taskService.getTasksWithFilters(filterDto);

        }else{
            return this.taskService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string): Task{
        return this.taskService.getTaskById(id);

    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task{
        return this.taskService.createTask(createTaskDto);
        
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string): void {
        return this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id:string, @Body('status') status: TaskStatus): Task{
        return this.taskService.updateTaskStatus(id,status)

    }
}
