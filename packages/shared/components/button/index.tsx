import { Button, ButtonProps } from 'antd';
import { FC } from 'react';

const CustomButton: FC<ButtonProps> = (props) => {
  return <Button {...props}></Button>;
};

export default CustomButton;
