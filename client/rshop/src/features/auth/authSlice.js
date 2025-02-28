import { createSlice } from "@reduxjs/toolkit";
import { createUser, getCurrentUser, LogIn, sendOTP, userStatus } from "./authAPI";

const initialState = {
  userData: null,
  isAuthenticated: false,
  error: null,
  message: null,
  isLoading: false,
  isCheckingAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorsMassage: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // for load user data on opening app

    builder.addCase(getCurrentUser.pending, (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = true;
      state.isCheckingAuth = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.isCheckingAuth = false;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isLoading = false;
      state.isCheckingAuth = false;
    });

    // for user Status

    builder.addCase(userStatus.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.message = null;
    });

    builder.addCase(userStatus.fulfilled, (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
    });

    builder.addCase(userStatus.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // for send otp

    builder.addCase(sendOTP.pending, (state) => {
      state.isLoading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(sendOTP.fulfilled, (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
    });
    builder.addCase(sendOTP.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // for send login

    builder.addCase(LogIn.pending, (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(LogIn.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    });
    builder.addCase(LogIn.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isLoading = false;
    });
    
    // for create user

    builder.addCase(createUser.pending, (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { clearErrorsMassage } = authSlice.actions;

export default authSlice.reducer;

// if (action.payload) {
//   state.error = action.payload;           api error
// } else {
//   state.error = action.error.message;     axios arror
// }

// reducers: {
//   getCurrentUserRequest: (state) => {
//     state.isAuthenticated = false;
//     state.ischeckingAuth = true;
//     state.error = null;
//   },
//   getCurrentUserSuccess: (state, action) => {
//     state.userData = action.payload;
//     state.isAuthenticated = false;
//     state.ischeckingAuth = false;
//   },
//   getCurrentUserError: (state) => {
//     state.isAuthenticated = false;
//     state.ischeckingAuth = false;
//   },

//   // for user Status

//   userStatusRequest: (state) => {
//     state.isLoading = true;
//     state.error = null;
//     state.message = null;
//   },
//   userStatusSuccess: (state, action) => {
//     state.message = action.payload;
//     state.isLoading = false;
//   },
//   userStatusError: (state) => {
//     state.error = action.payload;
//     state.isLoading = false;
//   },

//   // for send Code

//   sendOtpRequest: (state) => {
//     state.isLoading = true;
//     state.error = null;
//     state.message = null;
//   },
//   sendOtpSuccess: (state, action) => {
//     state.message = action.payload;
//     state.isLoading = false;
//   },
//   sendOtpError: (state,action) => {
//     state.error = action.error;
//     state.isLoading = false;
//   },

//   clearErrorsMassage: (state) => {
//     state.error = null;
//     state.message = null;
//   },
// },
