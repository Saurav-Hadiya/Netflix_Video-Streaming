import React from "react";
import '../style/loading.css'

function Landing() {
    return (
        <div >
            <header>

                {/* <!-- Header Nav --> */}
                <nav class="navbar navbar-expand-lg   pb-5">
                    <div class="container  d-flex justify-content-between flex-wrap">

                        <div class="mx-5 my-1  p-1">
                            <img src="./images/netflix-logo.png" alt="logo" id="logo" />
                        </div>
                        <div class="mx-5 my-1 p-1 ">
                            <span
                                class="material-symbols-outlined text-light position-absolute fs-6 mt-2 ms-4 pt-1">translate</span>
                            <select class="ps-4 pe-3  py-1 mx-3 fw-bold bg-dark text-light bg-opacity-75 rounded-1 border">
                                <option class="bg-light text-dark">English</option>
                                <option class="bg-light text-dark">हिंदी</option>
                            </select>
                            <button type="button" class="btn btn-danger px-3 my-1">Sign In</button>
                        </div>

                    </div>
                </nav>

                {/* <!-- Header content --> */}

                <div class="container  text-light mt-5 pt-5">
                    <p class="text-center mt-5 pt-3  fw-bold txt-heading ">Unlimited movies, TV shows and more</p>
                    <p class="text-center fs-4">Watch anywhere. Cancel anytime.</p>
                    <p class="text-center fs-4 pt- mt-0">Ready to watch? Enter your email to create or restart your membership.
                    </p>
                </div>

                {/* <!-- Header Input --> */}
                <div class="container  w-50 d-flex justify-content-between text-light">
                    <div class="form-floating w-75 opacity-100" data-bs-theme="dark">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com " />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating w-25  me-2 ms-3">
                        <input type="button" value="Get Started >" class="px-5 py-3 fw-bold btn-danger txt-light btn" />
                    </div>
                </div>

            </header>

            <hr class="bg-secondary py-1 m-0 opacity-25" />

            {/* <!-- Section-1 --> */}
            <div class="container-fluid d-flex  text-light " id="section">
                <div class="m-5 my-auto pt-4 p-5">
                    <p class=" fw-bold txt-heading ">Enjoy on your TV</p>
                    <p class=" fs-4 ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div class=" me-5 p-5 pt-4 position-relative ">
                    <img src="./assets/tv.png" alt="TV" class="position-relative" />
                    <video src="./assets/video-tv.m4v" autoplay loop muted class="video-tv"></video>
                </div>
            </div>

            <hr class="bg-secondary py-1 m-0 opacity-25" />

            {/* <!-- Section-2 --> */}
            <div class="container-fluid  d-flex  text-light " id="section">
                <div class=" ms-5 ps-5 pt-4 position-relative ">
                    {/* <!-- Section-2 image --> */}
                    <img src="./assets/mobile.jpg" alt="Mobile" class="position-relative" />

                    {/* <!-- Section-2  box--> */}
                    <div class="bg-black border border-1 border-light rounded-4 d-flex  align-items-center   box">
                        <div class="h-100 py-2 ms-3 me-3">
                            <img src="./assets/boxshot.png" alt="mobile-block" class="h-100" />
                        </div>

                        <div class="mt-3 me-3">
                            <p class="fw-bold  mb-0 ">Stranger Things</p>
                            <p class="text-primary  mt-0 ">Downloading...</p>
                        </div>

                        <div class="h-50 ms-5 mt-1">
                            <img src="./assets/download-icon.gif" alt="download-icon" class="h-100" />
                        </div>

                    </div>
                </div>
                <div class="m-5 my-auto  p-5">
                    <p class=" fw-bold txt-heading ">Download your shows to watch offline</p>
                    <p class=" fs-4 ">Save your favourites easily and always have something to watch.</p>
                </div>
            </div>

            <hr class="bg-secondary py-1 m-0 opacity-25" />

            {/* <!-- Section-3 --> */}
            <div class="container-fluid  d-flex  text-light " id="section">
                <div class="m-5 my-auto pt-4 p-5">
                    <p class=" fw-bold txt-heading ">Watch everywhere</p>
                    <p class=" fs-4 ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div class=" me-5 p-5  position-relative ">
                    <img src="./assets/device-pile-in.png" alt="device-pile-in" class="position-relative" />
                    <video src="./assets/video-devices-in.m4v" autoplay loop muted class="video-device"
                        style={{width: "400px", height: "271px"}}></video>
                </div>
            </div>

            <hr class="bg-secondary py-1 m-0 opacity-25" />

            {/* <!-- Section-4 --> */}
            <div class="container-fluid  d-flex  text-light " id="section">
                <div class=" ms-5 ps-5 pt-4 position-relative ">
                    {/* <!-- Section-2 image --> */}
                    <img src="./assets/children's.png" alt="Mobile" class="position-relative" />
                </div>
                <div class="m-5 my-auto  p-5">
                    <p class=" fw-bold txt-heading ">Create profiles for kids</p>
                    <p class=" fs-4 ">Send children on adventures with their favourite characters in a space made just for
                        them—free with your membership.</p>
                </div>
            </div>

            <hr class="bg-secondary py-1 m-0 opacity-25" />

            <p class="text-center mt-5 pt-3 text-light fw-bold txt-heading ">Frequently Asked Questions</p>

            {/* <!-- FAQ Accordian --> */}

            <div class="accordion accordion-flush container  " id="accordionExample" data-bs-theme="dark">
                <div class="accordion-item mt-3 ">
                    <h2 class="accordion-header p-2">
                        <button class="accordion-button  fs-4 collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What is Netflix
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body pe-5 fs-4 ">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                                anime, documentaries and more – on thousands of internet-connected devices.</p>
                            <p>You can watch as much as you want, whenever you want, without a single ad - all for one low
                                monthly price. There's always something new to discover, and new TV shows and movies are added
                                every week!</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-3">
                    <h2 class="accordion-header p-2">
                        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How much does Netflix cost?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body pe-5 fs-4">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                                fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contract</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-3">
                    <h2 class="accordion-header p-2">
                        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Where can I watch?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body pe-5 fs-4">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                                netflix.com from your personal computer or on any internet-connected device that offers the
                                Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
                                consoles.</p>
                            <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use
                                downloads to watch while you're on the go and without an internet connection. Take Netflix with
                                you anywhere.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-3">
                    <h2 class="accordion-header p-2">
                        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How do I cancel?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body pe-5 fs-4">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
                                your account online in two clicks. There are no cancellation fees – start or stop your account
                                anytime.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-3">
                    <h2 class="accordion-header p-2">
                        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What can I watch on Netflix?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body pe-5 fs-4">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                                Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-3">
                    <h2 class="accordion-header p-2">
                        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Is Netflix good for kids?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body pe-5 fs-4">
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids
                                enjoy family-friendly TV shows and films in their own space.</p>
                            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating
                                of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-center  pt-5  text-light fs-4">Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div class="container  w-50 d-flex justify-content-between text-light">
                <div class="form-floating w-75 opacity-100" data-bs-theme="dark">
                    <input type="email" class="form-control border border-light" id="floatingInput"
                        placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating w-25  me-2 ms-3 mb-5">
                    <input type="button" value="Get Started >" class="px-5 py-3 fw-bold btn-danger txt-light btn" />
                </div>
            </div>

            <hr class="bg-secondary py-1 m-0 opacity-25" />

            {/* <!-- Footer Section --> */}
            <div class="container  mt-5 ">
                <div class="row  text-light">
                    <p>Questions? Call <a href="##" class="text-light">000-800-100-8343</a></p>
                </div>
                <div class=" row my-2">
                    <div class="col-3  "><a href="##" class="link-light">FAQ</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Help Centre</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Account</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Media Centre</a></div>
                </div>
                <div class=" row my-2">
                    <div class="col-3  "><a href="##" class="link-light">Investor Relations</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Jobs</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Ways to Watch</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Terms of Use</a></div>
                </div>
                <div class=" row my-2">
                    <div class="col-3  "><a href="##" class="link-light">Privacy</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Cookie Preferences</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Corporate Information</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Contact Us</a></div>
                </div>
                <div class=" row my-2">
                    <div class="col-3  "><a href="##" class="link-light">Speed Test</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Legal Notices</a></div>
                    <div class="col-3 "><a href="##" class="link-light">Only on Netflix</a></div>
                    <div class="col-3 "></div>
                </div>
                <div class=" my-4  ">
                    <span
                        class=" material-symbols-outlined text-light position-absolute fs-6 mt-1 ms-2 pt-1 fw-bold">translate</span>
                    <select class="ps-4 pe-3  py-1 fw-bold bg-dark border text-light bg-opacity-75 rounded-1">
                        <option class="bg-light text-dark">English</option>
                        <option class="bg-light text-dark">हिंदी</option>
                    </select>
                </div>

                <div class="row  text-light mb-5">
                    <p>Netflix India</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
