import React, { Fragment, useState } from 'react'
import "../assets/vendors/css/nicepage.css"
import "../assets/vendors/css/Page-1.css"
import img1 from "../assets/images/b5e94a25741dca619aa54b1f08ab425d.png"
import img2 from "../assets/images/975255a895e0efd3c75c073d5e0e89f3.png"
import img3 from "../assets/images/69ab11c48df6f674467cc0f1db1a99fc.png"
import img4 from '../assets/images/pexelsphoto3806275.jpeg'
import img5 from "../assets/images/pexelsphoto3806288.jpeg"
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'
import carIcon from "../assets/images/caricon.png"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userSignOut } from '../appRedux/actions/Auth'




const Landing = () => {
    const User = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (

        <div
            data-home-page="Page-1.html"
            data-home-page-title="Page 1"
            className="u-body u-overlap"


        >

            <header className="u-clearfix u-header u-header" id="sec-ef8c">
                <MenuOutlined onClick={showDrawer} style={{ margin: "1%", fontSize: "200%", color: "white" }} />

                {/* <Button onClick={showDrawer} >
                </Button> */}
                <Drawer
                    title={<Fragment> <img src={carIcon} width="30%" height="30%" />  Love Your Engine </Fragment>}
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{ backgroundColor: "#2E3637" }}
                >
                    <p style={{ margin: "10%", color: "white", fontSize: "140%" }}>Home</p>
                    <p style={{ margin: "10%", color: "white", fontSize: "140%" }}>About</p>
                    <p style={{ margin: "10%", color: "white", fontSize: "140%" }}>Services</p>
                    <p style={{ margin: "10%", color: "white", fontSize: "140%" }}>Contact us</p>
                    {!User && <Link to="/company/signin" style={{ margin: "10%", color: "white", fontSize: "140%" }}>  Sign in</Link>}
                    {User && <Link to="/company/signin" style={{ margin: "10%", color: "white", fontSize: "140%" }} onClick={() => dispatch(userSignOut)}>  Sign out <br /><br /></Link>}
                    {User && <Link to="/company/dashboard" style={{ margin: "10%", color: "white", fontSize: "140%" }} >  Dashboard</Link>}


                </Drawer>
                <div className="u-clearfix u-sheet u-sheet-1">
                    <nav
                        className="u-align-left u-menu u-menu-dropdown u-offcanvas u-menu-1"
                        data-responsive-from="XL"
                    >
                        <div className="menu-collapse">
                            <a
                                className="u-button-style u-nav-link u-text-body-alt-color"
                                href="#"
                                style={{ padding: "4px 0px", fontSize: "calc(1em + 8px)" }}
                            >
                                <svg
                                    className="u-svg-link"
                                    preserveAspectRatio="xMidYMin slice"
                                    viewBox="0 0 302 302"

                                >
                                    <use
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="#svg-5c50"
                                    ></use>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="svg-5c50"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 302 302"
                                    style={{ enableBackground: "new 0 0 302 302" }}
                                    xmlSpace="preserve"
                                    className="u-svg-content"
                                >
                                    <g>
                                        <rect y="36" width="302" height="30"></rect>
                                        <rect y="236" width="302" height="30"></rect>
                                        <rect y="136" width="302" height="30"></rect>
                                    </g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                </svg>
                            </a>
                        </div>

                        {/* <div className="u-custom-menu u-nav-container">
                            <ul className="u-nav u-unstyled u-nav-1">
                                <li className="u-nav-item">
                                    <a
                                        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                        href="Page-1.html"
                                        style={{ padding: " 10px 20px" }}
                                    >Page 1</a
                                    >
                                </li>
                                <li className="u-nav-item">
                                    <a
                                        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                        href="Page-2.html"
                                        style={{ padding: " 10px 20px" }}
                                    >Page 2</a
                                    >
                                </li>
                                <li className="u-nav-item">
                                    <a
                                        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                        href="Page-3.html"
                                        style={{ padding: " 10px 20px" }}
                                    >Page 3</a
                                    >
                                </li>
                                <li className="u-nav-item">
                                    <a
                                        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                        href=""
                                        style={{ padding: " 10px 20px" }}
                                    >Page 1</a
                                    >
                                </li>
                            </ul>
                        </div> */}
                        <div className="u-custom-menu u-nav-container-collapse">
                            <div
                                className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav"
                            >
                                <div className="u-sidenav-overflow">
                                    <div className="u-menu-close"></div>
                                    <ul
                                        className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"
                                    >
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link" href="Page-1.html"
                                            >Page 1</a
                                            >
                                        </li>
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link" href="Page-2.html"
                                            >Page 2</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                        </div>
                    </nav>
                </div>
            </header >
            <section
                className="u-align-center u-clearfix u-image u-section-1"
                id="carousel_bd75"
            >
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h3
                        className="u-align-center-xs u-custom-font u-font-lato u-text u-text-body-alt-color u-title u-text-1"
                    >
                        Love Your Engine
        </h3>
                    <h4
                        className="u-align-center-xs u-custom-font u-text u-text-body-alt-color u-text-font u-text-2"
                    >
                        Get the best out of your car
        </h4>
                </div>
            </section>
            <section className="u-clearfix u-gradient u-section-2" id="carousel_af51">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div
                                    className="u-container-style u-expand-resize u-image u-image-contain u-layout-cell u-left-cell u-size-40 u-image-1"
                                >
                                    <div className="u-container-layout u-container-layout-1"></div>
                                </div>
                                <div
                                    className="u-align-right-lg u-align-right-md u-align-right-xl u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-2"
                                >
                                    <div
                                        className="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-2"
                                    >
                                        <h2
                                            className="u-align-center-sm u-align-center-xs u-custom-font u-font-lato u-text u-text-white u-text-1"
                                        >
                                            Get the smoothness of you car back with us
                  </h2>
                                        <p
                                            className="u-align-center-sm u-align-center-xs u-text u-text-body-alt-color u-text-2"

                                        >
                                            Love Your Engine keeps you car going by monitoring
                                            your engine oil details and keeping you updated when
                                            you cars needs to be serviced again. so you just have
                                            to drive the car and enjoy
                                            We are here for the rest
                  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-align-center u-clearfix u-palette-2-base u-section-3"
                id="carousel_aae5"
            >
                <div
                    className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-sheet-1"
                >
                    <h2 className="u-custom-font u-font-lato u-text u-text-1">
                        How does it work
        </h2>
                    <p className="u-text u-text-2">
                        visit the nearest love your engine service center to get you car serviced.&nbsp;<br />
                    </p>
                    <div
                        className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1"
                    >
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div
                                    className="u-container-style u-layout-cell u-left-cell u-size-20 u-size-20-md u-layout-cell-1"
                                >
                                    <div
                                        className="u-container-layout u-valign-top u-container-layout-1"
                                    >
                                        <span className="u-icon u-icon-circle u-icon-1"
                                        ><svg
                                            className="u-svg-link"
                                            preserveAspectRatio="xMidYMin slice"
                                            viewBox="0 0 468 468"

                                        >
                                                <use
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="#svg-6c7b"
                                                ></use></svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                id="svg-6c7b"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 468 468"
                                                style={{ enableBackground: "new 0 0 468 468" }}
                                                xmlSpace="preserve"
                                                className="u-svg-content"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M450.1,187.5l-10.2-10.8l-35.8-96.5C398,63.9,382.4,53.1,365,53H109.3c-17.4,0-33,10.9-39.1,27.2l-35.3,95.3l-14.7,13.6    C7.4,200,0,216,0,232.8v140.6c0.1,23,18.8,41.6,41.8,41.6h26.4c23,0,41.7-18.6,41.8-41.6V353h248v20.4c0.1,23,18.8,41.6,41.8,41.6    h26.4c23,0,41.7-18.6,41.8-41.6V229.1C467.9,213.4,461.5,198.4,450.1,187.5z M89,87c3.2-8.5,11.3-14,20.3-14h255.8    c9,0,17.1,5.6,20.3,14l31.2,84h-23.3c-5.5-37.5-40.4-63.4-77.9-57.8c-29.9,4.4-53.4,27.9-57.8,57.8H57.8L89,87z M372.9,171h-95.1    c5.5-26.3,31.3-43.1,57.6-37.6C354.2,137.4,368.9,152.1,372.9,171z M90,373.4c-0.1,12-9.8,21.6-21.8,21.6H41.8    c-12,0-21.7-9.6-21.8-21.6v-26.2c6,3.9,13.9,5.8,21.8,5.8H90V373.4z M448,373.4c-0.1,12-9.8,21.6-21.8,21.6h-26.4    c-12,0-21.7-9.7-21.8-21.6V353h48.2c7.9,0,15.8-1.9,21.8-5.8V373.4z M426.2,333H41.8c-11.9,0.1-21.7-9.4-21.8-21.4v-78.8    c0-11,4.9-21.5,13.3-28.6c0.1-0.1,0.3-0.3,0.4-0.4L47.3,191H426l9.6,10.3c0.1,0.2,0.4,0.3,0.5,0.5c7.5,7.1,11.8,17,11.8,27.3v82.5    h0.1C447.9,323.5,438.1,333.1,426.2,333z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M132,231H57c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C142,235.5,137.5,231,132,231z M122,283    H67v-32h55V283z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M411,231h-75c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C421,235.5,416.5,231,411,231z     M401,283h-55v-32h55V283z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M282.3,273h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,273,282.3,273z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M282.3,242h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,242,282.3,242z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g></svg
                                            ></span>
                                        <p className="u-align-center u-text u-text-3">
                                            Apporach the agent of LYE and request services that you need
                  </p>
                                    </div>
                                </div>
                                <div
                                    className="u-container-style u-layout-cell u-size-20 u-size-20-md u-layout-cell-2"
                                >
                                    <div
                                        className="u-container-layout u-valign-top u-container-layout-2"
                                    >
                                        <span className="u-icon u-icon-circle u-icon-2"
                                        ><svg
                                            className="u-svg-link"
                                            preserveAspectRatio="xMidYMin slice"
                                            viewBox="0 0 512 512"

                                        >
                                                <use
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="#svg-55a1"
                                                ></use></svg
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                id="svg-55a1"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 512 512"
                                                style={{ enableBackground: " new 0 0 512 512" }}
                                                xmlSpace="preserve"
                                                className="u-svg-content"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M290.133,0H119.467C95.94,0,76.8,19.14,76.8,42.667v307.2c0,23.526,19.14,42.667,42.667,42.667h153.6v-17.067h-153.6    c-14.114,0-25.6-11.486-25.6-25.6v-307.2c0-14.114,11.486-25.6,25.6-25.6h170.667c14.114,0,25.6,11.486,25.6,25.6v247.467H332.8    V42.667C332.8,19.14,313.66,0,290.133,0z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M414.643,227.294l-83.712-104.619l-13.338,10.667l83.712,104.61c10.863,13.568,16.836,30.618,16.828,48v208.981H293.291    c-44.083,0-79.957-35.866-79.957-79.957V384h-17.067v30.976c0,53.495,43.529,97.024,97.024,97.024h133.376    c4.719,0,8.533-3.814,8.533-8.533V285.961C435.209,264.73,427.913,243.891,414.643,227.294z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M221.833,201.242c5.99,0.171,11.563,2.662,15.667,7.014l114.68,121.856l12.433-11.699L249.916,196.548    c-7.245-7.672-17.05-12.066-27.597-12.365c-10.658-0.358-20.582,3.524-28.16,10.684c-0.094,0.094-0.777,0.742-0.862,0.836    c-14.583,14.626-15.565,37.581-2.261,53.436l73.498,86.784v26.402c-0.009,47.155,29.645,89.933,73.805,106.47l5.99-15.983    c-37.53-14.054-62.737-50.415-62.729-90.487V332.8c0-2.014-0.717-3.977-2.022-5.521l-75.494-89.148    c-7.552-8.994-6.997-22.059,1.707-30.771C210.142,203.247,215.825,201.207,221.833,201.242z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect
                                                            x="264.533"
                                                            y="17.067"
                                                            width="17.067"
                                                            height="213.333"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect
                                                            x="221.867"
                                                            y="281.6"
                                                            width="17.067"
                                                            height="102.4"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect
                                                            x="221.867"
                                                            y="8.533"
                                                            width="17.067"
                                                            height="187.733"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect
                                                            x="119.467"
                                                            y="42.667"
                                                            width="17.067"
                                                            height="110.933"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect
                                                            x="162.133"
                                                            y="42.667"
                                                            width="17.067"
                                                            height="68.267"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M179.2,281.6H128c-4.71,0-8.533,3.814-8.533,8.533v51.2c0,4.719,3.823,8.533,8.533,8.533h51.2    c4.71,0,8.533-3.814,8.533-8.533v-51.2C187.733,285.414,183.91,281.6,179.2,281.6z M170.667,332.8h-34.133v-34.133h34.133V332.8z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g></svg
                                            ></span>
                                        <p className="u-align-center u-text u-text-4">
                                            LYE agent analyzes your car.
                  </p>
                                    </div>
                                </div>
                                <div
                                    className="u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3"
                                >
                                    <div
                                        className="u-container-layout u-valign-top u-container-layout-3"
                                    >
                                        <span className="u-icon u-icon-circle u-icon-3"
                                        ><svg
                                            className="u-svg-link"
                                            preserveAspectRatio="xMidYMin slice"
                                            viewBox="0 0 512 512"

                                        >
                                                <use
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="#svg-07b6"
                                                ></use></svg
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                id="svg-07b6"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 512 512"
                                                style={{ enableBackground: "new 0 0 512 512" }}
                                                xmlSpace="preserve"
                                                className="u-svg-content"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M264.537,247.017h-17.067c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h17.067c4.713,0,8.533-3.82,8.533-8.533    S269.25,247.017,264.537,247.017z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M273.071,281.15h-34.133c-4.713,0-8.533,3.821-8.533,8.533c0,4.713,3.82,8.533,8.533,8.533h34.133    c4.713,0,8.533-3.821,8.533-8.533C281.604,284.971,277.784,281.15,273.071,281.15z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M230.404,187.283h-34.133c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h8.533v8.533    c0,4.713,3.821,8.533,8.533,8.533c4.713,0,8.533-3.82,8.533-8.533v-8.533h8.533c4.713,0,8.533-3.82,8.533-8.533    S235.117,187.283,230.404,187.283z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M315.737,187.283h-34.133c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h8.533v8.533    c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-8.533h8.533c4.713,0,8.533-3.82,8.533-8.533    S320.45,187.283,315.737,187.283z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M461.846,478.167l-11.4-35.55c-5.226-13.909-13.36-26.543-23.858-37.058c-7.052-6.107-14.501-11.739-22.3-16.858    l-0.8-0.517c-3.455-1.982-7.035-3.738-10.717-5.258c-12.486-5.121-25.841-7.789-39.335-7.859l-28.091-28.084    c-0.021-7.62,0.428-15.233,1.343-22.798c1.066-9.034,2.586-18.009,4.556-26.89c10.568-11.569,17.086-26.263,18.568-41.862    c1.078,0.311,2.188,0.496,3.308,0.552c1.556-0.002,3.101-0.259,4.575-0.758c4.4-1.467,17.775-5.925,17.775-59.408    c0-5.75,0-23.242-11.775-28.525c-1.89-0.822-3.929-1.244-5.99-1.24c1.306-9.481,0.779-19.125-1.551-28.407    c23.423-15.045,36.383-34.728,36.383-55.803C392.537,35.95,332.563,0,256.004,0S119.471,35.95,119.471,81.842    c0,21.073,12.96,40.749,36.361,55.827c-2.312,9.278-2.83,18.911-1.526,28.383c-2.062-0.007-4.103,0.415-5.993,1.24    c-11.775,5.283-11.775,22.775-11.775,28.525c0,53.483,13.375,57.941,17.775,59.408c1.474,0.5,3.019,0.756,4.575,0.758    c1.12-0.056,2.231-0.241,3.308-0.552c1.482,15.6,7.999,30.294,18.569,41.862c1.974,8.897,3.494,17.888,4.556,26.94    c0.916,7.548,1.364,15.145,1.343,22.748l-28.09,28.084c-13.504,0.071-26.867,2.742-39.36,7.868    c-3.673,1.519-7.244,3.273-10.692,5.25l-0.8,0.517c-7.787,5.115-15.228,10.738-22.275,16.833    c-10.617,10.611-18.811,23.396-24.017,37.475l-11.275,35.175c-4.289,13.487,3.168,27.898,16.656,32.187    c2.515,0.8,5.138,1.206,7.777,1.205h170.217c0.861,0.281,1.761,0.425,2.667,0.425h17.067c0.857-0.002,1.707-0.145,2.517-0.425    h170.367c14.151,0.008,25.629-11.458,25.636-25.609C463.059,483.319,462.65,480.689,461.846,478.167z M337.313,383.092    L323.517,394.9c-9.743-6.081-20.265-10.813-31.279-14.067l23.058-19.767L337.313,383.092z M271.098,376.475    c-10.027-1.202-20.162-1.202-30.189-0.002l-37.221-31.917c-0.066-7.45-0.539-14.891-1.417-22.29    c-0.09-0.798-0.248-1.63-0.346-2.431c5.154,4.785,10.621,9.632,16.771,14.615c21.741,17.627,52.851,17.634,74.6,0.017    c6.154-4.985,11.623-9.836,16.78-14.624c-0.096,0.78-0.251,1.597-0.339,2.374c-0.877,7.415-1.35,14.873-1.417,22.34    L271.098,376.475z M356.638,183.192c1.479,4.035,2.081,8.339,1.767,12.625c0,26.717-3.717,38.675-5.842,42.375    c-1.346-1.181-2.569-2.496-3.651-3.923c-0.491-16.61,1.146-33.215,4.87-49.41C354.654,184.177,355.615,183.616,356.638,183.192z     M136.537,81.842c0-35.108,54.708-64.775,119.467-64.775s119.467,29.667,119.467,64.775c-0.341,9.891-4.24,19.328-10.981,26.574    c0.739-0.82,1.335-1.757,1.765-2.774c0.911-2.065,0.911-4.418,0-6.483c-0.432-1.035-1.038-1.987-1.792-2.817    c-0.407-0.367-0.836-0.709-1.283-1.025c-0.474-0.324-0.99-0.582-1.533-0.767c-0.484-0.245-1-0.419-1.533-0.517    c-4.018-0.912-8.094,1.274-9.558,5.125c-0.911,2.065-0.911,4.418,0,6.483c0.434,1.034,1.04,1.986,1.792,2.817    c3.358,3.296,8.736,3.301,12.1,0.01c-3.689,4.275-7.859,8.111-12.427,11.431c-0.693-0.24-1.416-0.386-2.148-0.434H162.138    c-0.739,0.048-1.467,0.195-2.167,0.438C144.813,108.738,136.537,95.46,136.537,81.842z M334.771,136.533    c-12.492,9.042-41.025,17.067-78.767,17.067c-37.775,0-66.325-8.042-78.783-17.067H334.771z M163.099,234.267    c-1.082,1.428-2.306,2.743-3.653,3.925c-2.125-3.7-5.842-15.659-5.842-42.375c-0.314-4.286,0.289-8.59,1.766-12.625    c1.024,0.433,1.986,0.999,2.862,1.683C161.955,201.064,163.591,217.663,163.099,234.267z M179.204,254.867    c0-1.883,0.075-3.775,0.225-5.525c2.51-25.746,0.313-51.733-6.483-76.692l0,0c-1.48-5.527-2.245-11.22-2.275-16.942    c0-1.025,0.162-2.014,0.21-3.029c18.171,11.17,49.302,17.988,85.123,17.988c35.825,0,66.96-6.819,85.122-17.979    c0.048,1.011,0.211,2.001,0.211,3.021c-0.027,5.687-0.784,11.347-2.25,16.842c-6.81,24.971-9.015,50.973-6.508,76.733    c0.15,1.808,0.225,3.7,0.225,5.583c0,16.525-17.85,40.083-50.275,66.35c-15.467,12.545-37.608,12.538-53.067-0.017    C197.054,294.95,179.204,271.392,179.204,254.867z M196.713,361.067l23.058,19.767c-11.014,3.255-21.536,7.986-31.28,14.065    l-13.795-11.806L196.713,361.067z M74.588,494.508c-2.735,0.017-5.311-1.286-6.917-3.5c-1.626-2.196-2.095-5.041-1.258-7.642    L77.546,448.6c4.373-11.65,11.19-22.229,19.992-31.025c0.733-0.742,2.875-2.492,19.808-14.775c2.69-1.525,5.471-2.886,8.325-4.075    c10.572-4.342,21.888-6.588,33.317-6.612l15.139,12.959c-2.991,2.5-5.884,5.124-8.64,7.879    c-21.848,21.782-35.018,50.774-37.046,81.558H74.588z M179.712,494.508c2.937-24.619,17.533-46.325,39.225-58.333    c1.892-1.056,3.858-1.965,5.833-2.848l0,0l12.209,61.181H179.712z M275.025,494.508l12.212-61.18    c1.985,0.888,3.963,1.803,5.875,2.872c21.671,12.012,36.249,33.705,39.183,58.308L275.025,494.508z M349.425,494.508    c-2.985-30.838-20.956-58.232-48.054-73.25c-5.737-3.191-11.803-5.751-18.092-7.633c-0.139-0.041-0.275-0.004-0.414-0.037    c-0.143-0.035-0.249-0.134-0.395-0.162c-0.449-0.035-0.9-0.032-1.349,0.007c-0.535-0.048-1.073-0.045-1.607,0.009    c-0.566,0.113-1.118,0.285-1.648,0.515c-1.041,0.282-1.979,0.859-2.7,1.661c-0.401,0.331-0.769,0.7-1.1,1.101    c-0.323,0.48-0.595,0.992-0.813,1.528c-0.226,0.354-0.424,0.726-0.592,1.111c-0.042,0.14-0.004,0.276-0.037,0.415    c-0.035,0.143-0.134,0.248-0.162,0.394l-14.839,74.342h-3.238l-14.839-74.342c-0.028-0.144-0.127-0.25-0.162-0.392    c-0.033-0.14,0.004-0.277-0.037-0.417c-0.169-0.39-0.37-0.765-0.6-1.123c-0.217-0.53-0.487-1.037-0.806-1.513    c-0.34-0.412-0.718-0.789-1.131-1.127c-0.724-0.799-1.663-1.371-2.705-1.649c-0.52-0.224-1.062-0.394-1.618-0.505    c-0.533-0.054-1.07-0.057-1.604-0.009c-0.447-0.04-0.896-0.043-1.344-0.007c-0.146,0.028-0.252,0.127-0.395,0.162    c-0.139,0.034-0.275-0.003-0.414,0.037c-6.274,1.877-12.326,4.428-18.05,7.608c-27.12,15.015-45.108,42.42-48.096,73.275h-17.163    c2.052-26.262,13.453-50.919,32.133-69.492c4.627-4.625,9.642-8.843,14.992-12.608c38.163-26.453,88.733-26.456,126.9-0.009    c5.356,3.766,10.378,7.987,15.008,12.617c18.681,18.573,30.082,43.23,32.134,69.492H349.425z M444.337,491.008    c-1.606,2.214-4.182,3.517-6.917,3.5h-53.854c-2.028-30.784-15.197-59.777-37.046-81.558c-2.754-2.754-5.648-5.377-8.64-7.878    l15.14-12.959c11.42,0.024,22.727,2.267,33.292,6.604c2.864,1.191,5.652,2.554,8.35,4.083    c16.933,12.283,19.075,14.033,19.833,14.8c8.682,8.701,15.439,19.129,19.833,30.608l11.258,35.142    C446.433,485.955,445.967,488.807,444.337,491.008z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M176.729,79.275c-0.817-0.77-1.773-1.378-2.817-1.792c-2.059-0.942-4.425-0.942-6.483,0    c-1.035,0.432-1.987,1.038-2.817,1.792c-1.561,1.634-2.445,3.799-2.475,6.059c-0.031,1.119,0.203,2.23,0.683,3.242    c0.433,1.034,1.039,1.986,1.791,2.817c0.829,0.754,1.782,1.36,2.817,1.792c3.175,1.362,6.859,0.652,9.301-1.792    c0.752-0.831,1.358-1.783,1.792-2.817c0.437-1.026,0.669-2.127,0.683-3.242C179.171,83.074,178.287,80.911,176.729,79.275z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M210.779,79.275c-0.372-0.406-0.805-0.752-1.283-1.025c-0.434-0.339-0.925-0.599-1.45-0.767    c-0.51-0.259-1.059-0.433-1.625-0.517c-2.783-0.557-5.661,0.308-7.675,2.308c-1.561,1.634-2.445,3.799-2.475,6.059    c-0.045,4.667,3.702,8.488,8.369,8.533c0.055,0,0.109,0,0.164,0c4.699-0.033,8.501-3.834,8.533-8.533    C213.311,83.057,212.393,80.881,210.779,79.275z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M279.13,79.275c-0.419-0.387-0.877-0.731-1.367-1.025c-0.434-0.339-0.925-0.599-1.45-0.767    c-0.51-0.259-1.059-0.433-1.625-0.517c-2.783-0.558-5.662,0.308-7.676,2.308c-1.561,1.634-2.445,3.799-2.475,6.059    c-0.023,2.27,0.869,4.454,2.475,6.059c0.83,0.754,1.782,1.36,2.817,1.791c4.29,1.837,9.256-0.151,11.093-4.441    c0.461-1.077,0.693-2.238,0.682-3.409C281.571,83.074,280.687,80.911,279.13,79.275z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M238.987,76.751c-2.293-0.013-4.494,0.896-6.108,2.524c-3.3,3.365-3.3,8.752,0,12.117    c1.605,1.606,3.789,2.498,6.059,2.475c4.667,0.045,8.488-3.702,8.533-8.369c0.001-0.055,0.001-0.109,0-0.164    C247.498,80.621,243.7,76.778,238.987,76.751z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M313.263,79.275c-2.044-2.013-4.955-2.878-7.767-2.308c-0.534,0.096-1.05,0.271-1.533,0.517    c-0.546,0.184-1.065,0.442-1.542,0.767c-0.445,0.316-0.871,0.658-1.276,1.025c-1.561,1.634-2.445,3.799-2.475,6.059    c-0.045,4.667,3.702,8.488,8.369,8.533c0.055,0,0.11,0,0.164,0c1.115-0.014,2.216-0.246,3.242-0.683    c1.034-0.434,1.986-1.04,2.817-1.792c1.589-1.615,2.478-3.792,2.475-6.058C315.704,83.074,314.82,80.911,313.263,79.275z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M341.387,76.751c-2.293-0.013-4.494,0.896-6.108,2.524c-1.576,1.625-2.462,3.795-2.475,6.059    c-0.023,2.27,0.869,4.454,2.475,6.059c0.829,0.754,1.782,1.36,2.817,1.791c1.025,0.437,2.127,0.67,3.242,0.683    c4.667,0.045,8.488-3.702,8.533-8.369c0-0.055,0-0.109,0-0.164C349.898,80.621,346.1,76.778,341.387,76.751z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M159.579,96.341c-2.004-2.022-4.896-2.891-7.683-2.308c-0.534,0.096-1.05,0.271-1.533,0.517    c-0.546,0.184-1.065,0.442-1.542,0.767c-0.445,0.316-0.871,0.658-1.275,1.025c-0.772,0.816-1.38,1.772-1.792,2.817    c-0.437,1.026-0.669,2.127-0.683,3.242c-0.045,4.667,3.702,8.488,8.369,8.533c0.055,0,0.109,0,0.164,0    c4.699-0.033,8.501-3.834,8.533-8.533C162.111,100.123,161.193,97.948,159.579,96.341z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M195.587,99.158c-0.432-1.035-1.038-1.987-1.792-2.817c-3.421-3.158-8.695-3.158-12.117,0    c-0.772,0.816-1.38,1.772-1.792,2.817c-0.48,1.012-0.714,2.122-0.683,3.242c-0.007,2.267,0.882,4.445,2.475,6.059    c3.365,3.3,8.752,3.3,12.117,0c1.589-1.616,2.479-3.792,2.475-6.059C196.257,101.285,196.025,100.184,195.587,99.158z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M227.93,96.341c-0.419-0.387-0.877-0.731-1.367-1.025c-0.434-0.339-0.925-0.599-1.45-0.767    c-0.51-0.259-1.059-0.433-1.625-0.517c-2.783-0.544-5.655,0.32-7.676,2.308c-0.772,0.816-1.38,1.772-1.792,2.817    c-0.437,1.026-0.669,2.127-0.683,3.242c-0.023,2.27,0.869,4.454,2.475,6.059c3.319,3.346,8.722,3.368,12.068,0.05    c1.628-1.614,2.537-3.816,2.524-6.108C230.371,100.141,229.487,97.978,227.93,96.341z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M263.854,99.159c-0.432-1.035-1.038-1.987-1.792-2.817c-0.831-0.752-1.783-1.358-2.817-1.792    c-3.177-1.342-6.849-0.634-9.3,1.792c-0.772,0.816-1.38,1.772-1.792,2.817c-0.48,1.011-0.714,2.122-0.682,3.241    c-0.007,2.267,0.882,4.445,2.475,6.059c3.29,3.358,8.679,3.413,12.037,0.123C264.489,106.126,265.232,102.385,263.854,99.159z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M290.138,93.867c-4.713,0-8.533,3.82-8.533,8.533c-0.023,2.27,0.869,4.454,2.475,6.059    c3.319,3.346,8.722,3.368,12.068,0.05c1.628-1.614,2.538-3.816,2.524-6.108C298.671,97.687,294.85,93.867,290.138,93.867z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M324.321,93.817c-2.293-0.013-4.494,0.896-6.108,2.524c-1.576,1.625-2.462,3.795-2.475,6.059    c-0.023,2.27,0.869,4.454,2.475,6.059c3.319,3.346,8.722,3.368,12.068,0.05c1.628-1.614,2.537-3.816,2.524-6.108    C332.832,97.687,329.033,93.845,324.321,93.817z"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g></svg
                                            ></span>
                                        <p className="u-align-center u-text u-text-5">
                                            Agent services you car and enter record in your LYE portal.
                                         </p>
                                    </div>

                                </div >
                            </div >
                        </div >
                        <br />
                        <p className="u-text u-text-2">
                            Thats all you are good to go.&nbsp;<br />
                        </p>
                    </div >

                </div >
            </section >
            <section
                className="u-align-center u-clearfix u-palette-1-base u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-section-4"
                id="carousel_8890"
            >
                <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div
                                className="u-align-center-lg u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-1"
                            >
                                <div
                                    className="u-container-layout u-valign-middle u-container-layout-1"
                                >
                                    <h4
                                        className="u-align-center-md u-align-center-sm u-align-center-xl u-align-center-xs u-custom-font u-font-lato u-text u-text-body-alt-color u-text-1"
                                    >
                                        We Provide<br /><b>Car Service</b>
                                    </h4>
                                    <p
                                        className="u-align-center-md u-align-center-sm u-align-center-xl u-align-center-xs u-text u-text-body-alt-color u-text-2"
                                    >
                                        We are your one-stop shop for complete auto care for every
                                        make and model of vehicle.
                </p>
                                    <a
                                        href="https://nicepage.com"
                                        className="u-border-2 u-border-white u-btn u-btn-rectangle u-button-style u-radius-0 u-btn-1"
                                    >read more</a
                                    >
                                </div>
                            </div>
                            <div
                                className="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1"
                            >
                                <div className="u-container-layout u-container-layout-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-align-center u-clearfix u-palette-2-base u-valign-top u-section-5"
                id="carousel_7de1"
            >
                <img
                    src={img4}
                    className="u-align-left u-expanded-width u-image u-left-0 u-image-1"
                />
                <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div
                                className="u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-20 u-layout-cell-1"
                            >
                                <div className="u-container-layout u-container-layout-1">
                                    <h3
                                        className="u-align-center u-custom-font u-font-lato u-text u-text-body-alt-color u-text-1"
                                    >
                                        Oil Change
                                  </h3>
                                    <p className="u-align-center u-text u-text-body-alt-color u-text-2">
                                        Donec volutpat, purus et tempus convallis, odio quam
                                        consectetur nulla, sit amet auctor augue ligula ac ipsum.
                                        Curabitur elementum...
                                    </p>
                                </div>
                            </div>
                            <div
                                className="u-container-style u-layout-cell u-size-20 u-white u-layout-cell-2"
                            >
                                <div className="u-container-layout u-container-layout-2">
                                    <h3
                                        className="u-align-center u-custom-font u-font-lato u-text u-text-3"
                                    >
                                        Car wash & other services
                </h3>
                                    <p className="u-align-center u-text u-text-4">
                                        Donec volutpat, purus et tempus convallis, odio quam
                                        consectetur nulla, sit amet auctor augue ligula ac ipsum.
                                        Curabitur elementum...
                </p>
                                </div>
                            </div>
                            <div
                                className="u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-20 u-layout-cell-1"
                            >
                                <div className="u-container-layout u-container-layout-1">
                                    <h3
                                        className="u-align-center u-custom-font u-font-lato u-text u-text-body-alt-color u-text-1"
                                    >
                                        Oil Change
                                  </h3>
                                    <p className="u-align-center u-text u-text-body-alt-color u-text-2">
                                        Donec volutpat, purus et tempus convallis, odio quam
                                        consectetur nulla, sit amet auctor augue ligula ac ipsum.
                                        Curabitur elementum...
                                    </p>
                                </div>
                            </div>
                            {/* <div
                                className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-white u-layout-cell-3"
                            >
                                 <div
                                    className="u-container-layout u-valign-bottom u-container-layout-3"
                                >
                                    <img
                                        className="u-expand-resize u-expanded-width u-image u-image-2"
                                        src={img5}
                                    /> 
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-align-center u-clearfix u-section-6" id="carousel_7402">
                <div
                    className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1"
                >
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div
                                className="u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-24 u-layout-cell-1"
                            >
                                <div
                                    className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1"
                                >
                                    <span className="u-icon u-icon-circle u-icon-1"
                                    ><svg
                                        className="u-svg-link"
                                        preserveAspectRatio="xMidYMin slice"
                                        viewBox="0 0 468 468"

                                    >
                                            <use
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="#svg-8e33"
                                            ></use></svg
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            version="1.1"
                                            id="svg-8e33"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 468 468"
                                            style={{ enableBackground: "new 0 0 468 468" }}
                                            xmlSpace="preserve"
                                            className="u-svg-content"
                                        >
                                            <g>
                                                <g>
                                                    <path
                                                        d="M450.1,187.5l-10.2-10.8l-35.8-96.5C398,63.9,382.4,53.1,365,53H109.3c-17.4,0-33,10.9-39.1,27.2l-35.3,95.3l-14.7,13.6    C7.4,200,0,216,0,232.8v140.6c0.1,23,18.8,41.6,41.8,41.6h26.4c23,0,41.7-18.6,41.8-41.6V353h248v20.4c0.1,23,18.8,41.6,41.8,41.6    h26.4c23,0,41.7-18.6,41.8-41.6V229.1C467.9,213.4,461.5,198.4,450.1,187.5z M89,87c3.2-8.5,11.3-14,20.3-14h255.8    c9,0,17.1,5.6,20.3,14l31.2,84h-23.3c-5.5-37.5-40.4-63.4-77.9-57.8c-29.9,4.4-53.4,27.9-57.8,57.8H57.8L89,87z M372.9,171h-95.1    c5.5-26.3,31.3-43.1,57.6-37.6C354.2,137.4,368.9,152.1,372.9,171z M90,373.4c-0.1,12-9.8,21.6-21.8,21.6H41.8    c-12,0-21.7-9.6-21.8-21.6v-26.2c6,3.9,13.9,5.8,21.8,5.8H90V373.4z M448,373.4c-0.1,12-9.8,21.6-21.8,21.6h-26.4    c-12,0-21.7-9.7-21.8-21.6V353h48.2c7.9,0,15.8-1.9,21.8-5.8V373.4z M426.2,333H41.8c-11.9,0.1-21.7-9.4-21.8-21.4v-78.8    c0-11,4.9-21.5,13.3-28.6c0.1-0.1,0.3-0.3,0.4-0.4L47.3,191H426l9.6,10.3c0.1,0.2,0.4,0.3,0.5,0.5c7.5,7.1,11.8,17,11.8,27.3v82.5    h0.1C447.9,323.5,438.1,333.1,426.2,333z"
                                                    ></path>

                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M132,231H57c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C142,235.5,137.5,231,132,231z M122,283    H67v-32h55V283z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M411,231h-75c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C421,235.5,416.5,231,411,231z     M401,283h-55v-32h55V283z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M282.3,273h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,273,282.3,273z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M282.3,242h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,242,282.3,242z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g></svg
                                        ></span>
                                    <h2
                                        className="u-align-center u-custom-font u-font-lato u-text u-text-1"
                                    >
                                        Car Servicing&nbsp;<br />
                                    </h2>
                                    <p className="u-align-center u-text u-text-2">
                                        If you’re concerned about a fault with your car, our mechanics
                                        can carry out a number of different car repairs to help keep
                                        your car on the road and running smoothly. We offer a free car
                                        repair check to help diagnose the problem.
                </p>
                                    <a
                                        href="https://nicepage.com"
                                        className="u-btn u-button-style u-custom-font u-btn-1"
                                    >read more</a
                                    >
                                </div>
                            </div>
                            <div
                                className="u-container-style u-image u-layout-cell u-right-cell u-size-36 u-image-1"
                            >
                                <div
                                    className="u-container-layout u-valign-bottom u-container-layout-2"
                                >
                                    <p className="u-text u-text-3">
                                        Image from
                  <a
                                            href="https://www.freepik.com/free-photos-vectors/car"
                                            target="_blank"
                                        ><b>Freepik</b>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <section className="u-clearfix u-gradient u-section-7" id="carousel_8067">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div
                        className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1"
                    >
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div
                                    className="u-align-left-sm u-align-left-xs u-container-style u-layout-cell u-left-cell u-size-20 u-size-20-md u-layout-cell-1"
                                >
                                    <div
                                        className="u-container-layout u-valign-top u-container-layout-1"
                                    >
                                        <h3
                                            className="u-custom-font u-font-lato u-text u-text-body-alt-color u-text-1"
                                        >
                                            Taxi
                  </h3>
                                        <img
                                            src={img1}
                                            alt=""
                                            className="u-image u-image-default u-image-1"
                                            data-image-width="275"
                                            data-image-height="200"
                                        />
                                        <h6 className="u-text u-text-body-alt-color u-text-2">
                                            The taxi you know
                  </h6>
                                        <ul className="u-text u-text-body-alt-color u-text-3">
                                            <li>Price based on taximeter</li>
                                            <li>Executed by local taxi fleets</li>
                                            <li>Online and offline payment</li>
                                            <li>24/7 support hotline</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="u-container-style u-layout-cell u-size-20 u-size-20-md u-layout-cell-2"
                                >
                                    <div
                                        className="u-container-layout u-valign-top u-container-layout-2"
                                    >
                                        <h3
                                            className="u-custom-font u-font-lato u-text u-text-body-alt-color u-text-4"
                                        >
                                            Economy+
                  </h3>
                                        <img
                                            src={img2}
                                            alt=""
                                            className="u-image u-image-default u-image-2"
                                        />
                                        <h6 className="u-text u-text-body-alt-color u-text-5">
                                            For budget travelers
                  </h6>
                                        <ul className="u-text u-text-body-alt-color u-text-6">
                                            <li>Fixed price&nbsp;</li>
                                            <li>English-speaking driver&nbsp;</li>
                                            <li>Automated flight and train tracking&nbsp;</li>
                                            <li>45 minutes waiting time after landing&nbsp;</li>
                                            <li>Pickup with name sign in arrivals hall</li>
                                            <li>Children seats available on request&nbsp;</li>
                                            <li>Online and offline payment&nbsp;</li>
                                            <li>24/7 support hotline&nbsp;<br /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3"
                                >
                                    <div
                                        className="u-container-layout u-valign-top u-container-layout-3"
                                    >
                                        <h3
                                            className="u-custom-font u-font-lato u-text u-text-body-alt-color u-text-7"
                                        >
                                            Business className
                  </h3>
                                        <img
                                            src={img3}
                                            alt=""
                                            className="u-expanded-width u-image u-image-default u-image-3"
                                        />
                                        <h6 className="u-text u-text-body-alt-color u-text-8">
                                            Business traveler's favourite
                  </h6>
                                        <ul className="u-text u-text-body-alt-color u-text-9">
                                            <li>Black car guaranteed</li>
                                            <li>Fixed price</li>
                                            <li>English-speaking driver</li>
                                            <li>Automated flight and train tracking</li>
                                            <li>45 minutes waiting time after landing</li>
                                            <li>Pickup with name sign in arrivals hall</li>
                                            <li>Children seats available on request</li>
                                            <li>Online and offline payment</li>
                                            <li>24/7 support hotline<br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-clearfix u-palette-1-base u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-section-8"
                id="carousel_ef51"
            >
                <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div
                                className="u-container-style u-expand-resize u-image u-image-contain u-layout-cell u-left-cell u-size-40 u-image-1"
                            >
                                <div className="u-container-layout u-container-layout-1"></div>
                            </div>
                            <div
                                className="u-align-right u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-2"
                            >
                                <div
                                    className="u-container-layout u-valign-middle u-container-layout-2"
                                >
                                    <h2
                                        className="u-custom-font u-font-lato u-text u-text-white u-text-1"
                                    >
                                        Get the smoothness of you car back with us
                </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <footer
                className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
                id="sec-77b4"
            >
                <div className="u-clearfix u-sheet u-sheet-1">
                    <p className="u-small-text u-text u-text-variant u-text-1">
                        Sample text. Click to select the text box. Click again or double click
                        to start editing the text.
        </p>
                </div>
            </footer> */}
            <section className="u-backlink u-clearfix u-grey-80">
                {/* style={{ fontSize: "500%", color: "red" }} */}
                <h4> Made with <span style={{ fontSize: "200%", color: "red" }}>&hearts;</span> </h4>

            </section>
        </div >

    )
}

export default Landing

