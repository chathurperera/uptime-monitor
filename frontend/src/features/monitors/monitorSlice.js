import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import monitorService from "./monitorService";

const initialState = {
  monitors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Create new monitor
export const createMonitor = createAsyncThunk(
  "monitors/create",
  async (monitorData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await monitorService.createMonitor(monitorData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get monitors
export const getMonitors = createAsyncThunk(
  "monitors/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await monitorService.getAllMonitors(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete Monitor
export const deleteMonitor = createAsyncThunk(
  "monitors/delete",
  async (monitorID, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await monitorService.deleteMonitor(monitorID, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Monitor Slice
export const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //Create Monitor
      .addCase(createMonitor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMonitor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.monitors.push(action.payload);
      })
      .addCase(createMonitor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //Get all Monitors
      .addCase(getMonitors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMonitors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.monitors = action.payload;
      })
      .addCase(getMonitors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //Delete Monitor
      .addCase(deleteMonitor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMonitor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.monitors = state.monitors.filter(
          (monitor) => monitor._id !== action.payload.id
        );
      })
      .addCase(deleteMonitor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = monitorSlice.actions;
export default monitorSlice.reducer;
