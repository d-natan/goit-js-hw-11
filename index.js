import{a as u,S as f,i}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",h="54230749-f3a9f749c9b4d8e3a8cc4a241";function m(n){const r={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(d,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function p(n){const r=n.map(o=>`
      <a href="${o.largeImageURL}">
        <img 
          src="${o.webformatURL}" 
          alt="${o.tags}" 
          width="360" 
          height="200"
        />
      </a>
    `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function y(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",q);function q(n){n.preventDefault();const r=n.target.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query",position:"topRight"});return}y(),L(),m(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(o.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
