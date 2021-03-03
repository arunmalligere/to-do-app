import React, { useMemo } from 'react';
import {
    Formik,
    Form,
    FieldArray,
    Field,
    FieldProps,
    getIn
} from 'formik';
import {
    Grid,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { last } from 'lodash';

import { createToDoSchema, getFormFieldStatus } from '../../services/form';
import { ExpandableCard } from '../../componentLibrary';

type createToDoFormProps = {
    title: string;
    subHeader: string;
    handleSubmit: (values: any) => void;
};

const useStyles = makeStyles({
    inputFields: {
        backgroundColor: "white",
        borderBottomColor: "red",
    },
    buttonsContainer: {
        // marginTop: "2vh",
        // marginBottom: "2vh",
        margin: "2vh 0vh 2vh 0vh",
    },
    label: {
        color: "#28BFF2",
    }
});

const CreateToDoForm: React.FC<createToDoFormProps> = ({ title, subHeader, handleSubmit }) => {
    const classes = useStyles();
    const initialValues: CreateToDosType = {
        createToDo: [{
            title: "",
            summary: ""
        }]
    };

    const fieldInput = React.memo(({ field, form, ...props }: FieldProps) => {
        const fieldName = last(field.name.split('.'));
        const error = getIn(form.errors, field.name);
        const touched = getIn(form.touched, field.name);
        const fieldStatus = getFormFieldStatus(touched, error);
        return (
            <div>
                <TextField
                    className={classes.inputFields}
                    fullWidth
                    multiline={!!(fieldName === "summary")}
                    rows={fieldName === "summary" ? 4 : 1}
                    required
                    error={touched && fieldStatus === 'invalid'}
                    helperText={touched && error ? error : ""}
                    label={
                        !!fieldName ?
                            (fieldName?.charAt(0).toUpperCase() + fieldName?.slice(1))
                            : ""
                    }
                    placeholder={
                        !!fieldName ?
                            (fieldName?.charAt(0).toUpperCase() + fieldName?.slice(1))
                            : ""
                    }
                    InputLabelProps={{
                        shrink: true,
                        className: classes.label
                    }}
                    InputProps={{
                        classes: {
                            underline: classes.inputFields
                        }
                    }}
                    {...props}
                    {...field}
                />
            </div>
        );
    });

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={createToDoSchema}
                onSubmit={handleSubmit}
            >
                {(formikProps) => {
                    return (
                        <Form>
                            <FieldArray
                                name="createToDo"
                            >
                                {(fieldArrayProps) => {
                                    const { push, remove, form } = fieldArrayProps;
                                    const { values } = form;
                                    const { createToDo } = values;
                                    console.log('createToDo', createToDo)
                                    const formContent: JSX.Element = createToDo.map((
                                        toDo: any,
                                        index: number,
                                        createToDoArray: any,
                                    ) => {
                                        const formItem = (
                                            <div key={index}>
                                                <Grid container item xs={12} spacing={3}>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            name={`createToDo[${index}].title`}
                                                            id={`createToDo[${index}].title`}
                                                            component={fieldInput}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            name={`createToDo[${index}].summary`}
                                                            id={`createToDo[${index}].summary`}
                                                            component={fieldInput}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        );
                                        console.log('index', index)
                                        return (
                                            <>
                                                <ExpandableCard
                                                    title={title}
                                                    subHeader={subHeader}
                                                    content={formItem}
                                                />
                                                <div className={classes.buttonsContainer}>
                                                    <Grid container>
                                                        <Grid item xs={6}>
                                                            {(createToDoArray.length <= 2) && (<button
                                                                type='button'
                                                                onClick={() => push('')}
                                                                disabled={!formikProps.isValid}
                                                            >
                                                                Add
                                                            </button>)}
                                                            {(createToDoArray.length > 1 && index > 0) && (
                                                                <button type='button' onClick={() => remove(index)}>
                                                                    Remove
                                                                </button>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            {((createToDoArray.length - 1) === index) &&
                                                                (<button
                                                                    type='submit'
                                                                    disabled={!formikProps.isValid || formikProps.isSubmitting}
                                                                >
                                                                    Submit
                                                                </button>)
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </>
                                        );
                                    });
                                    return (
                                        <>
                                            {formContent}
                                        </>
                                    )
                                }
                                }
                            </FieldArray>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
};

export default CreateToDoForm;
