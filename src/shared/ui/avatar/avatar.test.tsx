// import { describe, test, expect } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { FsAvatar } from './avatar';
// import { UserOutlined } from '@ant-design/icons';

// describe('FsAvatar Component', () => {
//   test('renders avatar with text content', () => {
//     render(<FsAvatar>U</FsAvatar>);
//     expect(screen.getByText('U')).toBeTruthy();
//   });

//   test('renders avatar with icon', () => {
//     render(<FsAvatar icon={<UserOutlined data-testid="user-icon" />} />);
//     expect(screen.getByTestId('user-icon')).toBeTruthy();
//   });

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsAvatar } from './avatar';
import { UserOutlined } from '@ant-design/icons';

describe('FsAvatar Component', () => {
  test('renders avatar with text content', () => {
    render(<FsAvatar>U</FsAvatar>);
    expect(screen.getByText('U')).toBeTruthy();
  });

  test('renders avatar with icon', () => {
    render(<FsAvatar icon={<UserOutlined data-testid="user-icon" />} />);
    expect(screen.getByTestId('user-icon')).toBeTruthy();
  });

  test('renders avatar with image', () => {
    render(<FsAvatar src="avatar.jpg" alt="User Avatar" />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe('avatar.jpg');
    expect(img.getAttribute('alt')).toBe('User Avatar');
  });

  test('applies custom className', () => {
    render(<FsAvatar className="custom-avatar">U</FsAvatar>);
    const avatar = screen.getByText('U');
    if (avatar.parentElement) {
      expect(avatar.parentElement.classList.contains('custom-avatar')).toBe(true);
    }
  });

  test('applies custom style', () => {
    render(
      <FsAvatar style={{ backgroundColor: '#f56a00' }} testId="styled-avatar">
        U
      </FsAvatar>
    );
    const avatar = screen.getByTestId('styled-avatar');

    // Fix: Use toHaveStyle instead of direct style comparison
    expect(avatar).toHaveStyle({ backgroundColor: '#f56a00' });
    // Alternative approach if the above still fails:
    // expect(avatar).toHaveStyle('background-color: rgb(245, 106, 0)');
  });

  test('renders avatar group', () => {
    render(
      <FsAvatar.Group>
        <FsAvatar>U</FsAvatar>
        <FsAvatar>V</FsAvatar>
      </FsAvatar.Group>
    );

    expect(screen.getByText('U')).toBeTruthy();
    expect(screen.getByText('V')).toBeTruthy();
  });
}); //   test('renders avatar with image', () => {
//     render(<FsAvatar src="avatar.jpg" alt="User Avatar" />);
//     const img = screen.getByRole('img');
//     expect(img.getAttribute('src')).toBe('avatar.jpg');
//     expect(img.getAttribute('alt')).toBe('User Avatar');
//   });

//   test('applies custom className', () => {
//     render(<FsAvatar className="custom-avatar">U</FsAvatar>);
//     const avatar = screen.getByText('U');
//     expect(avatar.classList.contains('custom-avatar')).toBe(true);
//   });
//   test('applies custom style', () => {
//     render(
//       <FsAvatar style={{ backgroundColor: '#f56a00' }} testId="styled-avatar">
//         U
//       </FsAvatar>
//     );
//     const avatar = screen.getByTestId('styled-avatar');
//     expect(avatar.style.backgroundColor).toBe('#f56a00');
//   });
//   test('renders avatar group', () => {
//     render(
//       <FsAvatar.Group>
//         <FsAvatar>U</FsAvatar>
//         <FsAvatar>V</FsAvatar>
//       </FsAvatar.Group>
//     );

//     expect(screen.getByText('U')).toBeTruthy();
//     expect(screen.getByText('V')).toBeTruthy();
//   });
// });
