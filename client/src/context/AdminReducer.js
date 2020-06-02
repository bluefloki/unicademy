export default (state, action) => {
  switch (action.type) {
    case "GET_TEACHER_APPLICATIONS":
      return {
        ...state,
        applications: action.payload,
      };

    case "RESET_APPLICATIONS":
      return {
        ...state,
        applications: [],
      };

    case "GET_SINGLE_APPLICATION":
      return {
        ...state,
        singleApplication: action.payload,
      };

    case "RESET_SINGLE_APPLICATION":
      return {
        ...state,
        singleApplication: {},
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
