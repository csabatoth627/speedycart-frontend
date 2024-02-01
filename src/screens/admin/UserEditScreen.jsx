import React, { useState } from "react";
import { useGetUserDetailsQuery } from "../../slices/userApiSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import { Button, Form } from "react-bootstrap";

const UserEditScreen = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId);

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>
    </>
  );
};

export default UserEditScreen;
