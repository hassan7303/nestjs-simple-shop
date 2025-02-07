import {IsEmail, IsBoolean, IsString, IsOptional} from 'class-validator';
import { Role } from '../role.enun';

export class CreateUserDto{

    @IsString()
    _id!:string

    @IsString()
    firstName:string

    @IsString()
    lastName:string

    @IsString()
    phoneNumber: string;

    @IsEmail()
    email:string

    @IsString()
    password:string

    @IsBoolean()
    isActive:boolean

    @IsOptional()
    @IsString()
    profilePicture: string;

    @IsOptional()
    @IsString()
    role: Role;

}