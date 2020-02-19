import React from 'react';
import { Column, Button, Icon, Title } from "rbx";
import { FaCrosshairs } from 'react-icons/fa';
import "../../estilos/home.scss";
import {Link} from 'react-router-dom';
 
const Home = () => (
  <Column.Group centered>
    <Column size="half"  textAlign="centered" id="home">
      <Title size={2}>Comida Mineira, uai! </Title>
      <Title subtitle size={3}>Direto de minas </Title>
      <Title subtitle size={5}>Conheça O pão de queijo</Title>
      <Link to='/restaurantes'>
        <Button size="medium" color="black">
          <Icon size="small" color="white">
            <FaCrosshairs />
          </Icon>
          <span class="has-text-white">VEM LOGO</span>
        </Button>
      </Link>
    </Column>
  </Column.Group>
)
 
export default Home;