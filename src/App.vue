<template>
  <h1>Ninja reacton timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="showResults" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>

public function register_camper(){ 
    if ($this->input->post()) {
      $data      = $this->input->post();

      print_r($data);
      $clientid = $this->registration_model->add_camper([
        'camp_location'       => $data['camp-location'],
        'camper_name'         => $data['camper-name'],
        'dob'                 => $data['dob'],
        'age'                 => $data['age'],
        'national_id'         => $data['national-id'],
        'gender'              => $data['gender'],
        'religion'            => $data['religion'],
        'parent_name'         => $data['parent-name'],
        'relationship'        => $data['relationship'],
        'address'             => $data['address'],
        'home_number'         => $data['home-number']? $data['home-number']: '' ,
        'work_number'         => $data['work-number']? $data['work-number']: '' ,
        'cell_number'         => $data['cell-number']? $data['cell-number']: '' ,
        'email'               => $data['email'],
        'company'             => $data['company'],
        'curriculum'          => $data['curriculum']? implode(", ", $data['curriculum']): '',
        'illness'             => $data['illness']? $data['illness']: '',
        'medication'          => $data['medication']? $data['medication']: '',
        'disability'          => $data['disability']? $data['disability']: '',
        'allergies'           => $data['allergies']? $data['allergies']: '',
        'contribution'        => $data['contribution']? $data['contribution']: '',
        'doctor_name'         => $data['doctor-name'],
        'doctor_number'       => $data['doctor-number'],
        'participation_exceptions' => $data['participation-exceptions']?$data ['participation-exceptions']: '',
      ], true);

      if ($clientid) {

        $redUrl = site_url();
        redirect($redUrl);
      }

      redirect(site_url('registration'));

    }
  }
