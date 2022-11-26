<template>
  <div class="col-12 p-0">
    <div
      class="col-12 text-light p-0"
      style="
        background-image: url('IMG_7467.jpg');
        height: 700px;
        background-size: cover;
      "
    >
      <div
        class="h-100 pb-5 pt-3 d-flex justify-content-center align-items-center"
        style="background-color: rgba(0, 0, 0, 0.4)"
      >
        <div class="container d-flex justify-content-center">
          <div
            class="col-12 col-sm-6 rounded p-5"
            style="background-color: rgba(0, 0, 0, 0.4)"
          >
            <h1>Deep treep</h1>
            <h5>
              For the first time in the world, We are delivering hyper-
              personalised travel itineraries that perfectly match your
              interest, style and psychology.
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 text-light p-0">
      <div class="text-center px-1 px-sm-5 pb-5">
        <div class="row pt-5 g-5 no-gutters justify-content-center">
          <div class="col-6 col-sm-5 px-1 mb-4">
            <div class="card" style="background-color: rgba(0, 0, 0, 0.6)">
              <img
                class="card-img-top"
                src="/head-treasure-flower-disk-flowers-inflorescence-ray.webp"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Deep touch</h5>

                <p class="card-text">
                  The Company will offer a Deep Touch feature on its website and
                  application which will provide travellers with personalised
                  travel solutions.
                  <b-collapse id="text-more-1">
                    Our customers(travellers) must fill out a questionnaire in
                    several stages, including – 1: Hartman Questionnaire (which
                    introduces the platform to users' general psychological
                    characteristics) 2: Descriptive questionnaire of 3 of the
                    best trips the user has ever made and the point of
                    difference between those trips 3: Descriptive questionnaire
                    of 3 of the worst trips the user has ever made and the
                    weakness of those trips 4: A visual comparison questionnaire
                    in which the user is asked which one to choose if they only
                    have one of the two options. (This questionnaire will seek
                    the user's better understanding by accurately presenting
                    possible dualities. Dualities: Passage tour or visiting
                    historical sites / urban space or nature space/individual or
                    group entertainment/sports or art / local and healthy food
                    style or fast food / and more than 20 other dual modes) The
                    artificial intelligence on the platform will prepare a
                    report based on the data obtained, allowing them to make
                    more appropriate travel plans based on the customer's needs.
                    Customers will have the flexibility of selecting, rejecting,
                    or modifying the plan designed by the local guides.
                  </b-collapse>
                </p>

                <b-button
                  v-b-toggle.text-more-1
                  class="btn btn-primary w-100 text-light bgorange primary-button"
                  >more</b-button
                >
              </div>
            </div>
          </div>
          <div class="col-6 col-sm-5 px-1 mb-4">
            <div class="card" style="background-color: rgba(0, 0, 0, 0.6)">
              <img
                class="card-img-top"
                src="/head-treasure-flower-disk-flowers-inflorescence-ray.webp"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Companion finder</h5>
                <p class="card-text">
                  Deep Treep will provide its customers with a companion finder
                  feature so that users can meet someone with the same goal and
                  interest.
                  <b-collapse id="text-more-2">
                    The companion finder feature will allow travellers, whether
                    individual travellers or travelling groups (like families),
                    to connect with other travellers having similar travelling
                    tastes and preferences. Meeting with new people having
                    similar travelling preferences will directly impact the
                    customers' travel experiences, thus leading to higher
                    customer satisfaction. When a customer chooses the companion
                    finder option, the app will display the results of the
                    similarity percentage of their personality, experience, time
                    of travel, and location. Both parties will have the option
                    of accepting or rejecting the offer after seeing the
                    results.
                  </b-collapse>
                </p>

                <b-button
                  v-b-toggle.text-more-2
                  class="btn btn-primary w-100 text-light bgorange primary-button"
                  >more</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-12 row m-0 py-4 justify-content-center"
      style="background-color: #eee"
    >
      <div class="container">
        <div class="row no-gutters">
          <div class="col-6 col-lg-3" v-for="n in 8" :key="n">
            <div class="p-1">
              <img
                class="w-100 img-thumbnail"
                src="/head-treasure-flower-disk-flowers-inflorescence-ray.webp"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-12 p-0"
      style="background-image: url('IMG_7427.jpg'); background-size: cover"
    >
      <div
        class="col-12 py-5 row justify-content-center px-3 mx-0"
        style="background-color: rgba(255, 255, 255, 0.5)"
      >
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'English'"
        >
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success p-0 col-3" @click="sCountry">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Arabic'"
        >
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success p-0 col-3" @click="sCountryAR">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Spanish'"
        >
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success p-0 col-3" @click="sCountrySP">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Farsi'"
        >
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success p-0 col-3" @click="sCountryFA">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'German'"
        >
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success p-0 col-3" @click="sCountryGR">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Chines'"
        >
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success p-0 col-3" @click="sCountryCH">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'English'"
        >
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success p-0 col-3" @click="sCity">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Arabic'"
        >
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success p-0 col-3" @click="sCityAR">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Spanish'"
        >
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success p-0 col-3" @click="sCitySP">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Farsi'"
        >
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success p-0 col-3" @click="sCityFA">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'German'"
        >
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success p-0 col-3" @click="sCityGR">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex border rounded mx-2 p-0 col-4"
          v-if="$store.state.lang.lang == 'Chines'"
        >
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success p-0 col-3" @click="sCityCH">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          class="d-flex mx-2 col-12 justify-content-center mt-3"
          v-if="$auth.strategy.token.status().valid() == true"
        >
          <button class="btn col-4 col-sm-3 btn-info mx-1" @click="sScores">
            search
          </button>
          <button class="btn col-4 col-sm-3 btn-info mx-1" @click="sTest">
            by maintest
          </button>
          <button class="btn col-4 col-sm-3 btn-info mx-1" @click="nearMe">
            near me
          </button>
        </div>
        <div
          class="d-flex mx-2 col-4 mt-3"
          v-if="$auth.strategy.token.status().valid() == false"
        >
          <button class="btn col-12 btn-info mx-1" @click="sScores">
            search
          </button>
        </div>
      </div>
      <div
        class="py-5 col-12 d-flex align-items-center justify-content-between px-0"
      >
        <div class="p-5 col-12">
          <div class="d-flex align-items-center col-12 text-light">
            <h3>The most popular tour packages</h3>
            <span class="textorange ml-2 pointer" @click="alltours"
              >/ Show all tours</span
            >
          </div>
          <div class="row justify-content-between col-12 mt-4">
            <div
              class="p-2 col-md-3 col-6"
              v-for="tour in tours.results"
              :key="tour.id"
            >
              <div
                class="my-3 my-md-0 rounded bg-light p-0"
                v-if="$store.state.lang.lang == 'English'"
                style="height: 400px"
              >
                <img
                  :src="tour.image"
                  alt=""
                  class="col-12 h-50 p-0 rounded-top"
                />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {{ tour.country_en + "-" + tour.city_en }}
                  </div>
                  <h4 class="text-info my-2">
                    {{ tour.price + " " + tour.pay_with }}
                  </h4>
                  <div class="my-2">
                    <i
                      class="fa-regular fa-clock-rotate-left text-info mr-2"
                    ></i
                    ><span class="text-muted">{{ tour.duration }} days</span>
                  </div>
                  <nuxt-link
                    :to="`/tor/${tour.id}`"
                    class="btn text-light bgorange"
                    >more</nuxt-link
                  >
                </div>
              </div>
              <div
                class="my-3 my-md-0 rounded bg-light p-0"
                v-if="$store.state.lang.lang == 'Arabic'"
                style="height: 400px"
              >
                <img
                  :src="tour.image"
                  alt=""
                  class="col-12 h-50 p-0 rounded-top"
                />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {{ tour.country_ar + "-" + tour.city_ar }}
                  </div>
                  <h4 class="text-info my-2">
                    {{ tour.price + " " + tour.pay_with }}
                  </h4>
                  <div class="my-2">
                    <i
                      class="fa-regular fa-clock-rotate-left text-info mr-2"
                    ></i
                    ><span class="text-muted">{{ tour.duration }} days</span>
                  </div>
                  <nuxt-link
                    :to="`/tor/${tour.id}`"
                    class="btn text-light bgorange"
                    >more</nuxt-link
                  >
                </div>
              </div>
              <div
                class="my-3 my-md-0 rounded bg-light p-0"
                v-if="$store.state.lang.lang == 'Spanish'"
                style="height: 400px"
              >
                <img
                  :src="tour.image"
                  alt=""
                  class="col-12 h-50 p-0 rounded-top"
                />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {{ tour.country_sp + "-" + tour.city_sp }}
                  </div>
                  <h4 class="text-info my-2">
                    {{ tour.price + " " + tour.pay_with }}
                  </h4>
                  <div class="my-2">
                    <i
                      class="fa-regular fa-clock-rotate-left text-info mr-2"
                    ></i
                    ><span class="text-muted">{{ tour.duration }} days</span>
                  </div>
                  <nuxt-link
                    :to="`/tor/${tour.id}`"
                    class="btn text-light bgorange"
                    >more</nuxt-link
                  >
                </div>
              </div>
              <div
                class="my-3 my-md-0 rounded bg-light p-0"
                v-if="$store.state.lang.lang == 'Farsi'"
                style="height: 400px"
              >
                <img
                  :src="tour.image"
                  alt=""
                  class="col-12 h-50 p-0 rounded-top"
                />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {{ tour.country_fa + "-" + tour.city_fa }}
                  </div>
                  <h4 class="text-info my-2">
                    {{ tour.price + " " + tour.pay_with }}
                  </h4>
                  <div class="my-2">
                    <i
                      class="fa-regular fa-clock-rotate-left text-info mr-2"
                    ></i
                    ><span class="text-muted">{{ tour.duration }} days</span>
                  </div>
                  <nuxt-link
                    :to="`/tor/${tour.id}`"
                    class="btn text-light bgorange"
                    >more</nuxt-link
                  >
                </div>
              </div>
              <div
                class="my-3 my-md-0 rounded bg-light p-0"
                v-if="$store.state.lang.lang == 'German'"
                style="height: 400px"
              >
                <img
                  :src="tour.image"
                  alt=""
                  class="col-12 h-50 p-0 rounded-top"
                />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {{ tour.country_gr + "-" + tour.city_gr }}
                  </div>
                  <h4 class="text-info my-2">
                    {{ tour.price + " " + tour.pay_with }}
                  </h4>
                  <div class="my-2">
                    <i
                      class="fa-regular fa-clock-rotate-left text-info mr-2"
                    ></i
                    ><span class="text-muted">{{ tour.duration }} days</span>
                  </div>
                  <nuxt-link
                    :to="`/tor/${tour.id}`"
                    class="btn text-light bgorange"
                    >more</nuxt-link
                  >
                </div>
              </div>
              <div
                class="my-3 my-md-0 rounded bg-light p-0"
                v-if="$store.state.lang.lang == 'Chines'"
                style="height: 400px"
              >
                <img
                  :src="tour.image"
                  alt=""
                  class="col-12 h-50 p-0 rounded-top"
                />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {{ tour.country_ch + "-" + tour.city_ch }}
                  </div>
                  <h4 class="text-info my-2">
                    {{ tour.price + " " + tour.pay_with }}
                  </h4>
                  <div class="my-2">
                    <i
                      class="fa-regular fa-clock-rotate-left text-info mr-2"
                    ></i
                    ><span class="text-muted">{{ tour.duration }} days</span>
                  </div>
                  <nuxt-link
                    :to="`/tor/${tour.id}`"
                    class="btn text-light bgorange"
                    >more</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="d-flex align-items-center">
        <i class="fa-regular fa-location-dot textmain"></i>
        <h4 class="mx-2">services</h4>
      </div>
      <p class="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
        porta lorem mollis. Morbi tristique senectus et netus. Mattis
        pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et
        molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed
        ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at
        consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
        enim. Velit ut tortor pretium viverra suspendisse potenti nullam.
      </p>
    </div>
    <div class="row m-0 justify-content-center"></div>
    <div class="container py-5 d-flex flex-wrap">
      <div class="col-md-6 col-12">
        <h4 class="bg-gray p-2 rounded px-3 mb-4">
          <i class="fa-sharp fa-solid fa-list textmain mr-2"></i>
          <span class="text-secondary">List of service categories </span>
        </h4>
        <div class="row textorange">
          <div
            class="col-6 my-2"
            v-for="category in categories.results"
            :key="category.id"
          >
            <nuxt-link
              class="border rounded w-100 p-1 d-block text-center category-links"
              :to="`/services?category=${category.name}`"
            >
              {{ category.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <h4 class="bg-gray p-2 rounded px-3 mb-4">
          <i class="fa fa-envelope textmain mr-3"></i>
          <span class="text-secondary"> subscribe to newsletter </span>
        </h4>
        <div class="text-muted my-3">
          Benefit from special member discounts with us
        </div>
        <div class="row col-12 p-0 justify-content-between my-3 ml-1 ml-md-0">
          <input
            type="text"
            class="col-md-7 my-2 my-md-0 col-12 p-2 px-4 input2"
            placeholder="your email address"
            style="background-color: #e3e3e3"
          />
          <div
            class="col-md-4 my-2 my-md-0 col-12 bgorange pointer text-center text-light py-2 input2"
          >
            share
          </div>
        </div>
        <div class="d-flex textorange my-3">
          <i class="fa-brands mx-2 pointer fa-snapchat"></i>
          <i class="fa-brands mx-2 pointer fa-instagram"></i>
          <i class="fa-brands mx-2 pointer fa-twitter"></i>
          <i class="fa-brands mx-2 pointer fa-skype"></i>
          <i class="fa-brands mx-2 pointer fa-pinterest-p"></i>
          <i class="fa-brands mx-2 pointer fa-linkedin-in"></i>
          <i class="fa-brands mx-2 pointer fa-google-plus-g"></i>
          <i class="fa-brands mx-2 pointer fa-flickr"></i>
          <i class="fa-brands mx-2 pointer fa-facebook-f"></i>
          <i class="fa-solid mx-2 pointer fa-envelope"></i>
        </div>
      </div>
    </div>
    <div
      style="background-image: url('IMG_7484.jpg'); background-size: cover"
      class="py-5"
    >
      <div class="container py-5">
        <div class="col-6">
          <h4>
            <span class="text-light mr-2">special discount </span
            ><span class="textorange">10-30%</span>
          </h4>
          <div class="text-light my-3"></div>
          <div class="text-light my-3">
            Special offers with the cheapest prices, discounts on tour
            purchases, hotel reservations, tickets Planes, last minute tours,
            cheap tickets
          </div>
          <button class="btn my-2 text-ceter p-2 px-4 bg-light input2">
            Go on amazing tours
          </button>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="d-flex align-items-center">
        <h4 class="mr-2">
          <i class="fa-regular mr-2 fa-lightbulb textmain"></i>The latest and
          newest articles
        </h4>
        <!-- <span class="textorange"> / Review all articles</span> -->
      </div>
      <div class="d-flex justify-content-between mt-3">
        <img src="IMG_7345.jpg" alt="" class="rounded" style="width: 24%" />
        <img src="IMG_7347.jpg" alt="" class="rounded" style="width: 24%" />
        <img src="IMG_7354.jpg" alt="" class="rounded" style="width: 24%" />
        <img src="IMG_7474.jpg" alt="" class="rounded" style="width: 24%" />
      </div>
    </div>

    <div
      class="px-5 d-flex border-bottom border-top"
      style="background-color: #eee"
    >
      <div class="row w-100">
        <div
          class="col-12 col-sm-4 text-center py-4 px-5 text-secondary d-flex align-items-center"
        >
          we can support :
        </div>
        <div
          class="col-12 col-sm-8 py-4 d-flex"
          style="background-color: rgba(255, 255, 255, 0.5)"
        >
          <div class="d-flex align-items-center mx-3">
            <img
              src="/american-express.png"
              class="img-thumbnail mr-2"
              width="70"
              height="70"
              alt="american express"
            />
            <strong>american express</strong>
          </div>
          <div class="d-flex align-items-center mx-3">
            <img
              src="/master-card.png"
              class="img-thumbnail mr-2"
              width="70"
              height="70"
              alt="master card"
            />
            <strong>master card</strong>
          </div>
          <div class="d-flex align-items-center mx-3">
            <img
              src="/visa-card.png"
              class="img-thumbnail mr-2"
              width="70"
              height="70"
              alt="visa card"
            />
            <strong>visa card</strong>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-5 d-flex border-bottom"
      style="background-color: #eee; border-width: 2px !important"
    >
      <div class="row w-100">
        <div
          class="col-12 col-sm-4 text-center py-4 px-5 text-secondary d-flex align-items-center"
        >
          Why book?
        </div>
        <div
          class="col-12 col-sm-8 py-4 d-flex"
          style="background-color: rgba(255, 255, 255, 0.5)"
        >
          <div class="d-flex mx-3">
            <h4 class="mr-2">
              <i class="fa-solid fa-thumbs-up text-dark"></i>
            </h4>
            <div>
              <div class="text-dark">+40,000 customers</div>
              <div class="text-dark">
                Comfort and satisfaction of passengers
              </div>
            </div>
          </div>
          <div class="d-flex mx-3">
            <h4 class="mr-2"><i class="fa-solid fa-medal text-dark"></i></h4>
            <div>
              <div class="text-dark">Awards won</div>
              <div class="text-dark">Travel tour awards and honors</div>
            </div>
          </div>
          <div class="d-flex mx-3">
            <h4 class="mr-2"><i class="fa-solid fa-lock text-dark"></i></h4>
            <div>
              <div class="text-dark">Secure payment</div>
              <div class="text-dark">Best price guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  layout: "main",
  data() {
    return {
      toursByCity: "",
      toursByCountry: "",
      country: "",
      city: "",
      userInfo: {},
    };
  },
  async mounted() {
    if (this.$auth.strategy.token.status().valid() == true) {
      const userInfo = await this.$axios.get("api/usersmodel/user-info/");
      this.userInfo = userInfo.data.results[0];
    }
  },
  async asyncData({ $axios }) {
    const services = await $axios.$get("/api/home/services/");
    const categories = await $axios.$get("api/home/services-catgories/");
    const tours = await $axios.$get("/api/home/tours/");
    const toursByScores = await $axios.$get("/api/home/tours-by-scores/");
    return {
      services,
      tours,
      categories,
      toursByScores,
    };
  },
  methods: {
    async onSearch() {
      const toursByCity = await $axios.$get(`/api/home/tours-by-city/`);
      const toursByCountry = await $axios.$get(`/api/home/tours-by-country/`);
      this.toursByCity = toursByCity;
      this.toursByCountry = toursByCountry;
    },

    async nearMe() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/en/${this.userInfo.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    async sCountry() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/en/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryAR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/ar/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryCH() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/ch/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryFA() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/fa/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryGR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/gr/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountrySP() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/sp/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCity() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/en/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityAR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/ar/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityCH() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/ch/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityFA() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/fa/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityGR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/gr/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCitySP() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/sp/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sScores() {
      try {
        const res = await this.$axios.get("api/home/tours-by-scores/");
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sTest() {
      try {
        const res = await this.$axios.get("api/home/tours-by-maintest/");
        this.tours = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async alltours() {
      try {
        const res = await this.$axios.$get("/api/home/tours/");
        this.tours = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    push(id) {
      this.$router.push(`/services/${id}`);
    },
  },
};
</script>
<style scoped>
.service {
  width: 20%;
  height: 300px;
  background-size: cover;
}
.input {
  border: none;
  background-color: #6c6c6c;
  color: orange;
}
.input::placeholder {
  color: orange;
}
.input2 {
  border: none;
  border-radius: 50px;
}

.category-links:hover {
  color: orange;
}

.primary-button {
  transition: all 0.3s ease 0s;
  border: 2px solid rgba(238, 238, 238, 0.468);
  box-shadow: 0px 15px 20px rgba(255, 123, 0, 0.185) !important;
}
/* .primary-button:hover {
  transform: translateY(-4px);
} */
@media only screen and (max-width: 768px) {
  .service {
    width: 25%;
  }
}
@media only screen and (max-width: 400px) {
  .service {
    width: 50%;
  }
}
</style>
