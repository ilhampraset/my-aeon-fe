<template>

  <!-- top nav -->
  <nav class="navbar navbar-expand-lg">

    <!-- close sidebar -->
    <button @click="toggleSidebar" class="btn py-0 d-lg-none" id="open-sidebar">
      <span class="bi bi-list text-primary h3"></span>
    </button>
    <div class="d-flex flex-nowrap d-lg-none">
      <div class="order-2 p-2"> <img src="https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/82bec838-05c8-4d68-b173-2284a6ad4e52/how-to-stop-being-a-people-pleaser" alt="Logo" class="rounded-circle"></div>
    </div>
    <div class="container-fluid" id="nav-fluid">
      <div class="row justify-content-start">
        <div class="col">
          <span class="name">{{this.$route.name}}</span>
        </div>
       </div>
      <div class="row">
        <div class="col-md-auto">
          <span class="name">Jhone Doe</span>
        </div>
        <div class="col-md-auto">
          <img src="https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/82bec838-05c8-4d68-b173-2284a6ad4e52/how-to-stop-being-a-people-pleaser" alt="Logo" class="rounded-circle">
        </div>
      </div>
    </div>
  </nav>
</template>
<script >
export default {
  props: ['toggleSidebar'],

};
</script>

<style>
.navbar {
  background-color: transparent; /* Set background color to transparent */
}
.rounded-circle {
  width: 40px; /* Width of the logo */
  height: 40px; /* Height of the logo */
  top: 2px; /* Adjust top position */
  left: 1080px; /* Adjust left position */
}

.name {
  width: 109px; /* Width of the name */
  height: 18px; /* Height of the name */
  top: 13px; /* Adjust top position */
  left: 955px; /* Adjust left position */
  font-size: 1.2rem; /* Adjust font size as needed */
  font-weight: bold;
  color: #252733; /* Adjust color as needed */
  margin-right: 10px;
}

</style>

