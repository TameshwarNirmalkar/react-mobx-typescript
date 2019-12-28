import * as React from "react";
import { inject, observer } from "mobx-react";
// import { Button, TextField } from "@material-ui/core";
// import InputBase from '@material-ui/core/InputBase';
// import { Formik } from "formik";

import { ContactStore } from "../../stores/ContactStore";

interface IProps {
    constactStore: ContactStore;
}

// interface FormValues {
//     email: string;
// }

// interface FormMetadata {
//     values: any;
//     touched: any;
//     errors: any;
//     dirty: any;
//     isSubmitting: any;
//     handleChange: any;
//     handleBlur: any;
//     handleSubmit: any;
//     handleReset: any;
// }

@inject("constactStore")
@observer
export class ContactUs extends React.Component<IProps, {}> {
    // private submitForm = () => {
    //     this.props.constactStore.saveForm();
    // };

    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                
            </div>
        );
    }
}
