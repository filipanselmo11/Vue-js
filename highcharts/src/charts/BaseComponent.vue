
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      list: (state) => state.list,
      filter: (state) => state.filter,
    }),

    localList() {
      let lista = this.list;
      if(this.filter !== '') {
          lista = lista.filter(item => item.gender === this.filter)
      }

      return lista;
    }
  },

  watch: {
    list() {
      this.dataSource();
    },

    filter() {
      this.dataSource();
    },
  },
  data:() => ({
    chart: undefined,
  })
};
</script>

<style>
</style>