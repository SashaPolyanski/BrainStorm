import React from 'react';

import { useSelector } from 'react-redux';

import { selectUser } from '../../../bll/selectors/selectors';

const Sidebar = () => {
  const userInfo = useSelector(selectUser);
  return (
    <div>
      {userInfo.avatar}
      {userInfo.name}
    </div>
  );
};

export default Sidebar;
