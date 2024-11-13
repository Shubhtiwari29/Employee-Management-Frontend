import React, { useEffect, useState } from "react";
import { createEmployee, getEmployeeById, updateEmployee } from "../services/EmployeeServices";
import { useNavigate,useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

    const {id} = useParams();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      
      if (id) {
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First Name is Required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last Name is Required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is Required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle (){
    if(id){
      return <h2 className="text-center">Update Employee Details</h2>
    }else{
      return <h2 className="text-center">Add Employee</h2>
    }
    
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              pageTitle()
            }
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label" style={{ textAlign: 'left', display: 'block' }}>Employee's First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={firstName}
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" style={{ textAlign: 'left', display: 'block' }}>Employee's Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={lastName}
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" style={{ textAlign: 'left', display: 'block' }}>Employee's Email</label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <button className="btn btn-primary" onClick={saveOrUpdateEmployee}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default EmployeeComponent;
