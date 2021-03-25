import React from 'react';
import Header from "../components/header";

import {useFormik} from "formik";
import * as Yup from "yup"

const FormTwo = () => {

    const formik = useFormik({
        initialValues: {firstname: '', lastname: ''},
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('First Name is required'),
        })
    })

    return (
        <>
            <Header title={'Contact Us'} subTitle={'Please enter the required fields.'}/>
            <section className="relative bg-white pb-20" aria-labelledby="contactHeading">
                <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true"/>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white shadow-xl">
                        <h2 id="contactHeading" className="sr-only">Form Two</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Contact form */}
                            <div className="py-10 px-6 sm:px-10 lg:col-span-3 xl:p-12">
                                <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>

                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <div className="flex justify-between">
                                            <label htmlFor={'firstname'} className="block text-sm font-medium text-warm-gray-900">First Name</label>
                                        </div>

                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="firstname"
                                                id="firstname"
                                                autoComplete="off"
                                                className={'py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'}
                                                {...formik.getFieldProps('firstname')}
                                            />
                                        </div>
                                        {
                                            formik.errors.firstname && formik.touched.firstname
                                                ? <span className="text-red-700">{formik.errors.firstname}</span>
                                                : null
                                        }

                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormTwo;
