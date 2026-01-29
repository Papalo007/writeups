import React from 'react';

export default function ActiveMachineNotice() {
  return (
    <div style={{
      border: '2px solid #ff6b6b',
      borderRadius: '8px',
      padding: '2rem',
      margin: '2rem 0',
      textAlign: 'center',
      backgroundColor: '#2a2a2a'
    }}>
      <h2 style={{color: '#ff6b6b', marginTop: 0}}>⚠️ Machine is Active on HTB</h2>
      <p>Due to HackTheBox policy, this writeup is private. It will become public as soon as the machine retires.</p>
    </div>
  );
}