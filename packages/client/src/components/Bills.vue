<template>
  <div class="main">
    <ol class="wrapper">
      <li v-for="bill in bills" :key="bill.id" class="item">
        <Currency class="stats" :value="bill.amount" :bill-type="bill.type" />
        <div class="category">{{ bill.category.name }}</div>
        <div class="date">{{ formatDate(bill.time) }}</div>
      </li>
    </ol>
    <div class="footer">
      <span class="count">{{ totalCount - bills.length }} items left</span>
      <div class="operations">
        <button v-if="hasMore" @click="$emit('load-more')">加载更多</button>
        <div v-else>暂无更多</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, PropType } from 'vue'
import { Bill } from '@/models'

import Currency from './Currency.vue'

export default {
  name: 'Bills',
  components: {
    Currency,
  },
  props: {
    bills: {
      type: Array as PropType<Bill[]>,
      default: [],
    },
    totalCount: {
      type: Number as PropType<number>,
      default: 0,
    },
    hasMore: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  emits: ['load-more'],
  methods: {
    formatDate(value: number) {
      return new Date(value).toLocaleDateString()
    },
  },
}
</script>

<style scoped>
ol.wrapper {
  margin: 0;
  padding: 0;
}

li.item {
  display: flex;

  padding: 10px 15px;
  border-bottom: 1px solid #e6e6ee;
}

.stats {
  flex: 2;
}

.category {
  flex: 1;
}

.date {
  flex: 1;
}

.footer {
  position: relative;
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
}

.footer::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.count {
  float: left;
}

.operations {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  font-weight: 300;
}

.operations button {
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.2);
  border-radius: 3px;
  transition: border-color 0.4s;

  background: #fff;
  font-weight: inherit;
}

.operations button:focus {
  outline: none;
}

.operations button:hover {
  cursor: pointer;
  border-color: rgba(175, 47, 47, 0.4);
}
</style>
