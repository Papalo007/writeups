// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import ProfilePic from './therizzard.jpg';


export default function Home() {
  return (
    <Layout title="HTB Writeups" description="My HackTheBox writeups">
      <main style={{ padding: '2rem', position: 'relative' }}>
        <img
          src={ProfilePic}
          alt="Profile"
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
          }}
        />

        <h1>HTB Writeups (By Papalo007)</h1>

        <p>Use the sidebar to navigate through the different boxes.</p>

        <p>
          If you want to give me feedback, my discord is @papalo007<br />
          If you like my writeups, consider clicking "Respect" on my HTB profile :)<br />
          <a
            href="https://app.hackthebox.com/users/2397718"
            target="_blank"
            rel="noreferrer"
          >
            https://app.hackthebox.com/users/2397718
          </a>
        </p>
      </main>
    </Layout>
  );
}
