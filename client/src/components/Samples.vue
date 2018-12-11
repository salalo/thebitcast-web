<template>
  <div>
    <div class="white">

      <div class="row padding">GUZIKI</div>
      <div class="row">
        <q-btn rounded label="hello" color="amber-9" class="col-2"/>
        <div class="col"></div>
        <q-btn rounded label="hello" color="indigo-14" class="col-2"/>
        <div class="col"></div>
        <q-btn rounded label="hello" color="blue-14" class="col-2"/>
        <div class="col"></div>
        <q-btn label="hello" color="pink-13" class="col-2"/>
        <div class="col"></div>
        <q-btn label="hello" color="red-14" class="col-2"/>
      </div>

      <div class="row padding">JAKIES TABSY</div>
      <div class="row">
        <q-tabs class="col-2" color="amber-9" >
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>
        <q-tabs class="col-2" color="indigo-14">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>
        <q-tabs class="col-2" color="blue-14">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>        
        <q-tabs class="col-2" color="pink-13">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>
        <q-tabs class="col-2" color="red-14">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
      </div>

      <div class="row padding">INPUTY</div>
      <div class="row">
        <q-input class="col-2" suffix="@gmail.com" value="" color="red-14"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@elo.; DD" value="" color="pink-13"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@dorian.com" value="" color="blue-14"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@kwarciak.asd" value="" color="amber-9"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@co.tam" value="haha" color="indigo-14"/>
      </div>

      <div class="row padding">SUWAKI</div>
            <div class="row">
        <q-range
          class="col-2"
          :min="0"
          :max="10"
          :step="1"
          color="pink-13"
        />

        <div class="col"></div>
        <q-slider
          color="amber-9"
          class="col-2"
          :min="0"
          :max="80"
          :step="5"
          label
          snap
        />

        <div class="col"></div>
        <q-slider
        color="red-14"
          class="col-2"
          :min="0"
          :max="10"
          :step="2"
          label
          snap
        />

        <div class="col"></div>
        <q-slider
        color="blue-14"
          class="col-2"
          :min="0"
          :max="10"
          :step="1"
          label
          snap
        />

        <div class="col"></div>
        <q-slider
        color="indigo-14"
          class="col-2"
          :min="0"
          :max="100"
        />

      </div>
      <div class="row padding">SEARCH</div>
      <div class="row">

        <q-search
        class="col-2"
          color="indigo-14"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="red-14"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="blue-14"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="amber-9"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="pink-13"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>
      </div>

      <div class="row padding">DROP DOWNY</div>

      <div class="row">

        <q-btn-dropdown label="Button" color="pink-13" class="col-2" rounded>
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

        <q-btn-dropdown label="Button" color="indigo-14" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

        <q-btn-dropdown label="Button" color="blue-14" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

        <q-btn-dropdown label="Button" color="amber-9" class="col-2" rounded>
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

        <q-btn-dropdown label="Button" color="red-14" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

      </div>

    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="black">

    <div class="row padding">GUZIKI</div>
      <div class="row">
        <q-btn label="hello" color="amber-9" class="col-2"/>
        <div class="col"></div>
        <q-btn label="hello" color="indigo-14" class="col-2"/>
        <div class="col"></div>
        <q-btn label="hello" color="blue-14" class="col-2"/>
        <div class="col"></div>
        <q-btn rounded label="hello" color="pink-13" class="col-2"/>
        <div class="col"></div>
        <q-btn rounded label="hello" color="red-14" class="col-2"/>
      </div>

      <div class="row padding">JAKIES TABSY</div>
      <div class="row">
        <q-tabs class="col-2" color="amber-9">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>
        <q-tabs class="col-2" color="indigo-14">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>
        <q-tabs class="col-2" color="blue-14">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>        
        <q-tabs class="col-2" color="pink-13">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
        <div class="col"></div>
        <q-tabs class="col-2" color="red-14">
          <q-tab default count="6" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint"/>
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
        </q-tabs>
      </div>

      <div class="row padding">INPUTY</div>
      <div class="row">
        <q-input class="col-2" suffix="@gmail.com" value="" color="red-14"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@elo.; DD" value="" color="pink-13"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@dorian.com" value="" color="blue-14"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@kwarciak.asd" value="" color="amber-9"/>
        <div class="col"></div>
        <q-input class="col-2" suffix="@co.tam" value="haha" color="indigo-14"/>
      </div>

      <div class="row padding">SUWAKI</div>
      <div class="row">
        <q-range
          class="col-2"
          :min="0"
          :max="10"
          :step="1"
          color="pink-13"
        />

        <div class="col"></div>
        <q-slider
          color="amber-9"
          class="col-2"
          :min="0"
          :max="80"
          :step="5"
          label
          snap
        />

        <div class="col"></div>
        <q-slider
        color="red-14"
          class="col-2"
          :min="0"
          :max="10"
          :step="2"
          label
          snap
        />

        <div class="col"></div>
        <q-slider
        color="blue-14"
          class="col-2"
          :min="0"
          :max="10"
          :step="1"
          label
          snap
        />

        <div class="col"></div>
        <q-slider
        color="indigo-14"
          class="col-2"
          :min="0"
          :max="100"
        />

      </div>
      <div class="row padding">SEARCH</div>
      <div class="row">

        <q-search
         class="col-2"
          color="indigo-14"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="red-14"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="blue-14"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="amber-9"
          value=""
          :debounce="600"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>

        <q-search
        class="col-2"
          color="pink-13"
          value=""
          :debounce="300"
          placeholder="Hotels"
          icon="local_hotel"
          float-label="What is your hotel?"
        />
        <div class="col"></div>
      </div>

      <div class="row padding">DROP DOWNY</div>

      <div class="row">

        <q-btn-dropdown label="Button" color="pink-13" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

                <q-btn-dropdown label="Button" color="indigo-14" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

                <q-btn-dropdown label="Button" color="blue-14" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

                <q-btn-dropdown label="Button" color="amber-9" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

                <q-btn-dropdown label="Button" color="red-14" class="col-2">
          <!-- dropdown content -->
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label color="pink-13">Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col"></div>

      </div>
      

    </div>
  </div>
</template>

<script>
import { QBtn, QTab, QTabs, QInput, QRange, QSlider, QSearch, QBtnDropdown } from "quasar-framework/dist/quasar.mat.esm";

export default {
  components: {
    QBtn,
    QTabs,
    QTab,
    QInput,
    QRange,
    QSlider,
    QSearch,
    QBtnDropdown
  },
};
</script>

<style lang="scss">
.padding { margin: 20px 0;  }
.white {
  background-color: #f5f5f5;
}
.black {
  background-color: #262626;
  color: #fff;
}
</style>
