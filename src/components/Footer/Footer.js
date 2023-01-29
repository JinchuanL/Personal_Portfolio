import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillWeiboCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { IconName, MdContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Contact Me</LinkTitle>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/JinchuanL">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jinchuan-li/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://weibo.com/u/3178449505">
          <AiFillWeiboCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href='mailto:andy1950808@gmail.com'>
          <AiFillMail size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://jinchuan.site/portfolio/resume/JinchuanLi-Resume.pdf'>
          <MdContactMail size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
