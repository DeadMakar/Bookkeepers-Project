import"./header-049d453a.js";const c=document.getElementById("fonds-list"),n=document.querySelector(".supp-btn");let s=0;const r=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/images/save-the-children-1x.png",img2x:"./img/images/save-the-children-2x.png",width:129,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/images/project-hope-1x.png",img2x:"./img/images/project-hope-2x.png",width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/images/international-medical-corps-1x.png",img2x:"./img/images/international-medical-corps-2x.png",width:103,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/images/razom-1x.png",img2x:"./img/images/razom-2x.png",width:82,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/images/action-against-hunger-1x.png",img2x:"./img/images/action-against-hunger-2x.png",width:55,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/images/sergiy-prytula-1x.png",img2x:"./img/images/sergiy-prytula-2x.png",width:115,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/images/medecins-sans-frontieres-1x.png",img2x:"./img/images/medecins-sans-frontieres-2x.png",width:94,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/images/world-vision-1x.png",img2x:"./img/images/world-vision-2x.png",width:85,height:30},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/images/united24-1x.png",img2x:"./img/images/united24-2x.png",width:109,height:10}],h=6;let m=0;function y(g,a){const i=document.createElement("li"),e=document.createElement("a"),t=document.createElement("img"),o=(a+1).toString().padStart(2,"0"),{img:l,img2x:p,width:u,height:w,url:x,title:f}=g;return i.classList.add("list-item"),e.href=x,e.target="_blank",window.devicePixelRatio>1?t.src=p||l:t.src=l,t.style.width=u+"px",t.style.height=w+"px",t.alt=f,e.appendChild(t),i.appendChild(document.createTextNode(o+" ")),i.appendChild(e),i}function d(){const g=m*h,a=g+h;c.innerHTML="";const i=document.createDocumentFragment();for(let e=g;e<a;e++){const t=e%r.length,o=y(r[t],t);i.appendChild(o)}c.appendChild(i)}function k(){m=(m-1+r.length)%r.length,d()}n.addEventListener("click",()=>{s++,s===1?(n.style.transition="transform 0.3s ease",n.style.transform="rotate(270deg)"):s===2?(n.style.transition="transform 0.3s ease",n.style.transform="rotate(90deg)",s=0):s===3&&(n.style.transition="transform 0.3s ease",n.style.transform="rotate(270deg)",s=1),setTimeout(()=>{s===1&&k()},200)});d();
