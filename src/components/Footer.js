import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-astudio p-10">
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-10'>
                    <h1 className='mb-10 font-bold text-8xl text-astudio-black'>MAKE THE LEAP</h1>
                    <section className='mb-10'>
                        <div className="flex gap-5">
                            <a href="https://astudio.ae/contact-us/" className="px-16 py-4 font-bold border border-astudio-black hover:text-white hover:border-white" title="Front Main">
                                <span>CONTACT US</span>
                            </a>
                            <a href="https://astudio.ae/services/" className="px-16 py-4 font-bold border border-astudio-black hover:text-white hover:border-white" title="Front Main">
                                <span>SEE OUR SERVICES</span>
                            </a>
                        </div>
                    </section>
                    <section className='flex gap-20'>
                        <div className='flex flex-col gap-3'>
                            <div className="font-bold">CONTACT US:</div>
                            <div className="font-bold">SALES</div>
                            <a href="tel:+971 52 221 0876">+971 52 221 0876</a>
                            <div className="font-bold">CAREERS</div>
                            <a href="mailto:joinus@astudio.agency">joinus@astudio.agency</a>
                            <a href="tel:+971 52 679 4879">+971 52 679 4879</a>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className="font-bold">ADDRESS:</div>
                            <div>
                                3106 Business
                                <br />
                                Center, Cluster M
                                <br />
                                Jumeirah Lakes
                                <br />
                                Towers, Dubai,
                                <br />
                                UAE
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className="font-bold">FOLLOW US:</div>
                            <div className='flex gap-2'>
                                <a href="https://www.linkedin.com/company/astudioagency/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                                        <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M30.643,2.25H2.35A2.367,2.367,0,0,0,0,4.629V32.871A2.367,2.367,0,0,0,2.35,35.25H30.643A2.374,2.374,0,0,0,33,32.871V4.629A2.374,2.374,0,0,0,30.643,2.25ZM9.974,30.536H5.083V14.787h4.9V30.536Zm-2.446-17.9A2.836,2.836,0,1,1,10.364,9.8a2.837,2.837,0,0,1-2.836,2.836Zm20.78,17.9H23.417V22.875c0-1.827-.037-4.177-2.541-4.177-2.549,0-2.939,1.989-2.939,4.044v7.793H13.045V14.787h4.692v2.151H17.8A5.152,5.152,0,0,1,22.437,14.4c4.95,0,5.871,3.263,5.871,7.506Z" transform="translate(0 -2.25)" fill="#0077b5"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/astudio.agency/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"> <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M16.5,10.277a8.461,8.461,0,1,0,8.459,8.461A8.446,8.446,0,0,0,16.5,10.277Zm0,13.961a5.5,5.5,0,1,1,5.5-5.5A5.51,5.51,0,0,1,16.5,24.238ZM27.276,9.931A1.973,1.973,0,1,1,25.3,7.957,1.969,1.969,0,0,1,27.276,9.931Zm5.6,2a9.767,9.767,0,0,0-2.665-6.914A9.827,9.827,0,0,0,23.3,2.354c-2.724-.155-10.888-.155-13.612,0A9.813,9.813,0,0,0,2.776,5.012,9.8,9.8,0,0,0,.111,11.926c-.155,2.725-.155,10.891,0,13.615a9.767,9.767,0,0,0,2.665,6.914,9.839,9.839,0,0,0,6.913,2.666c2.724.155,10.888.155,13.612,0a9.763,9.763,0,0,0,6.913-2.666,9.832,9.832,0,0,0,2.665-6.914c.155-2.725.155-10.883,0-13.608ZM29.36,28.465A5.568,5.568,0,0,1,26.224,31.6c-2.172.862-7.325.663-9.725.663s-7.561.191-9.725-.663a5.568,5.568,0,0,1-3.136-3.137c-.861-2.172-.663-7.327-.663-9.727s-.191-7.562.663-9.727A5.568,5.568,0,0,1,6.773,5.873c2.172-.862,7.325-.663,9.725-.663s7.561-.191,9.725.663A5.568,5.568,0,0,1,29.36,9.01c.861,2.172.663,7.327.663,9.727S30.221,26.3,29.36,28.465Z" transform="translate(0.005 -2.238)" fill="#262626"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className='flex gap-2'>
                                <a href="https://vimeo.com/astudioagency">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5"> <path id="Icon_awesome-vimeo-square" data-name="Icon awesome-vimeo-square" d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM26.986,12.769q-.148,3.28-4.591,8.993-4.588,5.959-7.762,5.962c-1.315,0-2.419-1.209-3.326-3.628C9.534,17.606,8.782,13.8,7.32,13.8a6.784,6.784,0,0,0-1.765,1.062L4.5,13.5c2.595-2.278,5.07-4.809,6.616-4.95q2.626-.253,3.234,3.593c1.441,9.113,2.081,10.491,4.7,6.363a8.694,8.694,0,0,0,1.512-3.4c.239-2.306-1.8-2.152-3.178-1.561q1.656-5.432,6.335-5.28c2.313.07,3.4,1.575,3.27,4.5Z" transform="translate(0 -2.25)" fill="#23313b"></path>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/channel/UC8gZRUs2llvIoa4wLUkqcGg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#23313b"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <ul className="font-bold">
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/">HOME</a>
                            </li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/services/">SERVICES</a>
                            </li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/industries/">INDUSTRIES</a>
                            </li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/about-us/">ABOUT</a>
                            </li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/contact-us/">CONTACT</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/production-services/">PRODUCTION</a>
                            </li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/digital-marketing-agency/">DIGITAL</a>
                            </li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/creative-digital-agency/">CREATIVE</a></li>
                            <li className="font-bold">
                                <a href="https://www.astudio.ae/marketing-strategy/">STRATEGY</a></li>
                        </ul>

                        <div className='ml-10'>
                            <img src="https://astudio.ae/wp-content/uploads/2020/09/footer-logo.svg" className="image wp-image-57380  attachment-full size-full" alt="ASTUDIO logo" loading="lazy" />
                        </div>
                    </section>
                </div>
            </div>
        </footer >
    )
}

{/* <div className="wf-wrap">
    <div className="wf-container-footer">
        <div className="wf-container">

            <section id="custom_html-2" className="widget_text widget widget_custom_html wf-cell wf-1-7">
                <div className="textwidget custom-html-widget"><div className="footer-buttons">
                    <a href="https://astudio.ae/contact-us/" className="default-btn-shortcode dt-btn animation-builder link-hover-off theme-style-button brown" title="Front Main">
                        <span>Contact US</span>
                    </a>
                    <a href="https://astudio.ae/services/" className="default-btn-shortcode dt-btn animation-builder link-hover-off theme-style-button brown" id="default-btn-fe7bd5b9c086a3a79d8b44ccdd71e8d0" title="Front Main">
                        <span>See Our Services</span></a></div></div>
            </section>
            <section id="presscore-contact-info-widget-6" className="widget widget_presscore-contact-info-widget wf-cell wf-1-7">
                <div className="widget-title">Address:</div>
                <div className="widget-info">
                    3106 Business
                    Center, Cluster M
                    Jumeirah Lakes
                    Towers, Dubai,
                    UAE</div>
            </section>
            <section id="presscore-contact-info-widget-5" className="widget widget_presscore-contact-info-widget wf-cell wf-1-7">
                <div className="widget-title">Follow Us:</div><div className="widget-info"><a href="https://www.linkedin.com/company/astudioagency/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                        <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M30.643,2.25H2.35A2.367,2.367,0,0,0,0,4.629V32.871A2.367,2.367,0,0,0,2.35,35.25H30.643A2.374,2.374,0,0,0,33,32.871V4.629A2.374,2.374,0,0,0,30.643,2.25ZM9.974,30.536H5.083V14.787h4.9V30.536Zm-2.446-17.9A2.836,2.836,0,1,1,10.364,9.8a2.837,2.837,0,0,1-2.836,2.836Zm20.78,17.9H23.417V22.875c0-1.827-.037-4.177-2.541-4.177-2.549,0-2.939,1.989-2.939,4.044v7.793H13.045V14.787h4.692v2.151H17.8A5.152,5.152,0,0,1,22.437,14.4c4.95,0,5.871,3.263,5.871,7.506Z" transform="translate(0 -2.25)" fill="#0077b5"></path>
                    </svg> </a>
                    <a href="https://www.instagram.com/astudio.agency/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"> <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M16.5,10.277a8.461,8.461,0,1,0,8.459,8.461A8.446,8.446,0,0,0,16.5,10.277Zm0,13.961a5.5,5.5,0,1,1,5.5-5.5A5.51,5.51,0,0,1,16.5,24.238ZM27.276,9.931A1.973,1.973,0,1,1,25.3,7.957,1.969,1.969,0,0,1,27.276,9.931Zm5.6,2a9.767,9.767,0,0,0-2.665-6.914A9.827,9.827,0,0,0,23.3,2.354c-2.724-.155-10.888-.155-13.612,0A9.813,9.813,0,0,0,2.776,5.012,9.8,9.8,0,0,0,.111,11.926c-.155,2.725-.155,10.891,0,13.615a9.767,9.767,0,0,0,2.665,6.914,9.839,9.839,0,0,0,6.913,2.666c2.724.155,10.888.155,13.612,0a9.763,9.763,0,0,0,6.913-2.666,9.832,9.832,0,0,0,2.665-6.914c.155-2.725.155-10.883,0-13.608ZM29.36,28.465A5.568,5.568,0,0,1,26.224,31.6c-2.172.862-7.325.663-9.725.663s-7.561.191-9.725-.663a5.568,5.568,0,0,1-3.136-3.137c-.861-2.172-.663-7.327-.663-9.727s-.191-7.562.663-9.727A5.568,5.568,0,0,1,6.773,5.873c2.172-.862,7.325-.663,9.725-.663s7.561-.191,9.725.663A5.568,5.568,0,0,1,29.36,9.01c.861,2.172.663,7.327.663,9.727S30.221,26.3,29.36,28.465Z" transform="translate(0.005 -2.238)" fill="#262626"></path> </svg> </a> <a href="https://vimeo.com/astudioagency">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5"> <path id="Icon_awesome-vimeo-square" data-name="Icon awesome-vimeo-square" d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM26.986,12.769q-.148,3.28-4.591,8.993-4.588,5.959-7.762,5.962c-1.315,0-2.419-1.209-3.326-3.628C9.534,17.606,8.782,13.8,7.32,13.8a6.784,6.784,0,0,0-1.765,1.062L4.5,13.5c2.595-2.278,5.07-4.809,6.616-4.95q2.626-.253,3.234,3.593c1.441,9.113,2.081,10.491,4.7,6.363a8.694,8.694,0,0,0,1.512-3.4c.239-2.306-1.8-2.152-3.178-1.561q1.656-5.432,6.335-5.28c2.313.07,3.4,1.575,3.27,4.5Z" transform="translate(0 -2.25)" fill="#23313b"></path> </svg> </a> <a href="https://www.youtube.com/channel/UC8gZRUs2llvIoa4wLUkqcGg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#23313b"></path> 
                        </svg>
                         </a>
                         </div>
            </section>
          
            <section id="custom_html-3" className="widget_text widget widget_custom_html wf-cell wf-1-7">
                <div className="textwidget custom-html-widget">
                    <img src="https://astudio.ae/wp-content/uploads/2020/09/footer-logo.svg" className="image wp-image-57380  attachment-full size-full" alt="ASTUDIO logo" loading="lazy" />
                </div>
            </section>
            <section id="presscore-custom-menu-one-10" className="widget widget_presscore-custom-menu-one wf-cell wf-1-7">
            </section>
        </div>
    </div>

    <section id="presscore-contact-info-widget-4" className="widget widget_presscore-contact-info-widget wf-cell wf-1-7"><div className="widget-title">Contact Us:</div><div className="widget-info">SALES<br> <a href="mailto:web@astudio.agency">web@astudio.agency</a><br>
     <a href="tel:+971 52 221 0876">+971 52 221 0876</a>
     <br> 
     CAREERS<br> 
     <a href="mailto:joinus@astudio.agency">joinus@astudio.agency</a>
     <br> 
     <a href="tel:+971 52 679 4879">+971 52 679 4879</a>
     </div>
     </section>
</div> */}
export default Footer;