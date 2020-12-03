function ImageSetter(input, target) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            target.attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(".imgInp").change(function() {
    var imgDiv = $(this).data('id');
    imgDiv = $('#' + imgDiv);
    ImageSetter(this, imgDiv);
});


var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];

// var n = 1;
var x = 0;

var numberOfRows = 0;

//getData
function AddRow() {
    list1[numberOfRows] = document.getElementById("name").value;
    list2[numberOfRows] = document.getElementById("nights").value;
    list3[numberOfRows] = document.getElementById("room").value;
    list4[numberOfRows] = document.getElementById("food").value;
    list5[numberOfRows] = document.getElementById("price").value;
    list6[numberOfRows] = document.getElementById("dataa").value;
    list7[numberOfRows] = document.getElementById("textare").value;

    var data = { list1, list2, list3, list4, list5, list6, list7 }

    localStorage.setItem('data', JSON.stringify(data));

    numberOfRows++;
    localStorage.setItem("numberOfRows", JSON.stringify(numberOfRows));



    window.open('tablePage.html', '_blank')
}



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

btn.addEventListener("click", addPage)