import React from 'react'
import Countdown from 'react-countdown';

export default function CommingSoon() {
    return (
        <section className="comming_soon">
            <svg class="comming_soon_waves_top" xml="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="#b3ebff30" />
                    <use href="#gentle-wave" x="48" y="3" fill="#b3ebff50" />
                    <use href="#gentle-wave" x="48" y="5" fill="#b3ebff90" />
                    <use href="#gentle-wave" x="48" y="7" fill="#d4f4ff" />
                </g>
            </svg>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <div className="comming_soon_box">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coming_soon_content">
                            <h2>Mythical Narwhals coming soon...</h2>
                            <h2>Only 300 will ever exist.</h2>
                            {/* <div className="time">
                                <span><Countdown date={Date.now() + 18000000} /></span>
                            </div> */}
                            <h4>Special utility includes:</h4>
                            <ul className='comming_soon_points'>
                                <li>5x the staking rewards</li>
                                <li>5 votes in the DAO</li>
                                <li>Priority WL with parnerships</li>
                                <li>And much more</li>
                                <li><a href="">Join our discord to earn your free mint</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <svg class="comming_soon_waves_bottom" xml="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="#b3ebff30" />
                    <use href="#gentle-wave" x="48" y="3" fill="#b3ebff50" />
                    <use href="#gentle-wave" x="48" y="5" fill="#b3ebff90" />
                    <use href="#gentle-wave" x="48" y="7" fill="#d4f4ff" />
                </g>
            </svg>
        </section>
    )
}
