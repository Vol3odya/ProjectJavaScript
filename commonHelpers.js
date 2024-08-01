import{S as h,A as f}from"./assets/vendor-6798bcc9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const E=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews",{headers:{Accept:"application/json"}});if(!e.ok)throw e.status===404?new Error("Not found"):e.status===500?new Error("Server error"):new Error("An unknown error occurred");return await e.json()}catch(e){throw new Error(e.message)}},S=e=>`
      <li class="swiper-slide reviews-items">
        <img class="reviews-img" src="${e.avatar_url}" alt="${e.author}" />
        <h3 class="review-author">${e.author}</h3>
        <p class="review-text">${e.review}</p>
      </li>
    `,q=()=>{new Swiper(".reviews-swiper",{navigation:{nextEl:".review-button-next",prevEl:".review-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{reachEnd:()=>{document.querySelector(".review-button-next").classList.add("disabled")},reachBeginning:()=>{document.querySelector(".review-button-prev").classList.add("disabled")},fromEdge:()=>{document.querySelector(".review-button-prev").classList.remove("disabled"),document.querySelector(".review-button-next").classList.remove("disabled")}}})},k=async()=>{try{const e=await E(),t=document.querySelector(".reviews-list");t.innerHTML=e.map(S).join(""),q()}catch(e){document.querySelector(".reviews-container").innerHTML=`<p class="error-message">${e.message}</p>`}},d=document.querySelector(".modal-overlay"),u=document.querySelector(".open-burger");document.querySelector(".close-btn");const x=document.querySelector(".order-mobile");document.querySelector(".nav-list");const m=document.querySelector("body");function I(){d.classList.add("is-open-header"),u.style.opacity="none",m.style.overflow="",console.log("aaaaa")}function j(){d.classList.remove("is-open-header"),u.style.opacity="",m.style.opacity=""}function A(e){e.preventDefault(),e.target===e.currentTarget&&(d.classList.remove("is-open-header"),u.style.opacity="",m.style.overflow="")}x.addEventListener("click",w);function w(e){e.preventDefault(),d.classList.remove("is-open-header"),u.style.opacity="",m.style.overflow="",setTimeout(()=>{document.querySelector("#worktogether").scrollIntoView({behavior:"smooth"})},100)}function O(e){if(e.target.tagName==="A"){d.classList.remove("is-open-header"),u.style.opacity="",m.style.overflow="";const t=e.target.getAttribute("href");setTimeout(()=>{document.querySelector(t).scrollIntoView({behavior:"smooth"})},100)}}const C=()=>{new h(".skills-conteiner",{navigation:{nextEl:".my-next"},loop:!0,speed:400,mousewheel:!0,clickable:!0,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}},on:{slideChange:function(e){let t=e.realIndex;document.querySelectorAll(".skill-slide").forEach((i,o)=>{o===t?i.classList.add("skill-slide-active"):i.classList.remove("skill-slide-active")})}}})};function P(){document.querySelector(".acc-container");const e=Array.from(document.querySelectorAll(".acc-container"));new f(e,{duration:600,showMultiple:!0,onOpen:function(t){},openOnInit:[0]})}const B=()=>{new Swiper(".projects-js",{slidesPerView:1,spaceBetween:0,keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".project-button-next",prevEl:".project-button-prev"},on:{reachEnd:()=>{document.querySelector(".project-button-next").classList.add("disabled")},reachBeginning:()=>{document.querySelector(".project-button-prev").classList.add("disabled")},fromEdge:()=>{document.querySelector(".project-button-prev").classList.remove("disabled"),document.querySelector(".project-button-next").classList.remove("disabled")}}})};function M(){document.querySelector(".faq-accordion-container");const e=Array.from(document.querySelectorAll(".faq-accordion-container"));new f(e,{duration:600,showMultiple:!0,onOpen:function(t){}})}function V(){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".cover-section"),t={rootMargin:"0px",threshold:0},c=o=>{o.forEach(s=>{s.isIntersecting?(e.classList.add("animate"),console.log("Animation added")):(e.classList.remove("animate"),console.log("Animation removed"))})},i=new IntersectionObserver(c,t);e&&i.observe(e)})}function L(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}const D=document.querySelector(".js-form"),l=document.querySelector(".js-modal-backdrop");document.addEventListener("keydown",function(e){e.key==="Escape"&&l.classList.contains("is-open")&&(l.classList.remove("is-open"),document.body.style.overflow="auto")});function $(e){e.preventDefault(),l.classList.add("is-open"),document.body.style.overflow="hidden"}function N(e){const t=e.target.closest(".js-modal-close");(e.target===l||t)&&(l.classList.remove("is-open"),document.body.style.overflow="auto")}const T=document.querySelector(".menu-button");T.addEventListener("click",I);const W=document.querySelector(".close-btn");W.addEventListener("click",j);const b=document.querySelector(".nav-list");b.addEventListener("click",A);const z=document.querySelector(".order-mobile");z.addEventListener("click",w);b.addEventListener("click",O);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-list .menu-list-item a"),t=document.getElementById("menu-toggle");e.forEach(c=>{c.addEventListener("click",()=>{t.checked=!1})})});P();C();B();M();V();document.addEventListener("DOMContentLoaded",k);D.addEventListener("submit",$);l.addEventListener("click",N);const y=document.querySelector(".js-form"),a=document.getElementById("user-email"),p=document.getElementById("user-text"),n=document.getElementById("email-validation-message"),r=a.parentElement,g=p.parentElement;a.addEventListener("focus",()=>{r.classList.add("focused")});a.addEventListener("blur",()=>{r.classList.remove("focused")});a.addEventListener("input",()=>{L(a.value)?(n.textContent="Success!",n.classList.remove("error"),r.classList.remove("error"),r.classList.add("success")):(n.textContent="Invalid email, try again",n.classList.add("error"),r.classList.remove("success"),r.classList.add("error"))});p.addEventListener("focus",()=>{g.classList.add("focused")});p.addEventListener("blur",()=>{g.classList.remove("focused")});y.addEventListener("submit",async e=>{if(e.preventDefault(),!L(a.value)){n.textContent="Invalid email, try again",n.classList.add("error"),r.classList.remove("success"),r.classList.add("error");return}const t={email:a.value,text:p.value};try{const c=await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(c.ok)n.textContent="Success!",n.classList.remove("error"),r.classList.remove("error"),r.classList.add("success"),y.reset(),n.textContent="",r.classList.remove("success");else{const i=await c.json();n.textContent=i.message||"An error occurred. Please try again.",n.classList.add("error"),r.classList.remove("success"),r.classList.add("error")}}catch{n.textContent="An error occurred. Please check your input and try again.",n.classList.add("error"),r.classList.remove("success"),r.classList.add("error")}});
//# sourceMappingURL=commonHelpers.js.map
