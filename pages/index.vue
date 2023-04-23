<script lang="ts" setup></script>
<template>
  <div class="container">
    <h1 class="title">あつまれどうぶつの森の時計風オーバーレイ</h1>
    <div class="header"></div>
    <div class="iframebox">
      <iframe
        class="iframetarget"
        src="https://ririo08.github.io/Atsumori-clock-Overlay/clock"
        frameborder="0"
      ></iframe>
    </div>
    <div class="mainbox">
      <p class="detail">↑実際に動いてます</p>
      <p class="text">
        ▼こちらで色を選択して時計のURLを作成することも可能です！
      </p>
      <input id="color" type="color" />
      <a id="colorResult">指定の色で時計を作成</a>
      <p class="text">
        上記のカラーピッカーで色を選択後に生成されるURLをコピーして利用することができます。
      </p>
      <p class="text">制作者等リンクは下から（シェアもよろしくね！）</p>
    </div>
    <div class="shareBox">
      <a
        href="https://twitter.com/intent/tweet?text=%E3%81%82%E3%81%A4%E3%81%BE%E3%82%8C%E3%81%A9%E3%81%86%E3%81%B6%E3%81%A4%E3%81%AE%E6%A3%AE%E3%81%AE%E6%99%82%E8%A8%88%E9%A2%A8%E3%82%AA%E3%83%BC%E3%83%90%E3%83%BC%E3%83%AC%E3%82%A4%20https%3A%2F%2Fririo.dev%2FAtsumori-clock-Overlay%2F%20"
        class="twitter-share-button"
        target="_blank"
        >Tweet</a
      >
      <a
        class="shareBox-twitter"
        href="https://twitter.com/ririo08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter-square"
          class="shareBox-twitter_svg"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
          ></path>
        </svg>
      </a>
      <a
        class="shareBox-github"
        href="https://github.com/ririo08/Atsumori-clock-Overlay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github-square"
          class="svg-inline--fa fa-github-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
::v-deep(body) {
  background-color: #ede1b8 !important;
  background-image: radial-gradient(#f5ecc9 20%, transparent 20%),
    radial-gradient(#f5ecc9 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}

.container {
  background-color: white;
  max-width: 800px;
  margin: auto;
  border-radius: 100px;
}

.title {
  text-align: center;
  font-weight: bolder;
}

.header {
  padding-top: 80px;
}

.iframebox {
  width: 500px;
  height: 300px;
  margin: auto;
  box-shadow: 2px 2px 4px gray;
}

.iframetarget {
  width: 500px;
  height: 300px;
  box-shadow: inset;
  background-color: black;
}

.mainbox {
  padding-left: 10px;
  padding-right: 5px;
}

.detail {
  padding-right: 150px;
  text-align: right;
}

.text {
  padding-left: 5px;
}

.link {
  font-size: 20px;
  color: #00a63c;
  font-weight: bold;
}

#color {
  width: 100px;
  height: 30px;
  margin-right: 10px;
  font-weight: bold;
}

.shareBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 5px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 30px;
  padding-bottom: 100px;
}

.shareBox-twitterShare {
  display: block;
  height: 40px;
  width: 120px;
  color: blue;
}

.shareBox-twitter {
  display: block;
  width: 40px;
  height: 40px;
  margin-top: -4px;
  margin-left: 10px;
  color: black;
}

.shareBox-github {
  display: block;
  width: 40px;
  height: 40px;
  margin-top: -4px;
  margin-left: 10px;
  color: black;
}

.twitter-share-button {
  margin-top: 6px;
}
</style>
