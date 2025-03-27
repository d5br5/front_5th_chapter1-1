(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const e={localhost:"localhost",deployPath:"/front_5th_chapter1-1",blankPath:"",lsKey:{users:"users",user:"user"},loginForm:{formId:"login-form",field:{username:"username",password:"password"}},profileForm:{formId:"profile-form",field:{username:"username",email:"email",bio:"bio"}},pathname:{main:"/",login:"/login",profile:"/profile"}},y=localStorage.getItem(e.lsKey.users)||"[]",x=JSON.parse(y),w=localStorage.getItem(e.lsKey.user)||"null",I=JSON.parse(w),a={users:x,loggedInUser:I,initUser({username:n}){return{username:n,email:"",bio:""}}},P=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
`,p={template:P,onMount:()=>{}},$=()=>`
    <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,g={template:$,onMount:()=>{}},F=()=>{const n=t=>window.location.pathname===t?"text-blue-600 font-bold":"text-gray-600";return`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="${e.pathname.main}" class="${n(e.pathname.main)}">홈</a></li>
        ${a.loggedInUser?`<li><a href="${e.pathname.profile}" class="${n(e.pathname.profile)}">프로필</a></li>`:""}
        ${a.loggedInUser?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':`<li><a href="${e.pathname.login}" class="text-gray-600">로그인</a></li>`}
      </ul>
    </nav>
  `},c={template:F,onMount:()=>{document.body.querySelector("nav").addEventListener("click",t=>{t.preventDefault();const o=t.target;if(o.id==="logout")a.loggedInUser=null,localStorage.removeItem(e.lsKey.user),window.router.navigate(e.pathname.login);else if(o.tagName==="A"){const l=o.getAttribute("href");window.router.navigate(l)}})}},S=[{username:"황준일",time:"5분 전",content:"여러분 모두 과제 하느라 고생 많으셨습니다!!"},{username:"김도형",time:"15분 전",content:"과제할 것도 많고 공부할 것도 많고.. 흑흑"},{username:"김연수",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{username:"이민기",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{username:"김도은",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"},{username:"한수지",time:"3시간 전",content:"오늘은 무슨 공부를 하고 계신가요? 같이 공부할 사람?"},{username:"서예림",time:"4시간 전",content:"드라마 정주행하느라 밤새고 있어요. 같이 볼 사람?"},{username:"정영훈",time:"6시간 전",content:"요즘 무슨 취미 생활 하고 계신가요? 같이 취미 공유해요!"},{username:"김진관",time:"8시간 전",content:"오늘 날씨 너무 더워요.. 더위 조심하세요!"},{username:"민성윤",time:"11시간 전",content:" 요즘 무슨 책 읽고 계신가요? 같이 책 읽어요!"},{username:"조해나",time:"어제",content:"발제 오프라인 신청이 마감되었습니다 ㅜㅜ"}],E=n=>n.map(t=>`
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">${t.username}</p>
              <p class="text-sm text-gray-500">${t.time}</p>
            </div>
          </div>
          <p>${t.content}</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
    `).join(""),M={template:()=>E(S),onMount:()=>{}},u={template:()=>`
    <form id="${e.profileForm.formId}">
      <div class="mb-4">
        <label for="${e.profileForm.field.username}" class="block text-gray-700 text-sm font-bold mb-2">
          사용자 이름
        </label>
        <input type="text" id="${e.profileForm.field.username}" name="${e.profileForm.field.username}" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label for="${e.profileForm.field.email}" class="block text-gray-700 text-sm font-bold mb-2">
          이메일
        </label>
        <input type="email" id="${e.profileForm.field.email}" name="${e.profileForm.field.email}" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-6">
        <label for="${e.profileForm.field.bio}" class="block text-gray-700 text-sm font-bold mb-2">
          자기소개
        </label>
        <textarea id="${e.profileForm.field.bio}" name="${e.profileForm.field.bio}" rows="4" class="w-full p-2 border rounded"></textarea>
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">
        프로필 업데이트
      </button>
    </form>
  `,onMount:()=>{const n=document.getElementById(e.profileForm.formId);if(!n)return;Object.values(e.profileForm.field).forEach(o=>{var r;const l=n.querySelector(`#${o}`);l.value=((r=a.loggedInUser)==null?void 0:r[o])??""}),n.addEventListener("submit",o=>{o.preventDefault();const l=new FormData(n),r=Object.fromEntries(l),s=a.loggedInUser;if(r.username!==s.username||r.email!==s.email||r.bio!==s.bio){const m={...a.loggedInUser,...r},b=a.users.findIndex(v=>v.username===a.loggedInUser.username);a.users.splice(b,1,m),localStorage.setItem(e.lsKey.users,JSON.stringify(a.users)),a.loggedInUser=m,localStorage.setItem(e.lsKey.user,JSON.stringify(m)),alert("profile 변경 완료")}})}},f={template:()=>`
    <form id="${e.loginForm.formId}">
      <div class="mb-4">
        <input type="text" name="${e.loginForm.field.username}" id="${e.loginForm.field.username}" placeholder="사용자 이름" class="w-full p-2 border rounded">
      </div>
      <div class="mb-6">
        <input type="password" name="${e.loginForm.field.password}" id="${e.loginForm.field.password}" placeholder="비밀번호" class="w-full p-2 border rounded">
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
    </form>
  `,onMount:()=>{const n=document.getElementById(e.loginForm.formId);n&&n.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(n),{username:l}=Object.fromEntries(o);if(!l)return alert("이름을 입력해주세요");const r=a.users.find(s=>s.username===l);if(r)a.loggedInUser=r;else{const s=a.initUser({username:l});a.loggedInUser=s,a.users.push(s),localStorage.setItem(e.lsKey.users,JSON.stringify(a.users))}localStorage.setItem(e.lsKey.user,JSON.stringify(a.loggedInUser)),window.router.navigate(e.pathname.main)})}},U={template:()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p.template()}
        ${c.template()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${M.template()}
          </div>
        </main>
        ${g.template()}
      </div>
    </div>
  `,onMount:()=>{c.onMount()}},L={template:()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="${e.pathname.main}" id="go-home" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `,onMount:()=>{const n=document.getElementById("go-home");n&&n.addEventListener("click",t=>{t.preventDefault(),window.router.navigate("/")})}},O={template:()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        ${f.template()}
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `,onMount:()=>{f.onMount()}},C={template:()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p.template()}
        ${c.template()}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            ${u.template()}
          </div>
        </main>
        ${g.template()}
      </div>
    </div>
  `,onMount:()=>{c.onMount(),u.onMount()}},{pathname:i}=e,N={[i.profile]:{page:C,guard:()=>!!a.loggedInUser,redirect:i.login},[i.login]:{page:O,guard:()=>!a.loggedInUser,redirect:i.main},[i.main]:{page:U},default:{page:L}},j=location.hostname===e.localhost?e.blankPath:e.deployPath;class h{constructor(){if(new.target===h)throw new TypeError("BaseRouter는 상속으로만 사용할 수 있습니다.");this.routes=N,this.container=document.body.querySelector("#root"),this.basePath=j}isLocalhost(){return location.hostname===e.localhost}getGuardCheckedPath(t){const o=this.getRouteFromPathname(t);return o.guard&&!o.guard()?o.redirect:t}getRouteFromPathname(t){return this.routes[t]||this.routes.default}start(){this.addEventListener(),this.checkSafetyAndRender()}render(t){const o=this.getRouteFromPathname(t);this.container.innerHTML=o.page.template(),o.page.onMount()}checkSafetyAndRender(){const t=this.getCurrentPath(),o=this.getGuardCheckedPath(t);o!==t&&this.replaceState(o),this.render(o)}navigate(t){const o=this.getCurrentPath();if(t===o)return;const l=this.getGuardCheckedPath(t);l!==o&&(this.pushState(l),this.render(l))}addEventListener(){throw new Error("addEventListener가 구현되지 않았습니다.")}getCurrentPath(){throw new Error("getCurrentPath가 구현되지 않았습니다.")}replaceState(){throw new Error("replaceState가 구현되지 않았습니다.")}pushState(){throw new Error("pushState가 구현되지 않았습니다.")}}export{h as B};
