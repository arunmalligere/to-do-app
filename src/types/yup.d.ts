import { StringSchema } from 'yup';

declare module 'yup' {
    interface Ref {
        path: string;
        _label: string;
    }
    interface Schema<T> {
        _default: T;
        _label: string;
    }
    interface StringSchema {
        iban: () => StringSchema<string>;
        bic: () => StringSchema<string>;
        simpleUrl: () => StringSchema<string>;
        phoneNumber: () => StringSchema<string>;
        password: () => StringSchema<string>;
        confirm: (fieldName: string, message?: string) => StringSchema<string>;
        username: () => StringSchema<string>;
    }

    export interface StringSchemaConstructor {
        (): StringSchema<string>;
        new(): StringSchema<string>;
    }

    export interface NumberSchemaConstructor {
        (): NumberSchema<number>;
        new(): NumberSchema<number>;
    }

    export interface BooleanSchemaConstructor {
        (): BooleanSchema<boolean>;
        new(): BooleanSchema<boolean>;
    }

    export interface DateSchemaConstructor {
        (): DateSchema<Date>;
        new(): DateSchema<Date>;
    }

    export interface ObjectSchemaConstructor {
        <T extends object>(fields?: ObjectSchemaDefinition<T>): ObjectSchema<T>;
        new(): ObjectSchema<{}>;
    }
}
