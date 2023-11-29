// create api function to send request to backend

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
})

// create function to send form data to backend server

export const sendForm = async (formData: any) => {
    const res = await api.post("/form", formData)
    return res.data
}

