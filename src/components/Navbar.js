import React from 'react'
// import logo from 'C:/Users/rdjdp/Dp_React/my-app/src/components/logo.svg'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        LOGO
                    </a>

                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                    <div id="navbarSupportedContent" class="collapse navbar-collapse mx-5">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item  mx-4"><a href="#" class="nav-link" style={{ color: 'white' }}>Home <span class="sr-only">(current)</span></a></li>
                            <li class="nav-item mx-4"><a href="#" class="nav-link" style={{ color: 'white' }}>Invite</a></li>
                            <li class="nav-item mx-4"><a href="#" class="nav-link" style={{ color: 'white' }}>Pricing</a></li>
                            <li class="nav-item mx-4"><a href="#" class="nav-link" style={{ color: 'white' }}>About Us</a></li>
                            <li class="nav-item mx-4"><a href="#" class="nav-link" style={{ color: 'white' }}>Contact Us</a></li>
                            <ul class='mx-4 '>
                                <button class="nav-item mx-5 " style={{ backgroundColor: 'orange', borderRadius: '0px 30px 30px 20px' }}><a href="#" class="nav-link" style={{ color: 'black' }}>Register</a></button>
                                <button class="nav-item mx-2 " style={{ backgroundColor: 'orange', borderRadius: '0px 30px 30px 20px' }}><a href="#" class="nav-link" style={{ color: 'black' }}>Login</a></button>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='para' style={{
                position: 'absolute',
                left: ' 5.69%',
                right: '49.8%',
                top: '26.09%',
                bottom: '56.52%',

                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '60px',
                lineHeight: '90px',

                color: 'black'
            }}>
                Welcome back<br />member!

            </div>
            <br />

            <div class='lorem' style={{
                position: 'absolute',
                left: ' 15.95%',
                right: '59.13%',
                top: '54.09%',
                bottom: '32.66%',

                fontFamily: 'Poppins',
                textAlign: 'justify',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',

                color: 'black'
            }}>
                Lörem ipsum rede mar. Jåpån vast ining ben de benybel. Cynception nettokrati viss dogen vire. Krosamma per helarade mypes.Lörem ipsum rede mar. Jåpån vast ining ben de benybel.  Vaktigt överklassafari ol gusol. Cynception nettokrati viss dogen vire. Krosamma per helarade mypes. Vaktigt överklassafari ol gusol.
            </div>

            <div class='login'>
                <input placeholder='Username' style={{
                    boxSizing: 'border-box',

                    position: 'absolute',
                    left: '60.05%',
                    right: '11.71%',
                    top: '31.59%',
                    bottom: '61.55%',

                    background: 'rgba(221, 221, 221, 1)',
                    border: '2px solid rgba(221, 221, 221)',
                    borderRadius: '5px'
                }} />
                <input placeholder='Username' style={{
                    boxSizing: 'border-box',

                    position: 'absolute',
                    left: '60.05%',
                    right: '11.71%',
                    top: '40.87%',
                    bottom: '52.27%',

                    background: 'rgba(221, 221, 221, 1)',
                    border: '2px solid rgba(221, 221, 221)',
                    borderRadius: '5px'
                }} />
            </div>
            <div class='forgot'>
                <p style={{
                    position: 'absolute',
                    left: '65.87%',
                    right: '21.86%',
                    top: '48.5%',
                    bottom: '49.47%',

                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '21px',
                    cursor: 'pointer',
                    /* identical to box height */


                    color: 'black'
                }}>Forgot Password? </p><p style={{
                    position: 'absolute',
                    left: '75.75%',
                    right: '17.86%',
                    top: '48.5%',
                    bottom: '49.47%',

                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '21px',
                    cursor: 'pointer',
                    /* identical to box height */


                    color: 'rgba(206, 153, 47, 1)'
                }}> Reset Password</p>
            </div>

            <div class='button'>
                <button style={{
                    position: 'absolute',
                    left: '60.05%',
                    right: '11.71%',
                    top: '54.59%',
                    bottom: '39.42%',
                    cursor: 'pointer',

                    background: 'rgba(206, 153, 47, 1)',
                    borderRadius: '0px 30px 30px 20px'
                }}>Login</button>
            </div>

            <div>

                <footer class="text-center text-white  bg-dark shadow-sm" style={{ backgroundColor: 'black', position: 'absolute', left: '0', right: '0', bottom: '0px' }}>

                    <div class="container pt-1">
                        <section class="mb-1">

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-facebook-f"></i
                            ></a>


                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-twitter"></i
                            ></a>
                        </section>

                    </div>

                    <div class="text-center text-dark p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        <p style={{
                            position: 'absolute',
                            left: '37.96%',
                            right: ' 58%',
                            top: '36.57%',
                            bottom: '17.12%',

                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */


                            color: 'rgba(187, 187, 187, 1)'
                        }}>SignUp</p>

                        <p style={{
                            position: 'absolute',
                            left: '44.96%',
                            right: ' 58%',
                            top: '36.57%',
                            bottom: '8.12%',

                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */


                            color: 'rgba(187, 187, 187, 1)'
                        }}>SignIn</p>

                        <p style={{
                            position: 'absolute',
                            left: '50.96%',
                            right: ' 58%',
                            top: '36.57%',
                            bottom: '8.12%',

                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */


                            color: 'rgba(187, 187, 187, 1)'
                        }}>About Us</p>

                        <p style={{
                            position: 'absolute',
                            left: '56.96%',
                            right: ' 58%',
                            top: '36.57%',
                            bottom: '8.12%',

                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */


                            color: 'rgba(187, 187, 187, 1)'
                        }}>Contact Us</p>
                    </div>

                </footer>
            </div>

        </div>



    )
}

export default Navbar
