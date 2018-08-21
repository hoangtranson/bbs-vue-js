<template>
  <div class="md-table-pagination">
    <span class="md-table-pagination-label">{{ lable }}</span>

    <md-field>
      <md-select v-model="rowPerPage" md-dense md-class="md-pagination-select" v-on:md-selected="setRowPerPage">
        <md-option v-for="number in listOptions" :key="number" :value="number">{{ number }}</md-option>
      </md-select>
    </md-field>

    <span>{{ currentPage }}/{{ totalPage }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click="goToPrev()" :disabled="currentPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click="goToNext()" :disabled="currentPage === totalPage">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'TablePagination',
    data: () => {
      return {
        rowPerPage: 10,
        currentPage: 1
      }
    },
    props: {
      listOptions: {
        type: Array,
        default: () => [10, 25, 50, 100]
      },
      totalPage : {
        type: Number,
        required: true
      },
      lable: {
        type: String,
        default: 'Rows per page:'
      },
    },
    methods: {
      setRowPerPage: function(e) {
        this.$emit('updateRow', e);
      },
      goToPrev: function() {
        this.currentPage --;
        this.$emit('goPrev');
      },
      goToNext: function() {
        this.currentPage ++;
        this.$emit('goNext');
      }
    }
  }
</script>

<style lang="scss">

  .md-table-pagination {
    height: 56px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid;
    font-size: 12px;

    .md-table-pagination-previous {
      margin-right: 2px;
      margin-left: 18px;
    }

    .md-field {
      width: 48px;
      min-width: 36px;
      margin: -16px 24px 0 32px;

      &:after,
      &:before {
        display: none;
      }

      .md-select-value {
        font-size: 13px;
      }
    }
  }

  .md-menu-content.md-pagination-select {
    max-width: 82px;
    min-width: 56px;
    margin-top: 5px;
  }
</style>
