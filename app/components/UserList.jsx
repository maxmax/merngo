import React from 'react';
import UserData from './UserData';

export default ({ data, update }) => {
  if (!data) { return (<p>Loading...</p>); }

  const users = data.map((user, index) => {
    return (<UserData user={user} key={`user-${index}`} index={index} update={update} />);
  });

  return (
    <div className="table-responsive">
      <table className="user-list table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {users}
        </tbody>
      </table>
    </div>
  );
};
