import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    height: 100%;
   
  } 
  
  body {
      position:relative;
      min-height: 100%;
      color: var(--background4-main);
      margin: 0;
      padding: 0;
      max-width: 100vw;
      height: 100%;
      overflow-wrap: break-word;
      background: var(--background1-main);
      font-family: 'Open Sans', sans-serif;
      
  }
   :root{
       margin: 0 auto;
  
       
       
       --background0-main: #162740; // ok
       --background1-main: #0C0D0F; // ok
       --background2-main: #14171A; // ok
       --background3-main: #21272B; //ok
       --background4-main: #F0F3F8; // ok
       --background5-main: #38ADFF; // ok
       /* --background5-main: #1493FF; // ok blue */
/*        38ADFF
       --background0-main: #d0e8f2;
       --background1-main: #EBEBEB;
       --background2-main: #181818;
       --background3-main: #6D6C70;
       --background4-main: #E1E1E1;
       --background5-main: #1C1C1C; */
       


/*     
       --background1-secondary: #B37AAC;
       --background2-secondary: #7D4977; */
    
       --background1-secondary: #43ADFF; // ok lighter
       --background2-secondary: #1386E9; // ok darker
       --background3-secondary: #96B1AC;
       --background4-secondary: #00AA94;
       --background5-secondary: #9A8E3A;

       --error: #e76f51;
       --success: rgb(3, 209, 0);
       --warning: #e9c46a;
       

       /* --boxShadowColor: rgb(56,65,119); */
       --boxShadowColor: black;

      --boxShadowSmall: inset -5px 5px 10px #675123,
            inset 5px -5px 10px #957533;

    
    /* --background-blur1: rgba( 200, 198, 198, 0.25 ); */
    /* --background-blur2: rgba( 200, 198, 198, 0.65 ); */

    --background1-blur: rgba(60, 59, 61, 0.65);
    --background2-blur: rgba(60, 59, 61, 0.75);


    --border-radius0: 4px;
    --border-radius1: 8px;
    --border-radius2: 16px;
    --border-radius3: 24px;

    --padding-small: 6px 6px 6px 8px;
    --padding-medium: 8px 8px 8px 12px;
    --padding-big: 12px 12px 12px 20px;

    --gap-small: 6px;
    --gap-medium: 8px;
    --gap-big: 12px;
    
    --font-size-small: 1rem;
    --font-size-medium: 1.2rem;
    --font-size-big: 1.4rem;
    --font-size-bigger: 1.6rem;

    --transition-one: 0.1s;
    --transition-two: 0.2s;
    --transition-three: 0.3s;

   }
`

export { GlobalStyle }
