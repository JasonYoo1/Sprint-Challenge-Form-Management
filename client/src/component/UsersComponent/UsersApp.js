import React from 'react';


class UsersApp extends React.Component{
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    this.fetchInfo()
  }

  fetchInfo = () => {
    fetch(`http://localhost:5000/api/restricted/data`)
    .then(res=>{
      return res.json()
    })
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
