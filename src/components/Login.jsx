import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsTwitter, BsFacebook, BsGoogle, BsFillLockFill } from "react-icons/bs"
import  Navbar2 from '../components/Navbar2';



const Login = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar2/>
            <StyledFormWrapper>
                <StyledForm>

                    <StyledRegisterForm>
                        <StyledHeading>
                            Welcome Back!
                        </StyledHeading>


                        <StyledDiv>
                            <StyledIcon>
                                <AiOutlineMail />
                            </StyledIcon>
                            <StyledInput type='email' placeholder='Email'></StyledInput>
                        </StyledDiv>

                        <StyledDiv>
                            <StyledIcon>
                                <BsFillLockFill />
                            </StyledIcon>
                            <StyledInput type='password' placeholder='Password'></StyledInput>
                        </StyledDiv>
                        <StyledText >
                            Or Login with
                        </StyledText>

                        <LoginIcon>
                            <BsGoogle />
                            <BsTwitter />
                            <BsFacebook />

                        </LoginIcon>
                        <StyledButton>Login</StyledButton>


                    </StyledRegisterForm>
                    <StyledLoginForm>
                        <StyledHeading variant="SignIn">
                            Create your account
                        </StyledHeading>
                        <StyledText variant="SignIn">
                            To keep connected with us please login with your personal info.
                        </StyledText>
                        <StyledButton variant="SignIn">
                            <Link to="/register">
                                Register
                            </Link>
                        </StyledButton>
                    </StyledLoginForm>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Login;






const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    overflow-y: hidden;
  }  
  body{
    font-family: Arial, Helvetica, sans-serif;
    background: radial-gradient(  aqua,white);
    height:100%;
    margin:0;
    color: black;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width : 310px) {
        h2{
            text-align:center;
            font-size:1.3rem;
          
        }
    }
  @media only screen and (min-width : 310px) {
        h2{
            text-align:center;
            font-size:1.3rem;
          
        }
    }
`;
const sharedStyles = css`
    background-color: #eee;
    height: 30px;
    margin:10px 0 10px 0;
    padding: 20px 34px;
    border-radius:5px;
    border: 1px solid #727272;
    box-sizing: border-box;
    font-size: 1rem;
`;
const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 10px;
`;

const StyledForm = styled.form`
  background-color: #fff;
  min-height: 500px;
  width:100%;
  display: flex;
  max-width:750px;
  margin: 10px 0;
  overflow-y:hidden;
  border-radius:10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.4);
  label{
    display: block;
    font-weight: bold;
    text-align: left;
  }
`;

const StyledLoginForm = styled.div`
    width: 40%;
    background:linear-gradient(#51ff51,green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledRegisterForm = styled.form`
  background-color: #fff;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width:60%;
  padding: 30px;
  box-sizing: border-box;
  label{
    display: block;
    font-weight: bold;
    text-align: left;
  }
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles};
`;

const StyledButton = styled.button`
    display: block;
    background-color: ${(props) => props.variant === "SignIn" ? "transparent" : "green"};
    color: #fff;
    font-size: 0.9rem;
    height: 40px;
    padding: 0 20px;
    border:${(props) => props.variant === "SignIn" ? "2px solid white" : "0"};
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
`;

const StyledText = styled.p`
    font-size: ${(props) => props.variant === "SignIn" ? "0.9rem" : "0.79rem"};
    color:${(props) => props.variant === "SignIn" ? "white" : "black"};
    text-align: ${(props) => props.variant === "SignIn" ? "Center" : ""};
`;

const StyledHeading = styled.h2`
    color:${(props) => props.variant === "SignIn" ? "white" : "#42c142"};
    margin:0 0 10px 0;
`;
const StyledDiv = styled.div`
 display: flex ;
 position: relative;
`;

const StyledIcon = styled.div`
position: absolute;
top:22px;
left: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

const LoginIcon = styled.div`
  display :flex;
  margin-bottom: 1rem;
  justify-content: space-evenly;
  width :30%;


`;
