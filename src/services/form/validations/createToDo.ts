import { array, ObjectSchema, object, string } from 'yup';

export const createToDoSchema: ObjectSchema<CreateToDosType> = object().shape({
    createToDo: array().of(object({
        title: string()
            .required()
            .label("Title"),
        summary: string()
            .required()
            .label("Summary")
    }).required()).required(),
}).required();