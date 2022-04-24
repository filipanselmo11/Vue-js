<template>
  <div>
    <!-- Button trigger modal -->
    <div class="justify-center">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#firstModal"
      >
        Launch First Modal
      </button>
      <br />
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#secondModal"
      >
        Launch Second Modal
      </button>
    </div>

    <!-- Modal 1 -->
    <div
      class="modal fade"
      id="firstModal"
      tabindex="-1"
      aria-labelledby="firstModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="firstModalLabel">Personagens do Dota 2</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li>TerrorBlade</li>
              <li>Axe</li>
              <li>Sven</li>
              <li>Lion</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Modal 2-->
    <div
      class="modal fade"
      id="secondModal"
      tabindex="-1"
      aria-labelledby="secondModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="secondModalLabel">Personagens do League of Legends</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li>Katarina</li>
              <li>Draven</li>
              <li>Yasuo</li>
              <li>Irelia</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
