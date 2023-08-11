<script lang="ts" setup>
const selectedColor = ref<string>('')
const setDefaultColor = () => {
  selectedColor.value = '#fafee8'
}
</script>
<template>
  <div class="font-mono">
    <h1 class="text-4xl py-5 text-center font-extrabold">
      あつまれどうぶつの森の時計風オーバーレイ
    </h1>
    <div class="bg-white max-w-[800px] rounded-3xl m-auto pt-[4rem]">
      <div
        class="relative max-w-[500px] h-[300px] m-auto bg-black flex items-end"
      >
        <AtsumoriClock
          class="absolute left-6 bottom-6"
          :color="selectedColor"
        />
      </div>
      <div class="mx-3">
        <div>
          <p class="max-w-[500px] m-auto text-right">↑実際に動いてます</p>
          <h2 class="text-2xl font-bold">使い方</h2>
        </div>
        <div class="mt-3">
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
