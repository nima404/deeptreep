<template>
  <div>
    <div
      class="col-12 text-light d-flex justify-content-center align-items-end p-0"
      style="height: 300px; background-size: cover"
      :style="{ backgroundImage: `url(${detail.image})` }"
    >
      <div class="d-flex justify-content-between container p-0">
        <h2 class="pb-2 d-flex align-items-end">
          {{ detail.title }}
        </h2>
        <div class="rounded-top bgmain col-4 text-light p-0">
          <div
            class="col-12 text-center py-2"
            style="background-color: #454bff"
          >
            price
          </div>
          <div
            class="col-12 justify-content-center d-flex align-items-center py-5"
          >
            <h4>{{ detail.price }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" style="background-color: #f3f3f3">
      <div class="container row justify-content-between mycard">
        <div class="col-8 row py-5">
          <div class="col-6 my-2">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-calendar-days"></i></span
            ><span>departure date: {{ detail.date.split("T")[0] }}</span>
          </div>
          <div class="col-6 my-2">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>country: {{ detail.country }}</span>
          </div>
          <div class="col-6 my-2">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ detail.city }}</span>
          </div>
          <div class="col-6 my-2">
            <span class="mr-2 textmain"><i class="fa-solid fa-users"></i></span
            ><span> inventory: {{ detail.inventory }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="py-5 col-9">
        <h3 class="col-12 d-flex align-items-center">
          <i class="fa-regular fa-file-lines textorange mr-2"></i>About the
          service
        </h3>
        <p class="my-4 text-muted">
          {{ detail.descriptions }}
        </p>
        <h4 class="my-4">what is expected?</h4>
        <p class="text-muted my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
        <div class="pb-4 border-bottom text-muted">
          <div>
            <i class="fa-regular fa-circle-dot textmain mr-2"></i>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </div>
          <div>
            <i class="fa-regular fa-circle-dot textmain mr-2"></i>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </div>
          <div>
            <i class="fa-regular fa-circle-dot textmain mr-2"></i>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </div>
          <div>
            <i class="fa-regular fa-circle-dot textmain mr-2"></i>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </div>
          <div>
            <i class="fa-regular fa-circle-dot textmain mr-2"></i>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </div>
          <div>
            <i class="fa-regular fa-circle-dot textmain mr-2"></i>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        <h3 class="my-4 pt-4">
          <i class="fa-solid fa-bus textorange mr-2"></i>
          Travel program
        </h3>
        <div class="my-4 p-3" style="background-color: #f3f3f3">
          <span>first day</span>
          <span class="textorange"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</span
          >
        </div>
        <p class="my-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
        <div class="my-4 p-3" style="background-color: #f3f3f3">
          <span>second day</span>
          <span class="textorange"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</span
          >
        </div>
        <p class="my-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
        <div class="my-4 p-3" style="background-color: #f3f3f3">
          <span>third day</span>
          <span class="textorange"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</span
          >
        </div>
        <p class="my-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
        <div class="my-4 p-3" style="background-color: #f3f3f3">
          <span>forth day</span>
          <span class="textorange"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</span
          >
        </div>
        <p class="my-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
        <div class="my-4 p-3" style="background-color: #f3f3f3">
          <span>fifth day</span>
          <span class="textorange"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</span
          >
        </div>
        <p class="my-4 text-muted border-bottom pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
        <h3 class="my-4">
          <i class="fa-regular fa-map textorange"></i>
          map
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3236.6505504453044!2d51.447142015512554!3d35.78395943193802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3f8e043454ace237%3A0x6cf3e803d6546c19!2sTehran%20Province%2C%20Tehran%2C%20Ekhtiyariyeh%2C%20Bahram%2C%20Iran!3m2!1d35.7839551!2d51.4493307!5e0!3m2!1sen!2s!4v1663581051233!5m2!1sen!2s"
          class="col-12 border-bottom pb-5"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h3 class="my-4">
          <i class="fa-regular fa-images textorange mr-2"></i>images
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tor",
  layout: "main",

  data() {
    return {
      index: 1,
    };
  },
  async asyncData({ $axios, params }) {
    const detail = await $axios.get(
      `api/home/service-detail/${params.serviceId}/`
    );
    return {
      detail: detail.data.results[0],
    };
  },
};
</script>

<style scoped>
.active {
  border-bottom: 3px solid #487df5;
  color: black !important;
  font-weight: bold;
}
.active2 {
  background-color: #a3a3a3;
}
.dot {
  width: 15px;
  height: 15px;
  display: inline-block;
  border: 1px solid #a3a3a3;
  border-radius: 50%;
}
.mycard {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
@media only screen and (max-width: 575px) {
  .mycard {
    padding-right: 15px !important;
    paddingleft: 15px !important;
  }
}
</style>
