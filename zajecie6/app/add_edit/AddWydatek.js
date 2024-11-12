'use client'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {v4} from "uuid";

//  nowy={(valu)=>{
//             //  console.log(valu)
//           var newWydatki=[...list,valu]
//               // console.log(newWydatki)
//               setList(newWydatki)
//           }}

//editowanie=-1?teraz nikt nie edituje wydatek:ktos edituje wydatek(zeby nie wyswetlalo

////expanse jezeli !==-1 to nie pokazuj nic bo ktos patrze na detali jakegos wydatku
export default function AddWydatek({nowy=f=>f,editowanie,expanse=-1}){
    console.log(nowy)
    console.log(editowanie)
    if(editowanie!==-1)
    return (<div></div>)

    if(expanse!==-1)
        return (<div></div>)

    return(
        <Formik
            initialValues={{
                category:"",
                date:"2022-09-28",
                title: "",
                opis: "",
                kwota: "0"
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .min(3, "Tytuł musi mieć co najmniej 3 znaki")
                    .max(20, "Tytuł nie może być dłuższy niż 20 znaków")
                    .required("Tytuł jest wymagany"),
                category: Yup.string().required("Wpisz kategorje"),
                opis: Yup.string()
                    .min(3, "Opis musi mieć co najmniej 3 znaki")
                    .max(2000, "Opis nie może być dłuższy niż 2000 znaków")
                    .required("Opis jest wymagany"),
                date: Yup.date().required(),
                kwota: Yup.number().min(1,"kwota musi być nie mniejsza od 1").required("kwota jest wymagana")


            })}
            onSubmit={(values,{resetForm}) => {


              //  console.log(values)
                //alert(JSON.stringify(values, null, 2));
                const newValues={...values,id:v4()}
               // console.log(newValues)
                nowy(newValues)
                resetForm()
            }}

        >
            {({ dirty, isValid }) => (
            <Form>
                <div>
                    <Field name="title" type="text" placeholder="napisz title"
                    />
                    <ErrorMessage name="title" component="div"/>

                </div>
                <div>
                    <Field name="category" as="select">
                        <option value="">Select a category</option>
                        <option value="Jedzenie">Jedzenie</option>
                        <option value="Rachunki">Rachunki</option>
                        <option value="Transport">Transport</option>
                        <option value="Rozrywka">Rozrywka</option>
                    </Field>
                    <ErrorMessage name="category" component="div"/>
                </div>
                <div>
                    <Field name="kwota" type="number"/>
                    <ErrorMessage name="kwota" component="div"/>

                </div>

                <div>
                    <Field name="date" type="date"/>
                    <ErrorMessage name="date" component="div"/>

                </div>
                <div>
                    <Field name="opis" as="textarea" placeholder="napisz opis"/>
                    <ErrorMessage name="opis" component="div"/>

                </div>
                <button type="submit"   disabled={!dirty || !isValid}
                >Add</button>
            </Form> )}

        </Formik>
    )
}