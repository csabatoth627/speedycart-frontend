import React, { useEffect, useState } from "react";
import { useGetUserDetailsQuery } from "../../slices/userApiSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import { Button, Form } from "react-bootstrap";

const UserEditScreen = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("updated");
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="my-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isAdmin" className="my-2">
              <Form.Check
                type="checkbox"
                label="isAdmin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary" className="my-2">
              Update
            </Button>
            
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
