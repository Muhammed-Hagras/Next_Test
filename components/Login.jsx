import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../Api/userApi";

export default function Login() {
  const { addUser } = userAPI;

  const history = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
  });

  useEffect(() => {
    console.log(errors);
  });

  const changeHandler = (e) => {
    if(e.target.name === "email") {
      const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if(!regex.test(e.target.value)) {
        setErrors({
          [e.target.name]: `${e.target.name} does match pattern sa@sa.co`
        })
      }else {
        setFormValues({
          [e.target.name] : e.target.value
        })

        setErrors({
          [e.target.name] : null
        })
      }
    } else {
      if (e.target.value.length < 3) {
        setErrors({
          [e.target.name]: `${e.target.name} length must be greater than 3`,
        });
      } else {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
        setErrors({
          ...errors,
          [e.target.name]: null,
        });
      }
    }
  };

  const addUserHandler = async () => {
    try {
      await addUser(formValues);
    } catch (error) {
      console.log(error);
    }
  };

  const login = (e) => {
    e.preventDefault();
    addUserHandler();
    history("/users")
  };

  return (
    <div className="bg-warning">
      <div className="container p-5">
        <Form className="m-5" onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              onChange={changeHandler}
            />
            {errors && <Form.Text className="text-danger">
              {/* We'll never share your email with anyone else. */}
              {errors.name}
            </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={changeHandler}
            />
            {errors &&<Form.Text className="text-danger">
              {errors.email}
            </Form.Text>}
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
