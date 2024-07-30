import{S as h,A as E}from"./assets/vendor-6798bcc9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const L of c.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&u(L)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();new h(".swiper",{loop:!0,speed:400,navigation:{nextEl:".swiper-button-next"},mousewheel:!0,clickable:!0,scrollbar:{el:".swiper-scrollbar",touchRatio:1,touchAngle:45,grabCursor:!0},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});const x=document.querySelector(".swiper");console.log(x);const S=document.querySelector(".accordion-container");console.log(S);const I=Array.from(document.querySelectorAll(".accordion-container"));new E(I,{duration:600,showMultiple:!0,onOpen:function(e){console.log(e)},openOnInit:[0]});const C=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews",{headers:{Accept:"application/json"}});if(!e.ok)throw e.status===404?new Error("Not found"):e.status===500?new Error("Server error"):new Error("An unknown error occurred");return await e.json()}catch(e){throw new Error(e.message)}},P=e=>`
      <li class="swiper-slide reviews-items">
        <img class="reviews-img" src="${e.avatar_url}" alt="${e.author}" />
        <h3 class="review-author">${e.author}</h3>
        <p class="review-text">${e.review}</p>
      </li>
    `,j=()=>{new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{reachEnd:()=>{document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:()=>{document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:()=>{document.querySelector(".swiper-button-prev").classList.remove("disabled"),document.querySelector(".swiper-button-next").classList.remove("disabled")}}})},q=async()=>{try{const e=await C(),o=document.querySelector(".reviews-list");o.innerHTML=e.map(P).join(""),j()}catch(e){document.querySelector(".reviews-container").innerHTML=`<p class="error-message">${e.message}</p>`}},w=document.querySelector(".js-form"),l=document.getElementById("user-email"),p=document.getElementById("user-text"),n=document.getElementById("email-validation-message"),s=l.parentElement,g=p.parentElement;function v(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}l.addEventListener("focus",()=>{s.classList.add("focused")});l.addEventListener("blur",()=>{s.classList.remove("focused")});l.addEventListener("input",()=>{v(l.value)?(n.textContent="Success!",n.classList.remove("error"),s.classList.remove("error"),s.classList.add("success")):(n.textContent="Invalid email, try again",n.classList.add("error"),s.classList.remove("success"),s.classList.add("error"))});p.addEventListener("focus",()=>{g.classList.add("focused")});p.addEventListener("blur",()=>{g.classList.remove("focused")});w.addEventListener("submit",async e=>{if(e.preventDefault(),!v(l.value)){n.textContent="Invalid email, try again",n.classList.add("error"),s.classList.remove("success"),s.classList.add("error");return}const o={email:l.value,text:p.value};try{const i=await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok)n.textContent="Success!",n.classList.remove("error"),s.classList.remove("error"),s.classList.add("success"),w.reset(),n.textContent="",s.classList.remove("success");else{const u=await i.json();n.textContent=u.message||"An error occurred. Please try again.",n.classList.add("error"),s.classList.remove("success"),s.classList.add("error")}}catch{n.textContent="An error occurred. Please check your input and try again.",n.classList.add("error"),s.classList.remove("success"),s.classList.add("error")}});const A=document.querySelector(".js-feedback-form"),m=document.querySelector(".js-modal-backdrop");document.addEventListener("keydown",function(e){e.key==="Escape"&&m.classList.contains("is-open")&&m.classList.remove("is-open")});function B(e){e.preventDefault(),m.classList.add("is-open"),document.body.style.overflow="hidden"}function O(e){const o=e.target.closest(".js-modal-close");(e.target===m||o)&&(m.classList.remove("is-open"),document.body.style.overflow="auto")}document.addEventListener("DOMContentLoaded",q);A.addEventListener("submit",B);m.addEventListener("click",O);const y=document.querySelector(".js-form"),d=document.getElementById("user-email"),f=document.getElementById("user-text"),a=document.getElementById("email-validation-message"),r=d.parentElement,b=f.parentElement;d.addEventListener("focus",()=>{r.classList.add("focused")});d.addEventListener("blur",()=>{r.classList.remove("focused")});d.addEventListener("input",()=>{v(d.value)?(a.textContent="Success!",a.classList.remove("error"),r.classList.remove("error"),r.classList.add("success")):(a.textContent="Invalid email, try again",a.classList.add("error"),r.classList.remove("success"),r.classList.add("error"))});f.addEventListener("focus",()=>{b.classList.add("focused")});f.addEventListener("blur",()=>{b.classList.remove("focused")});y.addEventListener("submit",async e=>{if(e.preventDefault(),!v(d.value)){a.textContent="Invalid email, try again",a.classList.add("error"),r.classList.remove("success"),r.classList.add("error");return}const o={email:d.value,text:f.value};try{const i=await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok)a.textContent="Success!",a.classList.remove("error"),r.classList.remove("error"),r.classList.add("success"),y.reset(),a.textContent="",r.classList.remove("success");else{const u=await i.json();a.textContent=u.message||"An error occurred. Please try again.",a.classList.add("error"),r.classList.remove("success"),r.classList.add("error")}}catch{a.textContent="An error occurred. Please check your input and try again.",a.classList.add("error"),r.classList.remove("success"),r.classList.add("error")}});
//# sourceMappingURL=commonHelpers.js.map
