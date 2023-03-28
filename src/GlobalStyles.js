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
       --background0-main:#264653;
       --background1-main:#344B47;
       --background2-main:#f4a261;
       --background3-main:#196D7F;
       --background4-main:#e76f51;
       --background5-main:#e9c46a;
    
    
       --background1-secondary:#B37AAC;
       --background2-secondary:#7D4977;
       --background3-secondary:#96B1AC;
       --background4-secondary:#00AA94;
       --background5-secondary:#9A8E3A;

       /* --boxShadowColor: rgb(56,65,119); */
       --boxShadowColor: black;

      --boxShadowSmall: inset -5px 5px 10px #675123,
            inset 5px -5px 10px #957533;

    
    --background-blur1: rgba( 200, 198, 198, 0.25 );
    --background-blur2: rgba( 200, 198, 198, 0.65 );


    --border-radius0: 5px;
    --border-radius1: 10px;
    --border-radius2: 15px;
    --border-radius3: 20px;
   }
`

export { GlobalStyle }
