import { React, useState } from 'react'
import { Section } from 'react-scroll-section'
import useWeb3Integration from "../../hooks/useWeb3Integration.js";

export default function Mint() {

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);
    const mint = () => alert(counter)
    const [
        account,
        provider,
        isPaused,
        isPresale,
        web3provider,
        onConnect,
        resetApp,
        mintedAmount,
        mintPreSale,
        mintPublicSale
    ] = useWeb3Integration(counter);

    return (
        <Section className='mint' id='mint'>
            <svg class="waves" xml="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="#01a9c330" />
                    <use href="#gentle-wave" x="48" y="3" fill="#01a9c350" />
                    <use href="#gentle-wave" x="48" y="5" fill="#01a9c393" />
                    <use href="#gentle-wave" x="48" y="7" fill="#01a9c3" />
                </g>
            </svg>
            <div className="luck_dream">
                <div className="luck_dream_heading">
                    <h5>Luck of Dreams</h5>
                    <span>Currents Bid</span>
                </div>
                <div className="luck_dream_content">
                    <span className='luck_dream_content_number'>1.11 <span>ETH</span></span>
                    {/* <button type="button">Place a Bid</button> */}
                </div>
            </div>
            <h3 className='section_title'><b>Mint</b>&nbsp; <span> {web3provider ? mintedAmount : '0'}/5757</span></h3>
            <div className="mint_max">
                <span>Max 10 per txn</span>
                <div className="mint_input">
                    <button disabled={counter <= 0 ? true : false} onClick={decrementCounter}>-</button>
                    <input type="text" name="" id="" value={counter} maxLength={2} />
                    <button disabled={counter >= 10 ? true : false} onClick={incrementCounter}>+</button>
                </div>
                <div className="mint_button">
                    {
                        isPaused ? (
                            <button disabled >Mint is Paused</button>
                        ) : (
                            isPresale && !isPaused ? (
                                <button onClick={() => mintPreSale(web3provider, counter)}>Mint Presale</button>
                            ) : (
                                <button onClick={() => mintPublicSale(web3provider, counter)}>Mint</button>
                            )
                        )
                    }
                    {/* <button onClick={mint}>Minit</button> */}
                </div>
            </div>
        </Section>
    )
}
