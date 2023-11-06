"use client"
import React from "react";
import { ButtonNav, ButtonsContainerNav, LogoNav, NavbarContainer } from "../../styledComponents/StyledComponents";
import logonav from "../../public/klipartz.com.png";
import Image from "next/image";

function Navbar() {
  return (
    <NavbarContainer>
      <LogoNav>
        <Image src={logonav} alt="Logo web" />
      </LogoNav>
      <ButtonsContainerNav>
        <ButtonNav>
          Docs
        </ButtonNav>
        <ButtonNav>
          About
        </ButtonNav>
        <ButtonNav>
          Help
        </ButtonNav>
      </ButtonsContainerNav>
    </NavbarContainer>
  )
}

export default Navbar