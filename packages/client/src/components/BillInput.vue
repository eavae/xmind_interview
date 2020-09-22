<template>
  <form class="main">
    <select v-model="type" class="type">
      <option v-for="billType in BILL_TYPES" :key="billType" :value="billType">
        {{ BILL_TYPE_TO_NAME[billType] }}
      </option>
    </select>
    <input type="number" class="new RMB" placeholder="金额" />
    <div class="currency">¥</div>
  </form>
</template>

<script>
import { BILL_TYPES, BILL_TYPE_TO_NAME, BillType } from '../enums'

export default {
  name: 'BillInput',
  data() {
    return {
      type: BillType.OUTCOME,
    }
  },
  created() {
    this.BILL_TYPES = BILL_TYPES
    this.BILL_TYPE_TO_NAME = BILL_TYPE_TO_NAME
  },
}
</script>

<style scoped>
form.main {
  display: flex;

  font-size: 24px;
  line-height: 1em;

  -webkit-font-smoothing: antialiased;
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
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.currency {
  padding: 16px;
}
</style>
