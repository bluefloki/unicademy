import React, { useContext, createContext, useReducer } from "react";
import AdminReducer from "./AdminReducer";
import axios from "axios";

const initialState = {
  applications: [],
  singleApplication: {},
};

const AdminContext = createContext(initialState);

export const useAdminProvider = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);

  //Teacher Applications
  const getTeacherApplications = async () => {
    try {
      const res = await axios.get("/api/v1/admin/teacherApplications");
      dispatch({
        type: "GET_TEACHER_APPLICATIONS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const resetApplications = () => {
    dispatch({
      type: "RESET_APPLICATIONS",
    });
  };

  const getSingleTeacherApplication = async (id) => {
    const res = await axios.get(`/api/v1/admin/teacherApplications/${id}`);
    dispatch({
      type: "GET_SINGLE_APPLICATION",
      payload: res.data,
    });
  };

  const removeTeacherApplication = async (id) => {
    try {
      await axios.delete(`/api/v1/admin/teacherApplications/${id}`);
      dispatch({
        type: "REMOVE_TEACHER_APPLICATION",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Teacher Applications End

  return (
    <AdminContext.Provider
      value={{
        applications: state.applications,
        singleApplication: state.singleApplication,
        getTeacherApplications,
        removeTeacherApplication,
        resetApplications,
        getSingleTeacherApplication,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
