import React from "react";
import styled from "styled-components";
import GPGLogoImg from "../../assets/images/GPGLogo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: auto ;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function HeaderLogo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={GPGLogoImg} alt="Garvin Promotion Group logo" />
      </LogoImg>
      {/* <LogoText>Greenland</LogoText> */}
    </LogoWrapper>
  );
}
