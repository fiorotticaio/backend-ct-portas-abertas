import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateSchoolDto } from './create-school.dto';

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {
    
    @IsNotEmpty()
    event: object;

    @IsNotEmpty()
    studentsAmount: number; // FIXME: será que pode colocar junto com esse DTO
                            // ou vai ter que criar outro só pro studentsAmount
}