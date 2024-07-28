(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const c=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews",{headers:{Accept:"application/json"}});if(!e.ok)throw e.status===404?new Error("Not found"):e.status===500?new Error("Server error"):new Error("An unknown error occurred");return await e.json()}catch(e){throw new Error(e.message)}},a=e=>`
      <li class="swiper-slide reviews-items">
        <img class="reviews-img" src="${e.avatar_url}" alt="${e.author}" />
        <h3 class="review-author">${e.author}</h3>
        <p class="review-text">${e.review}</p>
      </li>
    `,l=()=>{new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{reachEnd:()=>{document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:()=>{document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:()=>{document.querySelector(".swiper-button-prev").classList.remove("disabled"),document.querySelector(".swiper-button-next").classList.remove("disabled")}}})},d=async()=>{try{const e=await c(),s=document.querySelector(".reviews-list");s.innerHTML=e.map(a).join(""),l()}catch(e){document.querySelector(".reviews-container").innerHTML=`<p class="error-message">${e.message}</p>`}};document.addEventListener("DOMContentLoaded",d);
//# sourceMappingURL=commonHelpers.js.map