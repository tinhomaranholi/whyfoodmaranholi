import React, {Fragment} from 'react';
import ListaRestaurantes from '../../components/lista_restaurantes';
import Categorias from '../../components/categorias';

const Restaurantes = () =>(
    <Fragment>
        <Categorias />
        <ListaRestaurantes />
    </Fragment>

);

export default Restaurantes;