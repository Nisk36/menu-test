// Firebase 9: https://lupas.medium.com/firebase-9-beta-nuxt-js-981cf3dac910

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
import path, { resolve } from "path";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtJ2EN7_JznLs03fYngKzl0nN6F9-5G9I",
  authDomain: "vuetest-103b3.firebaseapp.com",
  projectId: "vuetest-103b3",
  storageBucket: "vuetest-103b3.appspot.com",
  messagingSenderId: "640887077281",
  appId: "1:640887077281:web:a87322542e2246c1f2f3e0",
};
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// const db = getFirestore();
const storage = getStorage();
const storageRef = ref(storage);


// https://qiita.com/sotszk/items/f23199e864cba47455ce
// `Promise.resolve(/* value */)` は以下と等価
// `new Promise(resolve => resolve(/* value */))`
async function getUrlSync(devName, suffix) {
  return Promise.resolve(getDownloadURL(ref(storage, path.join(devName, devName + suffix))));
}
async function getJsonDataSync(devName, suffix) {
  return getUrlSync(devName, suffix)
    .then(url => (fetch(url).then(res => res.json())));
}


// async, await https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
// async 関数において、返値に関しては暗黙的に Promise.resolve() でラップされる
export default async function loadSlide() {
  listAll(storageRef).then(res => {
      if(process.server) {
          console.log("(debug) SSR");
          return;
      }
      console.log("(debug) CSR");

      const developerNames = res.prefixes.map(dirRef => dirRef.name);
      
      developerNames.forEach(devName => {
          const promises = [
                getUrlSync(devName, "_icon"),
                getJsonDataSync(devName, "_.data.json"),
          ];
          Promise.all(promises).then(
              resolveList => {
                  const [iconUrl,jsonData] = resolveList;

                  console.log("iconUrl");
                  console.log(iconUrl)
                  console.log("jsonData");
                  console.log(jsonData);
                  
                  const parsed = JSON.parse(JSON.stringify(jsonData));

                  //menu
                  console.log("menu作成")
                  console.log(parsed.tags)
                  const menuarea = document.getElementById(parsed.tags)
                  const menu = document.createElement("span");
                  menu.className = "flex items-center p-4 hover:bg-indigo-500 text-white";
                  menu.setAttribute("onclick","isOpen = false");
                  menu.setAttribute("id","menu");
                  
                  const menuE1 = document.createElement("span");
                  menuE1.className = "mr-2";
                  menu.appendChild(menuE1);

                  const menuDevName = document.createElement("span");
                  menuDevName.innerText = parsed.title;
                  menu.appendChild(menuDevName);

                  const menuIcon = document.createElement("img");
                  menuIcon.setAttribute("width","24px")
                  menuIcon.setAttribute("height","24px");
                  menuIcon.className = "w-6 h-6";
                  menuIcon.setAttribute("src",iconUrl);
                  menuE1.appendChild(menuIcon);
                  //現時点で登録されているものはnavbar.vueで指定されているジャンルと違うものがあるのでその場合はエラーが出る
                  menuarea.appendChild(menu);



              }
          )
      })
  })
}