<template>
  <div class="table-responsive">
				<table class="table" id="article-table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Email</th>
							<th>Updated date</th>
							<th>View Count</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody id="bbs-table-body">
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
					</tbody>
				</table>
				<!-- <div class="pagination">
					<button id="pagination_prev">Prev</button>
					<button id="pagination_next">Next</button>
				</div> -->
			</div>
</template>

<script>
export default {
  name: "BbsTable",
  props: {
    // columns: {
    //   type: Array,
    //   required: true
    // },
    // source: {
    //   type: Array,
    //   required: true
    // }
  },
  methods: {
    onView: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    },
    onEdit: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    },
    onRemove: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    }
  }
};
</script>

<style lang="scss">
</style>
