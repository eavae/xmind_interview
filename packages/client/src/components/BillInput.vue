<template>
  <form class="main">
    <select v-model="type" class="type">
      <option v-for="billType in BILL_TYPES" :key="billType" :value="billType">
        {{ BILL_TYPE_TO_NAME[billType] }}
      </option>
    </select>
    <input type="number" class="new RMB" placeholder="金额" />
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
  data() {
    return {
      type: BillType.OUTCOME,
    }
  },
  created() {
    this.BILL_TYPES = BILL_TYPES
    this.BILL_TYPE_TO_NAME = BILL_TYPE_TO_NAME
    this.CurrencyType = CurrencyType
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
