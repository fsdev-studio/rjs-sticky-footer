import React ,{useState} from 'react';
import './Footer.css';

function checkScroll(){
  return document.documentElement.scrollHeight == document.documentElement.clientHeight
}

function Footer({footerBody, isSticky,background,opacity}) {
const [isScroll,setIsScroll]=useState(checkScroll())
//var hasScrollbar = document.body.scrollHeight > document.body.clientHeight
  var c = '';//document.documentElement.scrollHeight === document.documentElement.clientHeight ? 'absolute' : 'relative' ;
  // if(Number(document.documentElement.scrollHeight) > Number(document.documentElement.clientHeight)){
  //   c = 'relative';
  // }
  // else{
  //   c = 'absolute';
  // }

  //alert(checkScroll())
  const p = isSticky ? 'fixed' : c ;
console.log(c)

//   if(document.body.clientHeight > document.documentElement.clientHeight){
//     return(
// <div style={{marginTop:100}}>
//       <div className="footer"
//       style={{
//         position: isSticky ? 'fixed' : 'absolute',
//         bottom: 0,
//         background:background,
//         opacity:opacity,
//           marginTop:isSticky ? 10 : 0,
//       }}>
//       {footerBody}
//       </div>
//       </div>
//     )
//   }
//   else{
    return(
      <div style={{marginTop:100}}>
      <div className="footer"
      style={{
        position: isSticky ? 'fixed' :(checkScroll() ? 'absolute':'relative'),
        bottom:0,
        background:background,
        opacity:opacity,
        marginTop:isSticky ? 10 : 0,
      }}>
      {footerBody}
      </div>
      </div>
    )
//  }


}

export default Footer;
