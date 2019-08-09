import React from 'react';

//req for class components
class UsersApp extends React.Component{
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }
  //function that will get run when component is mounted. Once. this is where users can make requests
  componentDidMount(){
    this.fetchInfo()
  }

  fetchInfo = () => {
    fetch(`http://localhost:5000/api/restricted/data`)
    .then(res=>{
      //json translates into data into obj/string that JavaScript could read taht comes with fetch
      return res.json()
    })
    //which is why .then is req twice
    .then(res=> this.setState({ users:res },   console.log(res)))
    .catch(err => console.log(err))
  }

render(){
  return (
    <div className="App">
          <div>
            {this.state.users.map(users=>{
              return <div>
                <p className="cards">{users.name}<br></br>{users.course}<br></br>{users.technique}</p>
                </div>
            })}
        </div>
    </div>
  );
}
}

export default UsersApp;
