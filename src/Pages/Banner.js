import React from 'react';
import img from "../Assets/sarkel.png" ;
import icon from "../Assets/Polygon 1.png";
import Ellipse2 from "../Assets/Ellipse 2.png";
import Ellipse3 from "../Assets/Ellipse 3.png";
import Ellipse4 from "../Assets/Ellipse 4.png";
import Ellipse5 from "../Assets/Ellipse 5.png";
import Rectangle from "../Assets/Rectangle 5.png";
import Star from "../Assets/Star 3.png";
import Arrow from "../Assets/Arrow 1.png";

const Banner = () => {
    return (
        <div className='px-10'>
            <div className='nav-content flex-col lg:flex-row'>
            <div className='sm:w-5/12 relateb' >
                <img className='pt-6 pl-20' src={img} alt=''/>

                <div class="card card-compact w-80 bg-base-100 shadow-xl absulet">
                    <div class="card-body flex-row">
                        <div className='w-7/12'>
                            <h2 className='font-bold'>Mountains Of Joys</h2>
                            <div className='flexd py-2'>
                            <img className='' src={Star} alt=''/>
                            <img className='' src={Star} alt=''/>
                            <img className='' src={Star} alt=''/>
                            <img className='' src={Star} alt=''/>
                            </div>
                            <div className='flexd py-2'>
                            <h3>Plan Now </h3>
                            <img className='px-2' src={Arrow} alt=''/>
                            </div>
                          
                        </div>
                        <div className='w-5/12'>
                        <img className='' src={Rectangle} alt=''/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='sm:w-7/12  px-2'>
                    <div className='pt-20'>
                    <h1 className="text-5xl font-bold  font-sans">Travel With The Best Travel<br /> Agents And Get Best <br />Experience </h1>
                    <p className='py-6 font-bold'>Get best experience and memories of your adventures with <br /> best international and local treavel agents listed with us</p>
                    <a href="" class="btn bg-green-500 rounded-full font-bold text-white mx-2 my-8"><span className='mx-2'>Plan A Trip </span> <img src={icon} alt='' /></a>
                    </div>
                    <div className='my-5 flex pt-6'>
                    <a href="" class="mx-5 "><img src={Ellipse2} className="w-24 rounded-full " alt=''/><p className='text-center'>Bali</p></a>
                    <a href="" class="mx-5 "><img src={Ellipse3} className="w-24 rounded-full " alt=''/><p className='text-center'>Rome</p></a>
                    <a href="" class="mx-5 "><img src={Ellipse4} className="w-24 rounded-full " alt=''/><p className='text-center'>Pune</p></a>
                    <a href="" class=" mx-5"><img src={Ellipse5} className="w-24 rounded-full " alt=''/><p className='text-center'>Tonam</p></a>
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;