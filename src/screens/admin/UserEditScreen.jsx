import React from 'react'
import { useGetUserDetailsQuery,  } from '../../slices/userApiSlice'
import { useParams } from 'react-router-dom'

const UserEditScreen = () => {
    const {id: userId} = useParams();

    const {
        data: user,
        isLoading,
        refetch,
        error,
      } = useGetUserDetailsQuery(userId);

      

  return (
    <div>UserEditScreen</div>
  )
}

export default UserEditScreen