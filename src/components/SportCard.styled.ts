import styled from 'styled-components'

export const SportCardWrapper = styled.div`
border-bottom: 1px solid var(--background-blur2);
background: var(--background3-main); 
padding: 1rem;

width: 190px;
&:hover {
    transition: var(--transition-one);
    background: var(--background4-main); 
    color: var(--background1-main); 
}

`