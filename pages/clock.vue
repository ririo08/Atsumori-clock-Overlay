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
        top: '87px',
        bottom: 'default',
        left: '75px',
        right: 'default',
      }
    case PositionTypes.TopRight:
      return {
        top: '87px',
        bottom: 'default',
        left: 'default',
        right: '75px',
      }
    case PositionTypes.BottomLeft:
      return {
        top: 'default',
        bottom: '87px',
        left: '75px',
        right: 'default',
      }
    case PositionTypes.BottomRight:
      return {
        top: 'default',
        bottom: '87px',
        left: 'default',
        right: '75px',
      }
    case PositionTypes.None:
      return {
        top: 'default',
        bottom: 'default',
        left: 'default',
        right: 'default',
      }
    default:
      return {
        top: 'default',
        bottom: '87px',
        left: '75px',
        right: 'default',
      }
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
