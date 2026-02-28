<script setup lang="ts">
import { PositionTypes } from '~/types/PositionTypes'

definePageMeta({
  layout: 'empty',
})

const fallbackImageFile = '202601200051.png'
const route = useRoute()
const { createPositionStyle } = usePosition()

const getQueryString = (value: string | string[] | undefined): string | undefined => {
  if (!value) return undefined
  return Array.isArray(value) ? value[0] : value
}

const normalizeFileName = (value: string | undefined): string => {
  if (!value) return fallbackImageFile

  const sanitized = value.replace(/[^0-9a-zA-Z._-]/g, '')
  if (!sanitized) return fallbackImageFile

  return sanitized
}

const imageFile = computed(() => normalizeFileName(getQueryString(route.query.file as string | string[] | undefined)))
const imageUrl = computed(() => `/img/comparisons/${imageFile.value}`)

const fixedDate = computed(() => {
  const matched = imageFile.value.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/)
  if (!matched) return undefined

  const year = Number(matched[1])
  const month = Number(matched[2])
  const day = Number(matched[3])
  const hour = Number(matched[4])
  const minute = Number(matched[5])

  const date = new Date(year, month - 1, day, hour, minute, 0, 0)
  if (
    date.getFullYear() !== year
    || date.getMonth() + 1 !== month
    || date.getDate() !== day
    || date.getHours() !== hour
    || date.getMinutes() !== minute
  ) {
    return undefined
  }

  return date
})

const color = computed(() => {
  const rawColor = getQueryString(route.query.color as string | string[] | undefined)
  if (!rawColor) return '#fafee8'

  if (rawColor === 'white' || rawColor === 'black') return rawColor

  const normalized = rawColor.startsWith('#') ? rawColor.slice(1) : rawColor
  if (/^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(normalized)) return `#${normalized}`

  return '#fafee8'
})

const fixedDateLabel = computed(() => {
  if (!fixedDate.value) return 'ファイル名から時刻を取得できません'

  const year = fixedDate.value.getFullYear()
  const month = String(fixedDate.value.getMonth() + 1).padStart(2, '0')
  const day = String(fixedDate.value.getDate()).padStart(2, '0')
  const hour = String(fixedDate.value.getHours()).padStart(2, '0')
  const minute = String(fixedDate.value.getMinutes()).padStart(2, '0')

  return `${year}/${month}/${day} ${hour}:${minute}`
})

const position = computed(() => createPositionStyle(PositionTypes.BottomLeft))
</script>

<template>
  <main class="compare-page">
    <div class="controls">
      <p class="meta">
        file: {{ imageFile }} / time: {{ fixedDateLabel }}
      </p>
    </div>

    <div class="stage">
      <img
        class="comparison-image"
        :src="imageUrl"
        :alt="`comparison-${imageFile}`"
      >
      <AtsumoriClock
        class="clock-overlay"
        :style="position"
        :color="color"
        :fixed-date="fixedDate"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.compare-page {
  min-height: 100vh;
  padding: 24px;
  background: #eaf3de;
  color: #2f3a28;
}

.controls {
  margin-bottom: 16px;
}

.meta {
  margin: 0 0 16px;
  font-family: monospace;
  font-size: 14px;
}

.stage {
  position: relative;
  display: inline-block;
}

.comparison-image {
  display: block;
  max-width: none;
  height: auto;
}

.clock-overlay {
  position: absolute;
  margin: 0;
  pointer-events: none;
}
</style>
