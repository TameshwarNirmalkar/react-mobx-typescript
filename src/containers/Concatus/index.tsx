import * as React from "react";
import { inject, observer } from "mobx-react";
import { Button, TextField } from "@material-ui/core";
// import InputBase from '@material-ui/core/InputBase';
import { Formik } from "formik";

import { ContactStore } from "../../stores/ContactStore";

interface IProps {
    constactStore: ContactStore;
}

interface FormValues {
    email: string;
}

interface FormMetadata {
    values: any;
    touched: any;
    errors: any;
    dirty: any;
    isSubmitting: any;
    handleChange: any;
    handleBlur: any;
    handleSubmit: any;
    handleReset: any;
}

@inject("constactStore")
@observer
export class ContactUs extends React.Component<IProps, {}> {
    private submitForm = () => {
        this.props.constactStore.saveForm();
    };

    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                <Formik
                    initialValues={this.props.constactStore.formvalue}
                    onSubmit={(values: FormValues) => {
                        console.log('Save Form', values);
                    }}
                    validationSchema={null}
                >
                    {(props: FormMetadata) => {
                        const {
                            handleSubmit,
                            isSubmitting
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    error
                                    id="first-name"
                                    label="First name"
                                    defaultValue=""
                                />
                                <Button variant="contained" color="primary" disabled={isSubmitting} onClick={this.submitForm}>Primary</Button>
                                { this.props.constactStore.formvalue}
                            </form>
                        );
                    }}
                </Formik>
            </div>
        );
    }
}
