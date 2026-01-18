import{a as f,S as d,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="54230749-f3a9f749c9b4d8e3a8cc4a241";function g(i){const r={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(m,{params:r}).then(o=>o.data)}const y=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${s}</p>
            <p class="info-item"><b>Comments</b> ${l}</p>
            <p class="info-item"><b>Downloads</b> ${u}</p>
          </div>
        </li>
      `).join("");galleryContainer.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){y.innerHTML=""}function S(){c.classList.remove("hidden")}function q(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}L(),S(),g(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
