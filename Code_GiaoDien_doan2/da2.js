const firebaseConfig = {
    apiKey: "AIzaSyDiwsSg6lmz8oWX_52mDR2tUCubUAzQRmc",
    authDomain: "do-an-2-ute.firebaseapp.com",
    databaseURL: "https://do-an-2-ute-default-rtdb.firebaseio.com",
    projectId: "do-an-2-ute",
    storageBucket: "do-an-2-ute.appspot.com",
    messagingSenderId: "972607978761",
    appId: "1:972607978761:web:edafdbd88c01e54c2be7d8"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
      
    /////////////////////////////////////////////////////////////////////////////////
      
      //ĐÈN
      var btnOn1 = document.getElementById("btnOnId_01");
      var btnOff1 = document.getElementById("btnOffId_01");
      
      btnOn1.onclick = function(){
          // document.getElementById("denId_01").src = "light_bulb.png"
          // document.getElementById("nhietdo").innerHTML = "ON";
          //database.ref("/TtIoTs").remove();
          
          database.ref("BED_ROOM").update({
              "den":1
              // "Hum":NULL
          });
      }
      
      btnOff1.onclick = function(){
        // document.getElementById("denId_01").src = "light_bulb_off.png"
          // document.getElementById("nhietdo").innerHTML = "OFF";
          database.ref("BED_ROOM").update({
              "den":0  
          });
          div.style.background = "blue";
      }
      
      //MÁY LẠNH
      var btnOn2 = document.getElementById("btnOnId_02");
      var btnOff2 = document.getElementById("btnOffId_02");
      
      btnOn2.onclick = function(){
          // document.getElementById("denId_01").src = "light_bulb.png"
          // document.getElementById("nhietdo").innerHTML = "ON";
          //database.ref("/TtIoTs").remove();
          database.ref("BED_ROOM").update({
              "may_lanh":1
          });
      }
      
      btnOff2.onclick = function(){
        // document.getElementById("denId_01").src = "light_bulb_off.png"
          // document.getElementById("nhietdo").innerHTML = "OFF";
          database.ref("BED_ROOM").update({
              "may_lanh":0
          });
      }
      
      //TIVI
      var btnOn3 = document.getElementById("btnOnId_03");
      var btnOff3 = document.getElementById("btnOffId_03");
      
      btnOn3.onclick = function(){
          // document.getElementById("denId_01").src = "light_bulb.png"
          // document.getElementById("nhietdo").innerHTML = "ON";
          //database.ref("/TtIoTs").remove();
          database.ref("BED_ROOM").update({
              "ti_vi":1
          });
      }
      
      btnOff3.onclick = function(){
        // document.getElementById("denId_01").src = "light_bulb_off.png"
          // document.getElementById("nhietdo").innerHTML = "OFF";
          database.ref("BED_ROOM").update({
              "ti_vi":0
          });
      }
  
      //quat
  
      var btnstop = document.getElementById("stop");
      var btnlow = document.getElementById("low");
      var btnmid = document.getElementById("mid");
      var btnhigh = document.getElementById("high");
      
      btnstop.onclick = function(){
          database.ref("BED_ROOM").update({
              "quat":0
          });
      }
      btnlow.onclick = function(){
          database.ref("BED_ROOM").update({
              "quat":1
          });
      }
      btnmid.onclick = function(){
          database.ref("BED_ROOM").update({
              "quat":2
          });
      }
      btnhigh.onclick = function(){
          database.ref("BED_ROOM").update({
              "quat":3
          });
      }
  
      // -------------------------------------------------------------------------------
       //get Temp from Firebase (auto update when data changes)--------------
          database.ref("BED_ROOM/nhiet_do").on("value", function(snapshot) {
          var temp = snapshot.val();
          document.getElementById("nhietdo").innerHTML= temp;
      });
      //get HUMI from Firebase (auto update when data changes)--------------
          database.ref("BED_ROOM/do_am").on("value", function(snapshot) {
          var humi = snapshot.val();
          document.getElementById("doam").innerHTML= humi;
      });
         //get khi_ga from Firebase (auto update when data changes)--------------
         database.ref("BED_ROOM/khi_ga").on("value", function(snapshot) {
          var khi_ga = snapshot.val();
          document.getElementById("khiga").innerHTML= khi_ga;
      });
    //     //get quat from Firebase (auto update when data changes)--------------
        database.ref("BED_ROOM/quat").on("value", function(snapshot) {
          var quat = snapshot.val();
          document.getElementById("quat").innerHTML= quat;
      });
        //get cb_as from Firebase (auto update when data changes)--------------
        database.ref("BED_ROOM/cb_as").on("value", function(snapshot) {
            var cb_as = snapshot.val();
            document.getElementById("cb_as").innerHTML= cb_as;
        });
  
  //auto update imgden
      database.ref("BED_ROOM/den").on("value", function(snapshot1) {
          if (snapshot1.exists()) {
              var ss1 = snapshot1.val();
              if(ss1==1)
                  document.getElementById("denId_01").src = "picture/light_bulb.png"
              else
                  document.getElementById("denId_01").src = "picture/light_bulb_off.png"
          } else
              console.log("No data available!")
      });
  
      //auto update Imgmay_lanh
      database.ref("BED_ROOM/may_lanh").on("value", function(snapshot2) {
          if (snapshot2.exists()) {
              var ss2= snapshot2.val();
              if(ss2==1)
                  document.getElementById("denId_02").src = "picture/AC_ON.png"
              else
                  document.getElementById("denId_02").src = "picture/AC_OFF.png"
              } else
              console.log("No data available!")
      });
      //auto update Imgtivi
      database.ref("BED_ROOM/ti_vi").on("value", function(snapshot3) {
          if (snapshot3.exists()) {
              var ss3 = snapshot3.val();
              if(ss3==1)
                  document.getElementById("denId_03").src = "picture/TV_ON.png"
              else
                  document.getElementById("denId_03").src = "picture/TV_OFF.png"
              } else
              console.log("No data available!")
      });
  
      // --------------------------doi icon ndo, doam, lua-----------------------------------------
  database.ref("BED_ROOM/nhiet_do").on("value", function(snapshot4) {
      if (snapshot4.exists()) {
          var ss4 = snapshot4.val();
          if (ss4 <= 35)
              document.getElementById("cb_01").src = "picture/temperature1.png"
          else
              document.getElementById("cb_01").src = "picture/temperature.png"
      } else
          console.log("No data available!")
  });

  database.ref("BED_ROOM/khi_ga").on("value", function(snapshot5) {
    if (snapshot5.exists()) {
        var ss5 = snapshot5.val();
        if (ss5 <= 300)
            document.getElementById("cb_03").src = "picture/smoke1.png"
        else
            document.getElementById("cb_03").src = "picture/smoke2.png"
    } else
        console.log("No data available!")
});
  

  
  database.ref("BED_ROOM/do_am").on("value", function(snapshot6) {
      if (snapshot6.exists()) {
          var ss6 = snapshot6.val();
          if (ss6 <= 60 || ss6 >= 80)
              document.getElementById("cb_02").src = "picture/humi1.png"
          else 
              document.getElementById("cb_02").src = "picture/humi.png"
      } else
          console.log("No data available!")
  });

  database.ref("BED_ROOM/cb_as").on("value", function(snapshot7) {
    if (snapshot7.exists()) {
        var ss7 = snapshot7.val();
        if(ss7==1)
                  document.getElementById("cb_04").src = "picture/lamp_on.png"
              else
                  document.getElementById("cb_04").src = "picture/lamp_off.png"
              } else
              console.log("No data available!")
      });

    //   database.ref("BED_ROOM/quat").on("value", function(snapshot8) {
    //     if (snapshot8.exists()) {
    //         var ss8 = snapshot8.val();
    //         if(ss8==0)
    //                   document.getElementById("stop").rotato("picture/fan-removebg.png")
    //         else if(ss8==1)     
    //                   document.getElementById("low").rotato("picture/fan-removebg.png")
    //         else if(ss8==2)
    //                   document.getElementById("mid").rotato("picture/fan-removebg.png")
    //         else if(ss8==3)     
    //                   document.getElementById("high").rotato("picture/fan-removebg.png")

    //      } else
    //               console.log("No data available!")
    //       });
  
          
       //test: get once.
       database.ref("BED_ROOM").get().then((snapshot) => {
          if(snapshot.exists())
              console.Log(snapshot.val())
          else
              console.Log("no data available!")
          })
          