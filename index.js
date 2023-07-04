"use strict";

import projects from "./projects.json" assert {type:'json'}
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
console.log(projects);

// let http = new XMLHttpRequest();
// http.open('get', 'projects.json', true);
// http.send();
// http.onload = function(){
//    if(this.readyState == 4 && this.status == 200){
//       let products = JSON.parse(this.responseText);
//       let output = "";
//       for(let item of products){
//          output += `
//             <div class="product">
//                <p class="title">${item.title}</p>
//                <p class="description">${item.description}</p>
//                <p class="price">
//                   <span>${item.tech}</span>
//                   <button>${item.link}</button>
//                </p>
//             </div>
//          `;
//       }
//       document.querySelector(".myprojects").innerHTML = output;
//    }
// }

let http = new XMLHttpRequest();
http.open('get', 'projects.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
         <div class="card" style="width: 28rem;">
         <div class="card-body">
         <h5 class="card-title">${item.title}</h5>
         <img src=${item.img} class="card-img-top" alt="...">
           <h6 class="card-subtitle mb-2 text-body-secondary">${item.tech}</h6>
           <p class="card-text">${item.description}</p>
           <div style="margin:8px">
           <a href="${item.github}" class="footer_social" target=”_blank”><i class="bx bxl-github"></i></a>
           <a href="${item.link}" class="footer_social" target=”_blank”><i class="fa-solid fa-link"></i></a>
           <a href="${item.youtube}" target=”_blank” class="footer_social"><i class="bx bxl-youtube"></i></a>
            </div>
         </div>
       </div>
         `;
      }
      document.querySelector(".myprojects").innerHTML = output;
   }
}