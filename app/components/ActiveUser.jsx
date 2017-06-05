import React from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/user';
const cx = classNames.bind(styles);

export default ({ data, active }) => {
  if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }

  const user = data[active];

  return (
    <div className={'thumbnail ' + cx('user')}>
      <img src={`images/${user.image}.svg`} />

      <div className="thumbnail-caption">
        <h3>{user.name}</h3>
        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Favorite animal:</td>
              <td>{user.image}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>8 {user.phone}</td>
            </tr>
          </tbody>
        </table>

        <p><b>Favorite phrase:</b> {user.phrase}</p>
      </div>
    </div>
  );
};
