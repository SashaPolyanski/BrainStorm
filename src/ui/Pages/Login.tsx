import React from 'react';

import Button from '../components/button/Button';
import { Input } from '../components/input/Input';
import { AuthWrapper } from '../styles/authWrapper/AuthWrapper';

const Login = () => (
  <AuthWrapper>
    <div>
      <Button variant="auth" name="login" />
      <Input type="password" />
      <Button variant="cancel_auth" name="cancel" />
      <Button variant="show_my_pack" name="My" />
      <Button variant="show_all_pack" name="All" />
      <Button variant="delete" name="Delete" />
      <Button variant="edit_learn" name="Edit" />
      <Button variant="edit_learn" name="Learn" />
      <Button variant="pagination" name="1" />
    </div>
  </AuthWrapper>
);

export default Login;
