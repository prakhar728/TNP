import React, { useEffect, useState } from "react";
import "./style.css";
import BackArrow from "../../assets/BackArrow.svg";
import bell from "../../assets/bell.svg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import baseURL from "../../Common";
const Profile = () => {
  const [file, setfile] = useState(null);
  const [currentFile, setcurrentFile] = useState(null);
  const [user, setuser] = useState({});
  const [formData, setformData] = useState({
    name:"",
    email:"",
    cgpa:"",
    passingYear:""
  });
  const JWT_TOKEN = localStorage.getItem("JWT");
  const getResumse = async () => {
    try {
      axios
        .get(`${baseURL}/api/upload/getFile/${user.id}`, {
          headers: {
            "auth-token": JWT_TOKEN,
          },
        })
        .then((res) => {
          console.log(res.data);
          setcurrentFile(res.data);
        })
        .catch((err) => {
          console.log(err);
          res.json({ err: err });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios
      .get(`${baseURL}/api/auth/fetchUser`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
        setformData({
          name:res.data.name,
          email:res.data.email,
          cgpa:res.data.cgpa,
          passingYear:res.data.passingYear,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const updateSuccess = () =>{
    toast.success('Details Updated Successfully')
  }
  const updateError = ()=>{
    toast.error('We weren"t able to update It')
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    console.log(sid.value);

    const formData = new FormData();
    formData.append("pdf", file);
    console.log("hi");
    sendData(formData);
  };
  const sendData = async (formData) => {
    console.log("ss");
    try {
      const resp = await axios.post(
        baseURL + `/api/upload/uploadFile/${user.smartId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": JWT_TOKEN,
          },
        }
      );
      alert(resp.data.message);
    } catch (error) {
      alert("Server Error");
      console.error(error);
    }
  };

  
  const updateDetails = async() =>{
    axios.patch(`${baseURL}/api/auth/update`,formData,{
      headers:JWT_TOKEN
    })
    .then(res=>{
      console.log('Successfully Updated');
      updateSuccess();
    })
    .catch(err=>{
      console.log('Error',err);
      updateError();
    })
  }
  return (
    <div>
      <div id="formWrapper">
        <ToastContainer />
        <div id="backArrowWrapper">
          <a href="/#/dashboard">
            <img src={BackArrow} alt="bell" id="backIcon" />
          </a>
        </div>
        <div id="bellWrapper">
          <img src={bell} alt="bell" id="bellIcon" />
        </div>

        <form id="profileEditForm" onSubmit={updateDetails}>
          <h1>Student Profile Edit</h1>
          <div>
            <input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input placeholder="Email"  name="email"
              value={formData.email}
              onChange={handleChange} />
          </div>
          
          <div>
            <input type="text" placeholder="Enter CGPA" name="cgpa" value={formData.cgpa} onChange={handleChange} />
            <input type="text" placeholder="Enter Passing Year" name="passingYear" value={formData.passingYear} onChange={handleChange} />
          </div>
          <div>
            <input
              type="file"
              placeholder="Upload File"
              id="resume"
              onChange={(e) => {
                setfile(e.target.files[0]); // console.log(selectedFile);
              }}
            />
          </div>
          <div>
            <button type="submit" value="submit" id="btn">
              {" "}
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Profile;
