import axios from "axios";

export function setLoggedIn() {
  return (dispatch: any) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function addUser(user: object, history: any) {
  console.log("datadtatddtatdta:",user);
  return (dispatch: any) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/adduser`, user, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response:any) => {
        dispatch({
          type: "USER_SUCCESS",
          message: response.data.message,
          status: response.data.status,
        });
        history.push("/");
      })
      .catch(function (error: string) {
        dispatch({
          type: "USER_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}

export function userGet() {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_NODE_API}/alluser`)
      .then((response:any) => {
        dispatch({
          type: "USERGET_SUCCESS",
          message: "user get list success",
          data: response.data,
        });
      })
      .catch(function (error: string) {
        dispatch({
          type: "USERGET_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}

export function userDelete(id: string, history: any) {
  return (dispatch: any) => {
    return axios
      .delete(`${process.env.REACT_APP_NODE_API}/deleteuser/${id}`)
      .then((response:any) => {
        dispatch({
          type: "USERDELETE_SUCCESS",
          message: "user delete success",
          // data:response.data
        });
      })
      .catch(function (error: string) {
        dispatch({
          type: "USERDELETE_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}

export function userUpdate(id: string, data: object, history: any) {
  return (dispatch: any) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/updateuser/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response:any) => {
        dispatch({
          type: "USERUPDATE_SUCCESS",
          message: "data updated success..",
        });
        history.push("/");
      })
      .catch(function (error: string) {
        dispatch({
          type: "USERUPDATE_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}

export function searchGet(search:string,history:string) {
return (dispatch: any) => {
  return axios
    .get(`${process.env.REACT_APP_NODE_API}/search/${search}`)
    .then((response:any) => {
      dispatch({
        type: "SEARCH_SUCCESS",
        message: "search data success",
        data: response.data,
      });
    })
    .catch(function (error: string) {
      dispatch({
        type: "SEARCH_FAILURE",
        message: "something went wrong",
      });
    });
  }
}

export function searchroleGet(rolesearch:string,history:string) {
return (dispatch: any) => {
  return axios
    .get(`${process.env.REACT_APP_NODE_API}/searchrole/${rolesearch}`)
    .then((response:any) => {
      dispatch({
        type: "SEARCHROLE_SUCCESS",
        message: "search data success",
        data: response.data,
      });
    })
    .catch(function (error: string) {
      dispatch({
        type: "SEARCHROLE_FAILURE",
        message: "something went wrong",
      });
    });
  }
}

export function Allsearchuser(searchname:string,history:string) {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_NODE_API}/searchdata/${searchname}`)
      .then((response:any) => {
        dispatch({
          type: "USERGET_SUCCESS",
          message: "user get list success",
          data: response.data,
        });
      })
      .catch(function (error: string) {
        dispatch({
          type: "USERGET_FAILURE",
          message: "Something went wrong",
        });
      });
  }
}

export function Allsearchrole(searchrole:string,history:string) {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_NODE_API}/searchroledata/${searchrole}`)
      .then((response:any) => {
        dispatch({
          type: "USERGET_SUCCESS",
          message: "user get list success",
          data: response.data,
        });
      })
      .catch(function (error: string) {
        dispatch({
          type: "USERGET_FAILURE",
          message: "Something went wrong",
        });
      });
  }
}