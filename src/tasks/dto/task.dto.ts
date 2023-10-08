import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from "class-validator";
import { TaskStatus } from "../task.entity"

export class createTaskDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;

}

export class updateTaskDto {

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([ TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.PENDING ])
    status?: TaskStatus;

}