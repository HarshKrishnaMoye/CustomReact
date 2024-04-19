function customRender(reactElement,container){

    // Basic Version-1 Of Custom React Rendering - Errors are : if there are no or multiple attributes in the element this function wont work
    
    // const domElement= document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);

    // Version-2 Of Custom React Rendering

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    for (const prop in  reactElement.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement ={
    type: 'a',
    props:{
        href :'https://google.com',
        target:'_blank',
    },
    children : 'Click me to visit Google.com'
}
const mainContainer = document.getElementById("root")

customRender(reactElement,mainContainer);
