import React from 'react'
import { matchPath,useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Nav = () => {
    const location = useLocation()
    console.log('location=>', location)
    function getActiveClass(path){
        if (location.pathname == path) {
            return 'active'
        }
        return ''
    }

  return (
    <>
    <div id="header" class="header section">
    <div class="container">


        <div class="header-wrapper">


            <div class="header-logo">
                <a href="index-2.html"><img src="/parkinson/logo2.png" style={{width:'70px', height:'70px', marginTop:'10px'}} alt=""/></a>
           <p>Parkinson's detector</p>
            </div>



            <div class="header-menu d-none d-lg-block">
                <ul class="main-menu">
                    <li>
                        <Link to={'/'}>
                        <a class={`${getActiveClass('/')}`} href="/">Home</a>
                        </Link>
                    </li>
            
                    <li>
                        <Link to={'/parkinson'}>
                        <a class={`${getActiveClass('/parkinson')}`} >Understanding Parkinson's </a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/causes'}>
                        <a  class={`${getActiveClass('/causes')}`}>Causes</a>
                        </Link>
                     
                    </li>
                    <li>
                        <Link to={'/statistic'}>
                        <a  class={`${getActiveClass('/statistic')}`}>Statistics</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div class="header-meta">

          
              

         

                <div class="header-toggle d-lg-none">
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

            </div>


        </div>


    </div>
</div>

<div class="offcanvas offcanvas-start" id="offcanvasMenu">

    <div class="offcanvas-header">

        <div class="offcanvas-logo">
            <a href="index-2.html"><img src="/parkinson/logo2.png" alt=""/></a>
        </div>
   
        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>

    <div class="offcanvas-body">
        <div class="offcanvas-menu">
            <ul class="main-menu">
                <li>
                    <Link to={"/"}>
                    <a class={`${getActiveClass('/')}`} >Home</a>
                   </Link>
                </li>
          
                <li>
                <Link to={"/parkinson"}>
                    <a class={`${getActiveClass('/parkinson')}`}>Understanding Parkinson's </a>
                   </Link>
                </li>
                <li>
                <Link to={"/causes"}>
                    <a  class={`${getActiveClass('/causes')}`}>Causes
                    </a>
                </Link>
                </li>
                <li>
                
                <Link to={"/statistic"}>

                    <a  class={`${getActiveClass('/statistics')}`}>Statistics</a>
                </Link>
                </li>
            </ul>
        </div>
    </div>

</div>
<Helmet>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>

    <script src="assets/js/plugins/popper.min.js"></script>
    <script src="assets/js/plugins/bootstrap.min.js"></script>

    <script src="assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="assets/js/plugins/nice-select2.js"></script>
    <script src="assets/js/plugins/jquery.powertip.min.js"></script>
    <script src="assets/js/plugins/glightbox.min.js"></script>

    <script src="assets/js/main.js"></script>


</Helmet>

    </>
  )
}

export default Nav