import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

const Snowflake = (props) =>{
    return(
        <p className='Snowflake' id={`item${props.id}`} style={props.style}>
            .
        </p>
    )
};

class Snow extends Component {
    snow=()=>{
        let animationDelay = '0s';
        let fontSize = '200px';
        let arr = Array.from('*****************************************************************')
        return arr.map((el, i)=>{
            animationDelay = `${(Math.random()*100).toFixed(2)}s`;
            fontSize = `${(Math.floor(Math.random()*10) + 40)}px`;

            let style = {
                animationDelay,
                fontSize
            };
            return (<Snowflake key={i} id={i} style={style}/>)
        })
    };

    render(){
        return(
            <div className="snow">
                {this.snow()}
            </div>

        )
    }
}


export default Snow

//
// class Snow1 extends Component {
//
//     componentDidMount() {
//
//
// //Configure below to change URL path to the snow image
//     const snowsrc = "../../images/snow.png";
// // Configure below to change number of snow to render
//         const no = 20;
//         const ns4up = (document.layers) ? 1 : 0; // browser sniffer
//         const ie4up = (document.all) ? 1 : 0;
//         const ns6up = (document.getElementById && !document.all) ? 1 : 0;
//
//
//         let i;
//         let doc_width = 800;
//         let doc_height = 600;
//
//     if(ns4up || ns6up) {
//     doc_width = self.innerWidth;
//     doc_height = self.innerHeight;
//     }
//     else if (ie4up) {
//     doc_width = document.body.clientWidth;
//     doc_height = document.body.clientHeight;
//     }
// // coordinate and position variables
//         const dx = new Array();
//         const xp = new Array();
//         const yp = new Array();
// // amplitude and step variables
//         const am = new Array();
//         const stx = new Array();
//         const sty = new Array();
//
// for (i = 0; i < no; ++i) {
//     dx[i] = 0; // set coordinate variables
//     xp[i] = Math.random() * (doc_width - 50); // set position variables
//     yp[i] = Math.random() * doc_height;
//     am[i] = Math.random() * 20; // set amplitude variables
//     stx[i] = 0.02 + Math.random() / 10; // set step variables
//     sty[i] = 0.7 + Math.random(); // set step variables
//     if (ns4up) { // set layers
//         if (i == 0) {
//             document.write("<layer name=\"dot" + i + "\" left=\"15\" top=\"15\" visibility=\"show\"><a href=\"http://dynamicdrive.com/\"><img src='" + snowsrc + "' border=\"0\"></a></layer>");
//         } else {
//             document.write("<layer name=\"dot" + i + "\" left=\"15\" top=\"15\" visibility=\"show\"><img src='" + snowsrc + "' border=\"0\"></layer>");
//         }
//     } else if (ie4up || ns6up) {
//         if (i == 0) {
//             document.write("<div id=\"dot" + i + "\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"http://dynamicdrive.com\"><img src='" + snowsrc + "' border=\"0\"></a></div>");
//         } else {
//             document.write("<div id=\"dot" + i + "\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "' border=\"0\"></div>");
//         }
//     }
// }
//
// function snowNS() { // Netscape main animation function
//     for (i = 0; i < no; ++i) { // iterate for every dot
//         yp[i] += sty[i];
//         if (yp[i] > doc_height - 50) {
//             xp[i] = Math.random() * (doc_width - am[i] - 30);
//             yp[i] = 0;
//             stx[i] = 0.02 + Math.random() / 10;
//             sty[i] = 0.7 + Math.random();
//             doc_width = self.innerWidth;
//             doc_height = self.innerHeight;
//         }
//         dx[i] += stx[i];
//         document.layers["dot" + i].top = yp[i];
//         document.layers["dot" + i].left = xp[i] + am[i] * Math.sin(dx[i]);
//     }
//     setTimeout("snowNS()", 15);
// }
//
// function snowIE_NS6() { // IE and NS6 main animation function
//     for (i = 0; i < no; ++i) { // iterate for every dot
//         yp[i] += sty[i];
//         if (yp[i] > doc_height - 50) {
//             xp[i] = Math.random() * (doc_width - am[i] - 30);
//             yp[i] = 0;
//             stx[i] = 0.02 + Math.random() / 15;
//             sty[i] = 0.7 + Math.random();
//             doc_width = ns6up ? window.innerWidth : document.body.clientWidth;
//             doc_height = ns6up ? window.innerHeight : document.body.clientHeight;
//         }
//         dx[i] += stx[i];
//         if (ie4up) {
//             document.all["dot" + i].style.pixelTop = yp[i];
//             document.all["dot" + i].style.pixelLeft = xp[i] + am[i] * Math.sin(dx[i]);
//         } else if (ns6up) {
//             document.getElementById("dot" + i).style.top = yp[i];
//             document.getElementById("dot" + i).style.left = xp[i] + am[i] * Math.sin(dx[i]);
//         }
//     }
//     setTimeout("snowIE_NS6()", 15);
// }
//
// if (ns4up) {
//     snowNS();
// } else if (ie4up || ns6up) {
//     snowIE_NS6();
// }
// }
//
// render() {
//         return (
//             <>
//
//             </>
//         );
//     }
//
//
// }
//
// export default Snow1;