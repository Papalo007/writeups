import React from 'react';

export default function ProfileHeader({ image }) {
  return (
    <img
      src={image}
      alt="Profile"
      style={{
        position: 'absolute',
        top: '7.3rem',
        right: '500px',
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        zIndex: 1,
      }}
    />
  );
}