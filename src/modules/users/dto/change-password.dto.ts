import {IsEmail, IsString, IsNotEmpty} from 'class-validator';


export class ChangePasswordDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    currentPassword: string;

    @IsString()
    @IsNotEmpty()
    newPassword: string;
}