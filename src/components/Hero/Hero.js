import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
        <br/>
        <br/>
        <br/>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
          <br/>
        </SectionTitle>
      </LeftSection>
    </Section>
);

export default Hero;