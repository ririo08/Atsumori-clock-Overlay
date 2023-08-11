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
    default:
      return ''
  }
})

// リンク
const createdLink = computed<string>(() => {
  // const link = 'http://localhost:3000/clock' // 開発用
  const link = 'https://ririo.dev/Atsumori-clock-Overlay/clock'

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
          <p class="max-w-[500px] m-auto text-right">↑実際に動いてます</p>
        </div>
        <div class="mt-3">
          <h3 class="text-2xl font-bold">これは何？</h3>
          <p>これはOBS等の配信ソフト向けのオーバーレイです。</p>
          <p>
            あつまれ
            どうぶつの森のプレイ中、動きを止めていると左下に出てくる時計を再現したものになります。
          </p>
          <p>
            実際の日時に合わせて変動するので、「配信がいつ行われているか」などの利用を想定して作っています。
          </p>
        </div>
        <h2 class="mt-4 text-2xl font-bold">使い方</h2>
        <div class="mt-6">
          <h3 class="text-xl">1.色を選ぶ</h3>
          <div>
            <input class="color-picker" v-model="selectedColor" type="color" />
            <label class="items-center ml-1">カラーコードで指定: </label>
            <input
              type="text"
              v-model="selectedColor"
              class="border-2 rounded border-slate-600 pl-1"
            />
          </div>
          <span
            class="cursor-pointer text-orange-700 font-bold hover:text-orange-500"
            @click="setDefaultColor"
          >
            初期色に戻す
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">2.配置を選ぶ</h3>
          <select
            v-model="selectedPosition"
            class="border-2 rounded border-slate-600 pl-1"
          >
            <option v-for="position of positions" :value="position.value">
              {{ position.name }}
            </option>
          </select>
        </div>
        <div class="mt-6">
          <h3 class="text-xl">3.下記リンクをコピーする</h3>
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
          <h3 class="text-xl">4.OBSに貼り付ける</h3>
        </div>
        <div class="mt-3">
          <p>制作者等リンクは下から（シェアもよろしくね！）</p>
          <ShareButtons />
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
