import React,{useState,useEffect} from 'react'
import styled,{css} from 'styled-components'
const TopCard = styled.div`
   top: 0px;
   width:100%;
   height:100%;
   display:flex;
   background-color:#2c2c44; 
   justify-content:center;
   align-items:center;
   text-align:center;
   overflow:hidden;
   position:absolute;
  
   backface-visibility: hidden;
   clip-path:inset(0 0 50% 0);
   color:#d3506f;
   border-radius:0.8rem;
   ${props => props.bottom && css`
   background-color:hsl(236, 21%, 26%);
   clip-path:inset(50% 0 0 0);
  `}

  ${props => props.back && css`
  transform: rotateY(180deg) rotateZ(180deg);
  background-color:hsl(236, 21%, 26%);
  clip-path:inset(50% 0 0 0);
  `}

`


const CardWrapper = styled.div`
   position:relative;
   min-width: 11rem;
   height:10.5rem;
   margin:1.4rem;
   transform-style: preserve-3d;
   box-shadow: 0 0.71rem 0.57rem 0 rgba(0,0,0,0.8);
   perspective:1200px;
   font-size:6rem;;
   border-radius:0.8rem;

   
`
const  Flipper = styled.div`
position:relative;
transform-style: preserve-3d;
height:100%;
z-index:2;
`

const Groove = styled.div`
  width:100%;
  background:linear-gradient(#282a41 50%,#34344da3);
 
  height:0.3rem;
  over-flow:visible;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:300;
  &:before{
    background: #191a25;
    height: 0.8rem;
    width:0.55rem;
    border-radius: 0 0.4rem 0.4rem 0 ;
    display: inline-block;
    content: '';
    position:absolute;
    left:0px;
}

&:after{
    background: #191a25;
    height: 0.8rem;
    width:0.55rem;
    border-radius: 0.4rem 0rem 0rem 0.4rem ;
    display: inline-block;
    content: '';
    position:absolute;
    right:0px;
}

`


export default function Card({time,type,nextTime}) {
      useEffect(() => {
        document.getElementById(type).animate([{transform: 'rotatex(0deg)'},{transform:' rotatex(-180deg)'}],{duration:1000,fill:'forwards'})
      },[time])
    

    return (
         <div style={{height:'14rem'}}>
           <CardWrapper>
             <Flipper id={type}> 
            <TopCard >
            <Groove>            
                {time}
             </Groove>
            </TopCard>
            <TopCard back>
                <Groove>{nextTime}</Groove>
            </TopCard>
            </Flipper> 
            <TopCard bottom>
              <Groove>{time}</Groove>
            </TopCard>
            <TopCard hidden>
                <Groove>{nextTime}</Groove>
            </TopCard>
           </CardWrapper> 
           <span style={{color:'rgb(131,133,169)',fontSize:'1rem',letterSpacing:'0.36rem'}}>{type.toUpperCase()}</span> 
           </div>
    )
}
