<script lang="ts" setup>
import { PositionTypes } from '~/types/PositionTypes'

definePageMeta({
  layout: 'empty',
})

const color = ref<string>('#fafee8')

// パラメータ取得
const colorParams = useRoute().query?.color as string | undefined
const positionName = useRoute().query?.position as PositionTypes | undefined

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
    case PositionTypes.TopLeft:
      return {
        top: '55px',
        bottom: 'default',
        left: '66px',
        right: 'default',
      }
      break
    case PositionTypes.TopRight:
      return {
        top: '55px',
        bottom: 'default',
        left: 'default',
        right: '66px',
      }
      break
    case PositionTypes.BottomLeft:
      return {
        top: 'default',
        bottom: '55px',
        left: '66px',
        right: 'default',
      }
      break
    case PositionTypes.BottomRight:
      return {
        top: 'default',
        bottom: '55px',
        left: 'default',
        right: '66px',
      }
      break
    case PositionTypes.None:
      return {
        top: '6px',
        bottom: 'default',
        left: 'default',
        right: 'default',
      }
      break
    default:
      return {
        top: 'default',
        bottom: '55px',
        left: '66px',
        right: 'default',
      }
      break
  }
})
</script>
<template>
  <div class="container">
    <AtsumoriClock class="clocktarget" :style="position" :color="color" />
  </div>
</template>
<style lang="scss" scoped>
.clocktarget {
  margin: 0;
  position: absolute;
}
</style>
