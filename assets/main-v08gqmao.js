(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const e={lsKey:{users:"users",user:"user"},loginForm:{formId:"login-form",field:{username:"username",password:"password"}},profileForm:{formId:"profile-form",field:{username:"username",email:"email",bio:"bio"}},pathname:{main:"/",login:"/login",profile:"/profile"}},u=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
`,f=()=>`
    <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,v=localStorage.getItem(e.lsKey.users)||"[]",w=JSON.parse(v),x=localStorage.getItem(e.lsKey.user)||"null",y=JSON.parse(x),n={users:w,loggedInUser:y,initUser({username:r}){return{username:r,email:"",bio:""}}},I=()=>{const r=t=>window.location.pathname===t?"text-blue-600 font-bold":"text-gray-600";return`
    <ul class="flex justify-around">
      <li><a href="${e.pathname.main}" class="${r(e.pathname.main)}">홈</a></li>
      ${n.loggedInUser?`<li><a href="${e.pathname.profile}" class="${r(e.pathname.profile)}">프로필</a></li>`:""}
      ${n.loggedInUser?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':`<li><a href="${e.pathname.login}" class="text-gray-600">로그인</a></li>`}
    </ul>
`};class g{constructor(t){this.container=t||document.createElement("div")}render(){this.container.innerHTML=I(),this.onMount()}onMount(){this.container.addEventListener("click",a=>{a.preventDefault();const i=a.target;if(i.id==="logout")n.loggedInUser=null,localStorage.removeItem(e.lsKey.user),window.router.navigate(e.pathname.login);else if(i.tagName==="A"){const o=i.getAttribute("href");window.router.navigate(o)}})}}const $=[{username:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{username:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{username:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{username:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{username:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],F=()=>$.map(r=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${r.username}</p>
        <p class="text-sm text-gray-500">${r.time}</p>
      </div>
    </div>
    <p>${r.content}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`).join(""),S=r=>{if(!r)return;r.innerHTML=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u()}
        <nav class="bg-white shadow-md p-2 sticky top-14"></nav>
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${F()}
          </div>
        </main>
        ${f()}
      </div>
    </div>
  `;const t=r.querySelector("nav");new g(t).render()},U=r=>{if(!r)return;r.innerHTML=`
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
  `;const t=document.getElementById("go-home");t&&t.addEventListener("click",a=>{a.preventDefault(),window.router.navigate("/")})};function L(r){if(!r)return;if(n.loggedInUser||(r.innerHTML=`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="${e.loginForm.formId}">
          <div class="mb-4">
            <input type="text" name="${e.loginForm.field.username}" id="${e.loginForm.field.username}" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" name="${e.loginForm.field.password}" id="${e.loginForm.field.password}" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `,n.loggedInUser))return window.router.navigate(e.pathname.main);const t=document.getElementById(e.loginForm.formId);t&&t.addEventListener("submit",a=>{a.preventDefault();const i=new FormData(t),{username:o}=Object.fromEntries(i);if(!o)return alert("이름을 입력해주세요");const s=n.users.find(l=>l.username===o);if(s)n.loggedInUser=s;else{const l=n.initUser({username:o});n.loggedInUser=l,n.users.push(l),localStorage.setItem(e.lsKey.users,JSON.stringify(n.users))}localStorage.setItem(e.lsKey.user,JSON.stringify(n.loggedInUser)),window.router.navigate(e.pathname.main)})}const P=r=>{if(!r)return;if(!n.loggedInUser)return window.router.navigate(e.pathname.login);r.innerHTML=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u()}
        <nav class="bg-white shadow-md p-2 sticky top-14"></nav>
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
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
          </div>
        </main>
        ${f()}
      </div>
    </div>
  `;const t=r.querySelector("nav");new g(t).render();const i=document.getElementById(e.profileForm.formId);if(!i)return;const o=[e.profileForm.field.username,e.profileForm.field.bio,e.profileForm.field.email];for(const s of o){const l=i.querySelector(`#${s}`);l.value=n.loggedInUser[s]??""}i.addEventListener("submit",s=>{s.preventDefault();const l=new FormData(i),d=Object.fromEntries(l),c=n.loggedInUser;if(d.username!==c.username||d.email!==c.email||d.bio!==c.bio){const m={...n.loggedInUser,...d},h=n.users.findIndex(b=>b.username===n.loggedInUser.username);n.users.splice(h,1,m),localStorage.setItem(e.lsKey.users,JSON.stringify(n.users)),n.loggedInUser=m,localStorage.setItem(e.lsKey.user,JSON.stringify(m)),alert("profile 변경 완료")}})},O={[e.pathname.main]:{render:S},[e.pathname.login]:{render:L},[e.pathname.profile]:{render:P},default:{render:U}};class C{constructor(t){this.routes=t,this.container=document.body.querySelector("#root")}getHashPath(){return(window.location.hash||"#/").replace(/^#/,"")||"/"}render(t=this.getHashPath()){(this.routes[t]||this.routes.default).render(this.container)}start(){this.render(),window.addEventListener("hashchange",()=>this.render())}navigate(t){const a=`#${t}`;window.location.hash!==a&&(window.location.hash=a)}}const p=new C(O);window.router=p;p.start();
