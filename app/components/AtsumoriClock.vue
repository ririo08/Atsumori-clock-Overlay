<script lang="ts" setup>
import type { Clock } from '~/types/Clock'

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

const props = withDefaults(defineProps<{
  color: string
  fixedDate?: Date | string | number
}>(), {
  color: '#fafee8',
  fixedDate: undefined,
})

const { createClockString } = useClock()
const now = useNow({ interval: 100 })

const parseFixedDate = (): Date | null => {
  if (
    props.fixedDate === undefined
    || props.fixedDate === null
    || props.fixedDate === ''
  ) {
    return null
  }

  const parsedDate = props.fixedDate instanceof Date
    ? props.fixedDate
    : new Date(props.fixedDate)

  if (Number.isNaN(parsedDate.getTime())) return null

  return parsedDate
}

const currentDateTime = computed<Clock>(() => {
  const date = parseFixedDate() ?? now.value
  return createClockString(date)
})
</script>

<template>
  <div
    class="clock-container"
    :style="{ color: props.color }"
  >
    <div
      id="upper"
      :style="{ borderBottom: `${props.color} 6px solid` }"
    >
      <div id="ampm">
        {{ currentDateTime.ampm }}
      </div>
      <div class="time">
        <div id="hour">
          {{ currentDateTime.hour }}
        </div>
        <div class="coron">
          &#058;
        </div>
        <div id="min">
          {{ currentDateTime.minute }}
        </div>
      </div>
    </div>
    <div class="lower">
      <div class="date">
        <div id="month">
          {{ currentDateTime.month }}
        </div>
        <div class="gatu">
          月
        </div>
        <div id="date">
          {{ currentDateTime.day }}
        </div>
        <div class="niti">
          日
        </div>
      </div>
      <Week :week="currentDateTime.week" />
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
  display: flex;
  border-bottom: #fafee8 6px solid;
  vertical-align: top;
  justify-content: center;
}

.lower {
  display: flex;
  justify-content: center;
  padding-top: 12px;
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
  transform: translateY(4px);
}

.coron {
  font-size: 100px;
  font-weight: bold;
}

.date {
  display: flex;
  vertical-align: top;
  padding-right: 14px;
  letter-spacing: 3px;
}

#month,
#date {
  font-family: 'Dongle', sans-serif;
  font-size: 74px;
  line-height: 60px;
  letter-spacing: 0px;
}

.gatu,
.niti {
  font-family: 'Kosugi Maru', sans-serif;
  font-weight: bolder;
  font-size: 38px;
  line-height: 50px;
}

#month {
  padding-left: 4px;
}

.gatu {
  padding-left: 8px;
}

#date {
  padding-left: 10px;
}

.niti {
  padding-left: 6px;
}
</style>
