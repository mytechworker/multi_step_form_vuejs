<template>
  <div
    id="tabs"
    class="container w-full max-w-3xl mx-auto my-14 sm:p-11 p-5 shadow-4xl rounded-xl"
  >
    <h2
      class="text-dark sm:text-4xl text-2xl text-center font-semibold mb-7 capitalize"
    >
      start your 7 days free trial today!
    </h2>
    <div class="progress-frm-wrap shadow-5xl rounded-xl">
      <div
        class="tabs flex w-full [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:items-center [&>*]:w-1/2 [&>*]:p-4 [&>*]:border [&>*]:border-b-0 [&>*]:font-semibold [&>*]:text-lg"
      >
        <a
          v-bind:class="[
            activetab === 1 ? 'active bg-[#f0f9ff] text-sky' : ' bg-white',
          ]"
          class="rounded-tl-lg text-dark"
          >STEP 1
          <span class="text-xs text-light-grey border-light-gray font-normal"
            >About Your Business</span
          ></a
        >
        <a
          v-bind:class="[
            activetab === 2 ? 'active bg-[#f0f9ff] text-sky' : ' bg-white',
          ]"
          class="rounded-tr-lg text-dark"
          >STEP 2
          <span class="text-xs text-light-grey border-light-gray font-normal"
            >Trial Type & Detail</span
          ></a
        >
      </div>
      <hr
        class="h-[2px] bg-gradient-to-r from-[#9FCC5B] from-10% to-[#18A0D7] border-none"
      />
      <div class="content">
        <div v-show="activetab === 1" class="tabcontent">
          <div class="frm-wrap sm:p-9 p-3">
            <form method="post" action="#" @submit.prevent="next">
              <div class="input-box w-full mb-4 relative">
                <img
                  src="../src/assets/company.svg"
                  alt="Company_Icon"
                  class="absolute top-1/2 translate-y-[-50%] left-5"
                  width="20"
                  height="20"
                />
                <input
                  type="text"
                  v-model="form1.company_name"
                  placeholder="Company Name:"
                  class="w-full text-sm shadow-6xl placeholder-secondry-light-gray text-secondry-light-gray border border-light-gray rounded-md pl-12 pr-6 py-3"
                  required
                />
              </div>
              <div class="input-wrap flex sm:flex-row flex-col gap-3 mb-4">
                <div class="input-box sm:w-1/2 w-full relative">
                  <img
                    src="../src/assets/user.svg"
                    alt="User_Icon"
                    class="absolute top-1/2 translate-y-[-50%] left-5"
                    width="20"
                    height="20"
                  />
                  <input
                    type="text"
                    v-model="form1.fname"
                    placeholder="First Name"
                    class="w-full text-sm shadow-6xl placeholder-secondry-light-gray text-secondry-light-gray border border-light-gray rounded-md pl-12 pr-6 py-3"
                    required
                  />
                </div>
                <div class="input-box sm:w-1/2 w-full relative">
                  <img
                    src="../src/assets/user.svg"
                    alt="User_Icon"
                    class="absolute top-1/2 translate-y-[-50%] left-5"
                    width="20"
                    height="20"
                  />
                  <input
                    type="text"
                    v-model="form1.lname"
                    placeholder="Last Name"
                    class="w-full text-sm shadow-6xl placeholder-secondry-light-gray text-secondry-light-gray border border-light-gray rounded-md pl-12 pr-6 py-3"
                    required
                  />
                </div>
              </div>
              <div class="input-box w-full mb-4 relative">
                <img
                  src="../src/assets/email.svg"
                  alt="User_Icon"
                  class="absolute top-1/2 translate-y-[-50%] left-5"
                  width="20"
                  height="20"
                />
                <input
                  type="email"
                  v-model="form1.email"
                  placeholder="Email Address"
                  class="w-full text-sm shadow-6xl placeholder-secondry-light-gray text-secondry-light-gray border border-light-gray rounded-md pl-12 pr-6 py-3"
                  required
                />
              </div>
              <div class="input-box w-full sm:mb-9 mb-5 relative">
                <img
                  src="../src/assets/phone.svg"
                  alt="User_Icon"
                  class="absolute top-1/2 translate-y-[-50%] left-5"
                  width="20"
                  height="20"
                />
                <input
                  type="number"
                  v-model="form1.phno"
                  placeholder="Phone Number"
                  class="w-full text-sm shadow-6xl placeholder-secondry-light-gray text-secondry-light-gray border border-light-gray rounded-md pl-12 pr-6 py-3"
                  required
                />
              </div>
              <div class="input-box w-full relative">
                <input
                  type="submit"
                  name="submit"
                  value="Go to Step #2"
                  class="rounded-lg font-semibold shadow-6xl placeholder-secondry-light-gray text-white text-2xl bg-gradient-to-r from-[#9FCC5B] from-5% to-[#18A0D7] w-full p-4"
                />
              </div>
            </form>
            <div class="text-sm text-light-grey text-center pt-5">
              We Respect Your Privacy & Information!
            </div>
          </div>
        </div>
        <div v-show="activetab === 2" class="tabcontent">
          <div class="frm-wrap sm:p-10 sm:pt-3 p-3">
            <form method="post" action="#" @submit.prevent="submitstep2">
              <div class="text-sm pb-3 text-dark flex items-center gap-2">
                <a href=""
                  ><img
                    src="../src/assets/back-arrow.svg"
                    alt="Back_Arrow"
                    width="20"
                    height="20"
                  /> </a
                ><span
                  ><a href="#" @click.prevent="prev()"
                    >Go Back To Step 1</a
                  ></span
                >
              </div>
              <div class="input-box w-full mb-5 gbp">
                <label class="text-sm text-center font-bold text-dark"
                  >GBP & CRM Plans:</label
                >
                <details :open="isOpenGbp" class="w-full relative h-full">
                  <summary
                    @click="toggleDropdownGbp" :class="isOpen ? 'rounded-t-md' : 'rounded-md'"
                    class="p-3 border border-light-gray text-sm text-secondry-light-gray shadow-6xl h-full"
                  >
                    {{ selectedOptionGbp || "No GMB or CRM Plan" }}
                  </summary>
                  <form
                    class="flex flex-col shadow-4xl border border-light-gray absolute w-full bg-white z-10"
                  >
                    <label
                      v-for="option in optionsGbp"
                      :key="option"
                      class="p-3 border-b border-b-setext-secondry-light-gray text-sm text-dark"
                    >
                      <input
                        type="radio"
                        name="options"
                        :value="option"
                        @click="updateSummaryGbp(option)"
                      />
                      {{ option.text }}
                      <span class="text-sky font-bold">{{ option.price }}</span>
                    </label>
                  </form>
                </details>
              </div>
              <div class="input-wrap">
                <div class="text-sm text-center font-bold text-dark">
                  And/Or
                </div>
                <label
                  for=""
                  class="mb-2 text-sm text-center font-bold text-dark"
                  >Phone Tracking Plans:</label
                >
                <div class="flex gap-3 mt-2 sm:flex-row flex-col">
                  <div class="input-box sm:w-1/2 w-full">
                    <select
                      name="country"
                      id=""
                      class="w-full text-secondry-light-gray text-sm border border-light-gray rounded-md py-3 px-5 appearance-none shadow-6xl"
                    >
                      <option
                        v-for="country in countries"
                        :key="country.name"
                        :value="country.value"
                      >
                        {{ country.value }}
                      </option>
                    </select>
                  </div>
                  <div class="input-box sm:w-1/2 w-full phone">
                    <details :open="isOpen" class="w-full relative h-full">
                      <summary
                        @click="toggleDropdown" :class="isOpen ? 'rounded-t-md' : 'rounded-md'"
                        class="p-3 border border-light-gray  text-sm text-secondry-light-gray shadow-6xl h-full"
                      >
                        {{ selectedOption || "Phone Plan" }}
                      </summary>
                      <form
                        class="flex flex-col shadow-4xl border border-light-gray absolute w-full bg-white"
                      >
                        <label
                          v-for="option in options"
                          :key="option"
                          class="p-3 border-b border-b-setext-secondry-light-gray text-sm text-dark"
                        >
                          <input
                            type="radio"
                            name="options"
                            :value="option"
                            @click="updateSummary(option)"
                          />
                          {{ option.text }}
                          <span class="text-sky font-bold">{{
                            option.price
                          }}</span>
                        </label>
                      </form>
                    </details>
                  </div>
                </div>
                <div class="py-4">
                  <input
                    type="checkbox"
                    value=""
                    v-model="form2.phoneplan"
                    class="text-secondry-light-gray mr-2 shadow-6xl border-light-gray rounded-sm"
                    required
                  />
                  <label for="phoneplan" class="text-sm text-gray-600 leading-7"
                    >Unfortunately we're not able to offer a trial for Phone
                    Plan</label
                  >
                </div>
              </div>
              <div class="input-wrap rounded-lg bg-[#EDEDED] p-5 mb-6">
                <label class="text-sm font-bold text-gray-600"
                  >Payment Information</label
                >
                <div
                  class="flex gap-2 mt-2 flex-wrap sm:flex-nowrap [&>*]:shadow-6xl [&>*]:text-sm [&>*]:text-secondry-light-gray [&>*]:border [&>*]:border-light-gray [&>*]:rounded-md [&>*]:p3 [&>*]:placeholder-secondry-light-gray"
                >
                  <input
                    type="number"
                    v-model="form2.cardno"
                    placeholder="Card Number"
                    class="sm:w-1/2 w-full"
                    required
                  />
                  <input
                    type="text"
                    v-model="form2.month"
                    placeholder="MM/YY"
                    class="sm:w-1/3 w-2/4"
                    required
                  />
                  <input
                    type="text"
                    v-model="form2.cvc"
                    placeholder="CVC"
                    class="sm:w-1/4 w-1/3"
                    required
                  />
                </div>
              </div>
              <div class="input-box w-full">
                <button
                  class="rounded-lg font-bold text-white sm:text-2xl text-xl bg-gradient-to-r from-[#9FCC5B] from-5% to-[#18A0D7] w-full p-4 flex flex-col items-center"
                >
                  Start Your 7 Days free Trial!<span
                    class="text-sm font-semibold"
                    >After the 7 Days, You will be billed with the card on the
                    file.</span
                  >
                </button>
              </div>
            </form>
            <div class="text-sm text-light-grey text-center pt-5">
              *100% Secure & Safe Payment Process*
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-9">
      <div class="flex gap-4 items-start mb-5">
        <img
          src="../src/assets/money.svg"
          alt="Money_Icon"
          width="30"
          height="30"
        />
        <div class="flex flex-col">
          <h6 class="text-sm font-semibold text-dark">
            No Charges Will Be Processed Today:
          </h6>
          <p class="text-sm text-light-grey">
            After 7 days, we'll process a charge to your card, unless you decide
            to cancel prior to the end of your 7 Day Trial. Our Payments are
            100% Safe & Secure.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <img
          src="../src/assets/notes.svg"
          alt="Money_Icon"
          width="30"
          height="30"
        />
        <div class="flex flex-col">
          <h6 class="text-sm font-semibold text-dark">Please Note:</h6>
          <p class="text-sm text-light-grey">
            As you become a part of our community, you may receive occasional
            updates via text & email messages. In certain cases, communication
            surcharges may apply.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";

export default {
  name: "App",
  setup() {
    const activetab = ref(1);
    const selectedOption = ref(null);
    const selectedOptionGbp = ref(null);
    const isOpen = ref(false);
    const isOpenGbp = ref(false);
    const options = ref([
      {
        text: "Phone Ala Carte",
        price: "$5/mo",
      },
      {
        text: "Phone Ala Carte",
        price: "$49/mo",
      },
      {
        text: "Phone Pro",
        price: "$149/mo",
      },
      {
        text: "Phone Elite",
        price: "$299/mo",
      },
    ]);
    const optionsGbp = ref([
      {
        text: "GBP Starter",
        price: "$59/mo",
      },
      {
        text: "GBP Pro",
        price: "$99/mo",
      },
      {
        text: "GBP Agency",
        price: "$59/mo",
      },
      {
        text: "GBP + CRM Starter",
        price: "$59/mo",
      },
    ]);
    const countries = ref([
      {
        name: "uk",
        value: "United Kingdom",
      },
      {
        name: "usa",
        value: "USA",
      },
      {
        name: "canada",
        value: "Canada",
      },
      {
        name: "india",
        value: "India",
      },
    ]);
    const form1 = ref({
      company_name: "",
      fname: "",
      lname: "",
      email: "",
      phno: "",
    });
    const form2 = ref({
      phoneplan: "",
      cardno: "",
      month: "",
      cvc: "",
    });

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const toggleDropdownGbp = () => {
      isOpenGbp.value = !isOpenGbp.value;
    };

    const updateSummary = (option) => {
      selectedOption.value = option.text + " " + option.price;
      toggleDropdown();
    };

    const updateSummaryGbp = (option) => {
      selectedOptionGbp.value = option.text + " " + option.price;
      toggleDropdownGbp();
    };

    const next = () => {
      activetab.value++;
    };

    const prev = () => {
      activetab.value--;
    };

    const submitstep2 = () => {};

    watch(isOpen, (newValue) => {
      // Ensure dropdown stays open when set to true
      if (newValue) {
        setTimeout(() => {
          document.querySelector(".phone details").setAttribute("open", "open");
        }, 0);
      }
    });

    watch(isOpenGbp, (newValue) => {
      // Ensure dropdown stays open when set to true
      if (newValue) {
        setTimeout(() => {
          document.querySelector(".gbp details").setAttribute("open", "open");
        }, 0);
      }
    });

    return {
      activetab,
      selectedOption,
      selectedOptionGbp,
      isOpen,
      isOpenGbp,
      options,
      optionsGbp,
      countries,
      form1,
      form2,
      toggleDropdown,
      toggleDropdownGbp,
      updateSummary,
      updateSummaryGbp,
      next,
      prev,
      submitstep2,
    };
  },
};
</script>

<style>
.tabs a.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border: 5px solid transparent;
  border-color: transparent transparent #84cc16 transparent;
}
select:not([size]) {
  background-image: url("../src/assets/drop.svg") !important;
}
details > summary {
  list-style: none;
}
details > summary::marker,
details > summary::-webkit-details-marker {
  display: none;
}
details > summary {
  background-image: url("../src/assets/drop.svg") !important;
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: center;
}
input:focus {
  --tw-ring-shadow: "1px 1px 3px 0px #0000000D" !important;
  border-color: #ededed !important;
}
[type="checkbox"],
[type="radio"] {
  color: #9fcc5b !important;
}
</style>
