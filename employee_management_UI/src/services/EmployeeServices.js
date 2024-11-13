import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/employee";

export const listEmployees = () => axios.get(`${REST_API_BASE_URL}/getAllEmployees`);

export const createEmployee = (employee) => axios.post(`${REST_API_BASE_URL}/create`, employee);

export const getEmployeeById = (employeeId) => axios.get(`${REST_API_BASE_URL}/getById/${employeeId}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${REST_API_BASE_URL}/updateEmployee/${employeeId}`, employee);

export const deleteEmployeeById = (employeeId) => axios.delete(`${REST_API_BASE_URL}/deleteEmployee/${employeeId}`);
