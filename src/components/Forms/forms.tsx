import React, { useState } from "react";
import {Formik} from 'formik';

const Forms = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('')
    const [experience, setExperience] = useState('')
    return (
        <div>
            <h1>Welcome</h1>
            <Formik
                initialValues={{name: '', position: '', company: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 3));
                        setSubmitting(false);
                    }, 400)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting

                }) => (
                    <form>
                        
                    </form>
                )
                
                }

            </Formik>
        </div> 
     );
}
 
export default Forms;