import React from "react";
import Layout from '../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

import axios from 'axios';

const lookup = {
  states: ['Karnataka', 'Delhi', 'Maharashtra', 'Tamil Nadu', 'Haryana', 'Uttar Pradesh', 'Andhra Pradesh', 'Telangana', 'Rajasthan', 'Chandigarh', 'Gujarat', 'Kerala', 'Punjab', 'West Bengal', 'Puducherry', 'Madhya Pradesh', 'Assam', 'Arunachal Pradesh', 'Bihar', 'Chhattisgarh', 'Goa', 'Himachal Pradesh', 'Jharkhand', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Sikkim', 'Tripura', 'Uttarakhand', 'Andaman and Nicobar', 'Daman and Diu', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep'],
  cities: ["Bagalkot","Bangalore","Bangalore Rural","Belgaum","Bellary","Bidar","Bijapur","Chamrajnagar","Chickmagalur","Chitradurga","Dakshina Kannada","Davangare","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Dharward","Koppal","Uttara Kannada","Central Delhi","East Delhi","New Delhi","North Delhi","North West delhi","South Delhi","South West delhi","West Delhi","Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Tiruchirappalli","Tirunelveli","Tiruvallur","Tiruvannamalai","Tiruvarur","Tuticorin Thoothukudi","Vellore","Villupuram","Virudhunagar","Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh nagar","Uttarkashi","Alappuzha","Ernakulam","Idukki","Kannur","Kasargod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad","Anantapur","Chittoor","Cuddapah","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Adilabad","Hyderabad","Karim Nagar","Khammam","Mahabubnagar","Medak","Nalgonda","Nizamabad","Rangareddi","Warangal","Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal","North Goa","South Goa","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa East nimar","Khargone West nimar","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Tikamgarh","Ujjain","Umaria","Vidisha","Ahmedabad","Amreli","Anand","Banaskantha","Bharuch","Bhavnagar","Dahod","Gandhi Nagar","Jamnagar","Junagadh","Kachchh","Kheda","Mahesana","Narmada","Navsari","Panch Mahals","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendra Nagar","The Dangs","Vadodara","Valsad","Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur","Amritsar","Bathinda","Faridkot","Fatehgarh Sahib","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Nawanshahr","Patiala","Ropar Rupnagar","Sangrur","Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar","Bankura","Bardhaman","Birbhum","Cooch Behar","Darjeeling","East Medinipur","Hooghly","Howrah","Jalpaiguri","Kolkata","Malda","Murshidabad","Nadia","North 24 parganas","North Dinajpur uttar","Purulia","South 24 parganas","South Dinajpur dakshin","West Medinipur","Ghaziabad","Pondicherry","Chandigarh","Ranchi","Karaikal","Meerut","Agra","Aligarh","Allahabad","Ambedkar Nagar","Auraiya","Azamgarh","Bagpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Basti","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Jyotiba Phule nagar","Kannauj","Kanpur Dehat","Kanpur Nagar","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sant Kabir nagar","Sant Ravidas nagar","Shahjahanpur","Shrawasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi","Dhanbad","Puri","Kamrup","Raipur","Araria","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur Bhabua","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran","Koduru","Vijayawada","Bangalore Atc","Jaya Nagar","Bangalore Central","Bangalore Peenya","Vijay Nagar","Nelamangla","Koramangala","Bangalore South","Jigni","Bhagalkot","Devanagere","Dharwad","Hubli","Harihar","Hospet","Karwar Franchisee","Chikodi G Shop","Gangavathi G Shop","Harugeri G Shop","Raichure","Ranebennur","Sankeshwar","Hosur","Bhatkal","Chikamangalur","Mangalore","Manipal","Nanjangud","Puttur","Amazon Bangalore","Bangalore East","Bangalore K R Puram","White Field","Annur","Avinashi","Coonor","Mettupalayam","Ooty","Pollachi","Pollachi G Shop","Sidco","Tirupur","Allapuzha","Kasaragod","Kolencheri","Perintalmanna","Palghat","Kottayam G Shop","Tiruvalla G Shop","Thodupuzha","Trissur","Kalavasal E Shop","Marthandam","Sattur","Sivgangai E Shop","Sivakasi","Thoothukudi ","Tuticorin E Shop","Tirunvelveli E Shop","Kumbakonam E Shop","Perundurai","Tirunchengode","Tirichy","Trivandrum","Hyderabad Tarbund ()","Shadnagar","Hyderabad Central","Hyderabad West","Nizambad","Suryapet","Kakinada","Narsapur","Rajmundary","Visakapatnam ","Chirala","Chilukaluripet","Ongole","Hindupur G Shop","Tirupathi","Portblair","Chennai Atc","Perangudi","Chennai South","Maraimalai Ngar","Gummdipoondi","Chetpet","Chennai West","Ambur","Arani","Rajiv Gandhi Nagar","Ranipet","Aslali","Ahmedabad Atc","Ahmedabad East","Chatral","Himmatnagar","Mehsana","Sanand","Ankleshwar","Baroda","Baroda North","Godhra","Halol","Savli","Vallabh Vidyanagar","Daman","Bhuj Kutch","Gandhidham","Jetpur","Mandvi Franchisee","Morbi","Mothikhavadi","Surendranagar","Verawal Fran","Silvasa","Umbergoan","Vapi","Mumbai Atc","Mumbai East","Wagle Estate","Bomc  Atc","Mumbai North","Mira Bhayandar ","Vasai ","Mahim","Mumbai West","Mumbai(Pnl)","Sanpada(Vashi)","Mahad","Taloja","Ambernath ","Bhiwandi Ec","Bhiwandi","Kalyan","Palghar","Tarapur","Vasai Ec","Chindwara","Itarsi","Mandideep","Singrauli","Shivpuri Franchisee","Pithampur","Butibori","Khamgaon","Nagpur Atc","Ambikapur","Bhilai","Bilaspur","Champa","Jagdalpur","Korba","Kawardha Gshop","Panjim","Margoa","Goa North","Dhulia","Aurangabad East","Aurangabad(Waluj)","Jalgoan ","Nasik","Sinnar","Chiplun","Karad","Pune West","Shirwal","Sawantwadi","Baramati","Jejuri","Kurkumbh","Osmanabad Kumud Nagar","Phursungi","Pune East","Ranjangaon","Sholapur","Srirampur","Tembhurni","Pune Atc","Pune North","Pune Pirangut","Kolkatta Atc","Camac Street","Kolkatta Khanna","Kolkatta","Kalyani","Sodepur","Santipur","Teherpur","Asansol","Bolpur","Burdwan","S.B.Road","Kolkatta South","Durgapur","Falta","Purulia G Shop","Kolkata Delivery","Haldia","Howrah Ec","Kharagpur","Coochbihar","Hasimara","Newjalpaiguri","Gangtok","Rangpo","Dimapur","Bongaigaon","Biswanath Chairali","Barpeta","Dibrugarh","Dhubri","Guwahati","Jorhat","Nagaon","North Lakhimpur","Sivasagar","Tezpur","Tinsukia","Imphal","Itanagar","Agartala","Kumarghat","Silchar","Karim Ganj","Shillong","Bhubaneshwar","Bhubneshwar ","Bargarh","Balasore ","Baripada","Berhampur","Cuttack","Jajpur","Jharsuguda","Khurda","Sunabeda G Shop","Rayagada","Rourkela","Sambhalpur","Talcher","Arah","Bihar Shariff","Dharbhanga","Hazipur","Kishangunj","Patna West","Raxaul","Hazipur Franchisee","Bokaro","Deoghar","Daltanganj","Dumka","Girdhi","Hazaribag","Jamshedpur","Ramgarh","Ambala City","Saha","Amber","Baddi","Dharamshala","Ghumarwin","Kalaamb","Mandi","Nalagarh","Parwano","Simla","Solan","Una","Jammu","Bhatinda","Barnala","Malerkotla ","Phagwara","Pathankot","Derabassi","Rajpura","Ropar","Zirakpur","Delhi Central","Delhi S G Nagar","Delhi North","Delhi Uttam Nagar","Delhi Laxmi Nagar","Delhi","Nehru Place Owned","Delhi West","Najafgarh","Bhiwadi","Jaipur Baisgodam","Jaipur South","Jaipur West","Neemrana","Pilani","Sardarsahar","Sriganganagar Fran","Jalore","Nathdwara","Pali Franchaisee","Kanpur","Orai","Chinihat","Akbarpur Gshop","Hardoi G Shop","Raibareilly","Rai Bareli","Bhadohi","Maunathbanjan","Ballia G Shop","Gazipur G Shop","Jaunpur G Shop","Renukoot","Bhorakalan","Bawal","Dharuhera","Palwal","Gurgaon Imt","Wazirpur","Delhi Stc","Bahadurgarh","Hissar","Bhiwani G Shop","Jhajhar G Shop","Sirsa G Shop","Sonepat","Manipuri G Shop","Bijnore","Bareilly","Kotdwar G Shop","Rishikesh G Shop","Uttarakashi G Shop","Roorkee","Selaqui","Modi Nagar","Muzaffar Nagar","Noida","Sahibabad","Bulandshahar","Haldwani","Kashipur","Almora G Shop","Raudrapur","Sitarganj","Budgam","Anantnag","Bandipore","Baramulla","Doda","Ganderbal","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur","Kargil","Leh","Fazilka","Ferozepur","Nawanshahr/Shahid Bhagat Singh Nagar","Rupnagar","Sahibzada Ajit Singh Nagar/Mohali","Tarn Taran","Chamba","Kangra","Kinnaur","Kullu","Lahaul & Spiti","Shimla","Sirmaur","Nuh","Yamunanagar","Shahdara","Amethi","Amroha","Baghpat","Gautam Buddha Nagar/Noida","Hapur","Kanshiram Nagar (Kasganj)","Kushinagar (Padrauna)","Lakhimpur - Kheri","Sambhal (Bhim Nagar)","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Agar Malwa","Alirajpur","Khandwa","Khargone","Kallakurichi","Tenkasi","Tirupathur","Tiruppur","Viluppuram","Bhadradri Kothagudem","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Komaram Bheem Asifabad","Mahabubabad","Mancherial","Medchal","Nagarkurnool","Nirmal","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri","Lakshadweep","Mahe","Puducherry","Yanam","Arwal","Kaimur","Alipurduar","Dakshin Dinajpur","Jhargram","Kalimpong","Paschim Medinipur","Paschim","Purba Burdwan","Purba Medinipur","Uttar Dinajpur","Baksa","Biswanath","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dima Hasao","Goalpara","Golaghat","Hailakandi","Hojai","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nalbari","Sonitpur","South Salamara-Mankachar","Udalguri","West Karbi Anglong","Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto","Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills","Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura","East Sikkim","North Sikkim","South Sikkim","West Sikkim","Mumbai City","Mumbai Suburban","Diu","Aravalli","Botad","Chhota Udepur","Dangs","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Mahisagar","Panchmahal","Tapi","Dadra & Nagar","Haveli","Angul","Balangir","Bhadrak","Boudh","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Sambalpur","Sonepur","Sundargarh","Chatra","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum","Balod","Baloda Bazar","Bastar","Bemetara","Dantewada","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korea","Mahasamund","Mungeli","Narayanpur","Raigarh","Rajnandgaon","Sukma","Surajpur","Surguja","Nicobar","North and Middle Andaman","South Andaman"],
};
const cityMaps = {"Karnataka":["Bagalkot","Bangalore","Bangalore Rural","Belgaum","Bellary","Bidar","Bijapur","Chamrajnagar","Chickmagalur","Chitradurga","Dakshina Kannada","Davangare","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Dharward","Koppal","Uttara Kannada","Koduru","Jaya Nagar","Bangalore Central","Bangalore Peenya","Vijay Nagar","Nelamangla","Koramangala","Bangalore South","Jigni","Bhagalkot","Devanagere","Dharwad","Hubli","Harihar","Hospet","Karwar Franchisee","Raichure","Ranebennur","Sankeshwar","Chikamangalur","Mangalore","Manipal","Nanjangud","Puttur","Amazon Bangalore","Bangalore East","Bangalore K R Puram","White Field"],"Delhi":["Central Delhi","East Delhi","New Delhi","North Delhi","North West delhi","South Delhi","South West delhi","West Delhi","Delhi Central","Delhi S G Nagar","Delhi North","Delhi Uttam Nagar","Delhi Laxmi Nagar","Delhi","Nehru Place Owned","Delhi West","Najafgarh"],"Tamil Nadu":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Tiruchirappalli","Tirunelveli","Tiruvallur","Tiruvannamalai","Tiruvarur","Tuticorin Thoothukudi","Vellore","Villupuram","Virudhunagar","Hosur","Annur","Coonor","Mettupalayam","Ooty","Sidco","Tirupur","Marthandam","Sivakasi","Perundurai","Tirichy","Perangudi","Chennai South","Gummdipoondi","Chetpet","Chennai West","Ambur","Arani","Rajiv Gandhi Nagar","Ranipet"],"Uttarakhand":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh nagar","Uttarkashi","Roorkee","Selaqui","Haldwani","Raudrapur","Sitarganj"],"Kerala":["Alappuzha","Ernakulam","Idukki","Kannur","Kasargod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad","Allapuzha","Kasaragod","Kolencheri","Perintalmanna","Palghat","Thodupuzha","Trissur","Trivandrum"],"Andhra Pradesh":["Anantapur","Chittoor","Cuddapah","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Vijayawada"],"Telangana":["Adilabad","Hyderabad","Karim Nagar","Khammam","Mahabubnagar","Medak","Nalgonda","Nizamabad","Rangareddi","Warangal"],"Maharashtra":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal","Mumbai East","Wagle Estate","Mumbai North","Mira Bhayandar","Mahim","Mumbai West","Mumbai(Pnl)","Sanpada(Vashi)","Mahad","Taloja","Ambernath","Bhiwandi Ec","Bhiwandi","Kalyan","Palghar","Tarapur","Vasai Ec","Butibori","Khamgaon","Dhulia","Aurangabad East","Aurangabad(Waluj)","Jalgoan","Nasik","Sinnar","Chiplun","Karad","Pune West","Shirwal","Sawantwadi","Baramati","Jejuri","Kurkumbh","Osmanabad Kumud Nagar","Phursungi","Pune East","Ranjangaon","Sholapur","Pune North","Pune Pirangut"],"Goa":["North Goa","South Goa","Panjim","Margoa"],"Madhya Pradesh":["Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa East nimar","Khargone West nimar","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Tikamgarh","Ujjain","Umaria","Vidisha","Chindwara","Itarsi","Mandideep","Singrauli","Shivpuri Franchisee","Pithampur"],"Gujarat":["Ahmedabad","Amreli","Anand","Banaskantha","Bharuch","Bhavnagar","Dahod","Gandhi Nagar","Jamnagar","Junagadh","Kachchh","Kheda","Mahesana","Narmada","Navsari","Panch Mahals","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendra Nagar","The Dangs","Vadodara","Valsad","Aslali","Ahmedabad East","Chatral","Himmatnagar","Mehsana","Sanand","Ankleshwar","Baroda","Godhra","Halol","Savli","Vallabh Vidyanagar","Bhuj Kutch","Gandhidham","Morbi","Mothikhavadi","Surendranagar","Verawal Fran","Umbergoan","Vapi"],"Rajasthan":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur","Bhiwadi","Jaipur Baisgodam","Jaipur South","Jaipur West","Neemrana","Pilani","Sardarsahar","Sriganganagar Fran","Jalore","Nathdwara","Pali Franchaisee"],"Punjab":["Amritsar","Bathinda","Faridkot","Fatehgarh Sahib","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Nawanshahr","Patiala","Ropar Rupnagar","Sangrur","Bhatinda","Barnala","Malerkotla","Phagwara","Pathankot","Derabassi","Rajpura","Ropar","Zirakpur"],"Haryana":["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar","Ambala City","Saha","Bhorakalan","Bawal","Dharuhera","Gurgaon Imt","Wazirpur","Delhi Stc","Bahadurgarh","Hissar","Sonepat"],"West Bengal":["Bankura","Bardhaman","Birbhum","Cooch Behar","Darjeeling","East Medinipur","Hooghly","Howrah","Jalpaiguri","Kolkata","Malda","Murshidabad","Nadia","North 24 parganas","North Dinajpur uttar","Purulia","South 24 parganas","South Dinajpur dakshin","West Medinipur","Kolkatta","Camac Street","Kolkatta Khanna","Kalyani","Sodepur","Teherpur","Asansol","Bolpur","Burdwan","S.B.Road","Kolkatta South","Durgapur","Kolkata Delivery","Haldia","Howrah Ec","Kharagpur","Coochbihar","Hasimara","Newjalpaiguri"],"Uttar Pradesh":["Ghaziabad","Meerut","Agra","Aligarh","Allahabad","Ambedkar Nagar","Auraiya","Azamgarh","Bagpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Basti","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Jyotiba Phule nagar","Kannauj","Kanpur Dehat","Kanpur Nagar","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sant Kabir nagar","Sant Ravidas nagar","Shahjahanpur","Shrawasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi","Kanpur","Chinihat","Rai Bareli","Maunathbanjan","Renukoot","Bijnore","Bareilly","Modi Nagar","Muzaffar Nagar","Noida","Sahibabad","Bulandshahar"],"Puducherry":["Pondicherry","Karaikal"],"Chandigarh":["Chandigarh"],"Jharkhand":["Ranchi","Dhanbad","Bokaro","Deoghar","Daltanganj","Dumka","Girdhi","Hazaribag","Jamshedpur","Ramgarh"],"Orissa":["Puri"],"Assam":["Kamrup","Bongaigaon","Biswanath Chairali","Barpeta","Dibrugarh","Dhubri","Guwahati","Jorhat","Nagaon","North Lakhimpur","Sivasagar","Tezpur","Tinsukia","Silchar","Karim Ganj"],"Chhattisgarh":["Raipur","Ambikapur","Bhilai","Bilaspur","Champa","Jagdalpur","Korba"],"Bihar":["Araria","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur Bhabua","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran","Aurangabad (Bihar)","Arah","Bihar Shariff","Dharbhanga","Patna West","Raxaul"],"Panjab":["Patiala"],"Andaman and Nicobar":["Portblair"],"Daman and Diu":["Daman"],"Sikkim":["Gangtok","Rangpo"],"Nagaland":["Dimapur"],"Manipur":["Imphal"],"Arunachal Pradesh":["Itanagar"],"Tripura":["Agartala","Kumarghat"],"Meghalaya":["Shillong"],"Odisha":["Bhubaneshwar","Bhubneshwar","Bargarh","Balasore","Baripada","Berhampur","Cuttack","Jajpur","Jharsuguda","Khurda","Puri","Rourkela","Sambhalpur","Talcher"],"Himachal Pradesh":["Amber","Baddi","Dharamshala","Ghumarwin","Kalaamb","Mandi","Simla","Parwano","Solan","Una"],"Jammu and Kashmir":["Budgam", "Anantnag", "Bandipore", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"], "Ladakh":["Kargil", "Leh"], "Lakshadweep":["Lakshadweep"]};
class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "states",
      city: "cities",
      check: null,
      mapCity: "Karnataka",
      allStates:[],
      allCities: []
    };
    this.showStates = []
    this.showCities = []
    this.handleInputChange = this.handleInputChange.bind(this);

    //this.onChange = this.onChange.bind(this);
  }

  /*onChange = async event => {
    if(event.target.name == "")
    this.setState({file:e.target.files[0]})
  }*/
  registerUser = async event => {

    event.preventDefault()
    
    console.log("JSONOBJECT", JSON.stringify(this.state.allStates))
    var sendReq = {
        brand: event.target.brand.value,
        post: event.target.post.value,
        asm: event.target.asm.value,
        name: event.target.name.value,
        mobile: event.target.mobile.value,
        address: event.target.address.value,
        email: event.target.email.value,
        states: JSON.stringify(this.state.allStates),
        cities: JSON.stringify(this.state.allCities)
    }

    console.log("SEND REQ", sendReq)
    const res = await fetch(
      `${process.env.basepath}api/register/`,
      {
        body: JSON.stringify(sendReq),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    ).then((response) => response.json());
    console.log("REST", res)
    alert("User details added successfully!")
  }

  handleInputChange(event) {

      if(event.target.name == "allStates") {
        const target = event.target;
        //this.state.mapCity = [];
        var value = target.value;
        
        if(target.checked){
            //this.state.mapCity=value
            this.setState({ mapCity: value });
            this.showStates.push(value)
            this.setState({ allStates: this.showStates });
        }else{
            this.showStates.splice(value, 1)
            this.setState({ allStates: this.showStates });
        }
      } else {
        const target = event.target;
        var value = target.value;
        if(target.checked){
            this.showCities.push(value)
            this.setState({ allCities: this.showCities }); 
        } else {
          this.showCities.splice(value, 1)
          this.setState({ allCities: this.showCities });
        }
      }  

      
      /*for(var ind in this.state.allStates) {
         console.log(this.state.allStates[ind])
         this.state.mapCity.push(cityMaps.this.state.allStates[ind])
      }*/
      
      //console.log(this.state.allStates)
  }


  render() {
    const { dataValue } = this.state;
    const { city } = this.state
    const { mapCity } = this.state
    const options = lookup[dataValue];
    const { allStates } = this.state
    const cityOptions = cityMaps[mapCity];
    //alert(cityOptions)
    console.log("inside render", allStates)
    console.log("BASE", process.env.basepath)
    return (
        <Layout>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-3 col-md-4">
                <form onSubmit={this.registerUser}>
                  <div class="form-group">
                    <label for="brand">Brand</label>
                    <select name="brand" class="form-control" id="brand" required>
                      <option value="livguard">Livguard Solar</option>
                      <option value="Livfast">LivFast Solar</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="post">Position</label>
                    <select name="post" class="form-control" id="post" required>
                      <option value="ASM">ASM</option>
                      <option value="SE">SE</option>
                      <option value="TSI">TSI</option>
                      <option value="SED">SED</option>
                      <option value="SD">SD(Distributors)</option>
                      <option value="SDH">SDH(Helper)</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="post">Choose ASM(If Required)</label>
                    <select name="asm" class="form-control" id="asm">
                      <option value="">--Choose ASM</option>
                      <option value="66">Jawahar Choudhary</option>
                      <option value="65">Ram Mishra</option>
                      <option value="64">Nikhil Tyagi</option>
                      <option value="63">Sachin Jain</option>
                      <option value="62">Naresh Guliya</option>
                      <option value="61">Atul Sharma</option>
                      <option value="50">Mrityunjay</option>
                      <option value="49">Beljin</option>
                    </select>
                  </div>
                 
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" name="name" class="form-control" id="name" required/>
                  </div>
                  <div class="form-group">
                    <label for="mobile">Mobile</label>
                    <input type="tel" name="mobile" maxlength="10" pattern="[0-9]{10}" class="form-control" id="mobile" required/>
                  </div>
                  <div class="form-group">
                    <label for="email">Company Email address:</label>
                    <input type="email" name="email" placeholder="Official Email"  class="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" name="address" placeholder="Address"  class="form-control" id="address" />
                  </div>
                  <div class="row">
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="state">Your Area of Operation - States</label>
                        <ul class="list-group list" style={{ height: 200, overflow: 'scroll' }}>                       
                          {options.map((o, index) => (
                            <li class="list-group-item">
                              <input type="checkbox" name="allStates" value={o} class="form-check-input" id={`${index}_state`} onChange={this.handleInputChange} />
                              <label class="form-check-label" for={`${index}_state`}>{o}</label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="city">City</label>
                        <ul class="list-group" style={{ height: 200,overflow: 'scroll' }}>
                          {allStates.map((o, index) => (
                            cityMaps[o].map((sho, indexv) => (
                              <li class="list-group-item">
                                <input type="checkbox" name="allCities" value={sho} class="form-check-input" id={`${indexv}_city`} onChange={this.handleInputChange} />
                                <label class="form-check-label" for={`${indexv}_city`}>{sho}</label>
                              </li>
                            ))
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
          </div>
           
        </Layout>
    );
  }
}

export default Register;
