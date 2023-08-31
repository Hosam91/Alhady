import React from 'react'
import b2 from './imgs/home/b2.jpg'
import b3 from './imgs/home/inter.jpg'
import b4 from './imgs/home/layout-01.png'
import s from './OurProjects.module.css'
export default function OurProjects() {
  return (
    <>
      <div className={s.myContainer}  >
      <div className={s.seven+s.h7}>
          <img src={b4} alt="" />
        </div>
        <div className={s.virtical}>
        <div className={''}>
      <img src={b3} alt="" />

    </div>
      <div className={'s.thirty'}>
      <img src={b3} alt="" />

    </div>
        </div>
    

      </div>
     
      <div className={s.myContainer}  >

      <div className={s.thirty}>
      <img src={b3} alt="" />
    </div>
      <div className={s.seven}>
      <img src={b2} alt="" />

    </div>

      </div>
      
        <div className={s.myContainer}>
        <div className={s.fifty}>
        <img src={b3} alt="" />

        </div>
        <div className={s.fifty}>
        <img src={b2} alt="" />

        </div>

        </div>
      <div className={s.myContainer}  >
      <div className={s.seven}>
          <img src={b2} alt="" />
    </div>
      <div className={s.thirty}>
      <img src={b3} alt="" />

    </div>

      </div>
     
      <div className={s.myContainer}  >

      <div className={s.thirty}>
      <img src={b3} alt="" />
    </div>
      <div className={s.seven}>
      <img src={b2} alt="" />

    </div>

      </div>
      
        <div className={s.myContainer}>
        <div className={s.fifty}>
        <img src={b2} alt="" />

        </div>
        <div className={s.fifty}>
        <img src={b3} alt="" />

        </div>

        </div>
        
     
      
    </>
    
  
  )
}
