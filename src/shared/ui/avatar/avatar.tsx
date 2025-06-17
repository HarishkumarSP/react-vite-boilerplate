import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import type { AvatarProps as AntdAvatarProps } from 'antd';

export interface AvatarProps extends AntdAvatarProps {
  /**
   * Additional className for the avatar
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export type AvatarGroupProps = React.ComponentProps<typeof AntdAvatar.Group>;

export const Avatar: React.FC<AvatarProps> & {
  Group: React.FC<AvatarGroupProps>;
} = ({ className = '', testId, children, ...props }) => {
  return (
    <AntdAvatar className={`fs-avatar ${className}`} data-testid={testId} {...props}>
      {children}
    </AntdAvatar>
  );
};

// Export Avatar.Group component
Avatar.Group = AntdAvatar.Group;
