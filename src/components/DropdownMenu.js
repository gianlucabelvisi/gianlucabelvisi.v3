import React from 'react';
import styled from "styled-components"
import {FaTimes} from "react-icons/fa";
import {menuData} from "../data/MenuData";
import DropdownElement from "./DropdownMenuElement";

const DropdownMenu = ({isDropdownOpen, toggleDropdownOpen}) => {
    return (
        <Container isOpen={isDropdownOpen}>
            <Icon onClick={toggleDropdownOpen}>
                <CloseIcon/>
            </Icon>
            <Wrapper>
                <Menu>
                    {menuData.map((item, key) => (
                        <DropdownElement item={item} key={key}/>
                    ))}
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default DropdownMenu;

const Container = styled.aside`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? "0.9" : "0")};
  top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
const CloseIcon = styled(FaTimes)`
  color: var(--font-color-light);
`
const Wrapper = styled.div`
  color: var(--font-color-light);
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`