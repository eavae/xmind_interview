<template>
  <div class="currency">
    {{ billType === BillType.INCOME ? '收入' : '' }}
    {{ billType === BillType.OUTCOME ? '支出' : '' }}
    <span v-if="typeof billType === 'string'" :class="numberStyle">{{
      formattedValue
    }}</span>
    <span class="symbol">{{ CURRENCY_TYPE_TO_SYMBOL[currencyType] }}</span>
  </div>
</template>

<script>
import { BillType, CurrencyType, CURRENCY_TYPE_TO_SYMBOL } from '../enums'

export default {
  name: 'Currency',
  props: {
    billType: {
      type: String,
      default: undefined,
    },
    currencyType: {
      default: CurrencyType.RMB,
      type: String,
    },
    value: {
      default: undefined,
      type: Number,
    },
  },
  computed: {
    formattedValue() {
      if (typeof this.billType !== 'string') {
        return undefined
      }

      const toFixedValue = (this.value / 100).toFixed(2)
      if (this.billType === BillType.INCOME) {
        return `${this.value >= 0 ? '+' : '-'} ${toFixedValue}`
      }
      return toFixedValue
    },
    numberStyle() {
      return [
        this.billType.toLowerCase(),
        this.value >= 0 ? 'positive' : 'negtive',
      ]
    },
  },
  created() {
    this.CURRENCY_TYPE_TO_SYMBOL = CURRENCY_TYPE_TO_SYMBOL
    this.BillType = BillType
  },
}
</script>

<style scoped>
.symbol {
  margin-left: 4px;
}

.income,
.outcome {
  font-weight: 400;
}

.income.positive {
  color: #c10;
}

.income.negtive {
  color: #383;
}
</style>
