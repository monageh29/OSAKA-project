// change navbar color

$(window).scroll(function(){
    // بحدد مكانه من top
    let windowScroll =  $(window).scrollTop()
    
  
//   بحدد top 
//   بتاع section about
    let aboutTop =$('#about').offset().top;
//    بعمل شرط لو windowScroll
//    اكبر من blogTop
//    غير لون navbar
//    لو رجع تاني اصغر topمن
//    blogبتاع
//    رجعه زي ما كان  
    if(windowScroll > aboutTop){
        $('.navbar').addClass('bg-danger')
        // هنا بتعامل مع السهم اللي في الجنب لو وصل ل about يظهر 
        $('#btn-up').show(1000)
    }else{
        $('.navbar').removeClass('bg-danger')
        // هنا السهم لو رجع تاني فوق يختفي 
        $('#btn-up').hide(1000)
    }
    })
    
    // هنا بتعامل مع السهم لما بضغط عليه بيطلع فوق تاني 
$('#btn-up').click(function(){
    $('body , html').animate({
        scrollTop:'0'
    },2000)
})

// smoothing Scroll
// بمسك كل nav-link
$('.nav-link').click(function(e){
    // بحط e وبستخدم this 
// عشان امسك اسم المكان اللي داس عليه واجيب منه href
    
   let selector =$(this).attr('href')
// هنا بمسك ال top  بتاع كل سكشن جيلي اسمه ف href
    let sectionOffset =$(selector).offset().top;
    // هنا بقوله يروح لكل مكان جيله اسمه 
    $('body , html').animate({
        scrollTop:sectionOffset
    },1000)
})

// optionBox
$('.options i').click(function(){
// استخدمت outer عشان مدي padding
// وهنا بشوف صندوق مساحته كام عشان اعرف احركه
    let BoxWidth=  $('.optionsSide').outerWidth()

    // هنا بعرف div الاساسية شمالها بيبدأ منين  
      let leftOffset = $('.options').offset().left;
   

    //   لو شمالها 0 يعني مفتوحة رجعها بالسالب علي قد مساحتها يعني اقفلها 
  if(leftOffset == 0){
      $('.options').css({
          left:`-${BoxWidth}px`,
          transition:'all 1s'
      })
  }else{
    // لو مش ب 0 يعني مقفولة افتحها ورجعها 0 تاني 
      $('.options').css({
          left:`0px`,
          transition:'all 1s'
      })
  }
  })

// change webSiteColor

$('.options li').click(function(e){
    // هنا بخزن اسم اللون اللي هيدوس عليه
    let clickedColor= $(e.target).css('backgroundColor')
    console.log(clickedColor)
    // هنا بقوله غير كل p اللي عندي اديهم اللون اللي مخزنه معايا علي حسب اللي هيدوس عليه
    $('p').css({color:clickedColor,transition:'all 1s'})

    // هنا بخلي اللي يتداس عليه  يتعمله border واخواته ميتعملهمش border
$(e.target).css('border','solid 2px red')
$(e.target).siblings().css('border','none')
 })

//نفس الامر هنا عملته مع الالوان
 $('.options img').click(function(){
    let clickedImg  =$(this).attr('src')
    $('.home').css({backgroundImage:`url(${clickedImg})`,transition:'all 1s '})
 })
 
 

//  هنا بتحكم ف loading 
// لو موقع جاهز اعمل slideUp

 $(window).ready(function(){
     $('#loading').slideUp(3000,function(){
         $('body').css('overflow-y','scroll')
     })
 })
//  اصتخدمت طريقة callback
//  عشان overflow يتنفذ بعد slideUp