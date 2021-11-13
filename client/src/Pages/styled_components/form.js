import styled from "styled-components";

const Form=styled.form`
    background-color: #317581;
    display: flex;
    width:${p=>p.width?p.width:"20em"};
    border-radius: 0.5em;
    flex-direction: column;
    padding:3em;
    margin: 0 auto;
    gap:${p=>p.gap?p.gap:"0"};
    ${p=>p.position?`position:${p.position}`:null};
    input{
        outline: none;
        border:1px transparent;
        border-radius: 0.5em;
        font-size: 1em;
        color: #585656;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0.3em 1em;
        margin-top: 4px;
    };
    div{
        display:flex;
        justify-content: space-between;
        gap:0 2em;
        margin-top: 1em;

    };
    label{
        display: flex;
        color:#fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        flex-direction: column;
        font-size: ${p=>p?.label?p.label.fontSize:"19px"};
    };
`;

export {Form}