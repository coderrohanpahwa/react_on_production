import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/index'
import EnhancedTable from '../Pages/DataTable'

function User ({ userData, fetchUser }) {
  useEffect(() => {
    debugger;
    if(userData.users.length==0)
    {
      fetchUser();
    }
   
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        
          {/* {
          userData.users.length==0?"":
          <EnhancedTable data={userData.users}  />
         } */}
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.title}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    debugger;
  return {
    userData: state.User
  }
}

const mapDispatchToProps = dispatch => {
    debugger;
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)