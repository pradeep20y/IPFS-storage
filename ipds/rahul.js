/* import { ethers } from "ethers";
import { Row, Form, Button } from "react-bootstrap";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import FormData from "form-data";
//import Spinner from "react-bootstrap/Spinner";
// import { fs } from "fs";
// import * as fs from "fs";
const fs = require("fs");

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNjcxMWJjZi0yYWNhLTQzNWYtYWEzNi1lNzQ2MGExNGE2NTkiLCJlbWFpbCI6ImJsb2NrcmVwcmFkZWVwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5M2RkMzg3OGQyYTAyYTk5NmYwOSIsInNjb3BlZEtleVNlY3JldCI6IjhlY2I0ZDZhODIxODFmODU0N2UyYzY0OGUwYjFjMzEyMTExNDg5YzUzNmY5ZWU3ZGM1MmRkMjU2YjJkYWNhN2YiLCJpYXQiOjE2OTYyNDkyMDB9.cn3o-ZnDpiTXTvlC3owAjjyrTOdYvETCizBNi9pXi5M";


const uploadToIPFS = async (event) => {
    event.preventDefault();
    console.log("first");
    const src = event.target.files[0];
    setImage(src);
    if (typeof src !== "undefined") {
      try {
        console.log("second");
        const formData = new FormData();

        // const file = fs.createReadStream(src);
        formData.append("file", src);

        console.log(formData);
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            maxBodyLength: "Infinity",
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              pinata_api_key: "93dd3878d2a02a996f09",
              pinata_secret_api_key:
                "8ecb4d6a82181f8547e2c648e0b1c312111489c536f9ee7dc52dd256b2daca7f",
              // Authorization: JWT,
            },
          }
        );
        console.log("hi");
        console.log(res.data.IpfsHash);
        setHash(res.data.IpfsHash);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    }
  } */

 /*  const axios = require('axios')
  const FormData = require('form-data')
  const fs = require('fs')
  const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNjcxMWJjZi0yYWNhLTQzNWYtYWEzNi1lNzQ2MGExNGE2NTkiLCJlbWFpbCI6ImJsb2NrcmVwcmFkZWVwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5M2RkMzg3OGQyYTAyYTk5NmYwOSIsInNjb3BlZEtleVNlY3JldCI6IjhlY2I0ZDZhODIxODFmODU0N2UyYzY0OGUwYjFjMzEyMTExNDg5YzUzNmY5ZWU3ZGM1MmRkMjU2YjJkYWNhN2YiLCJpYXQiOjE2OTYyNDkyMDB9.cn3o-ZnDpiTXTvlC3owAjjyrTOdYvETCizBNi9pXi5M";
  
  const pinFileToIPFS = async () => {
      const formData = new FormData();
      const src = "test1.jpeg";
      
      const file = fs.createReadStream(src)
      formData.append('file', file)
      
      const pinataMetadata = JSON.stringify({
        name: 'File name',
      });
      formData.append('pinataMetadata', pinataMetadata);
      
      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      })
      formData.append('pinataOptions', pinataOptions);
  
      try{
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
          maxBodyLength: "Infinity",
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            'Authorization': `Bearer ${JWT}`
          }
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
  }
  
  pinFileToIPFS() */

/* const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs'); */

const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNjcxMWJjZi0yYWNhLTQzNWYtYWEzNi1lNzQ2MGExNGE2NTkiLCJlbWFpbCI6ImJsb2NrcmVwcmFkZWVwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5M2RkMzg3OGQyYTAyYTk5NmYwOSIsInNjb3BlZEtleVNlY3JldCI6IjhlY2I0ZDZhODIxODFmODU0N2UyYzY0OGUwYjFjMzEyMTExNDg5YzUzNmY5ZWU3ZGM1MmRkMjU2YjJkYWNhN2YiLCJpYXQiOjE2OTYyNDkyMDB9.cn3o-ZnDpiTXTvlC3owAjjyrTOdYvETCizBNi9pXi5M"; // Replace with your Pinata JWT token

/* const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const statusMessage = document.getElementById('status');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];

    if (!file) {
        statusMessage.textContent = 'Please selecet a file.';
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT}`,
            },
        });

        statusMessage.textContent = `File uploaded to IPFS. CID: ${res.data.IpfsHash}`;
    } catch (error) {
        statusMessage.textContent = `Error uploading to Pinata: ${error.message}`;
    }
});
 */

const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const statusMessage = document.getElementById('status');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];

    if (!file) {
        statusMessage.textContent = 'Please   file.';
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT}`,
            },
        });

        statusMessage.textContent = `File uploaded to IPFS. CID : ${res.data.IpfsHash}`;
    } catch (error) {
        statusMessage.textContent = `Error uploading to Pinata: ${error.message}`;
    }
});
