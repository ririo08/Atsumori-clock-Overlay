<script lang="ts" setup>
import { PositionTypes } from '~/types/PositionTypes'

// 色
const selectedColor = ref<string>('')
const setDefaultColor = () => {
  selectedColor.value = ''
}

// 配置
const positions = [
  { name: '左上↖', value: PositionTypes.TopLeft },
  { name: '右上↗', value: PositionTypes.TopRight },
  { name: '左下↙', value: PositionTypes.BottomLeft },
  { name: '右下↘', value: PositionTypes.BottomRight },
  { name: 'なし', value: PositionTypes.None },
]
const selectedPosition = ref<string>('bottomLeft')
const enabledPosition = computed(() => {
  switch (selectedPosition.value) {
    case PositionTypes.TopLeft:
      return 'left-6 top-6'
    case PositionTypes.TopRight:
      return 'right-6 top-6'
    case PositionTypes.BottomLeft:
      return 'left-6 bottom-6'
    case PositionTypes.BottomRight:
      return 'right-6 bottom-6'
    case PositionTypes.None:
      return 'top-2'
    default:
      return ''
  }
})

// リンク
const createdLink = computed<string>(() => {
  const isDev = ['true', true].includes(useRuntimeConfig().public.isDev) // 文字列かbooleanか分からんので
  const link = isDev ? 'http://localhost:3000/clock' : 'https://ririo.dev/Atsumori-clock-Overlay/clock'

  const queryParams: string[] = []

  // カラーコード
  const colorCode = selectedColor.value.replace(/#/g, '')
  const colorParam = colorCode !== '' ? `color=${colorCode}` : ''
  if (colorParam !== '') queryParams.push(colorParam)

  // ポジション
  const position = `position=${selectedPosition.value}`
  queryParams.push(position)

  return link + '?' + queryParams.join('&')
})
</script>

<template>
  <div class="font-mono">
    <h1 class="text-4xl py-5 text-center font-extrabold">
      あつまれどうぶつの森の時計風オーバーレイ
    </h1>
    <div class="bg-white max-w-[800px] rounded-3xl m-auto pt-[4rem]">
      <div class="relative max-w-[500px] h-[300px] m-auto bg-black">
        <AtsumoriClock
          class="absolute"
          :class="enabledPosition"
          :color="selectedColor"
        />
      </div>
      <div class="mx-3">
        <div>
          <p class="max-w-[500px] m-auto text-right">
            ↑実際に動いてます
          </p>
        </div>
        <div class="mt-3">
          <h3 class="text-2xl font-bold">
            これは何？
          </h3>
          <p>これはOBS等の配信ソフト向けのオーバーレイです。</p>
          <p>
            あつまれ
            どうぶつの森のプレイ中、動きを止めていると左下に出てくる時計を再現したものになります。
          </p>
          <p>
            実際の日時に合わせて変動するので、「配信がいつ行われているか」などの利用を想定して作っています。
          </p>
        </div>
        <h2 class="mt-4 text-2xl font-bold">
          使い方
        </h2>
        <div class="mt-6">
          <h3 class="text-xl">
            1.色を選ぶ
          </h3>
          <div>
            <input
              v-model="selectedColor"
              class="color-picker"
              type="color"
            >
            <label class="items-center ml-1">カラーコードで指定: </label>
            <input
              v-model="selectedColor"
              type="text"
              class="border-2 rounded border-slate-600 pl-1"
            >
          </div>
          <span
            class="cursor-pointer text-orange-700 font-bold hover:text-orange-500"
            @click="setDefaultColor"
          >
            初期色に戻す
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">
            2.配置を選ぶ
          </h3>
          <select
            v-model="selectedPosition"
            class="border-2 rounded border-slate-600 pl-1"
          >
            <option
              v-for="position of positions"
              :key="position.value"
              :value="position.value"
            >
              {{ position.name }}
            </option>
          </select>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">
            3.下記リンクをコピーする
          </h3>
          <a
            class="text-orange-700 font-bold hover:text-orange-500"
            :href="createdLink"
          >
            あつ森時計オーバーレイリンク, 色:
            {{ selectedColor !== '' ? selectedColor : 'デフォルト' }}, 配置:
            {{ positions.find((w) => w.value === selectedPosition)?.name }}
          </a>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">
            4.OBSに貼り付ける
          </h3>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">
            5.読んでくれたら嬉しい利用規約
          </h3>
          <p class="mt-2">
            このオーバーレイは非商用・商用問わず自由に使っていただいて構いません。
          </p>
          <p>ただし、この制作物そのものの二次配布等はお控えください…！</p>
          <p>
            もし可能でしたら、以下の文章を配信の説明欄等に貼っていただけるととても喜びます。
          </p>
          <pre class="bg-gray-200 p-2 rounded-md border-gray-400 border-solid border-2"><code>あつまれどうぶつの森の時計風オーバーレイ
https://ririo.dev/Atsumori-clock-Overlay/</code></pre>
          <p>
            さらにもしよろしければTwitterやYouTubeのコメント欄等にて使用報告いただけると<span class="font-bold">泣いて喜びます。</span>
          </p>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">
            6.注意事項
          </h3>
          <p class="mt-2">
            このサービスはGithub上に公開されており、サーバーダウン時やそのほかの問題により表示が崩れる・表示されない場合があります。
          </p>
          <p class="mt-2">
            その場合はこのトップページをブラウザから確認していただき、再度リンクの生成をお願いいたします。
          </p>
          <p>
            また、このサービスは非公式であり、任天堂とは一切関係ございません。任天堂に問い合わせを行うのはご遠慮ください。
          </p>
          <p>
            破壊的な変更点等がある場合はこのページにも記載いたしますが、リリース情報をご確認して頂ければと思います。
          </p>
          <p>
            <a
              class="text-orange-700 font-bold hover:text-orange-500"
              href="https://github.com/ririo08/Atsumori-clock-Overlay/releases"
              target="_blank"
            >リリース情報</a>
          </p>
        </div>
        <div class="mt-6">
          <p class="font-bold">
            制作者等リンクは下から（シェアもよろしくね！）
          </p>
          <ShareButtons class="mt-2 pb-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-picker {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
</style>
