import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCourseSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please fill all the Inputs'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please fill all the Inputs'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Please fill all the Inputs'),
  imgUrl: Yup.string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Please fill all the Inputs'),
});
const AddStudent = () => {
  const navigate = useNavigate()
  return (
    <div id='formik'>
    <div className="container">
    <Formik
       initialValues={{
        name: '',
        title: '',
        description: '',
        imgUrl: '',
       }}
       validationSchema={AddCourseSchema}
       onSubmit={values => {
         axios.post("http://localhost:8080/student", values)
         navigate("/")
       }}
     >
       {({ errors, touched }) => (
         <Form className='form'>
          <h1 className='form-h1'>Add New Course</h1>
        <div className="input">
        <Field name="name" placeholder="Name"/>
        </div>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
          <div className="input">
          <Field name="title" placeholder="Title"/>
          </div>
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
        <div className="input">
        <Field name="description" type="description" placeholder="Description"/>
        </div>
           {errors.description && touched.description ? <div>{errors.description}</div> : null}
       <div className="input">
       <Field name="imgUrl" placeholder="Your Image"/>
       </div>
           {errors.imgUrl && touched.imgUrl ? (
             <div>{errors.imgUrl}</div>
           ) : null}
           <button className='add-btn' type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
    </div>
  )
}

export default AddStudent