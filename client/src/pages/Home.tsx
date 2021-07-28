import React,{useEffect,useState} from "react";
import {Link,withRouter,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {userDelete, userGet,searchGet,searchroleGet,Allsearchuser,Allsearchrole} from '../store/actions/user';
import Select from 'react-select';

const Home = (props:any) => {

  const history = useHistory();
  const [search,setsearch] = useState('');
  const [rolesearch,setrolesearch] = useState('');


    useEffect(()=>{
        props.userGet();
        // props.searchGet(search,history);     
        // console.log("dataddtdtadtdta",search);
        // props.Allsearchuser(search,history);
      },[]);

    const userdelete = (id:string) =>{
      props.userDelete(id);
      setTimeout(()=>{
        props.userGet();
      },200)
    }

    const allgetdata = () =>{
      setTimeout(()=>{
        props.userGet();
      },200)
    }

    // const options = [
    //   { value: 'chocolate', label: 'Chocolate' },
    //   { value: 'strawberry', label: 'Strawberry' },
    //   { value: 'vanilla', label: 'Vanilla' }
    // ];

    const searchdata = () =>{
      props.searchGet(search,history);     
      props.Allsearchuser(search,history);
    }

    const searchroledata = () =>{
      props.searchroleGet(rolesearch,history);    
      props.Allsearchrole(rolesearch,history); 
    }

    const userupdate = (item:any)=>
    {
      history.push({pathname:'/adduser',state:item})
    }

    return (
    <div>
      <div className="container">
        <br />
        <br />
        <br/>
        <br/>
        <br />
        <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
          <button type="button" className="btn">
            Role
          </button>
            <select  onChange={(e)=>setrolesearch(e.target.value)} style={{ width:'150px',marginLeft:'10px',height:'35px',background:'#f7f7f7',outline:'0' }}>
                <option value="Aritist">Aritist</option>
                <option value="Designer">Designer</option>
                <option value="ArtManager">ArtManager</option>
            </select>
            <button type="button" className="btn btn-secondary" style={{ marginLeft:'10px' }} id="myInput"  onClick={searchroledata}>Search</button>
            <button type="button" className="btn btn-secondary" id="myInput" style={{ marginLeft:'10px' }} onClick={allgetdata}>All</button>
          <input
            className="form-control form-control-sm mr-3 w-50"
            type="text"
            placeholder="Search"
            style={{ height:'35px',marginLeft:'100px' }}
            aria-label="Search"

            onChange={(e)=>setsearch(e.target.value)}
          />
          <button type="button" className="btn btn-secondary" id="myInput" onClick={searchdata}>Search</button>
          <i className="fas fa-search" aria-hidden="true"></i>
        </form>
        <br/>
        <Link to="/adduser"><button type="button" className="btn btn-success" style={{ float:'right',width:'200px' }}>Add new row</button></Link>
        <br/>
        <br/>
        <table className="table" id="myTable">
          <thead className="thead-dark">
            <tr>
            <th scope="col" style={{ textAlign: "center" }}>
                No.
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                First name
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Last name
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Email
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Role
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
              {
                  props.userList.data && Object.values(props.userList.data).map((item:any,index:number)=>{
                      return (
                        <tr>
                      <td style={{ textAlign: "center" }}>{index + 1}</td>
                      <td style={{ textAlign: "center" }}>{item.first_name}</td>
                      <td style={{ textAlign: "center" }}>{item.last_name}</td>
                      <td style={{ textAlign: "center" }}>{item.email}</td>
                      <td style={{ textAlign: "center" }}>{item.role}</td>
                        <td style={{ textAlign: "center" }}>
                          <svg
                            width="1em"
                            style={{ color: "green", cursor: "pointer" }}
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-pencil-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={()=>userupdate(item)}
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                            />
                          </svg>
                          <svg
                            width="1em"
                            style={{
                              marginLeft: "20px",
                              color: "red",
                              cursor: "pointer",
                            }}
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-trash"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={()=>userdelete(item._id)}
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </td>
                      </tr>
                      )
                  })
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

function mapStateToProps(state:any)
{
    return{
        userList:state.UserReducers.userList,
        searchlist:state.UserReducers.searchlist,
        searchrolelist:state.UserReducers.searchrolelist,
    }
}
function mapDispatchToProps(dispatch:any)
{

    return{
        userGet:()=>dispatch(userGet()),
        searchGet:(search:string,history:string)=>dispatch(searchGet(search,history)),
        searchroleGet:(rolesearch:string,history:string)=>dispatch(searchroleGet(rolesearch,history)),
        Allsearchuser:(searchname:string,history:string)=>dispatch(Allsearchuser(searchname,history)),
        Allsearchrole:(searchname:string,history:string)=>dispatch(Allsearchrole(searchname,history)),
        userDelete:(id:string,history:any)=>dispatch(userDelete(id,history)),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));