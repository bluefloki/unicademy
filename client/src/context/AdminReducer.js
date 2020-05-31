export default (state, action) => {
  switch (action.type) {
    case "GET_TEACHER_APPLICATIONS":
      return {
        ...state,
        applications: action.payload,
      };

    case "REMOVE_TEACHER_APPLICATION":
      return {
        ...state,
        applications: state.applications.filter(
          (application) => application.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
