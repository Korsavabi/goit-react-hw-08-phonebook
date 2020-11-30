import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import Form from "../Form/Form";
import FilterForm from "../FilterForm/FilterForm";
import PhoneItem from "../PhoneItem/PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from '../../redux/action/todoList';
import { Title, Div, ERROR, DIV } from './StyleTodoPhone';
import { getTodoOperation, postTodoOperation, deleteTodoOperation } from './../../redux/operations/todoOperations';
import Loader from 'react-loader-spinner';

const TodoPhone = () => {
	const [error, setError] = useState('');
	const contacts = useSelector((state) => state.todoList);
	const loader = useSelector((state) => state.loader);
	const errorReducer = useSelector((state) => state.errorReducer);
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const filterValue = useSelector((state) => state.filter);
	useEffect(() => {
		if (!!error) {
			setTimeout(() => {
				setError(false)
			}, 1000)

		}
		dispatch(getTodoOperation(token))
	}, [error, dispatch, token])

	const addTask = (name, number) => {
		const contact = {
			name: name,
			number: number,
		}

		if (!name && !number) {
			return
		}

		if (contacts.every((contact) => !contact.name.includes(name))) {
			dispatch(postTodoOperation(contact, token));
			dispatch(getTodoOperation(token));
		} else {
			setError(`${name} is already in contacts`);
		}
	}

	const deleteTask = (id) => {
		dispatch(deleteTodoOperation(id, token))
		dispatch(deleteItem(id))
	}

	const searchItem = () => {
		if (contacts.length > 0) {
			return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
		} else return contacts
	}
	return (
		<>
			<Div in={!!error}>
				<p>{error}</p>
			</Div>
			<Title in={true} appear={true}>
				Phonebook
			</Title>
			<Form addTask={addTask} />
			{<ERROR>{errorReducer}</ERROR>}
			{ loader && <DIV><Loader type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} /></DIV>}
			{!errorReducer && !loader && (
				<Section title={"Contacts:"}>
					{contacts.length > 1 && <FilterForm />}
					<PhoneItem deleteTask={deleteTask} contacts={searchItem()} />
				</Section>)}
		</>
	)
}

export default TodoPhone
