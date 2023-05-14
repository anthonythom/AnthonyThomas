const Links = styled.div`

position: relative;
display: block;
transition: .5s;

::after{
  text-decoration: none;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  transition: transform .5s;
  transform: scaleX(0);
  transform-origin: right ;

}

:hover{
 color: #6231cd ;
 text-decoration: none;
}
:hover::after{
  transform: scaleX(1);
  transform-origin: left;
  
}

`;

const Logo = styled.img`
  height: 3rem;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;



  :visited {
    text-decoration: none;

}


  @media only screen and (max-width: 768px) {
    display: none;
  }
`;