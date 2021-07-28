const initialState = {
  isInprogress: false,
  isError: false,
  message: "",
  status: null,
  userList: {},
  searchlist: {},
  searchrolelist: {},
};

export default function UserReducers(state = initialState, action: any) {
  switch (action.type) {
    case "USER_INPROGRESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: "",
      };

    case "USERGET_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
        userList: action.data,
      };

    case "USERGET_FAILURE":
      return {
        ...state,
        isInprogress: false,
        isError: true,
        message: action.messsage,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
        searchlist: action.data,
      };
    case "SEARCH_FAILURE":
      return {
        ...state,
        isInprogress: false,
        isError: true,
        message: action.messsage,
      };
      case "SEARCHROLE_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
          searchrolelist: action.data,
        };
      case "SEARCHROLE_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
    case "USERDELETE_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
      };
    case "USERDELETE_FAILURE":
      return {
        ...state,
        isInprogress: false,
        isError: true,
        message: action.messsage,
      };
    case "USERUPDATE_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
      };
    case "USERUPDATE_FAILURE":
      return {
        ...state,
        isInprogress: false,
        isError: true,
        message: action.messsage,
      };
    default:
      return state;
  }
}
