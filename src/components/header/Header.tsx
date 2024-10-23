import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


const Header = () => {


    return (
        <Container>
            <Navbar expand="lg" className='flex justify-around items-center bg-slate-600/80 border-b-4 border-green-300/80 h-[65px]'>

                <Navbar.Brand href="/" className='flex space-x-7 items-center '>
                    <svg className="text-green-300/80 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="currentColor" d="M40.5,12.5c0-1.48-0.311-2-1.872-2H11.726l-0.801-5c-0.109-1.46-0.85-2-2.421-2H2.501C1.02,
                        3.5,0.5,3.99,0.5,5.5v1 c0,1.551,0.52,2,2.001,2h3.722l3.282,19c0.35,1.04,1.311,1.95,3.001,2h22.012c1.75,
                        0,2.57-0.359,3.002-2L40.5,12.5z M33.477,24.5 H13.696l-1.471-9h22.951L33.477,24.5z M13.507,36.5c0,2.21,
                        1.79,4,4.002,4c2.211,0,4.003-1.79,4.003-4s-1.792-4-4.003-4 C15.297,32.5,13.507,34.29,13.507,36.5z M26.514,
                        36.5c0,2.21,1.791,4,4.002,4s4.002-1.79,4.002-4s-1.791-4-4.002-4 S26.514,34.29,26.514,36.5z" />

                    </svg>
                    <p className='text-lg font-bold font-sans hover:text-yellow-50 transition-colors duration-300'>MiTienda</p>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className="mx-5 font-bold transition-all duration-200 hover:text-yellow-50" >Productos</NavLink>
                        <NavLink to="/" className="mx-5 font-bold transition-all duration-200 hover:text-yellow-50">Carrito</NavLink>
                        <button
                            className="px-3 py-1 ms-5 bg-gray-400 text-black font-semibold rounded border-2
                         border-black hover:bg-green-300/60 transition-all duration-300 shadow-md hover:shadow-black"
                        >
                            Sign In
                        </button>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </Container >
    );
};

export default Header;