<template>
  <div class="col-12 p-0" style="background-color: #eee">
    <div class="col-12 row footer m-0 pt-5">
      <div class="col-md-7 col-12 d-flex justify-content-end border-right pb-5">
        <div class="col-lg-4 col-6">
          <div class="text-dark border-bottom pb-1">Contacts</div>
          <div>
            <div class="text-dark my-3">Address: London, UK</div>
            <div class="text-dark my-3">phone: +989126660041</div>
            <div class="text-dark my-3">Deeptreeps@gmail.com</div>
            <div class="text-dark my-3">Deeptreep.service@gmail.com</div>
            <div class="d-flex textorange">
              <i class="fa-brands fa-vimeo-v mx-2 pointer"></i>
              <i class="fa-brands fa-pinterest-p mx-2 pointer"></i>
              <i class="fa-brands fa-linkedin-in mx-2 pointer"></i>
              <i class="fa-brands fa-twitter mx-2 pointer"></i>
              <i class="fa-brands fa-facebook-f mx-2 pointer"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6">
          <div class="row text-dark border-bottom pb-1">
            Categories of tours
          </div>
          <div class="row justify-content-between">
            <nuxt-link
              to="tor?country=africa"
              class="col-3 my-3 mx-1 pic text-center p-0 text-light"
              style="background-image: url('africa.jpg')"
            >
              <div
                class="col-12 h-100 py-3 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.6)"
              >
                Africa
              </div>
            </nuxt-link>
            <nuxt-link
              to="tor?country=asia"
              class="col-3 my-3 mx-1 pic text-center p-0 text-light"
              style="background-image: url('IMG_7416.jpg')"
            >
              <div
                class="col-12 h-100 py-3 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.6)"
              >
                Asia
              </div>
            </nuxt-link>
            <nuxt-link
              to="tor?country=argentina"
              class="col-3 my-3 mx-1 pic text-center p-0 text-light"
              style="background-image: url('IMG_7466.jpg')"
            >
              <div
                class="col-12 h-100 py-3 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.6)"
              >
                Argentina
              </div>
            </nuxt-link>
            <nuxt-link
              to="tor?country=europe"
              class="col-3 my-3 mx-1 pic text-center p-0 text-light"
              style="background-image: url('IMG_7417.jpg')"
            >
              <div
                class="col-12 h-100 py-3 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.6)"
              >
                Europe
              </div>
            </nuxt-link>
            <nuxt-link
              to="tor?country=america"
              class="col-3 my-3 mx-1 pic text-center p-0 text-light"
              style="background-image: url('IMG_7421.jpg')"
            >
              <div
                class="col-12 h-100 py-1 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.6)"
              >
                south America
              </div>
            </nuxt-link>
            <nuxt-link
              to="tor?country=america"
              class="col-3 my-3 mx-1 pic text-center p-0 text-light"
              style="background-image: url('IMG_7427.jpg')"
            >
              <div
                class="col-12 h-100 py-3 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.6)"
              >
                America
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-12 text-dark pb-5">
        <p class="col-lg-6 col-12 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
        </p>
      </div>
    </div>
    <div
      class="col-12 text-center py-3 border-top"
      style="background-color: #eee"
    >
      <p class="text-secondary">All rights reserved by DeepTreep group</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  /* background-color: #161616; */
}
.pic {
  background-size: cover;
}
</style>
