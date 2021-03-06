import React from 'react';
import { useEffect } from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
} from './HeaderStyle';
import Aos from 'aos';
import Count from './Count';

const Header = () => {
  useEffect(() => {
    Aos.init({duration: 3000})
  })
  return (
    <HeaderContainer >
      <HeaderContent data-aos = "fade-up">
        <HeaderItems>
          <HeaderH1>COVID-19 Vaccination Statistics in Vietnam</HeaderH1>
          <HeaderP>From August to November 2021</HeaderP>
          <Count/>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;