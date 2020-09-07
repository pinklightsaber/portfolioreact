import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo inválido")
    .required("Campo obligatorio"),
  message: Yup.string().required("Campo obligatorio")
});

function ContactForm ()  {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/mnqgezjo",
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Gracias!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate>
            <label htmlFor="email">Email:</label>
            <Field id="email" type="email" name="email" />
            <ErrorMessage name="email" className="errorMsg" component="p" />
            <label htmlFor="message">Message:</label>
            <Field id="message" name="message" component="textarea" />
            <ErrorMessage name="message" className="errorMsg" component="p" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {serverState && (
              <p className={!serverState.ok ? "errorMsg" : ""}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;