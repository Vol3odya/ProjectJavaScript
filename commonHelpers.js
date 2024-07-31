import{S as I,A as q}from"./assets/vendor-6798bcc9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const k=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews",{headers:{Accept:"application/json"}});if(!e.ok)throw e.status===404?new Error("Not found"):e.status===500?new Error("Server error"):new Error("An unknown error occurred");return await e.json()}catch(e){throw new Error(e.message)}},C=e=>`
      <li class="swiper-slide reviews-items">
        <img class="reviews-img" src="${e.avatar_url}" alt="${e.author}" />
        <h3 class="review-author">${e.author}</h3>
        <p class="review-text">${e.review}</p>
      </li>
    `,j=()=>{new Swiper(".reviews-swiper",{navigation:{nextEl:".review-button-next",prevEl:".review-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{reachEnd:()=>{document.querySelector(".review-button-next").classList.add("disabled")},reachBeginning:()=>{document.querySelector(".review-button-prev").classList.add("disabled")},fromEdge:()=>{document.querySelector(".review-button-prev").classList.remove("disabled"),document.querySelector(".review-button-next").classList.remove("disabled")}}})},A=async()=>{try{const e=await k(),t=document.querySelector(".reviews-list");t.innerHTML=e.map(C).join(""),j()}catch(e){document.querySelector(".reviews-container").innerHTML=`<p class="error-message">${e.message}</p>`}},v=document.querySelector(".modal-overlay"),p=document.querySelector(".open-burger");document.querySelector(".close-btn");document.querySelector(".order-mobile");document.querySelector(".nav-list");const y=document.querySelector("body");function O(){v.classList.add(".is-open"),p.style.opacity="none",y.style.overflow="",console.log("aaaaa")}function P(){v.classList.remove("is-open"),p.style.opacity="",y.style.opacity=""}function B(e){e.preventDefault(),e.target===e.currentTarget&&(v.classList.remove("is-open"),p.style.opacity="",y.style.overflow="")}function M(e){e.preventDefault(),v.classList.remove("is-open"),p.style.opacity="",y.style.overflow="",setTimeout(()=>{document.querySelector("#worktogether").scrollIntoView({behavior:"smooth"})},100)}function V(e){if(e.target.tagName==="A"){v.classList.remove("is-open"),p.style.opacity="",y.style.overflow="";const t=e.target.getAttribute("href");setTimeout(()=>{document.querySelector(t).scrollIntoView({behavior:"smooth"})},100)}}function $(){new I(".skills-conteiner",{loop:!0,speed:400,navigation:{nextEl:".my-next"},mousewheel:!0,clickable:!0,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:16},1440:{slidesPerView:6,spaceBetween:16}},on:{slideChange:function(t){let r=t.realIndex;document.querySelectorAll(".skill-slide").forEach((s,o)=>{o===r?s.classList.add("skill-slide-active"):s.classList.remove("skill-slide-active")})}}}),document.querySelector(".accordion-container");const e=Array.from(document.querySelectorAll(".accordion-container"));new q(e,{duration:600,showMultiple:!0,onOpen:function(t){},openOnInit:[0]})}const D=()=>{new Swiper(".projects-js",{slidesPerView:1,spaceBetween:0,keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".project-button-next",prevEl:".project-button-prev"},on:{reachEnd:()=>{document.querySelector(".project-button-next").classList.add("disabled")},reachBeginning:()=>{document.querySelector(".project-button-prev").classList.add("disabled")},fromEdge:()=>{document.querySelector(".project-button-prev").classList.remove("disabled"),document.querySelector(".project-button-next").classList.remove("disabled")}}})};function T(){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".cover-section"),t={rootMargin:"0px",threshold:0},r=s=>{s.forEach(o=>{o.isIntersecting?(e.classList.add("animate"),console.log("Animation added")):(e.classList.remove("animate"),console.log("Animation removed"))})},l=new IntersectionObserver(r,t);e&&l.observe(e)})}const b=document.querySelector(".js-form"),d=document.getElementById("user-email"),f=document.getElementById("user-text"),a=document.getElementById("email-validation-message"),n=d.parentElement,E=f.parentElement;function L(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}d.addEventListener("focus",()=>{n.classList.add("focused")});d.addEventListener("blur",()=>{n.classList.remove("focused")});d.addEventListener("input",()=>{L(d.value)?(a.textContent="Success!",a.classList.remove("error"),n.classList.remove("error"),n.classList.add("success")):(a.textContent="Invalid email, try again",a.classList.add("error"),n.classList.remove("success"),n.classList.add("error"))});f.addEventListener("focus",()=>{E.classList.add("focused")});f.addEventListener("blur",()=>{E.classList.remove("focused")});b.addEventListener("submit",async e=>{if(e.preventDefault(),!L(d.value)){a.textContent="Invalid email, try again",a.classList.add("error"),n.classList.remove("success"),n.classList.add("error");return}const t={email:d.value,text:f.value};try{const r=await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(r.ok)a.textContent="Success!",a.classList.remove("error"),n.classList.remove("error"),n.classList.add("success"),b.reset(),a.textContent="",n.classList.remove("success");else{const l=await r.json();a.textContent=l.message||"An error occurred. Please try again.",a.classList.add("error"),n.classList.remove("success"),n.classList.add("error")}}catch{a.textContent="An error occurred. Please check your input and try again.",a.classList.add("error"),n.classList.remove("success"),n.classList.add("error")}});const N=document.querySelector(".js-feedback-form"),m=document.querySelector(".js-modal-backdrop");document.addEventListener("keydown",function(e){e.key==="Escape"&&m.classList.contains("is-open")&&m.classList.remove("is-open")});function W(e){e.preventDefault(),m.classList.add("is-open"),document.body.style.overflow="hidden"}function z(e){const t=e.target.closest(".js-modal-close");(e.target===m||t)&&(m.classList.remove("is-open"),document.body.style.overflow="auto")}const F=document.querySelector(".open-burger");F.addEventListener("click",O);const H=document.querySelector(".close-btn");H.addEventListener("click",P);const S=document.querySelector(".nav-list");S.addEventListener("click",B);const R=document.querySelector(".order-mobile");R.addEventListener("click",M);S.addEventListener("click",V);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-list .menu-list-item a"),t=document.getElementById("menu-toggle");e.forEach(r=>{r.addEventListener("click",()=>{t.checked=!1})})});$();D();T();document.addEventListener("DOMContentLoaded",A);N.addEventListener("submit",W);m.addEventListener("click",z);const h=document.querySelector(".js-form"),u=document.getElementById("user-email"),w=document.getElementById("user-text"),i=document.getElementById("email-validation-message"),c=u.parentElement,x=w.parentElement;u.addEventListener("focus",()=>{c.classList.add("focused")});u.addEventListener("blur",()=>{c.classList.remove("focused")});u.addEventListener("input",()=>{L(u.value)?(i.textContent="Success!",i.classList.remove("error"),c.classList.remove("error"),c.classList.add("success")):(i.textContent="Invalid email, try again",i.classList.add("error"),c.classList.remove("success"),c.classList.add("error"))});w.addEventListener("focus",()=>{x.classList.add("focused")});w.addEventListener("blur",()=>{x.classList.remove("focused")});h.addEventListener("submit",async e=>{if(e.preventDefault(),!L(u.value)){i.textContent="Invalid email, try again",i.classList.add("error"),c.classList.remove("success"),c.classList.add("error");return}const t={email:u.value,text:w.value};try{const r=await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(r.ok)i.textContent="Success!",i.classList.remove("error"),c.classList.remove("error"),c.classList.add("success"),h.reset(),i.textContent="",c.classList.remove("success");else{const l=await r.json();i.textContent=l.message||"An error occurred. Please try again.",i.classList.add("error"),c.classList.remove("success"),c.classList.add("error")}}catch{i.textContent="An error occurred. Please check your input and try again.",i.classList.add("error"),c.classList.remove("success"),c.classList.add("error")}});
//# sourceMappingURL=commonHelpers.js.map
