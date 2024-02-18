const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})


var questions = document.querySelectorAll(".faq .box .question");

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        var answer = this.nextElementSibling;
        var icons = this.querySelector("i");
        
        var isOpen = answer.style.display === "block";
        
        // 모든 답변 상자/아이콘 초기화
        var allAnswers = document.querySelectorAll(".faq .box .answer");
        var allIcons = document.querySelectorAll(".faq .box .question i");
        
        for (var j = 0; j < allAnswers.length; j++) {
            allAnswers[j].style.display = "none";
            allIcons[j].style.transform = "";
        }
        
        if (!isOpen) {
            icons.style.transform = "rotate(180deg)";
            answer.style.display = "block";
            // answer.style.transform = "transition .5s";
        }
    });
}



const travelimgA=["img/travel0.jpg","img/travel1.jpg","img/travel2.jpg", "img/travel3.jpg","img/travel4.jpg","img/travel5.jpg","img/travel6.jpg", "img/travel7.jpg", "img/travel8.jpg"];
const textA=["다양한 여행지","다양한 볼거리","다양한 경험"];


window.onload=function(){
    
}
    


$(function(){
    $(".navbar_menu li").on("click", function(){
        $(".sectionAll").show();

        let no = $(this).index();
        $(".sec").hide();
        $(".sec"+no).show();
    })

    for(let i =0; i<textA.length; i++){
        $(".textslide p:eq("+i+")").html(textA[i]);
    }

    for(let i = 0; i<travelimgA.length;i++){
        $(".sec2 > div:eq("+i+")").css({"background":"url("+travelimgA[i]+")",
        "backgroundSize": "100% 100%"});
    }

    
    // $(".faq .box .question").on("click", function() {
    //     // 현재 클릭한 질문의 답변 상자를 토글링합니다.
    //     $(this).next(".answer").slideToggle();
    
    //     // 클릭한 질문의 아이콘을 회전시킵니다.
    //     $(this).find("i").toggleClass("rotate");
        
    //     // 현재 클릭한 질문을 제외한 다른 질문의 답변 상자를 닫습니다.
    //     $(".faq .box .question").not(this).next(".answer").slideUp();
        
    //     // 다른 질문의 아이콘을 초기화합니다.
    //     $(".faq .box .question").not(this).find("i").removeClass("rotate");
    // });
    
})


















// for(let i = 0; i<imgA.length; i++){
//     $(".img3 li:eq("+i+")").css("background","url("+imgA[i]+")")
//     .css("backgroundSize","100% 100%");
// }

// let cnt = 1;
// $(".next").on("click",function(){
//     if(cnt<4) {
//         cnt++;
//         $(".img3").animate({"left":"-=500px"},300);
//     }
//     $(".disp").text(cnt+"/4");
// })

// $(".prev").on("click",function(){
//     if(cnt>1){
//         cnt--;
//         $(".img3").animate({"left":"+=500px"},300);
//     }
//     $(".disp").text(cnt+"/4");
// })