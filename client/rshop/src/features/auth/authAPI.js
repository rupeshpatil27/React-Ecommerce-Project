import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5173",
});

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkApi) => {
    try {
      const response = await api.get(`api/v1/user/me`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const userStatus = createAsyncThunk(
  "auth/userStatus",
  async (userData, thunkApi) => {
    try {
      const response = await api.post(`api/v1/user/userstatus`, userData, {
        withCredentials: true,
      });
      // thunkApi.fulfillWithValue(response.data)
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const sendOTP = createAsyncThunk(
  "auth/sendOtp",
  async (userData, thunkApi) => {
    try {
      const response = await api.post(`api/v1/user/sendotp`, userData, {
        withCredentials: true,
      });

      return await response.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const LogIn = createAsyncThunk(
  "auth/LogIn",
  async (userData, thunkApi) => {
    try {
      const response = await api.post(`api/v1/user/login`, userData, {
        withCredentials: true,
      });

      return await response.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (userData, thunkApi) => {
    try {
      const response = await api.post(`api/v1/user/createuser`, userData, {
        withCredentials: true,
      });

      return await response.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

// for axios errors

// if (axios.isAxiosError(error)) {
//   throw error;
// }

// export const userStatus = async (userData) => {
//   try {
//     const response = await api.post(`api/v1/user/userstatus`, userData, {
//       withCredentials: true,
//     });
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };
