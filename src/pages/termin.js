import React, { useState } from 'react';
import Select from 'react-select';

import Layout from '../components/layout';

import './termin.scss';
import { data, branches, problems } from '../components/shared/data';
import emailjs, { init } from 'emailjs-com';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby';
init('user_pjN71AkA6f8IUCEG6ohxc');
const d = new Date();
const month = d.getMonth();
const day = +d.getDate();
const year = d.getFullYear();
const fullDate = [year, month, day].join('-');

const Termin = () => {
  const [terminDate, setTerminDate] = useState(`${fullDate}T00:00`);
  const [branch, setBranch] = useState(null);
  const [model, setModel] = useState(null);
  const [moldeles, setModeles] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  // const [branchpl, setBranchpl] = useState('2. Modell auswählen…');
  const [problem, setProblems] = useState(null);
  const handleBranches = (e) => {
    const x = branches.findIndex((item) => item.label === e.label);
    console.log(x);
    // setModel(data[x]);
    setBranch(e.value);
    setToggle(false);
    setModeles(data[x]);
    console.log(data[x]);
    setModel('2. Modell auswählen…');
  };
  const handleModel = (e) => {
    setModel(e.value);
  };
  const handleProblem = (e) => {
    setProblems(e.value);
  };
  const sendEmail = () => {
    // `khach hang: ${name}, sdt: ${number}, May : ${branch},  ${model}, Bi hong : ${problem} , Thoi gian ${terminDate} `
    const templateParams = {
      message_html: `<div><ol style="font-size: 28px">
      <li>Name: ${name}  </li>
      <li>Handy Nummer:  ${number}  </li>
      <li>Handy Model: ${branch} - ${model}  </li>
      <li>Problem : ${problem}  </li>
      <li>Time: ${terminDate}  </li>
      </ol></div>`,
      from_name: `PhoneABC GmbH`,
      to_bcc: email,
    };
    emailjs
      .send(
        'service_l634urs',
        'template_rt2n1wt',
        templateParams,
        'user_pjN71AkA6f8IUCEG6ohxc'
      )
      .then(
        (result) => {
          navigate('/thanks', {
            state: { email },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Layout>
      <form
        className="termin"
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        <h3>Termin Buchen</h3>
        <input
          className="form-name"
          type="text"
          placeholder="Ihr Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          className="form-number"
          type="number"
          placeholder="Handy Numer"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          required
        />
        <input
          className="form-email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Select
          className="select select-branch"
          value={branch}
          onChange={handleBranches}
          options={branches}
          placeholder="1. Hersteller auswählen…"
          required
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
        <input
          className="form-time"
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

        <input
          // onClick={(e) => {
          //   e.preventDefault();
          //   alert('Just a demo....^^');
          // }}
          className="form-submit"
          type="submit"
          value="Termin buchen"
        />
      </form>
    </Layout>
  );
};

export default Termin;
