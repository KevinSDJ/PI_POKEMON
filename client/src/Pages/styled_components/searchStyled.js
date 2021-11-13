import  styled from 'styled-components';

const FormSearch= styled.form`
   display: flex;
   position: relative;
   background-color: white;
   box-sizing: content-box;
   padding: 1px;
   border-radius: 4em;
   align-items:center;
   input{
       padding: 0 1em;
       outline: none;
       border: 0.5px transparent;
       border-top-left-radius:1em;
       border-bottom-left-radius:1em ;
       font-size: 1.2em;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
       line-height: 20px;
   }
`;

export {FormSearch};