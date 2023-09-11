import b4 from './imgs/home/layout-01.webp'

import a1 from './imgs/hsooon/4_.webp'
import ab2 from './imgs/abobakr/24..jpg'
import f1 from './imgs/building/120..jpg'


import b from './imgs/faces/4_.webp'
import c from './imgs/faces/3_.webp'
import d from './imgs/faces/9_.webp'
import e from './imgs/faces/7_.webp'
import f from './imgs/faces/8_.webp'
import g from './imgs/faces/10_.webp'
import h from './imgs/faces/11_.webp'


// zmety
import k from './imgs/zmety/19_.webp'
import l from './imgs/zmety/30_.webp'
import m from './imgs/zmety/31_.webp'
import o from './imgs/zmety/32_.webp'
import p from './imgs/zmety/36_.webp'
import q from './imgs/zmety/39_.webp'
import r from './imgs/zmety/43_.webp'
import s from './imgs/zmety/44_.webp'
import t from './imgs/zmety/45_.webp'
import w from './imgs/zmety/50_.webp'
import u from './imgs/zmety/46_.webp'
import x from './imgs/zmety/51_.webp'
import y from './imgs/hsooon/1_.webp'
import z from './imgs/hsooon/2_.webp'
import a2 from './imgs/hsooon/5_.webp'

import a7 from './imgs/hsooon/18_.webp'
import a8 from './imgs/hsooon/20_.webp'
import a9 from './imgs/hsooon/21_.webp'
import h1 from './imgs/hsooon/22_.webp'
import h2 from './imgs/hsooon/23_.webp'
import h3 from './imgs/hsooon/25_.webp'
import h4 from './imgs/hsooon/26_.webp'
import b1 from './imgs/bkr/10_.webp'
import k1 from './imgs/kharasana/171..jpg'

// import kharasana
import k2 from './imgs/kharasana/1..jpg'
import k3 from './imgs/kharasana/4..jpg'
import k4 from './imgs/kharasana/5..jpg'
import k5 from './imgs/kharasana/6..jpg'
import k6 from './imgs/kharasana/8..jpg'
import k7 from './imgs/kharasana/8..jpg'
import k8 from './imgs/kharasana/9..jpg'
import k9 from './imgs/kharasana/10..jpg'
import k10 from './imgs/kharasana/11..jpg'
import k11 from './imgs/kharasana/12..jpg'
// import zaghmour
import z1 from './imgs/zaghmour/70..jpg'
import z2 from './imgs/zaghmour/72..jpg'
import z3 from './imgs/zaghmour/76..jpg'
import z4 from './imgs/zaghmour/77..jpg'
import z5 from './imgs/zaghmour/81..jpg'

// import flat 
import fl1 from './imgs/flat/1.jpg'
import fl2 from './imgs/flat/60..jpg'
import fl3 from './imgs/flat/125..jpg'
import fl4 from './imgs/flat/128..jpg'
import fl5 from './imgs/flat/132..jpg'
import fl6 from './imgs/flat/60..jpg'
import fl7 from './imgs/flat/187..jpg'
import fl8 from './imgs/flat/122..jpg'
import fl9 from './imgs/flat/107..jpg'
import fl10 from './imgs/flat/69..jpg'



// import abo bakr

import ab1 from './imgs/abobakr/23..jpg'
import ab3 from './imgs/abobakr/26..jpg'
import ab4 from './imgs/abobakr/28..jpg'
import ab5 from './imgs/abobakr/29..jpg'
import ab6 from './imgs/abobakr/30..jpg'
import ab8 from './imgs/abobakr/31..jpg'
import ab7 from './imgs/abobakr/32..jpg'
import ab9 from './imgs/abobakr/33..jpg'
import ab10 from './imgs/abobakr/35..jpg'
import ab12 from './imgs/neww/10.jpg'
import ab13 from './imgs/neww/11.jpg'



//import new flat 


import nf1 from './imgs/neww/1.jpg'
import nf2 from './imgs/neww/2.jpg'
import nf3 from './imgs/neww/3.jpg'
import nf4 from './imgs/neww/4.jpg'
import nf5 from './imgs/neww/5.jpg'
import nf6 from './imgs/neww/6.jpg'
import nf7 from './imgs/neww/7.jpg'
import nf8 from './imgs/neww/8.jpg'
import nf9 from './imgs/neww/18.jpg'
// flat design 
import nf10 from './imgs/neww/12.jpg'
import nf11 from './imgs/neww/13.jpg'
import nf12 from './imgs/neww/14.jpg'
import nf13 from './imgs/neww/15.jpg'


import { useEffect, useState } from 'react'

// import h from './imgs/faces/11_.webp'

// import s from './OurProjects.module.css'
export default function OurProjects() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the scroll threshold
    const scrollThreshold = 1000;

    // Check if the scroll position has reached the threshold
    if (scrollPosition >= scrollThreshold) {
      // Apply the animations for the columns
      document.querySelectorAll('.hovering').forEach((column, index) => {
        column.style.animationDelay = `${index * 0.5}s`;
        column.classList.add('animate');
      });
    }
  }, [scrollPosition]);
  
  return (
   
    <>
      <div className="row gappy container-fluid">
        <div className="col-md-12">
          <h1>Our Projects</h1>
          <div className="underline"></div>
        </div>

        {/* {`column ${isVisible ? 'show' : ''}`} */}
        {/* start Hasson  */}
        <div className="col-md-4 hovering  left-column">
          <img src={y} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={z} alt="" />
        </div>
        {/* <div className="col-md-4 hovering">
          <img src={a1} alt="" />
        </div> */}
        <div className="col-md-4 hovering  left-column">
          <img src={a2} alt="" />
        </div>
      
        <div className="col-md-4 hovering right-column">
          <img src={a7} alt="" />
        </div>
        {/* <div className="col-md-4 hovering  left-column">
          <img src={a8} alt="" />
        </div>
          */}
        <div className="col-md-4 hovering middle-column">
          <img src={a9} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={h1} alt="" />
        </div>
        <div className="col-md-4 hovering left-column">
          <img src={h2} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={h3} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={h4} alt="" />
        </div> 
        {/* end Hasson  */}

           {/* start AboBakr  */}
        <div className="col-md-4 hovering right-column">
          <img src={ab12} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab13} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab1} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab2} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab3} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab4} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab5} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab6} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab7} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab8} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab9} alt="" />
        </div> 
        <div className="col-md-4 hovering right-column">
          <img src={ab10} alt="" />
        </div> 
      

     






        {/* end Abobakr  */}

      

        {/* start Faces  */}
        <div className="col-md-4 hovering  left-column">
          <img src={b1} alt="" />
        </div>
       
        <div className="col-md-4 hovering  left-column">
          <img src={k1} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={f1} alt="" />
        </div>
          <div className="col-md-4 hovering right-column">
          <img src={b4} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={b} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={c} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={d} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={e} alt="" />
        </div>
        {/* <div className="col-md-4 hovering right-column">
          <img src={f} alt="" />
        </div> */}
        <div className="col-md-4 hovering  left-column">
          <img src={g} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={h} alt="" />
        </div>
      
        <div className="col-md-4 hovering right-column">
          <img src={k2} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k3} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k4} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k5} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k6} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k7} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k8} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k9} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k10} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={k11} alt="" />
        </div>
         {/* end Faces  */}
        {/* start Elzmety  */}
        <div className="col-md-4 hovering  left-column">
          <img src={w} alt="" />
        </div>
        {/* <div className="col-md-4 hovering  left-column">
          <img src={k} alt="" />
        </div> */}
       
        {/* <div className="col-md-4 hovering middle-column">
          <img src={l} alt="" />
        </div> */}
        <div className="col-md-4 hovering right-column">
          <img src={m} alt="" />
        </div>
       
        <div className="col-md-4 hovering  left-column">
          <img src={o} alt="" />
        </div>
        {/* <div className="col-md-4 hovering middle-column">
          <img src={p} alt="" />
        </div> */}
        <div className="col-md-4 hovering right-column">
          <img src={q} alt="" />
        </div>
        {/* <div className="col-md-4 hovering  left-column">
          <img src={r} alt="" />
        </div> */}
        <div className="col-md-4 hovering middle-column">
          <img src={s} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={t} alt="" />
        </div>
        
       
        <div className="col-md-4 hovering middle-column">
          <img src={u} alt="" />
        </div>
        {/* <div className="col-md-4 hovering">
          <img src={x} alt="" />
        </div> */}
        {/* End Elzmety  */}

        {/* start flat  */}
        <div className="col-md-4 hovering">
          <img src={fl1} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={fl2} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf2} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf9} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf11} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf12} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf13} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf10} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={fl3} alt="" />
        </div>
       
        <div className="col-md-4 hovering">
          <img src={fl5} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf1} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf4} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf5} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf6} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf7} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf8} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={fl7} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={fl8} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={fl9} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={nf3} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={fl10} alt="" />
        </div>
        {/* End flat  */}



        {/*Start Zaghmour  */}

        
        <div className="col-md-4 hovering">
          <img src={z1} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={z2} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={z3} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={z4} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={z5} alt="" />
        </div>

        {/*end Zaghmour  */}
       
       
      </div>
    </>
  )
}
