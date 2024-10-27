import React from 'react'
import { useGetDrinksQuery } from '../Features/Drinks/allDrinks.js'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, useFormik } from 'formik';
import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../Features/PostSlice.js/postSlice.js';
import * as Yup from 'yup';

function Home() {
  // const { posts } = useSelector((state) => state.postSlice);
  // console.log(posts);


  const dispatch = useDispatch();
  const nav = useNavigate();

  const valSchema = Yup.object({
  })
  return (
    <div className=' flex justify-center max-w-[40%]'>
      <Formik
        initialValues={{
          tittle: '',
          email: '',
          contact: '',
          gender: '',
          country: [],
          course: '',
          detail: '',
          image: null,
          preview: ''
        }}
        onSubmit={(val) => {
          // console.log(val)
          delete val.image;
          dispatch(addPost({ ...val, id: nanoid() }));
          nav(-1);
        }}


      >
        {({ handleChange, handleSubmit, values, setFieldValue, touched, errors }) => {
          return <form onSubmit={handleSubmit} className='px-4 py-4 space-y-4'>
            <Typography>Add post</Typography>
            <div>
              <Input
                onChange={handleChange}
                name='tittle'
                type='text'
                label='title'
                value={values.title}

              />
            </div>
            <div>
              <Input
                onChange={handleChange}
                name='email'
                type='email'
                label='email'
                value={values.email}

              />
            </div>

            <div>
              <Input
                onChange={handleChange}
                name='contact'
                type='contact'
                label='contact'
                value={values.contact}

              />
            </div>

            {/* RadioBotton */}
            <div>
              <h1>Select your genders</h1>
              <Radio
                onChange={handleChange}
                value={"Male"}
                name="gender"
                label="Male"
              />
              <Radio
                onChange={handleChange}
                name="gender"
                value={"Female"}
                label="Female"
              />

              <Radio
                onChange={handleChange}
                name='gender'
                value={"Others"}
                label="others"

              />




            </div>


            {/* Check-boc */}
            <div>
              <h1>Select your destination country</h1>
              <Checkbox
                name='country'
                onChange={handleChange}
                color="blue"
                value={"Austalia"}
                label='Austalia'
              />
              <Checkbox
                name='country'
                onChange={handleChange}
                color="red"
                value={"Canada"}
                label='Canada'

              />

              <Checkbox
                name='country'
                onChange={handleChange}
                color='yelow'
                value={"USA"}
                label="USA"
              />


            </div>

            {/* SELCTOR AND OPTIONS */}
            <Select
              onChange={(e) => setFieldValue("course", e)}
              name='course'
              label='Select course'
            >
              <h1>Slect the best course</h1>
              <Option value='Nepal'>Bachelor of information technolgy</Option>
              <Option value='China'>Bachelor of Business Admistation</Option>
              <Option value='Nepal'>Bachelor of Arts</Option>
              <Option value='China'>Bachelor of Laws</Option>
              <Option value='Nepal'>Bachelor of BE</Option>
              <Option value='China'>Bachelor of BE.TECH</Option>
              <Option value='Nepal'>Bachelor of Finance</Option>
              <Option value='China'>Bachelor of Ecomonist</Option>
              <Option value='Nepal'>BCA</Option>
              <Option value='China'>Bachelor of Information technology</Option>

            </Select>

            {/* Forr image */}
            <Input
              onChange={(e) => {
                const imagePath = URL.createObjectURL(e.target.files[0]);
                setFieldValue("preview", imagePath);
                setFieldValue("image", e.target.files[0])
              }}
              name='image'
              label='image'
              type='file'
            />

            <img src={values.preview} />



            {/* for textArea */}
            <Textarea
              onChange={handleChange}
              name='detail'
              label='Detail'
              value={values.detail}
            />


            <Button type='submit'>Submit </Button>

          </form>
        }}
      </Formik>

    </div >
  )
}

export default Home;
