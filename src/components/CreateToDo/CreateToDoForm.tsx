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
import {
    PlaylistAdd as AddIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
} from '@material-ui/icons';

import { createToDoSchema, getFormFieldStatus } from '../../services/form';
import { Button, ExpandableCard } from '../../componentLibrary';

type createToDoFormProps = {
    title: string;
    subHeader: string;
    handleSubmit: (values: any) => void;
};

const useStyles = makeStyles({
    inputFields: {
        backgroundColor: "white",
    },
    buttonsContainer: {
        margin: "2vh auto",
        width: "60%",
        display: "flex",
    },
    label: {
        color: "#4F2DF3",
        fontWeight: "bold",
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
                                    const formContent: JSX.Element = createToDo.map((
                                        toDo: any,
                                        index: number,
                                        createToDoArray: any,
                                    ) => {
                                        const formItem = (
                                            <div key={index}>
                                                <Grid container item xs={12} spacing={3} style={{ margin: "auto" }}>
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
                                        console.log('formikProps.isValid: ', formikProps.isValid)
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
                                                            <Grid
                                                                container
                                                                justify="flex-start"
                                                            >
                                                                {
                                                                    createToDoArray.length <= 2 &&
                                                                    (
                                                                        <Button
                                                                            filled
                                                                        type='button'
                                                                        onClick={() => push('')}
                                                                            disabled={!formikProps.isValid || !(!!Object.keys(formikProps.touched).length)}
                                                                            style={{ marginRight: '12px' }}
                                                                    >
                                                                            <AddIcon style={{ marginRight: '12px' }} />
                                                                        Add To Do
                                                                        </Button>)}
                                                            {(createToDoArray.length > 1 && index > 0) && (
                                                                    <Button
                                                                        filled
                                                                        type='button'
                                                                        onClick={() => remove(index)}
                                                                    >
                                                                        <DeleteIcon style={{ marginRight: '12px' }} />
                                                                        Remove To Do
                                                                    </Button>
                                                                )}
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Grid container justify="flex-end">
                                                                {(
                                                                    (createToDoArray.length - 1) === index)
                                                                    &&
                                                                    (
                                                                        <Button
                                                                            filled
                                                                            type='submit'
                                                                            disabled={!formikProps.isValid || formikProps.isSubmitting}
                                                                    >
                                                                        <SaveIcon style={{ marginRight: '12px' }} />
                                                                        Save To Do
                                                                    </Button>
                                                                )
                                                            }
                                                            </Grid>
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
