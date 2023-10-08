import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'Mi tarea',
            description: 'some description',
            status: TaskStatus.PENDING,
        }
    ];

    getAllTasks() {
        return this.tasks;
    }

    getTaskbyId(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    createTask(title: string, description: string) {
        const newTask = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING,
        }
        this.tasks.push(newTask);
        return newTask;

    }

    updateTask(id: string, updatedFields: updateTaskDto): Task {
        const task = this.getTaskbyId(id);
        const newtask = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map(task => task.id === id ? newtask : task);
        return newtask;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

}
