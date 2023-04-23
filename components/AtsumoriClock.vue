<script lang="ts" setup>
import { dateFns } from '~/utils/date'

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

// パラメータ取得
const colorParams = useRoute().query?.color as string | undefined

const color = ref<string>('')

// 後方互換性
if (colorParams) {
  if (colorParams === 'white' || colorParams === 'black') {
    color.value = colorParams
  } else {
    color.value = '#' + colorParams
  }
}

// 時計ロジック
const now = ref<Date>(new Date())
const ampm = ref<string>()
const hour = ref<string>()
const min = ref<string>()
const month = ref<number>()
const date = ref<number>()
const week = ref<number>()
let minMemory = 0

const clock = () => {
  now.value = new Date()

  //開発時用
  // let sec = now.value.getSeconds()
  // console.log(sec)

  if (minMemory === now.value.getMinutes()) return
  minMemory = now.value.getMinutes()

  hour.value = dateFns.format(now.value, 'hh')
  min.value = dateFns.format(now.value, 'mm')
  month.value = now.value.getMonth() + 1
  date.value = now.value.getDate()
  week.value = now.value.getDay()
  if (parseInt(hour.value) >= 12) {
    ampm.value = 'PM'
    hour.value = (parseInt(hour.value) - 12).toString()
  } else {
    ampm.value = 'AM'
    hour.value = parseInt(hour.value).toString()
  }
}

onMounted(() => {
  clock()
  setInterval(clock, 500)
})
</script>
<template>
  <div class="clock-container" :style="{ color: color }">
    <div id="upper" :style="{ borderBottom: `${color} 6px solid` }">
      <div id="ampm">{{ ampm }}</div>
      <div class="time">
        <div id="hour">{{ hour }}</div>
        <div class="coron">&#058;</div>
        <div id="min">{{ min }}</div>
      </div>
    </div>
    <div class="lower">
      <div class="date">
        <div id="month">{{ month }}</div>
        <div class="gatu">月</div>
        <div id="date">{{ date }}</div>
        <div class="niti">日</div>
      </div>
      <Week :week="week" />
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
  height: 60px;
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

#week {
  width: 73px;
}
</style>
