<script lang="ts" setup>
import { Clock } from 'types/Clock'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dongle&family=Kosugi+Maru&family=Nunito:wght@700&display=swap',
    },
  ],
})

const props = withDefaults(
  defineProps<{
    color: string
  }>(),
  {
    color: '#fafee8',
  },
)

const { createClockString } = useClock()

// 時計ロジック
const now = ref<Clock>(createClockString(new Date()))
const minMemory = ref<number | null>(null)

const clock = () => {
  const nowForComparison = new Date()

  if (minMemory.value === nowForComparison.getMinutes()) return
  minMemory.value = nowForComparison.getMinutes()

  now.value = createClockString(nowForComparison)
}

onMounted(() => {
  clock()
  setInterval(clock, 200)
})
</script>
<template>
  <div class="clock-container" :style="{ color: color }">
    <div id="upper" :style="{ borderBottom: `${color} 6px solid` }">
      <div id="ampm">{{ now.ampm }}</div>
      <div class="time">
        <div id="hour">{{ now.hour }}</div>
        <div class="coron">&#058;</div>
        <div id="min">{{ now.minute }}</div>
      </div>
    </div>
    <div class="lower">
      <div class="date">
        <div id="month">{{ now.month }}</div>
        <div class="gatu">月</div>
        <div id="date">{{ now.day }}</div>
        <div class="niti">日</div>
      </div>
      <Week :week="now.week" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.clock-container {
  padding-top: 5px;
  color: #fafee8;
  display: inline-block;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.1));
}

#upper {
  height: 77px;
  display: flex;
  padding: 5px;
  border-bottom: #fafee8 6px solid;
  vertical-align: top;
  justify-content: center;
}

.lower {
  display: flex;
  justify-content: center;
  padding-top: 12px;
  height: 60px;
}

#ampm {
  font-family: 'Nunito', sans-serif;
  font-size: 46px;
  font-weight: bolder;
  padding-right: 18px;
}

.time {
  display: flex;
  vertical-align: top;
  font-size: 140px;
  line-height: 60px;
  letter-spacing: 2px;
  font-family: 'Dongle', sans-serif;
}

.date {
  display: flex;
  vertical-align: top;
  padding-right: 20px;
  letter-spacing: 3px;
}

#month,
#date {
  font-family: 'Dongle', sans-serif;
  font-size: 74px;
  line-height: 60px;
}

.gatu,
.niti {
  font-family: 'Kosugi Maru', sans-serif;
  font-weight: bolder;
  font-size: 38px;
  line-height: 50px;
}
</style>
