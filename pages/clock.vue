<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
})

type Position = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

const color = ref<string>('#fafee8')

// パラメータ取得
const colorParams = useRoute().query?.color as string | undefined
const positionName = useRoute().query?.position as Position | undefined

// 後方互換性
if (colorParams) {
  if (colorParams === 'white' || colorParams === 'black') {
    color.value = colorParams
  } else {
    color.value = '#' + colorParams
  }
}

const position = computed(() => {
  switch (positionName) {
    case 'topLeft':
      return {
        top: '55px',
        bottom: 'default',
        left: '66px',
        right: 'default',
      }
    case 'topRight':
      return {
        top: '55px',
        bottom: 'default',
        left: 'default',
        right: '66px',
      }
    case 'bottomLeft':
      return {
        top: 'default',
        bottom: '55px',
        left: '66px',
        right: 'default',
      }
    case 'bottomRight':
      return {
        top: 'default',
        bottom: '55px',
        left: 'default',
        right: '66px',
      }
    default:
      return {
        top: 'default',
        bottom: '55px',
        left: '66px',
        right: 'default',
      }
  }
})
</script>
<template>
  <div class="container">
    <AtsumoriClock class="clocktarget" :style="position" />
  </div>
</template>
<style lang="scss" scoped>
.clocktarget {
  margin: 0;
  position: absolute;
}
</style>
