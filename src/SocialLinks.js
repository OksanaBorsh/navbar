import React from "react";
import { social } from "./data";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function SocialLinks() {
  return (
    <ul className="social-icons">
      {social.map((link) => (
        <li key={link.id}>
          <a href={link.url}>{link.icon}</a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
