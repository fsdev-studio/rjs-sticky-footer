import React from 'react';




function Footer({footerBody, isSticky}) {
  
var hasScrollbar = document.documentElement.scrollHeight > document.documentElement.clientHeight
  const c = !hasScrollbar ? 'relative' : 'absolute';
  const p = isSticky ? {'pos':'fixed','bottom':0} : {'pos':c,'bottom':0};

  return (
    <div style={{
      position:p.pos,
      bottom:p.bottom,
      left:0,
      right:0,
      top:'auto',
      height:'auto',
      padding:10,
      background:'black',
      opacity:0.8,
      marginTop:10,
    }}>
    {footerBody}

    </div>
  );
}

export default Footer;
