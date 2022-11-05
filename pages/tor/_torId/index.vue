<template>
  <div>
    <div
      class="col-12 text-light d-flex justify-content-center align-items-end p-0"
      style="height: 300px; background-size: cover"
      :style="{ backgroundImage: tourDetail.image }"
    >
      <div class="d-flex justify-content-between container p-0">
        <h2
          class="pb-2 d-flex align-items-end"
          v-if="$store.state.lang.lang == 'English'"
        >
          {{ tourDetail.country_en + "-" + tourDetail.city_en }}
        </h2>
        <h2
          class="pb-2 d-flex align-items-end"
          v-if="$store.state.lang.lang == 'Arabic'"
        >
          {{ tourDetail.country_ar + "-" + tourDetail.city_ar }}
        </h2>
        <h2
          class="pb-2 d-flex align-items-end"
          v-if="$store.state.lang.lang == 'Spanish'"
        >
          {{ tourDetail.country_sp + "-" + tourDetail.city_sp }}
        </h2>
        <h2
          class="pb-2 d-flex align-items-end"
          v-if="$store.state.lang.lang == 'Farsi'"
        >
          {{ tourDetail.country_fa + "-" + tourDetail.city_fa }}
        </h2>
        <h2
          class="pb-2 d-flex align-items-end"
          v-if="$store.state.lang.lang == 'German'"
        >
          {{ tourDetail.country_gr + "-" + tourDetail.city_gr }}
        </h2>
        <h2
          class="pb-2 d-flex align-items-end"
          v-if="$store.state.lang.lang == 'Chines'"
        >
          {{ tourDetail.country_ch + "-" + tourDetail.city_ch }}
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
            <h4>{{ tourDetail.price + " " + tourDetail.pay_with }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" style="background-color: #f3f3f3">
      <div class="container row justify-content-between mycard">
        <div class="col-md-8 col-12 row py-5">
          <div class="col-6 my-2">
            <span class="mr-2 textmain"><i class="fa-solid fa-clock"></i></span
            ><span>{{ tourDetail.duration + " " + "day" }}</span>
          </div>
          <div class="col-6 my-2">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-calendar-days"></i></span
            ><span>departure date: {{ tourDetail.departureـdate }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'English'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>transportation: {{ tourDetail.transportation_en }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'English'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ tourDetail.city_en }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Arabic'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>transportation: {{ tourDetail.transportation_ar }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Arabic'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ tourDetail.city_ar }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Spanish'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>transportation: {{ tourDetail.transportation_sp }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Spanish'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ tourDetail.city_sp }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Farsi'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>transportation: {{ tourDetail.transportation_fa }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Farsi'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ tourDetail.city_fa }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'German'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>transportation: {{ tourDetail.transportation_gr }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'German'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ tourDetail.city_gr }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Chines'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-departure"></i></span
            ><span>transportation: {{ tourDetail.transportation_ch }}</span>
          </div>
          <div class="col-6 my-2" v-if="$store.state.lang.lang == 'Chines'">
            <span class="mr-2 textmain"
              ><i class="fa-solid fa-plane-arrival"></i></span
            ><span>city: {{ tourDetail.city_ch }}</span>
          </div>
          <div class="col-6 my-2">
            <span class="mr-2 textmain"><i class="fa-solid fa-user"></i></span
            ><span>Minimum age: +10</span>
          </div>
          <div class="col-6 my-2">
            <span class="mr-2 textmain"><i class="fa-solid fa-users"></i></span
            ><span> capacity: {{ tourDetail.capacity }}</span>
          </div>
        </div>
        <!-- <div
          class="col-4 bg-light p-0"
          style="box-shadow: 0px 5px 15px gray; height: 80px"
        >
          <div class="col-12 p-4 text-muted border-bottom bg-light">
            This tour is not available yet.
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div class="col-12" style="background-color: #e3e3e3">
      <div class="d-flex container">
        <div
          class="p-4 text-muted pointer"
          @click="index = 1"
          :class="{ active: index == 1 }"
        >
          the details
        </div>
        <div
          class="p-4 text-muted pointer"
          @click="index = 2"
          :class="{ active: index == 2 }"
        >
          Travel program
        </div>
        <div
          class="p-4 text-muted pointer"
          @click="index = 3"
          :class="{ active: index == 3 }"
        >
          Map
        </div>
        <div
          class="p-4 text-muted pointer"
          @click="index = 4"
          :class="{ active: index == 4 }"
        >
          pictures
        </div>
        <div
          class="p-4 text-muted pointer"
          @click="index = 5"
          :class="{ active: index == 5 }"
        >
          Overview
        </div>
      </div>
    </div> -->
    <div class="container">
      <div class="py-5 col-md-9 col-12">
        <h3 class="col-12 d-flex align-items-center">
          <i class="fa-regular fa-file-lines textorange mr-2"></i>About the tour
        </h3>
        <p class="my-4 text-muted" v-if="$store.state.lang.lang == 'English'">
          {{ tourDetail.descriptions_en }}
        </p>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'English'"
        >
          <div class="col-6">required documents:</div>
          <div class="col-6 text-muted">
            {{ tourDetail.required_documents_en }}
          </div>
        </div>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'English'"
        >
          <div class="col-6">services:</div>
          <div class="col-6 text-muted">{{ tourDetail.services_en }}</div>
        </div>
        <p class="my-4 text-muted" v-if="$store.state.lang.lang == 'Arabic'">
          {{ tourDetail.descriptions_ar }}
        </p>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Arabic'"
        >
          <div class="col-6">required documents:</div>
          <div class="col-6 text-muted">
            {{ tourDetail.required_documents_ar }}
          </div>
        </div>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Arabic'"
        >
          <div class="col-6">services:</div>
          <div class="col-6 text-muted">{{ tourDetail.services_ar }}</div>
        </div>
        <p class="my-4 text-muted" v-if="$store.state.lang.lang == 'Spanish'">
          {{ tourDetail.descriptions_sp }}
        </p>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Spanish'"
        >
          <div class="col-6">required documents:</div>
          <div class="col-6 text-muted">
            {{ tourDetail.required_documents_sp }}
          </div>
        </div>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Spanish'"
        >
          <div class="col-6">services:</div>
          <div class="col-6 text-muted">{{ tourDetail.services_sp }}</div>
        </div>
        <p class="my-4 text-muted" v-if="$store.state.lang.lang == 'Farsi'">
          {{ tourDetail.descriptions_fa }}
        </p>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Farsi'"
        >
          <div class="col-6">required documents:</div>
          <div class="col-6 text-muted">
            {{ tourDetail.required_documents_fa }}
          </div>
        </div>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Farsi'"
        >
          <div class="col-6">services:</div>
          <div class="col-6 text-muted">{{ tourDetail.services_fa }}</div>
        </div>
        <p class="my-4 text-muted" v-if="$store.state.lang.lang == 'German'">
          {{ tourDetail.descriptions_gr }}
        </p>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'German'"
        >
          <div class="col-6">required documents:</div>
          <div class="col-6 text-muted">
            {{ tourDetail.required_documents_gr }}
          </div>
        </div>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'German'"
        >
          <div class="col-6">services:</div>
          <div class="col-6 text-muted">{{ tourDetail.services_gr }}</div>
        </div>
        <p class="my-4 text-muted" v-if="$store.state.lang.lang == 'Chines'">
          {{ tourDetail.descriptions_ch }}
        </p>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Chines'"
        >
          <div class="col-6">required documents:</div>
          <div class="col-6 text-muted">
            {{ tourDetail.required_documents_ch }}
          </div>
        </div>
        <div
          class="col-12 border-top py-3 px-0 d-flex"
          v-if="$store.state.lang.lang == 'Chines'"
        >
          <div class="col-6">services:</div>
          <div class="col-6 text-muted">{{ tourDetail.services_ch }}</div>
        </div>
        <div class="col-12 border-top py-3">
          <div class="col-12 px-0">Leaders:</div>
          <div
            class="col-12"
            v-for="(leader, index) in tourDetail.leaders"
            :key="leader.id"
          >
            leader {{ index + 1 }} id: {{ leader }}
          </div>
        </div>
        <div class="col-12 border-top py-3 px-0">
          <div class="col-12">scores:</div>
          <div class="col-12 text-muted">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>date</th>
                  <th>score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(score, index) in scores" :key="score.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ score.date.split("T")[0] }}</td>
                  <td>{{ score.score }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div class="col-12 border-top py-3 px-0 d-flex">
          <div class="col-6">قیمت شامل نمیشود</div>
          <div class="col-6 text-muted">
            <div class="col-12 p-0">
              <span class="mr-2"><i class="fa-solid fa-xmark"></i></span
              ><span
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span
              >
            </div>
            <div class="col-12 p-0">
              <span class="mr-2"><i class="fa-solid fa-xmark"></i></span
              ><span
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span
              >
            </div>
            <div class="col-12 p-0">
              <span class="mr-2"><i class="fa-solid fa-xmark"></i></span
              ><span
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span
              >
            </div>
            <div class="col-12 p-0">
              <span class="mr-2"><i class="fa-solid fa-xmark"></i></span
              ><span
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span
              >
            </div>
          </div>
        </div>
        <div class="col-12 border-top border-bottom py-3 px-0 d-flex">
          <div class="col-6">موارد تکمیلی</div>
          <div class="col-6 text-muted">
            <div class="col-12 p-0">
              <span class="textmain mr-2"
                ><i class="fa-solid fa-check"></i></span
              ><span>چتر</span>
            </div>
            <div class="col-12 p-0">
              <span class="textmain mr-2"
                ><i class="fa-solid fa-check"></i></span
              ><span>کرم ضد آفتاب</span>
            </div>
            <div class="col-12 p-0">
              <span class="textmain mr-2"
                ><i class="fa-solid fa-check"></i></span
              ><span>تی شرت</span>
            </div>
            <div class="col-12 p-0">
              <span class="textmain mr-2"
                ><i class="fa-solid fa-check"></i></span
              ><span>هزینه های ورودی</span>
            </div>
          </div>
        </div> -->
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
        <div class="row">
          <img :src="pictures.image" alt="" class="col-3 p-2" />
        </div>
        <!-- <h3 class="my-4">تور های مشابه</h3>
        <div class="row justify-content-between my-4">
          <div class="col-5 my-3 my-md-0 rounded p-0 shadow cardPic">
            <img src="/city1.jfif" alt="" class="col-12 h-50 p-0 rounded-top" />
            <div class="p-3">
              <div class="d-flex justify-content-between mb-2">
                <span>آفریقا-سفری شگفت انگیز آفریقایی</span>
              </div>
              <h4 class="text-info my-2">3,500 از تومان</h4>
              <div class="mt-2">
                <i
                  class="fa fa-star textorange mx-1"
                  v-for="i in 5"
                  :key="i"
                ></i>
                <span class="text-muted">(2بررسی)</span>
              </div>
            </div>
          </div>

          <div class="col-5 my-3 my-md-0 rounded p-0 shadow cardPic">
            <img src="/city1.jfif" alt="" class="col-12 h-50 p-0 rounded-top" />
            <div class="p-3">
              <div class="d-flex justify-content-between mb-2">
                <span>دبی-همه مکان های خیره کننده</span>
              </div>
              <h4 class="text-info my-2">3,500 از تومان</h4>
              <div class="mt-2">
                <i
                  class="fa fa-star textorange mx-1"
                  v-for="i in 5"
                  :key="i"
                ></i>
                <span class="text-muted">(2بررسی)</span>
              </div>
            </div>
          </div>
        </div> -->
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
      currentIndex: 0,
      images: [
        "../city1.jfif",
        "../africa.jpg",
        "../city1.jfif",
        "../africa.jpg",
      ],
    };
  },
  async asyncData({ $axios, params }) {
    const pictures = await $axios.$get(`/api/home/pictures/${params.torId}/`);
    const scores = await $axios.$get(`/api/home/scores/${params.torId}/`);
    const tourDetail = await $axios.$get(
      `/api/home/tour-detail/${params.torId}/`
    );
    return {
      pictures: pictures.results,
      scores: scores.results,
      tourDetail: tourDetail.results[0],
    };
  },
  mounted() {
    this.startSlide();
  },
  computed: {
    currentImg() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    next() {
      this.currentIndex += 1;
      if (this.currentIndex < 0) {
        this.currentIndex = 3;
      }
      if (this.currentIndex > 3) {
        this.currentIndex = 0;
      }
    },
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
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
