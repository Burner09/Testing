import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>
<div class="row mbot15">
  <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">MINISTRY OF YOUTH, SPORTS & COMMUNITY EMPOWERMENT</h4>
  <h5>Division of Youth Affairs</h5>
  <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">National Summer Camps Program</h4>
  <h5>Camper Registration Form 2024</h5>
  <p>Tel: (246) 535-3835</p>
  <p>ydp@barbados.gov.bb</p>
</div>
<div class="col-md-6 col-md-offset-3">
  <?php echo form_open('registration/register_camper', ['id' => 'camper-registration-form']); ?>
  <div class="panel_s">
    <div class="panel-body">
      <div class="row">

        <div class="form-group location">
          <div class="form-group constituency">
            <!-- filters constituency to make finding camps easier -->
            <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">Camp Location</h4>
            <label class="control-label" for="constituency">Constituency</label>
            <p>Please select your constituency below</p>
            <?php echo render_select('constituency', $constituencies, ['id', 'constituency'], '', '', ['data-width' => '100%', 'data-actions-box' => true], [], 'no-mbot', ''); ?>
            <span id="constituency-error" class="text-danger"></span </div>

            <div class="form-group camp-location">
              <label class="control-label" for="camp-location">Name/Venue of Camp</label>
              <?php echo render_select('camp-location', [], ['location', 'location'], '', '', ['data-width' => '100%', 'data-actions-box' => true], [], 'no-mbot', ''); ?>
              <span id="camp_location-error" class="text-danger"></span>
            </div>
          </div>
        </div>

        <div class="form-group personal-information">
          <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">Camper's Personal Information</h4>
          <div class="form-group camper-name">
            <?php echo render_input('camper-name', 'Name of Camper', '', 'text'); ?>
            <span id="camper_name-error" class="text-danger"></span>
          </div>

          <div class="form-group dob">
            <?php echo render_input('dob', 'DOB', '', 'date'); ?>
            <span id="dob-error" class="text-danger"></span>
          </div>

          <div class="form-group age">
            <?php echo render_input('age', 'Age', '', 'number'); ?>
            <span id="age-error" class="text-danger"></span>
          </div>

          <div class="form-group national-id">
            <?php echo render_input('national-id', 'National ID#', '', 'number'); ?>
            <span id="national_id-error" class="text-danger"></span>
          </div>

          <div class="form-group gender">
            <label class="control-label">Gender</label>
            <br>
            <input type='radio' class='gender' id='male' name='gender' value='male'>
            <label class="control-label" for="male">Male</label>
            <input type='radio' class='gender' id='female' name='gender' value='female'>
            <label class="control-label" for="female">Female</label>

            <span id="gender-error" class="text-danger"></span>
          </div>

          <div class="form-group religion">
            <label class="control-label">Religion</label>
            <br>
            <input type='radio' class='religion' id='anglican' name='religion' value='anglican'>
            <label class="control-label" for="anglican">Anglican</label>

            <input type='radio' class='religion' id='pentecostal' name='religion' value='pentecostal'>
            <label class="control-label" for="pentecostal">Pentecostal</label><br>

            <input type='radio' class='religion' id='catholic' name='religion' value='catholic'>
            <label class="control-label" for="catholic">Catholic</label>

            <input type='radio' class='religion' id='moravian' name='religion' value='moravian'>
            <label class="control-label" for="moravian">Moravian</label><br>

            <input type='radio' class='religion' id='jehovah-witness' name='religion' value='jehovah-witness'>
            <label class="control-label" for="jehovah-witness">Jehovah Witness</label>

            <input type='radio' class='religion' id='seventh-day-adventist' name='religion' value='seventh-day-adventist'>
            <label class="control-label" for="seventh-day-adventist">Seventh Day Adventist</label><br>

            <input type='radio' class='religion' id='islam' name='religion' value='islam'>
            <label class="control-label" for="islam">Islam</label>

            <input type='radio' class='religion' id='rastafarianism' name='religion' value='rastafarianism'>
            <label class="control-label" for="rastafarianism">Rastafarianism</label>

            <?php echo render_input('other-religion', 'Other', '', 'text'); ?>

            <span id="religion-error" class="text-danger"></span>
          </div>

          <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">Parent's Information</h4>

          <div class="form-group parent-name">
            <?php echo render_input('parent-name', 'Name of Parent/Guardian', '', 'text'); ?>
            <span id="parent_name-error" class="text-danger"></span>
          </div>

          <div class="form-group relationship">
            <?php echo render_input('relationship', 'Relationship to Camper', '', 'text'); ?>
            <span id="relationship-error" class="text-danger"></span>
          </div>

          <div class="form-group address">
            <?php echo render_textarea('address', 'Address', ''); ?>
            <span id="address-error" class="text-danger"></span>
          </div>

          <div class="form-group telephone-numbers">
            <label class="control-label">Telephone Numbers</label>
            <?php echo render_input('home-number', '(H)', '', 'number'); ?>
            <?php echo render_input('work-number', '(W)', '', 'number'); ?>
            <?php echo render_input('cell-number', '(C)', '', 'number'); ?>
            <span id="phonenumber" class="text-danger"></span>

          </div>

          <div class="form-group email">
            <?php echo render_input('email', 'Email', '', 'email'); ?>
            <span id="email-error" class="text-danger"></span>
          </div>

          <div class="form-group company">
            <?php echo render_input('company', 'Employer/Business Name', '', 'text'); ?>
            <span id="company-error" class="text-danger"></span>
          </div>
        </div>

        <div class="form-group curriculum">
            <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">CURRICULUM</h4>
            <p>Kindly select all topics that interest your child/ward</p>
            <div class="form-group curriculum">

                <input type='checkbox' class='art-culture' id='art-culture' name='curriculum[]' value='art-culture'>
                <label class="control-label" for="art-culture">Arts & Culture</label>
                <p>(Art & Craft, Culture, Tours, History, etc.)</p>

                <input type='checkbox' class='innovation' id='innovation' name='curriculum[]' value='innovation'>
                <label class="control-label" for="innovation">Innovation</label>
                <p>(Digital Media, Science & Technology)</p>
                <input type='checkbox' class='youth-empowerment' id='youth-empowerment' name='curriculum[]' value='youth-empowerment'>
                <label class="control-label" for="youth-empowerment">Youth Empowerment</label>
                <p>(Financial Literacy, Entrepreneurship, Career Development, Leadership Training, Public Speaking)</p>

                <input type='checkbox' class='sports-development' id='sports-development' name='curriculum[]' value='sports-development'>
                <label class="control-label" for="sports-development">Sports Development</label><br>

                <input type='checkbox' class='self-management-tools' id='self-management-tools' name='curriculum[]' value='self-management-tools'>
                <label class="control-label" for="self-management-tools">Self-Management Tools</label>
                <p>(Health & Wellness, Self-Care Practices, Religious Knowledge, Etiquette)</p>
                <span id="curriculum-error" class="text-danger"></span>
            </div>
        </div>

        <div class="form-group medical-details">
          <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">MEDICAL & HEALTH INFORMATION </h4>

          <div class="form-group illness">
            <label class="control-label">Does your child/ward suffer from any illnesses? (e.g. blood clotting, respiratory, heart conditions, frequent infections, diabetes, fainting)</label>

            <input type='radio' class='illness-radio' id='illness-yes' name='illness-radio' value='yes' onclick='enableTextBox("illness")'>
            <label class="control-label" for="illness-yes">Yes</label>
            <input type='radio' class='illness-radio' id='illness-no' name='illness-radio' value='no' onclick='disableTextBox("illness")'>
            <label class="control-label" for="illness-no">No</label>

            <?php echo render_input('illness', 'If yes, please specify', '', 'text'); ?>
            <span id="illness-error" class="text-danger"></span>
          </div>

          <div class="form-group medication">
            <label class="control-label">Is your child/ward on medication?</label>

            <input type='radio' class='medication-radio' id='medication-yes' name='medication-radio' value='yes' onclick='enableTextBox("medication")'>
            <label class="control-label" for="medication-yes">Yes</label>
            <input type='radio' class='medication-radio' id='medication-no' name='medication-radio' value='no' onclick='disableTextBox("medication")'>
            <label class="control-label" for="medication-no">No</label>

            <div class="medication">
              <?php echo render_input('medication', 'If yes, please specify', '', 'text'); ?>
              <span id="medication-error" class="text-danger"></span>
            </div>
          </div>

          <div class="form-group disability">
            <label class="control-label">Does your child/ward have any disability?</label>

            <input type='radio' class='disability-radio' id='disability-yes' name='disability-radio' value='yes' onclick='enableTextBox("disability")'>
            <label class="control-label" for="disability-yes">Yes</label>
            <input type='radio' class='disability-radio' id='disability-no' name='disability-radio' value='no' onclick='disableTextBox("disability")'>
            <label class="control-label" for="disability-no">No</label>

            <div class="disability">
              <?php echo render_input('disability', 'If yes, please specify', '', 'text'); ?>
              <span id="disability-error" class="text-danger"></span>
            </div>
          </div>

          <div class="form-group allergies">
            <div class="allergies">
              <label class="control-label">Does your child/ward have any allergies?</label>

              <input type='radio' class='allergies-radio' id='allergies-yes' name='allergies-radio' value='yes' onclick='enableTextBox("allergies")'>
              <label class="control-label" for="allergies-yes">Yes</label>
              <input type='radio' class='allergies-radio' id='allergies-no' name='allergies-radio' value='no' onclick='disableTextBox("allergies")'>
              <label class="control-label" for="allergies-no">No</label>

              <?php echo render_input('allergies', 'If yes, please specify', '', 'text'); ?>
              <span id="allergies-error" class="text-danger"></span>
            </div>
          </div>
        </div>

        <div class="form-group medication-policy">
          <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">ADMINISTERING MEDICATION POLICY</h4>
          <p>Children will be encouraged to take personal responsibility for their medication, if appropriate. If a child attending camp requires prescription medication of any kind, all medication provided must have the prescription sticker attached which includes the child's name, the date, the type of medicine and the dosage. Staff will not administer any medication to your child/ward. Ideally children should take their medication before arriving at camp locattion.</p>
        </div>

        <div class="form-group nutrition">
          <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">NUTRITION PROGRAM</h4>
          <div class="form-group nutrition-program">
            <input type='radio' class='nutrition-program' id='nutrition-yes' name='nutrition-program' value='will'>
            <label class="control-label" for="nutrition-yes">Child/Ward will be taking meals</label>

            <input type='radio' class='nutrition-program' id='nutrition-no' name='nutrition-program' value='will not'>
            <label class="control-label" for="nutrition-no">Child/Ward not will be taking meals</label>

            <span id="nutrition_program-error" class="text-danger"></span>
          </div>
        </div>

        <div class="form-group contribution">
          <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">CONTRIBUTION</h4>

          <div class="contribution">
            <label class="control-label">I am willing to contribute monetarily to help offset the cost of camp</label>
            <input type='radio' class='contribution-radio' id='contribution-yes' name='contribution-radio' value='yes' onclick='enableTextBox("contribution")'>
            <label class="control-label" for="contribution-yes">Yes</label>
            <input type='radio' class='contribution-radio' id='contribution-no' name='contribution-radio' value='no' onclick='disableTextBox("contribution")'>
            <label class="control-label" for="contribution-no">No</label>

            <?php echo render_input('contribution', 'If yes, kindly indicate the amount of your contribution', '', 'number'); ?>
            <span id="contribution-error" class="text-danger"></span>
          </div>
        </div>
      </div>

      <div class="form-group emergency-instructions">
        <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">EMERGENCY INSTRUCTIONS</h4>
        <div class="form-group doctor-name">
          <?php echo render_input('doctor-name', "Doctor's Name or Polyclinic", '', 'text'); ?>
          <span id="doctor_name-error" class="text-danger"></span>
        </div>

        <div class="form-group doctor-number">
          <?php echo render_input('doctor-number', 'Telephone Number(s)', '', 'number'); ?>
          <span id="doctor_number-error" class="text-danger"></span>
        </div>

        <div class="form-group camperp-name">
          <?php echo render_input('camperp-name', "I give permission for trained Camp Officials to administer First Aid, call a doctor or seek emergency medical/surgical care for my child/ward", '', 'text'); ?>
          <span id="camperp_name-error" class="text-danger"></span>
          <p>in the event that I cannot be reached in an emergency.</p>
        </div>

        <div class="form-group participation-exceptions">
          <?php echo render_input('participation-exceptions', 'I hereby give permission for my child/ward to go on trips away from camp premises, whether on foot or vehicle. I give permission for my child/ward to participate in all camp activities with the following exceptions:', '', 'text'); ?>
          <span id="participation_exceptions-error" class="text-danger"></span>
        </div>
      </div>

      <div class="form-group camper-conduct">
        <h4 class="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">CAMPER CONDUCT</h4>

        <p>The National Summer Camp Program provides a secure and nurturing setting where campers engage in team activities while learning. The attitude and behavior of campers play a vital role in the camp's success, as each individual contributes to the overall camp experience. Both campers and parents/guardians are required to read this agreement. Parents/guardians must sign this agreement before your child/ward attends the camp. Please check the boxes to indicate your agreement.</p>

        <input type='radio' class='respect' id='respect' name='respect' value='respect'>
        <label for="respect">I will treat everyone in the camp community with respect at all times, including showing respect for each other’s belongings, privacy & feelings.</label>
        <span id="respect-error" class="text-danger"></span><br>

        <input type='radio' class='harasment' id='harasment' name='harasment' value='harasment'>
        <label for="harasment">I understand that harassment based upon colour, race, religion, creed, gender, age, sexual orientation or disability, is a form of discrimination and will not be tolerated.</label>
        <span id="harasment-error" class="text-danger"></span><br>

        <input type='radio' class='facilities' id='facilities' name='facilities' value='facilities'>
        <label for="facilities">I will treat the camp facilities and equipment with respect and refrain from taking or damaging any camp property.</label>
        <span id="facilities-error" class="text-danger"></span><br>

        <input type='radio' class='language' id='language' name='language' value='language'>
        <label for="language">I will not (1) use obscene or derogatory language, (2) bring music containing obscene or derogatory language or (3) make reference to violent and offensive actions.</label>
        <span id="language-error" class="text-danger"></span><br>

        <input type='radio' class='safety' id='safety' name='safety' value='safety'>
        <label for="safety">I will not engage in any activity which puts myself, other campers or staff at risk.</label>
        <span id="safety-error" class="text-danger"></span><br>

        <input type='radio' class='rules' id='rules' name='rules' value='rules'>
        <label for="rules">I agree to abide by the rules and regulations of the camp and understand that I am expected to follow directions and guidance given by the camp staff.</label>
        <span id="rules-error" class="text-danger"></span><br><br>

        <p>If a camper fails to abide by the above, the parent/guardian will be notified and asked to assist the camper make more positive choices. If there is no improvement in behaviour, the camper will be asked to leave camp.</p><br>

        <p>The following behaviours are deemed to be very serious and can result in immediate expulsion from camp:</p>

        <p>1. Possession or use of (1) weapons, (2) elicit illegal drugs, (3) controlled substances, (4) tobacco products of any kind and (5) alcoholic beverages.</p>

        <p>2. Physical abuse of any kind; including hitting, biting, or pushing another camper or staff member.</p>

        <p>3. Failure to follow instructions which results in situations that put themselves, other campers or staff in physical danger.</p>

        <p>4. Leaving the camp facilities without the permission of a camp staff member. </p>

        <p>5. Verbal abuse of other campers or staff.</p>

        <p>6. Continuous misbehaviour that is interfering with the quality of the camp program.</p>

        <p>7. Campers threatening to harm themselves, peers or camp staff members.</p>

        <p>I have read and understand these expectations. I have discussed these expectations with my child/ward and he/she has agreed to abide by them at all times for the duration of camp. I accept that my child/ward will not be allowed to remain in camp if one or more of the regulations are broken.</p>

        <div class="form-group parentp-name">
          <?php echo render_input('parentp-name', "Parent/Guardian's Name", '', 'text'); ?>
          <span id="parentp_name-error" class="text-danger"></span>
        </div>

        <div class="form-group signature">
          <?php echo render_input('signature', "Signature hypothetically", '', 'text'); ?>
          <span id="_namesignature" class="text-danger"></span>
        </div>

        <div class="form-group date">
          <?php echo render_input('date', "Date", date("Y-m-d"), 'text'); ?>
        </div>

      </div>

      <div class="panel-footer text-center">
        <button type="submit" autocomplete="off" id="camper_register_btn" class="btn btn-primary">
          <?php echo 'Submit'; ?>
        </button>
      </div>
      <?php echo form_close(); ?>
    </div>
  </div>
</div>

<script>
  const form = document.getElementById('camper-registration-form');
  const submitButton = document.getElementById('camper_register_btn');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const flag = {}; //flags to catch empty radio buttons cause they're stupid
  var disabledInputs = ['illness', 'medication', 'disability', 'allergies', 'contribution'];
  var conducts = ['respect', 'harasment', 'facilities', 'language', 'safety', 'rules'];

  $(document).ready(function() { //camp location filter using constituency
    const areas = $('#constituency');
    const locations = $('[name="camp-location"]');

    // added new
    var elements = document.querySelectorAll('.select-placeholder');
    elements.forEach(function(element) {
      element.classList.remove('select-placeholder');
    });

    disabledInputs.forEach((disabledInput) => {
      disableTextBox(disabledInput)
    })
    document.getElementById('date').disabled = true;


    const options = areas.find('option').toArray();

    // Filtering out unique options
    const uniqueOptions = options.filter((option, index, self) =>
      index === self.findIndex((o) => (
        $(o).text() === $(option).text()
      ))
    );

    areas.empty();
    uniqueOptions.forEach(option => {
      areas.append(option);
    });

    areas.on('change', function() {
      const selectedArea = $('#constituency option:selected').text();

      $.post(window.location.href + '/get_filtered_locations', {
          area: selectedArea
        })
        .done(function(response) {
          response = JSON.parse(response);
          if (response.success === true) {
            const uniqueLocations = {};
            locations.empty();
            response.filtered_locations.forEach(item => {
              if (!uniqueLocations[item.location]) {
                uniqueLocations[item.location] = true;
                locations.append(new Option(item.location, item.location));
                locations.selectpicker('refresh')
              }
            });
          }
        });
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitButton.setAttribute('data-loading-text', '<?php echo _l('wait_text'); ?>');

    const formData = {
      camp_location: getValue('camp-location'),
      camper_name: getValue('camper-name'),
      dob: getValue('dob'),
      age: getValue('age'),
      national_id: getValue('national-id'),
      gender: getCheckedValue('gender'),
      religion: getCheckedValue('religion'),
      parent_name: getValue('parent-name'),
      relationship: getValue('relationship'),
      address: getValue('address'),
      email: getValue('email'),
      company: getValue('company'),
      phonenumber: checkPhoneNumber(),
      curriculum: checkCurriculum(),
      illness: getOptionalValue('illness-details'),
      medication: getOptionalValue('medication-details'),
      disability: getOptionalValue('disability-details'),
      allergies: getOptionalValue('allergies-details'),
      nutrition_program: getCheckedValue('nutrition-program'),
      contribution: getOptionalValue('contribution-amount'),
      doctor_name: getValue('doctor-name'),
      doctor_number: getValue('doctor-number'),
      participation_exceptions: getValue('participation-exceptions')
    };

    const errors = validateForm(formData);
    Object.assign(errors, validateFlags(flag), validateConduct(conducts));
    displayErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data: ", formData);
      form.submit();
    } else {
      submitButton.removeAttribute('data-loading-text');
    }
  });

  function checkCurriculum() {
    var damn = ['art-culture', 'innovation', 'youth-empowerment', 'sports-development', 'self-management-tools']
    var isChecked = [];
    damn.forEach((i) => {
      isChecked.push(document.getElementById(i).checked);
    })

    return isChecked.includes(true)
  }

  function checkPhoneNumber() {
    var phoneNumberID = ['home-number', 'work-number', 'cell-number'];
    var hasValue = [];

    phoneNumberID.forEach((i) => {
      var element = document.getElementById(i);
      if (element) {
        hasValue.push(element.value.trim() !== '');
      } else {
        hasValue.push(false);
      }
    });

    return hasValue.includes(true);
  }

  function getValue(id) {
    return document.getElementById(id).value.trim();
  }

  function disableTextBox(id) {
    document.getElementById(id).disabled = true;
    document.getElementById(id).value = '';
  }

  function enableTextBox(id) {
    document.getElementById(id).disabled = false;
  }

  function getOptionalValue(name) {
    const input = document.querySelector(`input[name="${name}"]`);
    return input ? input.value : null;
  }

  function getCheckedValue(name) {
    const checkedInput = document.querySelector(`input[name="${name}"]:checked`);
    if (checkedInput) {
      return checkedInput.value;
    } else {
      flag[name] = null;
      return null;
    }
  }

  function getCheckedValues(name) {
    const checkedInputs = document.querySelectorAll(`input[name="${name}"]:checked`);
    if (checkedInputs) {
      return checkedInputs.value;
    } else {
      flag[name] = null;
      return null;
    }
  }

  function validateForm(formData) {
    const errors = {};

    for (const key in formData) {
      if (!formData[key] && !['illness', 'medication', 'disability', 'allergies', 'contribution', 'participation_exceptions'].includes(key)) {
        const formattedKey = capitalizeAndFormatKey(key);
        errors[key] = `${formattedKey} is required`;
      }
    }

    if (formData.gender === null) {
      errors.gender = "Gender is required";
    }
    if (formData.camper_name.length > 100) {
      errors.camper_name = "Child's name must be less than 100 characters";
    }
    if (formData.age > 15 || formData.age < 4) {
      errors.age = 'Child must be between 4 and 16';
    }
    if (formData.national_id.length !== 10) {
      errors.national_id = 'Barbadian national IDs are 10 numbers long';
    }
    if (formData.parent_name.length > 100) {
      errors.parent_name = "Parent's name must be less than 100 characters";
    }
    if (formData.relationship.length > 50) {
      errors.relationship = "Only the type of relation is needed";
    }
    if (formData.address.length > 100) {
      errors.address = 'Address must be less than 100 characters';
    }
    if (getValue('home-number').length > 0 && getValue('home-number').length < 7) {
      errors.phonenumber = "Phone number must be at least 7 characters";
    }
    if (getValue('work-number').length > 0 && getValue('work-number').length < 7) {
      errors.phonenumber = "Phone number must be at least 7 characters";
    }
    if (getValue('cell-number').length > 0 && getValue('cell-number').length < 7) {
      errors.phonenumber = 'Phone number must be at least 7 characters';
    }
    if (formData.email.length > 100) {
      errors.email = 'Email must be less than 100 characters';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email';
    }
    if (formData.company.length > 50) {
      errors.company = 'Company must be less than 50 characters';
    }
    if (formData.doctor_name.length > 100) {
      errors.doctor_name = "Doctor's name or Polyclinic must be less than 100 characters";
    }
    if (formData.doctor_number.length < 7) {
      errors.doctor_number = 'Phone number must be at least 7 characters';
    }
    if (formData.participation_exceptions.length > 150) {
      errors.participation_exceptions = 'Participation exceptions must be less than 150 characters';
    }
    if (!formData.camper_name || formData.camper_name !== getValue('camperp-name')) {
      errors.camperp_name = "Child's names must match";
    }
    if (!formData.parent_name || formData.parent_name !== getValue('parentp-name')) {
      errors.parentp_name = "Parent's names must match";
    }
    if (!getValue('constituency')) {
      errors.constituency = "Constituency is required";
    }

    return errors;
  }

  function capitalizeAndFormatKey(key) {
    var key = key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

      console.log(key)
      return key
  }

  function validateFlags(flags) {
    const errors = {};
    for (const key in flags) {
      if (flags[key] === null) {
        const formattedKey = capitalizeAndFormatKey(key);
        errors[key] = `${formattedKey} is required`;
      }
    }
    return errors;
  }

  function validateConduct(conducts) {
    const errors = {};
    conducts.forEach(conduct => {
      if (!document.querySelector(`input[name="${conduct}"]:checked`)) {
        errors[conduct] = `${conduct.charAt(0).toUpperCase() + conduct.slice(1)} conduct terms must be agreed to`;
      }
    });
    return errors;
  }

  function displayErrors(errors) {
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach(element => {
      const key = element.id.replace('-error', '');
      if (errors[key]) {
        element.textContent = errors[key];
      } else {
        element.textContent = '';
      }
    });
  }
</script>
