function navigateTo(section) {
  const content = document.getElementById('content');

  switch (section) {
    case 'home':
      content.innerHTML = `
        <h1 style="color: blue;">Welcome to Our Junior College of Education Bharne(D.EL.ED)</h1>
        <h1 style="color: #004080;">Welcome to Our Junior College of Education Bharne(D.EL.ED)</h1>
            </div>
        <p style="color: green;">This is the home page navigation.</p>`;
        
      break;
/* adding case about to add image in it achange in h32 left ride of page
if first div left delete than shows horizontol image single p if type right shows only right side
if want right side changes in js
in style.css img width original 100%*/
case 'about':
  content.innerHTML = `
    <div class="about-section">
      <div class="about-left">
      <h2>About Us</h2>
      <h3><p>Maangement Our Institue</p></h3>
        <img src="ground.jpg" alt="School Image">
        <p>Khed taluka in ratnagiri is supposed as a village area.Many children from this village had to go to the city for completing their higher education.Mr.Kadam T.B was a social worker.</p>It was always his opinion that the students from khed must not wander for their education. And he also was of the opinion that there should be a school built in the main place of the city. And it didn't remain as a dream but with the help of Mr.Kothare and their friends he established a sanstha named as Kunabi Shikshan Sanstha in the year 1978</p>With a view that the students must get perfect education to develop the society and to develop best teachers from the same village Mr.Kadam established a D.El.Ed college at Bharne.</p>He did not even think of his family and himself and started the management of the college. And that is the reason why till today there are thousands of poor and backward people who are able to satisfy the daily necessities of their family and themselves.</p>Many poor students are provided with the free education. Due to this not only the teachers from Ratnagiri district but also in Maharashtra who have received the degree always praise this college. Also he established primary schools, High schools Junior colleges at various places.
</p>
      </div>
      <div class="about-right">
        <!-- Blank right side for spacing -->
      </div>
    </div>
  `;
  break;
case 'management':
      content.innerHTML = `
        <h1>Management Our Institue</h1>
        <p>Kunabi Shikshan Prasarak Sanstha Khed(Mumbai)
        <br>Regs. No. E-6771/78
        <br>Office -555/53, Chamelivadi, N.M. Joshi Marg, Mumbai -400011
        <br>Vibhagiy Karyalay:-  Navbharat High Scchool & Junior College Compound A/P- Bharne, Tal Khed, Dist-Ratnagiri
        <br>Contact No: 9423991904 / 8412061968
        <p>Comitee Members</p>
               <div class="col-12 col-md-9">
          <div class="container">
    
            <div class="founder" style="border:1px solid black; width:100px;padding:10px;margin:20px">
    
                <center>
                    <h5 class="headingstyle">The Founder</h5>
                    <img src="founder.jpg">
    
                    <b>Secretary,</b> <br>
                    Kunbi Shikshan Prasarak Sanstha Khed, Mumbai
                </center>
                  
            </div> `;
      break;
  


    case 'staff':
      content.innerHTML = `
        <h1>Staff Profile</h1>
        <p>Our faculty includes experienced professionals and dedicated educators committed to student success.</p>
       <tr>
              <td>staff profile<td>
              <td><a href="doc/staff.pdf">View PDF</a></td>
            </tr>
        `;
      break;

    case 'admission':
      content.innerHTML = `
        <h1>Admission Process of  D.El.Ed College Bharne</h1>
        <p> <h3>Medium- Marathi Uniform-</h3></p>
For Boys- Navy Blue trousers &
<br>white shirt
<br>For Girls- Pink Punjabi dress
<strong><br>For lesson-</strong>
<br>For boys- White shirt & White
trousers
<br>For Girls - White sari & white
blouse
<h3>Social Reservations-</h3>
      <table class="table">
          <thead>
            <tr>
              <td scope="col">Flood affected-3%</td>
            </tr>
          </thead>
           <thead>
            <tr>
              <td scope="col">Handicraft-3%</td>
            </tr>
          </thead>                        
            <tr>
              <td>X-soldier-3%</td>
              <td>Soldier(student)-2%</td>             
            </tr>
            <tr>
              <td>Widow,divorced, orphan-2%</td>             
            </tr>
             <tr>
           <td>Freedom fighter(student)- 1%</td>                          
            </tr>
      <table class="table">
      <h3>Reserved Seats-</h3>
          <thead>
            <tr>
             <td scope="col">Reservation for backward class student in the following manner</td>
            </tr>
          </thead>                   
            <tr>
              <td>NTC-3.5%,</td>
              <td> S.T- 7%,</td>  
                <td>  VJA-3%</td>           
            </tr>
            <tr>     
              <td>NTB-2.5%,</td> 
              <td>SC-13%,</td>
              <td>NTD-2%</td>               
            </tr>
<tr>
<td>SBC-2%</td>
<td> OBC-17%</td>
</tr>
<table class="table">
      <h3>Reservation By Faculty-</h3>            
</p>
            <p>Arts-40%
<br>Science-50%
<br>Commerce-9% 
<br>MCVC-1%
</p>
<p>
<h3>D.El.Ed Admission Rules & Regulations<h3>
<h3>1.Definition</h3>
1.1 Diploma in Teacher Education(D.T.Ed) is higher secondary certificate examination (12th pass) or certificate of diploma in teaching granted by Maharashtra State Board of Primary
<p>1.2 D.I.E.T- District Institute of Educational Training is Govt.approved center established to increase the status of teachers training institute & to give proper training to the district
<p>1.3 Applicant is a person eligible as per the rules placed under 5.1 & 5.2
<p>1.4 Training before service means training given to be economically eligible for the post of Primary Teacher in Maharashtra state
<p>1.5 Government means the Maharashtra Govt. and region means the educational region which comes under Maharashtra Govt.
<p>1.6 National Council for Teacher Education (NCTE) is a statutory body of the Govt. of India
<p>1.7 Chairman, M.S Educational Research Center (MSCERT) is the chairman of Maharashtra State Council of Educational Research Training
<p>1.8 Approved center means primary teachers training center which has approval from NCTE
<p>1.9 Approved Adhyapak vidyalaya are those colleges dealing with Diploma in Teachers Training which has approval from NCTE, chairman(MSCERT), includes all aided and non-aided D.Ed colleges
<p>1.10 Aided ceters are those which are given grants by the Govt.
<p>1.11 Non-aided D.Ed colleges are those approved colleges who does not gate any grants from the Govt. 
<p>1.12 Maharashtra State Council of Examination means a committee which organizes Govt. examinations school education
<p>1.13 Hilly region is school education department no. TCM-1897(23/97)
<p>1.14 Minority centers are those Govt.approved religion & linguistic minority centers
</p>
<p><h3>2.Scope</h3>
These rules are applicable to all the D.El.ED colleges of Maharashtra State who have approval from (MSCERT)</p>
3(A)-Admission Quota-
<p>Admissions areas per the approved rules of admission capacity as per the Govt.quota & management quota for the D.El.ED colleges
<p>3(B)- Place where the prospectus will be given & taken-
</p>3.1 The prospectus will be given & received at Adhyapak Vidyalay Bharne, Tal-Khed,Dist-Ratnagiri. The same will be declared in the newspaper at the time of admission
</p>3.2 Price of prospectus- Rs.200/- (for OPEN)
</p>Price of prospectus- Rs. 100/- (for ST,SC, VJA,NT, OBC,SBC)

<p><h4>Admission selection, Decision & some rights & duties of regulation department-</h4>
4.1 Collection of the applicant from the applicant by giving the advertisement in the newspaper
<p>4.2 Bifurcation of the received applications & preparing the merit list
<p>4.3 Giving admissions as per the procedure taking into consideration the rules framed at the state & district level from time to time as per the merit list of the faculty,medium & reservation

<p><h3>5.Elligibility</h3>
<br>5.1 Person interested in taking the admission for D.Ed must have passed the Maharashtra State Board of Secondary education (12th pass) with minimum 45% of marks
<br>5.2 A person who has passed CBSE or ICSE board examination will be eligible at all he has his domicile in Maharashtra state. Such person must have letter regarding his domicile with the approval of collector of the district. The percentage of such an applicant will be calculated as per the certificate of Maharashtra State Higher Secondary Board education & English must be one of the subjects of passing
<br>5.3 The marks obtained by applicant in Maharashtra State Board only will be taken into consideration. And the marks gained by the applicant in some isolated subject will not be taken into consideration.
<br>5.4 The applicant who completed Minimum Competence Vocational Course(M.C.V.C) examination is not eligible for admission. If the applicant has passed any one subject with maximum 200 marks of the optional subject he will be eligible but if the marks in only one subject from the optional subject are more than 200 the applicant is not eligible for the admission
</p>
<p><h3>6.Grace Marks-</h3>
6.1 Sports- National & state level- 3 marks
<p>Certificate is required signed by authorized person for national & state level
<p>Certificate achieved by competitions organized by association will not be taken into consideration.
<p>6.2 Drawing- 3 marks
<p>Must have passed Maharashtra State intermediate examination
<p>6.3 Music- 3marks
<p>Address of Gandharv Mahavidyalay & information that whether the college is approved by the Govt. Must have passed examination like Sangeet Alankar/Sangit Visharad
<p><h3>7.Medium-</h3>
The candidate who wants to apply for the admission should apply in the same medium from which he/<br>she has completed his/her 10th & 12th If the candidate tries unnecessarily there will be no consideration.
</p>`;

      break;

    case 'infrastructure':
      content.innerHTML = `
        <h1>Infrastructure</h1>
        <p>We offer modern labs, a digital library, Wi-Fi-enabled campus, and smart classrooms to enhance learning.</p>

        <div class="infra-gallery">
        <div class="infra-item">
            <img src="campus.jpeg" alt="College Campus">
            <p class="infra-title">College Campus</p>
          </div>
          <div class="infra-item">
            <img src="library.jpeg" alt="Library">
            <p class="infra-title">Library</p>
          </div>
          <div class="infra-item">
            <img src="office.jpeg" alt="Office Room">
            <p class="infra-title">Office</p>
          </div>
          <div class="infra-item">
            <img src="classroom.jpeg" alt="College Classroom">
            <p class="infra-title">College Classroom</p>
          </div>
          <div class="infra-item">
            <img src="corridor.jpeg" alt="Corridor">
            <p class="infra-title">Corridor</p>
          </div>
          
          <div class="infra-item">
            <img src="library2.jpeg" alt=library">
            <p class="infra-title">Library room</p>
          </div>
           <div class="infra-item">
            <img src="corridorclass.jpeg" alt="Class Corridoe">
            <p class="infra-title">Class Corridor</p>
          </div>
          <div class="infra-item">
            <img src=".jpeg" alt="Computer Lab">
            <p class="infra-title">Computer Lab</p>
          </div>
          <div class="infra-item">
            <img src=".jpeg" alt="Multipurpose Hall">
            <p class="infra-title">Multipurpose Hall</p>
          </div>          
        </div>
      `;
      break;

    case 'gallery':
      content.innerHTML = `
        <div class="gallery-section">
          <h1 style="color:blue;">Junior College Of Eduacation Bharne Gallery</h1>
          <div class="carousel-container">
            <div class="carousel-track" id="gallery-track"></div>
          </div>
        </div>
      `;

      const imageUrls = [
        "ground.jpg",
        "https://via.placeholder.com/300x200?text=Event+1",
        "https://via.placeholder.com/300x200?text=Event+2",
        "https://via.placeholder.com/300x200?text=Event+3",
        "https://via.placeholder.com/300x200?text=Event+4",
        "https://via.placeholder.com/300x200?text=Event+5"
      ];

      const galleryTrack = document.getElementById('gallery-track');
      const fullSet = imageUrls.concat(imageUrls);
      fullSet.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "College Event";
        galleryTrack.appendChild(img);
      });
      break;

 case 'documents':
      content.innerHTML = `
        <h1>Documents</h1>
        <h3>NCT</h3>
         <tr>
              <td>NCT Recognition</td>
              <td><a href="doc/nct01.pdf">View PDF</a></td>
              <td><a href="doc/2rewise order.pdf">View PDF2</a></td>
              <td><a href="doc/3DCF 2023-2024.pdf">View PDF3</a></td>
            </tr>
            
        <h3>Our college Fee</h3>
         <tr>
              
              <td>Fee Structure</td>
              <td><a href="doc/Approved Fees.pdf">View PDF</a></td>
            </tr>`;
      break;
    case 'contact':
      content.innerHTML = `
        <h1>Contact Us</h1>
        <p><h2>College Address:</h2> Kunabi Shikhshan Prasarak<br> Sanstha Khed,Mumbai <br> Adhyapak Vidyalaya Bharne <br> Tal-Khed, <br> Dist-Ratnagiri<br>(Maharashtra)<br>pin-415621<br>Tel No: 02356-263461<br>Email:<a href="dtedbharne@yahoo.com">dtedbharne@yahoo.com</a><br>Fex No: 02356-263461<br><H3>Visit Us at:</h3><a href="www.deledbharne.com">www.deledbharne.com</a></p>`;
      break;
  }
}
