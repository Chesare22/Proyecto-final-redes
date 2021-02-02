(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(a,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return s})),i.d(e,"metadata",(function(){return o})),i.d(e,"toc",(function(){return t})),i.d(e,"default",(function(){return d}));var c=i(3),r=i(7),n=(i(0),i(103)),s={id:"IQoS1",title:"Conocer la red y sus aplicaciones"},o={unversionedId:"IQoS1",id:"IQoS1",isDocsHomePage:!1,title:"Conocer la red y sus aplicaciones",description:"Es necesario identificar c\xf3mo consumen recursos las aplicaciones para tomar acciones relacionadas al QoS, como garantizar un ancho de banda m\xednimo en las aplicaciones cr\xedticas (p.ej. ERP), o vigilar o bloquear aplicaciones no cr\xedticas.",source:"@site/docs\\IQoS1.md",slug:"/IQoS1",permalink:"/Proyecto-final-redes/docs/IQoS1",version:"current",sidebar:"someSidebar",previous:{title:"Necesidad de QoS",permalink:"/Proyecto-final-redes/docs/QoS2"},next:{title:"Manejo del tr\xe1fico",permalink:"/Proyecto-final-redes/docs/IQoS2"}},t=[{value:"Identificar qu\xe9 aplicaciones necesitan QoS",id:"identificar-qu\xe9-aplicaciones-necesitan-qos",children:[]},{value:"Identificar las caracter\xedsticas de las aplicaciones",id:"identificar-las-caracter\xedsticas-de-las-aplicaciones",children:[]},{value:"Identificar las caracter\xedsticas de la red",id:"identificar-las-caracter\xedsticas-de-la-red",children:[]}],l={toc:t};function d(a){var e=a.components,i=Object(r.a)(a,["components"]);return Object(n.b)("wrapper",Object(c.a)({},l,i,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Es necesario identificar c\xf3mo consumen recursos las aplicaciones para tomar acciones relacionadas al QoS, como garantizar un ancho de banda m\xednimo en las aplicaciones cr\xedticas (p.ej. ERP), o vigilar o bloquear aplicaciones no cr\xedticas."),Object(n.b)("h3",{id:"identificar-qu\xe9-aplicaciones-necesitan-qos"},"Identificar qu\xe9 aplicaciones necesitan QoS"),Object(n.b)("p",null,"Para identificar qu\xe9 aplicaciones requieren protecci\xf3n  (por ser cr\xedticas para el negocio) a veces es necesario revisar todas las aplicaciones que compiten por recursos en la red. Se puede analizar el tr\xe1fico de las siguientes maneras:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"NetFlow:")," protocolo que permite capturar los datos requeridos para aplicaciones de planificaci\xf3n, supervisi\xf3n y contabilidad de redes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Network-based Application Recognition (NBAR):")," herramienta de clasificaci\xf3n para identificar tr\xe1fico en la capa de aplicaci\xf3n. Genera estad\xedsticas por interfaz y por protocolo. Tambi\xe9n puede hacer clasificaciones en sub-puertos."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"QoS Device Manager (QDM):")," aplicaci\xf3n para la administraci\xf3n de red que cuenta con una interfaz gr\xe1fica f\xe1cil de usar.")),Object(n.b)("h3",{id:"identificar-las-caracter\xedsticas-de-las-aplicaciones"},"Identificar las caracter\xedsticas de las aplicaciones"),Object(n.b)("p",null,"Es importante identificar las aplicaciones que son sensibles a p\xe9rdidas de paquetes o latencias, las que se consideran ",Object(n.b)("em",{parentName:"p"},"agresivas")," por consumir mucho ancho de banda, determinar el tama\xf1o de los paquetes de la aplicaci\xf3n, etc.\nPor ejemplo, podemos identificar que las aplicaciones para intercambiar video y audio en tiempo real son sensibles a latencias; o que las aplicaciones para transferir archivos o p\xe1ginas HTTP piden ",Object(n.b)("em",{parentName:"p"},"r\xe1fagas de datos")," en distintos puntos."),Object(n.b)("h3",{id:"identificar-las-caracter\xedsticas-de-la-red"},"Identificar las caracter\xedsticas de la red"),Object(n.b)("p",null,"Aqu\xed se enlistan algunas medidas para conocer el estado de la red:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Hacer diagramas de la topolog\xeda de la red para saber cu\xe1ntos dispositivos necesitan actualizaci\xf3n."),Object(n.b)("li",{parentName:"ul"},"Ver el uso de CPU de los routers en periodos de alta actividad para decidir c\xf3mo compartir la carga."),Object(n.b)("li",{parentName:"ul"},"Determinar el retraso m\xe1ximo que las aplicaciones cr\xedticas pueden aguantar."),Object(n.b)("li",{parentName:"ul"},"Identificar enlaces lentos para encontrar cuellos de botella y poder decidir c\xf3mo aplicar mecanismos para optimizar links.")))}d.isMDXComponent=!0}}]);