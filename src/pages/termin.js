import React, { useState } from 'react';
import Select from 'react-select';

import Layout from '../components/layout';

import './termin.scss';
import { data, branches, problems } from '../components/shared/data';
const d = new Date();
const month = d.getMonth();
const day = +d.getDate();
const year = d.getFullYear();
const fullDate = [year, month, day].join('-');

const Termin = () => {
  // console.log(data[0]);
  // console.log(branches);
  const [terminDate, setTerminDate] = useState(`${fullDate}T00:00`);
  const [branch, setBranch] = useState(null);
  const [model, setModel] = useState(null);
  const [moldeles, setModeles] = useState(null);
  const [toggle, setToggle] = useState(true);
  // const [branchpl, setBranchpl] = useState('2. Modell auswählen…');
  const [problem, setProblems] = useState(null);
  const handleBranches = (e) => {
    const x = branches.findIndex((item) => item.label === e.label);
    console.log(x);
    // setModel(data[x]);
    setBranch(e);
    setToggle(false);
    setModeles(data[x]);
    console.log(data[x]);
    setModel('2. Modell auswählen…');
  };
  const handleModel = (e) => {
    setModel(e);
  };
  const handleProblem = (e) => {
    setProblems(e);
  };
  return (
    <Layout>
      <form action="" className="termin">
        <h2>Termin Buchen</h2>
        <input type="text" placeholder="Ihr Name" />
        <input type="text" placeholder="Handy Numer" />
        <Select
          className="select select-branch"
          value={branch}
          onChange={handleBranches}
          options={branches}
          placeholder="1. Hersteller auswählen…"
        />
        <Select
          className="select select-model"
          value={model}
          onChange={handleModel}
          options={moldeles}
          isDisabled={toggle}
          placeholder="2. Modell auswählen…"
        />
        <Select
          className="select select-problem"
          onChange={handleProblem}
          value={problem}
          options={problems}
          isDisabled={toggle}
          placeholder="3. Problem auswählen…"
        />
        {/* <select
          name="typeofhandy"
          id="deinhandy"
          onChange={handleBranches}
          defaultValue="branches"
        >
          <option value="branches" disabled>
            1. Hersteller auswählen…
          </option>
          {branches.map((item) => {
            // console.log(item);
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select name="" id="deinhandy-model" defaultValue="model">
          <option value="model" disabled>
            2. Modell auswählen…
          </option>
          {model &&
            model.map((item, i) => {
              return (
                <option value={item} key={i}>
                  {item}
                </option>
              );
            })}
        </select>
        <select name="" id="deinhandy-problem" defaultValue="problem">
          <option value="problem" disabled>
            3. Problem auswählen…
          </option>
        </select> */}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Describe about your request"
        ></textarea>

        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          // value="2018-06-12T19:30"
          value={terminDate}
          onChange={(e) => {
            setTerminDate(e.target.value);
          }}
          min="2020-06-07T00:00"
          max="2021-10-14T00:00"
        ></input>

        <button
          onClick={(e) => {
            e.preventDefault();
            alert('Just a demo....^^');
          }}
        >
          Termin confirm
        </button>
      </form>
    </Layout>
  );
};

export default Termin;
