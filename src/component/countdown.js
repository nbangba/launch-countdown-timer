import React,{useState,useEffect} from 'react'
import Card from './card'
import styled from 'styled-components'
import hills from '../images/pattern-hills.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
const CountDownWrapper = styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   align-items:center;
   min-width:100%;
   height:300px;
   `
const Main = styled.main`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  align-content:flex-start;
  
  
  }
`
 const  Footer = styled.footer`
   background:url(${hills});
   background-repeat:no-repeat;
   background-size:cover;
   background-position:center bottom;
   display:flex;
   height:200px;
   width:100%;
   position:absolute;
   bottom:0px;

   ul{
       display:flex;
       padding:50px 50px;
       box-sizing:border-box;
       width:100%;
       align-items:flex-end;
       justify-content:center;
       li{
           display:block;
           flex: 0 0 80px;
       }
   }

   .icon{
       display:inline-block;
       background-color:rgb(131, 133, 169);
       mask-size:cover;
       cursor:pointer;
    min-height:24px;
    min-width:24px;
       &:hover{
           background-color:hsl(345, 95%, 68%);
       }
   }

   #facebook{
       mask:url(${facebook});
   }

   #pinterest{
    mask:url(${pinterest});
   }

   #instagram{
    mask:url(${instagram});
}

@media screen and (max-width:400px){
    background-position:left -150px bottom;
}
 ` 

 const Header =styled.header`
 padding: 100px 50px 0px 50px;
 box-sizing:border-box;
 color:white;
 font-size:1.14rem;
 letter-spacing:10px;

 @media screen and (max-height:600px) and (max-width:400px){
    padding-top:6rem;
  }
 `

export default function CountDown() {
    const start =new Date(Date.now()+ 462923489) 
    const current = start - Date.now()
    const [seconds, setseconds] = useState(Math.floor((current/1000))%60)
    const [minutes, setminutes] = useState(Math.floor((current/(1000*60)))%60)
    const [hours, sethours] = useState(Math.floor((current/(1000*60*60)))%24)
    const [days, setdays] = useState(Math.floor((current/(1000*60*60*24))))

    useEffect(() => {
        const interval = setInterval(() => {
            const current = start - Date.now()
            if(current>=0){
            const s = Math.floor((current/1000))%60
            const m = Math.floor((current/(1000*60)))%60
            const h = Math.floor((current/(1000*60*60)))%24
            const d = Math.floor((current/(1000*60*60*24)))
            setseconds(s)
            setminutes(m)
            sethours(h)
            setdays(d)
            console.log(d,h,m,s)
            }
            else 
            clearInterval(interval)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <>
        <Header> <h1 >WE'RE LAUNCHING SOON</h1></Header>
        <Main>
       
        <CountDownWrapper>
          <Card time={days+1<10?`0${days+1}`:`${days+1}`}  nextTime={days<10?`0${days}`:`${days}`} type={'days'}/>
          <Card time={hours+1==24?'00':hours+1<10?`0${hours+1}`:`${hours+1}`} nextTime={hours<10?`0${hours}`:`${hours}`} type={'hours'} />
          <Card time={minutes+1==60?'00':minutes+1<10?`0${minutes+1}`:`${minutes+1}`} nextTime={minutes<10?`0${minutes}`:`${minutes}`} type={'minutes'}/>
          <Card time={seconds+1==60?'00':seconds+1<10?`0${seconds+1}`:`${seconds+1}`} nextTime={seconds<10?`0${seconds}`:`${seconds}`} type={'seconds'} />
        </CountDownWrapper>
        </Main>
        <Footer>
            <ul>
                <li>
                    <span className='icon' id='facebook'></span>
                </li>
                <li>
                    <span className='icon' id='pinterest'></span>
                </li>
                <li>
                <span className='icon' id='instagram'></span>
                </li>
            </ul>
        </Footer>
        </>
    )
}
