import React, { useState } from 'react';
import { addTeam } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankTeamForm, handleChange, handleSubmit } from '../../components/forms/formHandlers';

const TeamBuilder = props => {
  const devs = useSelector(state => state.clientReducer.allDevs);
  const client = useSelector(state => state.clientReducer.client);
  const dispatch = useDispatch()

  const [ formVals, setFormVals ] = useState({
    ...blankTeamForm,
    project_id: 3,
    client_id: client.id
  });

  const convertThenSubmit = (e) => {
    e.preventDefault();

    const submission = {
      "client_id": formVals.client_id,
      "project_id": formVals.project_id,
      "frontend_id": Number(formVals.frontend_id),
      "backend_id": Number(formVals.backend_id),
      "ui_id": Number(formVals.ui_id),
      "devops_id": Number(formVals.devops_id)
    }
    console.log(submission)
    handleSubmit(e, submission, addTeam, dispatch)
  }

  return(
    <div>
      Build Your Team:

      <form onSubmit={convertThenSubmit}>
        <label>
          UI/UX:
        </label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="ui_id">
          <option>---Select Deveoper---</option>
          {
            devs.map(dev => {
              return (
                <option value={dev.id}>
                  {`${dev.first_name} ${dev.last_name}`}
                </option>
              )
            })
          }
        </select>

        <label>
          Front End:
        </label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="frontend_id">
          <option>---Select Deveoper---</option>
          {
            devs.map(dev => {
              return(
                <option value={dev.id}>
                  {`${dev.first_name} ${dev.last_name}`}
                </option>
              )
            })
          }
        </select>

        <label>
          Back End:
        </label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="backend_id">
          <option>---Select Deveoper---</option>
          {
            devs.map(dev => {
              return(
                <option value={dev.id}>
                  {`${dev.first_name} ${dev.last_name}`}
                </option>
              )
            })
          }
        </select>

        <label>
          Dev Ops:
        </label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="devops_id">
          <option>---Select Deveoper---</option>
          {
            devs.map(dev => {
              return(
                <option value={dev.id}>
                  {`${dev.first_name} ${dev.last_name}`}
                </option>
              )
            })
          }
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TeamBuilder;