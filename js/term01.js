window.onload = function(){ //localStorage에서 값을 찾아 지우기
  for(var i=1; i<5;i++){
    if(localStorage.getItem('gallery'+i+'_child')!= null){ //갤러리 이미지 지우기
      remove('gallery'+i+'_child');
    }
    if(localStorage.getItem('modal'+i)!= null){ //모델창 이미지 지우기
      deleteModal('modal'+i);
      }
  }
  timeslide();//5초마다 이미지 슬라이드 실행
}

function ImageSlide_location() { //ImageSlid로 바로 넘어 감.
  location.href = "#ImageSlide";
}
function Introduce_location() { //Introduce로 바로 넘어 감.
  location.href = "#Introduce";
}
function Gallery_location() { //Gallery로 바로 넘어 감.
  location.href = "#Galleryid";
}
function Guestbook_location() { //Guestbook으로 바로 넘어 감.
  location.href = "#Guestbook";
}
function change_location(){ //새로고침
  location.href="./TP1_HTML_SKELETON.html";
}
function dropDown(){ //DropDown시켜줌.
  var button_click = document.getElementById("drop").classList.toggle("DropDown");
}
function change_img(){ //DropDown메뉴 이미지 바꿈.
  var button_click = document.getElementById("menu_icon");

  if(button_click.getAttribute("src") == "./img/menu_icon.jpg"){ //메뉴바 열기
    button_click.setAttribute("src","./img/x_icon.jpg")
  }
  else{ //메뉴바 닫기
    button_click.setAttribute("src","./img/menu_icon.jpg")
  }
}

//이미지 슬라이드///
var imgindex=0;
function next_image(){ //다음 슬라이드 넘기기
  var image = document.getElementById("back_image");//현재이미지
  var next_image = document.getElementById("back_next_image");//다음 넘어올 슬라이드

  image.setAttribute("src", "./img/img0" + imgindex + ".jpg");

  if(imgindex < 4){ //이미지 인덱스 추가
    imgindex++;
  }
  else{ //이미지끝까지 갈경우 0으로 초기화
    imgindex = 0;
  }

  next_image.setAttribute("src", "./img/img0" + imgindex + ".jpg");
  next_image.style.left = image.offsetWidth + "px";


  var effect = 0; //이미지 크기 변경용

  var pass = setInterval(next, 1); //화면 넘기는 효과
  function next() {
    if (effect == image.offsetWidth) {
      clearInterval(pass);


      if (imgindex != 0) {
        document.getElementById("Dot" + (imgindex - 1)).style = "background-color:white"; //아래 점 색깔바뀌기
        document.getElementById("Dot" + imgindex).style = "background-color:gray";
      } else {
        document.getElementById("Dot4").style = "background-color:white";
        document.getElementById("Dot0").style = "background-color:gray";
      }

      next_image.id = "back_image"; //다음 이미지로 바꾸기
      image.id = "back_next_image"; //다다음 이미지로 바꾸기
      image.style.left = image.offsetWidth + "px";

    } else {
      effect += 15;
      if (effect > image.offsetWidth) {
        effect = image.offsetWidth;
      }
      image.style.left = -effect + "px"; //왼쪽으로 이동
      next_image.style.left = (next_image.offsetWidth - effect) + "px"; //왼쪽으로 이동
    }
  }
}

function prev_image(){//next와 반대의 기능
  var image = document.getElementById("back_image");
  var next_image = document.getElementById("back_next_image");

  image.setAttribute("src", "./img/img0" + imgindex + ".jpg");

  if(imgindex > 0){
    imgindex--;
  }
  else{
    imgindex = 4;
  }

  next_image.setAttribute("src", "./img/img0" + imgindex + ".jpg");
  next_image.style.left = -image.offsetWidth + "px";


  var effect = 0;

  var animation = setInterval(prev, 1);
  function prev() {
    if (effect == image.offsetWidth) {
      clearInterval(animation);


      if (imgindex != 4) {
        document.getElementById("Dot" + (imgindex + 1)).style = "background-color:white";
        document.getElementById("Dot" + imgindex).style = "background-color:gray";
      } else {
        document.getElementById("Dot4").style = "background-color:gray";
        document.getElementById("Dot0").style = "background-color:white";
      }

      next_image.id = "back_image";
      image.id = "back_next_image";
      image.style.left = -image.offsetWidth + "px";

    } else {
      effect += 15;
      if (effect > image.offsetWidth) {
        effect = image.offsetWidth;
      }
      image.style.left = effect + "px";
      next_image.style.left = (-next_image.offsetWidth + effect) + "px";
    }
  }
}

function get_image(index) { //아래 점 눌렀을때 해당 이미지로 이동하게 하는 것
  var image = document.getElementById("back_image");
  var next_image = document.getElementById("back_next_image");

  image.setAttribute("src", "./img/img0" + index + ".jpg");

  next_image.setAttribute("src", "./img/img0" + index + ".jpg");
  next_image.style.left = image.offsetWidth + "px";


  var effect = 0;

  var pass = setInterval(next, 1);

  function next() {
    if (effect == image.offsetWidth) {
      clearInterval(pass);

      document.getElementById("image"+imgindex).style = "background-color:white";
      document.getElementById("image"+index).style = "background-color:gray";
      imgindex = index;

      next_image.id = "back_image";
      image.id = "back_next_image";
      image.style.left = image.offsetWidth + "px";
    } else {
      effect += 30;
      if (effect > image.offsetWidth) {
        effect = image.offsetWidth;
      }
      image.style.left = -pos + "px";
      next_image.style.left = (next_image.offsetWidth - effect) + "px";
    }
  }
}

var timeCheak = 0; //이걸 안해주면 처음에 바로 다음장으로 넘어감
function timeslide(){ //5초마다 슬라이드를 넘기기
    if(timeCheak!=0){
      setTimeout(timeslide, 5000);
      next_image();
    }
    else {
      setTimeout(timeslide, 5000);
      timeCheak++;
    }
}


//------소개--------------------------------------------
//ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ차트사용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
var data = { //Chart.js를 사용한 표 사용
 labels: ["2016년","2015년","2014년","2013년","2012년","2011년","2010년","2009년","2008년","2007년","2006년"],
 datasets: [
    {
       fillColor: "rgba(152,0,0,0.5)",
       strokeColor: "rgba(152,0,0,0.8)",
       highlightFill: "rgba(152,0,0,0.75)",
       highlightStroke: "rgba(152,0,0,1)",
       data: [11656, 11294, 10770, 12729, 11461, 8287, 6884, 7564, 6205, 7572 ,9175]
    }
 ]
}
var options = {   animation: true };
var ctx = document.getElementById("movieChart").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data, options);

//ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
//------소개--------------------------------------------
//------------------------갤러리--------------------------
function remove(x) { //이미지 지우기
    var picture = document.getElementById(x); //아이디 얻어오기
    var parent = picture.parentNode.parentNode; //할아버지 노드로 이동
    parent.remove(); //삭제
    local_Storage(x); //삭제한 이미지를 로컬 스토리지에 저장.
}

var modalIndex = 1; /*사진의 index*/
function openModal(n) { //모달창 열기
  document.getElementById('myModal').style.display = "block";
  var i; //모든 이미지 none으로 초기화용
  modalIndex = n; //열고자하는 이미지의 인덱스
  var slides = document.getElementsByClassName("modal-content");
  if (n > slides.length) {modalIndex = 1} //인덱스 초기화하여 인덱스 최소화
  if (n < 1) {modalIndex = slides.length} //인덱스 최대화하여 인덱스 최대화
  if(slides.length == 3 && n == 4){modalIndex = 3}
  if(slides.length == 2 && n == 4){modalIndex = 2}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  document.getElementById('modal'+n).style.display = "block"; //열고자하는 이미지 block
}

function closeModal() { //모달창 닫기
  document.getElementById('myModal').style.display = "none"; //이미지 none으로 안보이게하기
}


function plusModal(n) {/*사진의 index 증가*/
  showModal(modalIndex += n);
}

function showModal(n) { //모달창 넘기기
  var i;
  modalIndex = n;

  var slides = document.getElementsByClassName("modal-content");
  if (n > slides.length) {modalIndex = 1}
  if (n < 1) {modalIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[modalIndex-1].style.display = "block";

}

function deleteModal(x) { //remove와 같이 모달창 이미지 삭제
  var picture = document.getElementById(x);
  var parent = picture.parentNode;
  parent.remove();
  local_Storage(x);
}

function local_Storage(x){ //localStorage에 데이터 넣기
  localStorage.setItem(x, x);
}
//------------------------갤러리--------------------------
//------------------------방명록--------------------------

function addComment() { //방명록 만들기
  var name = document.getElementById("writer_name").value; //작성자적은 값
  var text = document.getElementById("writer_text").value; //내용 적은 값

  var table = document.createElement("table"); // 테이블 만들기
  table.setAttribute("id", "guest_table"); //id지정
  table.style.width = "70%"

  var tr_text = document.createElement("tr"); // 테이블안에 tr만들기<-작성자와 내용들어갈것
  var tr_button = document.createElement("tr"); // 버튼 밑 reply들어갈 곳

  var td_name = document.createElement("td"); //작성자내용 들어갈  td
  td_name.innerHTML = "작성자 : " + name;
  td_name.style.textAlign = "center"
  td_name.style.border= "1px solid #747474";
  td_name.style.width = "30%"

  var td_text = document.createElement("td"); //내용들어갈 td
  td_text.innerHTML = "내용 : " + text;
  td_text.style.border= "1px solid #747474";
  td_text.style.width = "70%"

  var td_button = document.createElement("td"); //댓글달기 버튼넣을 td
  td_button.setAttribute("id", "reply_text");
  td_button.setAttribute("colspan", "2");
  td_button.style.border = "2px double #747474";
  td_button.style.maxWidth = "70%"

  var comment_button = document.createElement("input"); //댓글달기 버튼
  comment_button.setAttribute("type", "button");
  comment_button.setAttribute("value", "댓글 등록하기");
  comment_button.setAttribute("onclick", "addReply()");

  td_button.appendChild(comment_button);

  tr_text.appendChild(td_name);
  tr_text.appendChild(td_text);
  tr_button.appendChild(td_button);

  table.appendChild(tr_text);
  table.appendChild(tr_button);

  document.getElementById("GuestComment").appendChild(table);
}

function addReply() { //댓글버튼 누를 경우
  var reply = prompt("답글 내용을 입력하세요"); //입력내용

  if(reply.includes("www.") ||  reply.includes("http://") || reply.includes("https://")) { //Url를 요청하기위해
      if(reply.includes("http://") || reply.includes("https://")) { //www.만 썻을 경우 https://나 http://추가
      }
      else {
        reply = "http://" + reply;
      }

      $.ajax({ //jqary사용
       type: 'POST',
       url: 'https://graph.facebook.com', //요청할 페이지
       data: {
         id: reply,
         scrape: true
       },
       success: function(object) {

         var content = document.getElementById("reply_text");
         console.log(object);
         content.removeChild(content.childNodes[0]);
         content.appendChild(add_og(object));
       },
       error: function(object) { //요청 안될시 입력값 그대로 출력
         document.getElementById("reply_text").innerHTML = "└>답변 : " + reply;
       }
     });
   } else { //입력값 그대로 출력
     document.getElementById("reply_text").innerHTML = "└>답변 : " + reply;
   }


}
function add_og(object) {//url들어갈 공간 만들어주기

  var box = document.createElement("a");
  box.href = object.url;
  box.target = "_blank";
  var div = document.createElement("div");
  div.style.position = "relative";
  div.className = "ogDiv";
  var l_div = document.createElement("div");
  l_div.style.position = "relative";
  l_div.id = "left_og_div";
  var image = document.createElement("img");
  image.style.position = "relative";
  image.src = object.image[0].url;
  image.style.height="200px";
  image.style.width = "200px";
  image.style.float ="left";
  l_div.appendChild(image);

  var r_div = document.createElement("div");
  r_div.style.position = "relative";
  r_div.id = "right_og_div";
  var title = document.createElement("h3");
  title.style.float ="left";
  title.style.textAlign = "center";
  title.style.fontSize="30px";
  title.innerHTML = object.title;
  var des = document.createElement("p");
  des.style.fontSize="15px";
  des.innerHTML = object.description;
  var url = document.createElement("p");
  url.style.fontSize="15px";
  url.innerHTML = object.url;
  r_div.appendChild(title);
  r_div.appendChild(des);
  r_div.appendChild(url);

  box.appendChild(div);
  div.appendChild(l_div);
  div.appendChild(r_div);
  return box;
}
