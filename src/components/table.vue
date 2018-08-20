<template>
  <div class="table-responsive">
				<table class="table table-hover" id="article-table">
					<thead>
						<tr>
							<th v-for="col in columns" v-bind:key="col">{{col}}</th>
						</tr>
					</thead>
					<tbody>
            <tr class="item" v-for="row in source" v-bind:key="row.id" @click="onView(row)">
              <td>{{row.title}}</td>
              <td>{{row.author}}</td>
              <td>{{row.email}}</td>
              <td>{{row.updatedDate}}</td>
              <td>{{row.viewCount}}</td>
            </tr>
					</tbody>
				</table>
			</div>
</template>

<script>

export default {
  name: "BbsTable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    source: {
      type: Array,
      required: true
    }
  },
  methods: {
    onView: function(data) {
      this.$emit("view-data", data);
    }
  }
};
</script>

<style lang="scss">
.table-responsive{
  .item{
    cursor: pointer;
  }
}
</style>
