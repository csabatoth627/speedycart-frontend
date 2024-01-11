import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler');
  }

  return <div>ProfileScreen</div>;
};

export default ProfileScreen;
