<?php
//print_r($data);
$cities = '{"Karnataka":["Bagalkot","Bangalore","Bangalore Rural","Belgaum","Bellary","Bidar","Bijapur","Chamrajnagar","Chickmagalur","Chitradurga","Dakshina Kannada","Davangare","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Dharward","Koppal","Uttara Kannada","Koduru","Jaya Nagar","Bangalore Central","Bangalore Peenya","Vijay Nagar","Nelamangla","Koramangala","Bangalore South","Jigni","Bhagalkot","Devanagere","Dharwad","Hubli","Harihar","Hospet","Karwar Franchisee","Raichure","Ranebennur","Sankeshwar","Chikamangalur","Mangalore","Manipal","Nanjangud","Puttur","Amazon Bangalore","Bangalore East","Bangalore K R Puram","White Field"],"Delhi":["Central Delhi","East Delhi","New Delhi","North Delhi","North West delhi","South Delhi","South West delhi","West Delhi","Delhi Central","Delhi S G Nagar","Delhi North","Delhi Uttam Nagar","Delhi Laxmi Nagar","Delhi","Nehru Place Owned","Delhi West","Najafgarh"],"Tamil Nadu":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Tiruchirappalli","Tirunelveli","Tiruvallur","Tiruvannamalai","Tiruvarur","Tuticorin Thoothukudi","Vellore","Villupuram","Virudhunagar","Hosur","Annur","Coonor","Mettupalayam","Ooty","Sidco","Tirupur","Marthandam","Sivakasi","Perundurai","Tirichy","Perangudi","Chennai South","Gummdipoondi","Chetpet","Chennai West","Ambur","Arani","Rajiv Gandhi Nagar","Ranipet"],"Uttarakhand":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh nagar","Uttarkashi","Roorkee","Selaqui","Haldwani","Raudrapur","Sitarganj"],"Kerala":["Alappuzha","Ernakulam","Idukki","Kannur","Kasargod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad","Allapuzha","Kasaragod","Kolencheri","Perintalmanna","Palghat","Thodupuzha","Trissur","Trivandrum"],"Andhra Pradesh":["Anantapur","Chittoor","Cuddapah","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Vijayawada"],"Telangana":["Adilabad","Hyderabad","Karim Nagar","Khammam","Mahabubnagar","Medak","Nalgonda","Nizamabad","Rangareddi","Warangal"],"Maharashtra":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal","Mumbai East","Wagle Estate","Mumbai North","Mira Bhayandar","Mahim","Mumbai West","Mumbai(Pnl)","Sanpada(Vashi)","Mahad","Taloja","Ambernath","Bhiwandi Ec","Bhiwandi","Kalyan","Palghar","Tarapur","Vasai Ec","Butibori","Khamgaon","Dhulia","Aurangabad East","Aurangabad(Waluj)","Jalgoan","Nasik","Sinnar","Chiplun","Karad","Pune West","Shirwal","Sawantwadi","Baramati","Jejuri","Kurkumbh","Osmanabad Kumud Nagar","Phursungi","Pune East","Ranjangaon","Sholapur","Pune North","Pune Pirangut"],"Goa":["North Goa","South Goa","Panjim","Margoa"],"Madhya Pradesh":["Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa East nimar","Khargone West nimar","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Tikamgarh","Ujjain","Umaria","Vidisha","Chindwara","Itarsi","Mandideep","Singrauli","Shivpuri Franchisee","Pithampur"],"Gujarat":["Ahmedabad","Amreli","Anand","Banaskantha","Bharuch","Bhavnagar","Dahod","Gandhi Nagar","Jamnagar","Junagadh","Kachchh","Kheda","Mahesana","Narmada","Navsari","Panch Mahals","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendra Nagar","The Dangs","Vadodara","Valsad","Aslali","Ahmedabad East","Chatral","Himmatnagar","Mehsana","Sanand","Ankleshwar","Baroda","Godhra","Halol","Savli","Vallabh Vidyanagar","Bhuj Kutch","Gandhidham","Morbi","Mothikhavadi","Surendranagar","Verawal Fran","Umbergoan","Vapi"],"Rajasthan":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur","Bhiwadi","Jaipur Baisgodam","Jaipur South","Jaipur West","Neemrana","Pilani","Sardarsahar","Sriganganagar Fran","Jalore","Nathdwara","Pali Franchaisee"],"Punjab":["Amritsar","Bathinda","Faridkot","Fatehgarh Sahib","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Nawanshahr","Patiala","Ropar Rupnagar","Sangrur","Bhatinda","Barnala","Malerkotla","Phagwara","Pathankot","Derabassi","Rajpura","Ropar","Zirakpur"],"Haryana":["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar","Ambala City","Saha","Bhorakalan","Bawal","Dharuhera","Gurgaon Imt","Wazirpur","Delhi Stc","Bahadurgarh","Hissar","Sonepat"],"West Bengal":["Bankura","Bardhaman","Birbhum","Cooch Behar","Darjeeling","East Medinipur","Hooghly","Howrah","Jalpaiguri","Kolkata","Malda","Murshidabad","Nadia","North 24 parganas","North Dinajpur uttar","Purulia","South 24 parganas","South Dinajpur dakshin","West Medinipur","Kolkatta","Camac Street","Kolkatta Khanna","Kalyani","Sodepur","Teherpur","Asansol","Bolpur","Burdwan","S.B.Road","Kolkatta South","Durgapur","Kolkata Delivery","Haldia","Howrah Ec","Kharagpur","Coochbihar","Hasimara","Newjalpaiguri"],"Uttar Pradesh":["Ghaziabad","Meerut","Hapur", "Sambhal", "Greater Noida", "Shamli", "Agra","Aligarh","Allahabad","Ambedkar Nagar","Auraiya","Azamgarh","Bagpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Basti","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Jyotiba Phule nagar","Kannauj","Kanpur Dehat","Kanpur Nagar","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sant Kabir nagar","Sant Ravidas nagar","Shahjahanpur","Shrawasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi","Kanpur","Chinihat","Rai Bareli","Maunathbanjan","Renukoot","Bijnore","Bareilly","Modi Nagar","Muzaffar Nagar","Noida","Sahibabad","Bulandshahar"],"Puducherry":["Pondicherry","Karaikal"],"Chandigarh":["Chandigarh"],"Jharkhand":["Ranchi","Dhanbad","Bokaro","Deoghar","Daltanganj","Dumka","Girdhi","Hazaribag","Jamshedpur","Ramgarh"],"Orissa":["Puri"],"Assam":["Kamrup","Bongaigaon","Biswanath Chairali","Barpeta","Dibrugarh","Dhubri","Guwahati","Jorhat","Nagaon","North Lakhimpur","Sivasagar","Tezpur","Tinsukia","Silchar","Karim Ganj"],"Chhattisgarh":["Raipur","Ambikapur","Bhilai","Bilaspur","Champa","Jagdalpur","Korba"],"Bihar":["Araria","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur Bhabua","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran","Aurangabad (Bihar)","Arah","Bihar Shariff","Dharbhanga","Patna West","Raxaul"],"Panjab":["Patiala"],"Andaman and Nicobar":["Portblair"],"Daman and Diu":["Daman"],"Sikkim":["Gangtok","Rangpo"],"Nagaland":["Dimapur"],"Manipur":["Imphal"],"Arunachal Pradesh":["Itanagar"],"Tripura":["Agartala","Kumarghat"],"Meghalaya":["Shillong"],"Odisha":["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"],"Himachal Pradesh":["Amber","Baddi","Dharamshala","Ghumarwin","Kalaamb","Mandi","Simla","Parwano","Solan","Una"],"Jammu and Kashmir":["Budgam", "Anantnag", "Bandipore", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"], "Ladakh":["Kargil", "Leh"], "Lakshadweep":["Lakshadweep"]}';
$decity = json_decode($cities);
 /* $cit = 'Karnataka';
  print_r($decity->$cit);*/
?>
      <li  class="list-group-item" style="float:left;">
        <input type="checkbox" id="selectall" class="selectall" name="selectall" />
        <label for="selectall" class="form-check-label">Select All</label>
      </li>
  <?php 

      foreach ($data as $key1 => $value1) { 
        foreach ($decity->$value1 as $key => $value) {
          // code...
        ?>
      <li key="<?=$key?>" class="list-group-item" style="float: left;margin-left: 2px; ;">
        <input type="checkbox" id="cities_<?=$key?>" class="allct" name="allcities[]" value="<?=$value?>" />
        <label for="cities_<?=$key?>" class="form-check-label"><?php echo $value ?></label>
      </li>
  <?php }

      } 
  ?>                    
<script type="text/javascript">
  $(".selectall").click(function(){
         if($("input:checkbox[name=selectall]:checked").val() == "on") {
            $(".allct").prop("checked", true)
         } else {
            $(".allct").prop("checked", false)
         }
      })
</script>
                   