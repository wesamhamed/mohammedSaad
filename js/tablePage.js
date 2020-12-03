function fillTable() {

  var numberOfRows = JSON.parse(localStorage.getItem("numberOfRows"));
  let data = JSON.parse(localStorage.getItem('data'));
  // console.log(data)
  var AddRown = document.getElementById('show');



  for (let i = 0; i < numberOfRows; i++) {
    var NewRow = AddRown.insertRow(i + 1);
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);

    if (data != null) {
      var {
        list1,
        list2,
        list3,
        list4,
        list5,
        list6,
        list7
      } = data;
      cel1.innerHTML = list1[i];
      cel2.innerHTML = list2[i];
      cel3.innerHTML = list3[i];
      cel4.innerHTML = list4[i];
      cel5.innerHTML = list5[i];
      cel6.innerHTML = list6[i];
      cel7.innerHTML = list7[i];
    }
  }


}
fillTable();

document.getElementById("clearTable").addEventListener("click", (event) => {
  console.log("clear");
  localStorage.removeItem("data");
  localStorage.removeItem("numberOfRows");
  location.reload();

});
const btn = document.querySelector('.push-to-add');
let counter = 0;

function addPage(e) {

  e.preventDefault();



  let newRepeating = document.createElement('section');
  newRepeating.className = 'repeating';

  let repeatingForm = `
    <page size="A4">
    <div class="pageThree" style="margin-top: 30px;"> 
  


      <h5 style="text-align: center; padding-top: 50px;"> اضافة صور</h5>
      <div class="form-group row img" >
   
        <label for="inputEmail3" class="col-sm-col-4 form-label"
        style="margin-left: 50px;"></label>
        <div class="">
          <div class="upload-image">
              <input type='file' class="imgInp" data-id='img3' style="cursor: pointer;" />
          </div>
        
          <img id="img3" src="https://i.imgur.com/zAyt4lX.jpg" alt="your image" height="100" />
                
        </div>  
        <div class="" style="float: right;">
          <div class="upload-image">
              <input type='file' class="imgInp" data-id='img4' style="cursor: pointer;" />
          </div>
        
          <img id="img4" src="https://i.imgur.com/zAyt4lX.jpg" alt="your image" height="100" 
          style=" border-radius: 10%; "
          />
                
        </div>  
  
              
        
      </div>
    </div>
  
  </page>
    `;

  newRepeating.innerHTML = repeatingForm;
  btn.previousElementSibling.appendChild(newRepeating);

  counter += 1

}

btn.addEventListener("click", addPage);