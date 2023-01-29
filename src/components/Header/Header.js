import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillWeiboCircle } from 'react-icons/ai';
import { DiAtom, DiCssdeck, DiDebian } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px;"}}>
          <DiDebian size="3rem" /><Span>Back to blog</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link passHref href="/portfolio#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="/portfolio#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link passHref href="/portfolio#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/JinchuanL">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jinchuan-li/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://weibo.com/u/3178449505">
          <AiFillWeiboCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
