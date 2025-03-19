import React from 'react';
import { Avatar as AntAvatar } from 'antd';
import type { AvatarProps } from 'antd';

export interface FsAvatarProps extends AvatarProps {
  /**
   * Additional className for the avatar
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

type FsAvatarGroupProps = React.ComponentProps<typeof AntAvatar.Group>;

export const FsAvatar: React.FC<FsAvatarProps> & {
  Group: React.FC<FsAvatarGroupProps>;
} = ({ className = '', testId, children, ...props }) => {
  return (
    <AntAvatar className={`fs-avatar ${className}`} data-testid={testId} {...props}>
      {children}
    </AntAvatar>
  );
};

// Export Avatar.Group component
FsAvatar.Group = AntAvatar.Group;
