<template>
  <form class="main" @submit.prevent="validate">
    <select v-model="type" class="type">
      <option v-for="billType in BILL_TYPES" :key="billType" :value="billType">
        {{ BILL_TYPE_TO_NAME[billType] }}
      </option>
    </select>
    <input
      v-model="amount"
      type="number"
      class="new RMB"
      placeholder="金额"
      step="0.01"
    />
    <Currency />
  </form>
</template>

<script>
import Currency from './Currency'
import { BILL_TYPES, BILL_TYPE_TO_NAME, BillType, CurrencyType } from '../enums'

export default {
  name: 'BillInput',
  components: {
    Currency,
  },
  emits: ['submit'],
  data() {
    return {
      type: BillType.OUTCOME,
      amount: '',
    }
  },
  created() {
    this.BILL_TYPES = BILL_TYPES
    this.BILL_TYPE_TO_NAME = BILL_TYPE_TO_NAME
    this.CurrencyType = CurrencyType
  },
  methods: {
    validate(e) {
      const amount = Number.parseInt(this.amount * 100, 10)
      if (amount && this.type) {
        this.$emit('submit', {
          type: this.type,
          amount,
        })
        this.amount = ''
        return true
      }
    },
  },
}
</script>

<style scoped>
form.main {
  display: flex;

  font-size: 24px;
  line-height: 1em;

  -webkit-font-smoothing: antialiased;
  border-bottom: 1px solid #e6e6e6;
}

select.type {
  width: 100px;
  padding: 16px 0 16px 16px;
}

input.new {
  flex: 1;
  padding: 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
}

.currency {
  padding: 16px;
}
</style>
