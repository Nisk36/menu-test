<template>
  <!-- https://dev.to/fayaz/making-a-navigation-drawer-sliding-sidebar-with-tailwindcss-blueprint-581l -->
  <nav
    class="
      flex
      fixed
      w-full
      items-center
      justify-between
      px-6
      h-16
      bg-black
      text-gray-700
      border-b border-white-200
      z-10
    "
  >
    <div class="flex items-center">
      <button class="mr-4" aria-label="Open menu" @click="drawer">
        <img width="36px" height="36px" src="/logos/header_ham_on.png">
      </button>

      <button
        class="
          flex
          items-cente
          p-3
          font-medium
          mr-2
          text-center
          bg-black-300
          rounded
          hover:bg-black-400
          focus:outline-none focus:bg-black-400
        "
      >
        <img width="36px" height="36px" src="/logos/header_sound_off.png">
      </button>
    </div>
    <img src="/logos/header_logo.png" class="flex items-center h-auto w-24" />
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">

        <!--explain-->
        <button
          class="
            flex
            items-center
            p-3
            font-medium
            mr-2
            text-center
            bg-black-300
            rounded
            hover:bg-black-400
            focus:outline-none focus:bg-black-400
          "
        >
          <img width="36px" hweight="36px" src="/logos/header_explain.png">

        <!--
        <label class="open" for="pop_up_explain">
          <img width="36px" height="36px" src="/logos/header_explain.png">
        </label>
          <input type="checkbox" id="pop_up_explain">
          <div class="overlay_explain">
            <label for="pop_up_explain">
              <div class="window_explain">
                <h2 class="pop_tytle">RVMについて</h2>
                <p>
                  大阪府立大学の部活、コンピュータハウスランダムによるWeb展示企画です。<br>
               今年度は新型コロナウイルスの影響によって、大学祭のオフライン開催が中止になり、<br> 
               部員の創作物の展示の機会が消失したため、Web上で展示する運びとなりました。<br><br>
               全ての作品をフリーでダウンロードでき、<br>
               一部のゲーム作品はオンライン上でプレイすることができます。</p>
                  </div>
                </label>
          </div>-->
        </button>

        <!--warning-->
        <button
          class="
            flex
            items-center
            p-3
            font-medium
            mr-2
            text-center
            bg-black-300
            rounded
            hover:bg-black-400
            focus:outline-none focus:bg-black-400
          "
        >
        <img  width="36px" hweight="36px" class="warning" src="/logos/header_warning.png" alt="warning">
          <!--<label class="open" for="pop_up_warning">
          <img class="warning" src="/logos/header_warning.png" alt="warning">
         </label>
          <input type="checkbox" id="pop_up_warning">
          <div class="overlay_warning">
            <label for="pop_up_warning">
            <div class="window_warning">        
              <h2 class="pop_tytle">注意事項</h2>
		          <p>当WebサイトはBGMが流れます。ミュートにしたい場合は、<br>
                <img src="/logos/header_sound.png" alt="sound_off">をクリックしてください。</p>
	          </div>
            </label> 
          </div>-->
        </button>

        <button
          class="
            flex
            items-center
            p-3
            font-medium
            mr-2
            text-center
            bg-black-300
            rounded
            hover:bg-black-400
            focus:outline-none focus:bg-black-400
          "
        >
        <img  width="36px" hweight="36px" src="/logos/header_evaluation.png">
          <!--<label class="open" for="pop_up_warning">
          <img width="36px" hweight="36px" class="warning" src="/logos/header_warning.png" alt="warning">
         </label>
          <input type="checkbox" id="pop_up_warning">
          <div class="overlay_warning">
            <label for="pop_up_warning">
            <div class="window_warning">        
              <h2 class="pop_tytle">注意事項</h2>
		          <p>当WebサイトはBGMが流れます。ミュートにしたい場合は、<br>
                <img src="/logos/header_sound.png" alt="sound_off">をクリックしてください。</p>
	          </div>
            </label> 
          </div>-->
        </button>
      </div>
    </div>

    <!-- Darken the window -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <!-- sidebar -->
    <aside
      class="
        transform
        top-0
        left-0
        w-64
        bg-black
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
      "
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b"
      >
        <img src="/logos/header_logo.png" alt="Logo" class="h-auto w-32 mx-auto" />
      </span> -->
      <!--素材の画像の最小のheightが61pxであるためheight="61px"にそろえる-->
      <!--GAMES-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 "
        id = "menu"
        >
        <!--<span class="mr-2" id = "menuImg">
          <img width="24px" height="24px" class="w-6 h-6" src = "https://plus1world.com/wp-content/uploads/2011/12/twitter-wadai-photo-0003.png"> 
        </span>-->
        <span>
          <img src="/sidebar/menu_games.png" height="61px">
          </span></span
      >
      <!--Iluustration-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_illust.png" height="61px">
          </span></span
      >

      <!--DESKTOP MUSIC-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_DTM.png" height="61px">
          </span></span
      >

      <!--ACTION-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_action.png" width = "400px" height="61px">
          </span></span
      >

      <div id="ACTION">
        <!--ここにAction-->
        </div>

      <!--SHOOTING-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_shooting.png" height="61px">
          </span></span
      >

      <div id="SHOOTING">
        <!--ここにShooting>-->
        </div>

      <!--ROLE PLAYING-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_RPG.png" height="61px">
          </span></span
      >
      <div id="RPG">

       </div>


      <!--SIMULATION-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_simulation.png" height="61px">
          </span></span
      >
      <div id="SIMULATION">
        </div>

      <!--PAZZLE-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_pazzle.png" height="61px">
          </span></span
      >
      <div id="PAZZLE">
        </div>

      <!--TABLE-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_table.png" height="61px">
          </span></span
      >

      <div id="TABLE">
        </div>

      <!--ETCETERA-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_etc.png" height="61px">
          </span></span
      >

      <div id="ETCETERA">
        </div>

      <!--ILLUSTRATION-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_illust.png" height="61px">
          </span></span
      >

      <div id="ILLUSTRATION">
        </div>

      <!--DESKTOP MUSIC-->
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        >
        <span>
          <img src="/sidebar/menu_DTM.png" height="61px">
          </span></span
      >

      <div id="DESKTOP MUSIC">
        </div>

      <div id="menuarea">
        <!--ここにメニュー生成>
        <span
          @click="isOpen = false"
          class="flex items-items-center p-4 hover:bg-indigo-500 hover:text-white"
          >
          <span>aaa</span></span
          >-->
      </div>
      <!--
      <div class="fixed bottom-0 w-full">
        <a
          rel="noopener"
          class="
            flex
            items-center
            p-4
            text-white
            bg-blue-500
            hover:bg-blue-600
            w-full
          "
          href="https://twitter.com/intent/tweet?text=RVW&url=https://ch-random.net"
          target="_blank"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 mr-2"
          >
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          <span>Share</span>
        </a>
        <a
          rel="noopener"
          class="
            flex
            items-center
            p-4
            bg-orange-600
            hover:bg-orange-700
            focus:outline-none focus:bg-orange-400
            text-white
          "
          href="https://ch-random.net"
          target="_blank"
        >
          <img class="h-8 w-auto mr-2" src="/sidebar/chr.png" />
          <div>
            <span class="font-bold">Home Page</span>
            <br />
            <span class="text-sm text-white mr-3">Computer House Random</span>
          </div>
        </a>
      </div>-->
    </aside>
  </nav>
</template>

<<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      console.log("drawer");
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (ev) => {
      if (ev.key == "Esc") this.isOpen = false;
    });
  },
};
</script>
<!--
<style>
/*ポップアップ*/
.open {
	cursor:pointer; 
}

.pop_tytle{
	position: absolute;
	top: 2%;
}
/* 説明*/


#pop_up_explain {
	display: none; 
}

.overlay_explain {
	display: none; 
}

#pop_up_explain:checked + .overlay_explain {
	display: block;
	z-index: 9999;
	background-color: #00000070;
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
}
.window_explain {
	width: 930px;
	height: 470px;
	background-color: black;
	color: white;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor:pointer;
	/*ネオンサイン*/
	--blur: 1.75rem;
	--box-blur: calc(0.5 * var(--blur));
	--glow: var(--color);
	--size: 12rem;
	border: 4px solid currentColor;
	box-shadow: 
	  /* --- "glass" tube --- */
	  /* inside */ inset 0 0 0 2px rgba(0, 0, 0, 0.15),
	  /* outside */      0 0 0 2px rgba(0, 0, 0, 0.15),
	  /* --- glow --- */
	  /* inside */ inset 0 0 var(--box-blur) var(--glow),
	  /* outside */      0 0 var(--box-blur) var(--glow);
	  border-color: var(--color, white);
	  --color:  #00FFFF; filter: saturate(175%); 
}
/* warning */


.open_warning {
	cursor:pointer; 
}

#pop_up_warning {
	display: none; 
}

.overlay_warning {
	display: none; 
}

#pop_up_warning:checked + .overlay_warning {
	display: block;
	z-index: 9999;
	background-color: #00000070;
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
}

.window_warning {
	width: 930px;
	height: 470px;
	background-color: black;
	color: white;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor:pointer;
	/*ネオンサイン*/
	--blur: 1.75rem;
	--box-blur: calc(0.5 * var(--blur));
	--glow: var(--color);
	--size: 12rem;
	border: 4px solid currentColor;
	box-shadow: 
	  /* --- "glass" tube --- */
	  /* inside */ inset 0 0 0 2px rgba(0, 0, 0, 0.15),
	  /* outside */      0 0 0 2px rgba(0, 0, 0, 0.15),
	  /* --- glow FFFF00FFFF00
	  /* inside */ inset 0 0 var(--box-blur) var(--glow),
	  /* outside */      0 0 var(--box-blur) var(--glow);
	  border-color: var(--color, white);
	--color:  #FFFF00; filter: brightness(90%); 
}

.window_warning img{
	width:25px;
	height:25px; 
	vertical-align: middle; 
}

/*アンケート*/
.evaluation{
    position: absolute;
    top: 0%;
    right: 0%; 
    cursor: pointer;
	height:60%;
	width: auto;
}

.open_evaluation {
	cursor:pointer; 
}

#pop_up_evaluation {
	display: none; 
}

.overlay_evaluation {
	display: none; 
}

#pop_up_evaluation:checked + .overlay_evaluation {
	display: block;
	z-index: 9999;
	background-color: #00000070;
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
}

.window_evaluation {
	width: 930px;
	height: 470px;
	background-color: black;
	color: white;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor:pointer;
	/*ネオンサイン*/
	--blur: 1.75rem;
	--box-blur: calc(0.5 * var(--blur));
	--glow: var(--color);
	--size: 12rem;
	border: 4px solid currentColor;
	box-shadow: 
	  /* --- "glass" tube --- */
	  /* inside */ inset 0 0 0 2px rgba(0, 0, 0, 0.15),
	  /* outside */      0 0 0 2px rgba(0, 0, 0, 0.15),
	  /* --- glow FFFF00FFFF00
	  /* inside */ inset 0 0 var(--box-blur) var(--glow),
	  /* outside */      0 0 var(--box-blur) var(--glow);
	  border-color: var(--color, white);
	  --color:  #00FF00; filter: brightness(90%); 	
}
</style>-->