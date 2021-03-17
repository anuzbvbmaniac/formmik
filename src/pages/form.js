import React from 'react';
import Header from "../components/header";

import { Formik } from 'formik';
import Input from "../components/input";
import Textarea from "../components/textarea";

const Form = () => {
    return (
        <>
            <Header title={'Contact Us'} subTitle={'Please enter the required fields.'}/>
            <section className="relative bg-white pb-20" aria-labelledby="contactHeading">
                <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true"/>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white shadow-xl">
                        <h2 id="contactHeading" className="sr-only">Contact us</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Contact form */}
                            <div className="py-10 px-6 sm:px-10 lg:col-span-3 xl:p-12">
                                <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>

                                <Formik
                                    initialValues={{
                                        firstname: '',
                                        lastname: '',
                                        email: '',
                                        phone: '',
                                        subject: '',
                                        message: ''
                                    }}
                                    validate={values => {
                                        const errors = {};

                                        if (!values.firstname) {
                                            errors.firstname = 'Sorry, First Name is required field.';
                                        }

                                        if (!values.lastname) {
                                            errors.lastname = 'Sorry, Last Name is required field.';
                                        }

                                        if (!values.email) {
                                            errors.email = 'Sorry, Email field is required';
                                        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                                            errors.email = 'Sorry, Your email is invalid.'
                                        }

                                        return errors;
                                    }}
                                    onSubmit={(values) => {
                                        console.log(values);
                                    }}
                                >
                                    {
                                        ({
                                             values,
                                             errors,
                                             touched,
                                             handleChange,
                                             handleBlur,
                                             handleSubmit,
                                         }) => (
                                            <>
                                                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                                    <Input
                                                        name="firstname"
                                                        label="First Name"
                                                        type="text"
                                                        value={values.firstname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errors={errors.firstname}
                                                        touched={touched.firstname}
                                                    />
                                                    <Input
                                                        name="lastname"
                                                        label="Last Name"
                                                        type="text"
                                                        value={values.lastname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errors={errors.lastname}
                                                        touched={touched.lastname}
                                                    />
                                                    <Input
                                                        name="email"
                                                        label="Email Address"
                                                        type="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errors={errors.email}
                                                        touched={touched.email}
                                                    />
                                                    <Input
                                                        name="phone"
                                                        label="Phone Number"
                                                        type="text"
                                                        message
                                                        value={values.phone}
                                                        onChange={handleChange}
                                                    />
                                                    <Input
                                                        name="subject"
                                                        label="Subject"
                                                        type="text"
                                                        colspan="sm:col-span-2"
                                                        value={values.subject}
                                                        onChange={handleChange}
                                                    />

                                                    <Textarea
                                                        name="message"
                                                        label="Message"
                                                        message="Max 200 Words"
                                                        colspan="sm:col-span-2"
                                                        value={values.message}
                                                        onChange={handleChange}
                                                    />

                                                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                                                        <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        )
                                    }
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Form;
