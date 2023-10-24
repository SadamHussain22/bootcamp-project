import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/action/action';
import './style.css';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '12rem',
  left: '85%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SidefunctionNave = () => {

  const [openp, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen(false);


  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dlt = (id) => {
    dispatch(DLT(id))
  }


  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])





  const Nav = styled.nav`
    position: relative;
    right: 7rem;
    right:0;

  .navbar-list{
    display:flex;
    gap:2.5rem;
    


    li,a{
      list-style:none;
      text-decoration:none;
      
    }
  }
  .navbar-link{

    &:link,
    &:visited{
      display:inline-block;
      text-decoration:none;
      font-size:1.5rem;
       
      color:${({ theme }) => theme.colors.black};
      transition:color 0.3s linear;
    }
    &:hover,
    &:active{
      color:${({ theme }) => theme.colors.helper};
    }
  }
 
  #basic-menu{
    position:relative;
    right: 16px;
    width:78%;
    background-color: red !important;
  }
  
  
  `;
  return (
    <Nav>
      <div className="manuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" title='Login/Register' to="/signup">Sign In</NavLink>

          </li>


          <li>



            <Badge badgeContent={getdata.length} color="primary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <NavLink className="navbar-link" title='Add Cart'> <ShoppingCartIcon /> </NavLink>
            </Badge>




            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              style={{  marginLeft:"950px", top:"40px"}}
            >

              {
                getdata.length ?
                  <div  >
                    <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                      <Table>
                        <thead>
                          <tr>
                            <th>Photo</th>
                            <th>Restaurant Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            getdata.map((e) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                        <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                      </NavLink>
                                    </td>
                                    <td>
                                      <p>{e.rname}</p>
                                      <p>Price : ₹{e.price}</p>
                                      <p>Quantity : {e.qnty}</p>
                                      <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                        { }  <i className='fas fa-trash smalltrash'> </i>
                                      </p>
                                    </td>

                                    <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                      <i className='fas fa-trash largetrash'></i>
                                    </td>
                                  </tr>
                                </>
                              )
                            })
                          }
                          <p className='text-center'>Total :₹ {price}</p>
                        </tbody>
                      </Table>
                    </div>
                  </div> :

                  <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                    <i className='fas fa-close smallclose'
                      onClick={handleClose}
                      style={{ position: "absolute", top: "34px", right: 20, fontSize: 23, cursor: "pointer" }}></i>
                    <p style={{ fontSize: 22 }}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                  </div>
              }

            </Menu>


          </li>
          <li>
          <Button onClick={handleOpen}><PersonOutlineIcon/></Button>
      <Modal
        keepMounted
        open={openp}
        onClose={handleClose2}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
                

          </li>

        </ul>
      </div>

    </Nav>
  )
}

export default SidefunctionNave
