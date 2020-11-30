import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoPhone from '../../Components/TodoPhone/TodoPhone';
import { userCurrentOperation } from '../../redux/operations/authOperation';
import { useDispatch } from 'react-redux';

const Contacts = () => {
    const name = useSelector((state) => state.user.name)
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
useEffect(()=> {
    if (token) {
    dispatch(userCurrentOperation(token))
    }

},[dispatch, token])

    return (
        <>
            <h1>User: {name}</h1>
            <TodoPhone />
        </>
    );
};

export default Contacts;