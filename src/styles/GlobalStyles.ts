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
     
     --background0-main: #162740; 
     --background1-main: #0C0D0F; 
     --background2-main: #14171A; 
     --background3-main: #21272B; 
     --background4-main: #F0F3F8; 
     --background5-main: #38ADFF; 
     
     --background1-secondary: #43ADFF; 
     --background2-secondary: #6696F2; 
     --background3-secondary: #837DDE;
     --background4-secondary: #9A62C2;
     --background5-secondary: #A943A0;
     --background6-secondary: #AE1D78;
     
     --success1: #00bc8c; 
     --success2: #6FCD84; 
     --success3: #AADC81; 
     --info1: #00A8D0;
     --info2: #00C5D5;
     --info3: #3AE1CD;
   
     --danger1: #930100;
     --danger2: #D14648;
     --danger3: #e76f51;
     --warning1: #ca6702;
     --warning2: #ee9b00; 
     --warning3: #9F7800;
    

     --boxShadowColor: black;
     
     --boxShadowSmall: inset -5px 5px 10px #675123,
     inset 5px -5px 10px #957533;
     
     
     --background-blur0: rgba(60, 59, 61, 0.10);
     --background-blur1: rgba(60, 59, 61, 0.65);
     --background-blur2: rgba( 200, 198, 198, 0.25 );
     --background-blur3: rgba( 200, 198, 198, 0.45 );

    


    --border-radius0: 4px;
    --border-radius1: 8px;
    --border-radius2: 16px;
    --border-radius3: 24px;

    --padding-small: 6px 6px 6px 8px;
    --padding-medium: 8px 8px 8px 12px;
    
    --padding-big: 12px 12px 12px 20px;
    --padding-big-sides: 0px 12px 0px 20px;

    --gap-small: 6px;
    --gap-medium: 8px;
    --gap-big: 12px;
    --gap-veryBig: 16px;
    --gap-huge: 20px;
    
    --font-size-small: 0.8rem;
    --font-size-medium: 1rem;
    --font-size-big: 1.2rem;
    --font-size-bigger: 1.4rem;

    --transition-one: 0.1s;
    --transition-two: 0.2s;
    --transition-three: 0.3s;

   }
`

export { GlobalStyle }
