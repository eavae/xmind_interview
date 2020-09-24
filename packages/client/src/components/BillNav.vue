<template>
  <nav>
    <div class="stats">
      <div class="income">
        <Currency :value="totalIncome" :bill-type="BillType.INCOME" />
      </div>
      <div class="outcome">
        <Currency :value="totalOutcome" :bill-type="BillType.OUTCOME" />
      </div>
    </div>
    <div class="category">
      <select v-model="category" name="category">
        <option value="">所有类别</option>
        <optgroup
          v-for="type in BillType"
          :key="type"
          :label="BILL_TYPE_TO_NAME[type]"
        >
          <option
            v-for="item in filteredCategory(type)"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </optgroup>
      </select>
    </div>
    <div class="date">
      <select v-model="date" name="date">
        <option value="">所有日期</option>
        <option value="2019-11">2019年11月</option>
        <option value="2019-12">2019年12月</option>
      </select>
    </div>
  </nav>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'

import { Category } from '../models'
import Currency from './Currency.vue'
import { BillType, MONTH_TO_NAME, BILL_TYPE_TO_NAME } from '../enums'

export default {
  name: 'BillNav',
  components: {
    Currency,
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    totalIncome: {
      type: Number,
      default: () => 0,
    },
    totalOutcome: {
      type: Number,
      default: () => 0,
    },
  },
  emits: ['update'],
  data() {
    return {
      date: '',
      category: '',
    }
  },
  watch: {
    category(newValue) {
      this.$emit('update', {
        categoryId: newValue,
        date: this.date,
      })
    },
  },
  created() {
    this.MONTH_TO_NAME = MONTH_TO_NAME
    this.BillType = BillType
    this.BILL_TYPE_TO_NAME = BILL_TYPE_TO_NAME
  },
  methods: {
    filteredCategory(type) {
      return this.categories.filter((x) => x.type === type)
    },
  },
}
</script>

<style scoped>
nav {
  display: flex;
  padding: 10px 15px;

  border-bottom: 1px solid #e6e6e6;
}

.stats {
  flex: 2;
  display: flex;
}

.stats > div {
  margin-right: 20px;
}

.category {
  flex: 1;
}

.date {
  flex: 1;
}
</style>
