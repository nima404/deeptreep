<template>
  <div class="col-12 p-0" style="background-color: #eee">
    <div class="col-12 row footer m-0 pt-5">
      <div class="col-md-7 col-12 d-flex justify-content-end border-md-right pb-5">
        <div class="col-lg-4 col-12">
          <div class="text-dark border-bottom pb-1">Contacts</div>
          <div>
            <div class="text-dark my-3">Address: London, UK</div>
            <div class="text-dark my-3">phone: +989126660041</div>
            <div class="text-dark my-3">Deeptreeps@gmail.com</div>
            <div class="text-dark my-3">Deeptreep.service@gmail.com</div>
            <div class="d-flex textorange">
              <a href="" class="textorange">
                <i class="fa-brands fa-vimeo-v mx-2 pointer"></i>
              </a>
              <a href="https://pin.it/Uvu8GjP" class="textorange">
                <i class="fa-brands fa-pinterest-p mx-2 pointer"></i>
              </a>
              <a href="" class="textorange">
                <i class="fa-brands fa-linkedin-in mx-2 pointer"></i>
              </a>
              <a href="https://twitter.com/@deep_treep" class="textorange">
                <i class="fa-brands fa-twitter mx-2 pointer"></i>
              </a>
              <a href="https://instagram.com/deep_treep" class="textorange">
                <i class="fa-brands fa-instagram mx-2 pointer"></i>
              </a>
              <a href="" class="textorange">
                <i class="fa-brands fa-facebook-f mx-2 pointer"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="row text-dark border-bottom pb-1">
            Categories of tours
          </div>
          <div class="row no-gutters justify-content-start">
            <!-- europe -->
            <nuxt-link to="tor?country=europe" class="col-3 m-1 p-0">
              <div class="card bg-transparent text-center text-dark">
                <img src="/Europe.jpg" class="card-img-top" alt="Europe" />
                <div class="text-truncate" style="font-size: 12px">Europe</div>
              </div>
            </nuxt-link>
            <!-- asia -->
            <nuxt-link to="tor?country=asia" class="col-3 m-1 p-0">
              <div class="card bg-transparent text-center text-dark">
                <img src="/Asia.jpg" class="card-img-top" alt="Asia" />
                <div class="text-truncate" style="font-size: 12px">Asia</div>
              </div>
            </nuxt-link>
            <!-- North America -->
            <nuxt-link to="tor?country=north america" class="col-3 m-1 p-0">
              <div class="card bg-transparent text-center text-dark">
                <img
                  src="/North-America.jpg"
                  class="card-img-top"
                  alt="North America"
                />
                <div class="text-truncate" style="font-size: 12px">
                  North America
                </div>
              </div>
            </nuxt-link>
            <!-- South America -->
            <nuxt-link to="tor?country=europe" class="col-3 m-1 p-0">
              <div class="card bg-transparent text-center text-dark">
                <img
                  src="/south-america.jpg"
                  class="card-img-top"
                  alt="South America"
                />
                <div class="text-truncate" style="font-size: 12px">
                  South America
                </div>
              </div>
            </nuxt-link>
            <!-- Africa -->
            <nuxt-link to="tor?country=africa" class="col-3 m-1 p-0">
              <div class="card bg-transparent text-center text-dark">
                <img src="/Africa.jpg" class="card-img-top" alt="Africa" />
                <div class="text-truncate" style="font-size: 12px">africa</div>
              </div>
            </nuxt-link>
            <!-- Oceania -->
            <nuxt-link to="tor?country=europe" class="col-3 m-1 p-0">
              <div class="card bg-transparent text-center text-dark">
                <img src="/Oceania.jpg" class="card-img-top" alt="Oceania" />
                <div class="text-truncate" style="font-size: 12px">Oceania</div>
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
