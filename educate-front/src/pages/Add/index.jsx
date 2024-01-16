import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { Helmet } from "react-helmet-async";
const Add = () => {
  const [data, setData] = useState([]);
  async function Getfetch() {
    try {
      await fetch("http://localhost:3100/features")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3100/features", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await Getfetch()
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3100/features/" + id, { method: "DELETE" });
    await Getfetch();
  }
  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
      <section id="add">
        <div className="add_container">
          <div className="add_content">
            <h2>Add Element</h2>
            <div>
              <Formik
                initialValues={{ icon: "", title: "", text: "" }}
                validationSchema={Yup.object({
                  icon: Yup.string().required("Required"),
                  title: Yup.string().required("Required"),
                  text: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                  handleSubmit(values);
                  resetForm()
                  setSubmitting(false);
                }}
              >
                <Form>
                  <label htmlFor="icon">Icon</label>
                  <Field name="icon" type="text" />
                  <ErrorMessage name="icon" />

                  <label htmlFor="title">Title</label>
                  <Field name="title" type="text" />
                  <ErrorMessage name="title" />

                  <label htmlFor="text">Text</label>
                  <Field name="text" type="text" />
                  <ErrorMessage name="text" />

                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
            <table>
              <tr>
                <th>Icon</th>
                <th>Title</th>
                <th>Text</th>
                <th>Delete</th>
              </tr>
              {data &&
                data.map((x) => (
                  <tr>
                    <td>{x.icon}</td>
                    <td>{x.title}</td>
                    <td>{x.text}</td>
                    <td>
                      <i
                        class="fa-solid fa-trash"
                        onClick={() => deleteItem(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
