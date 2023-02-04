var isi = [
    {
        id: [231213],
        nama: ["Ambatukam"],
        umur: [21],
        asal: ["Bogor"]
    },

    {
        id: [641987],
        nama: ["Ambatunat"],
        umur: [25],
        asal: ["Jerman"]  
    },
    
    {
        id: [543848],
        nama: ["Dreamybull"],
        umur: [23],
        asal: ["Jepang"]  
    },

    {
        id: [375489],
        nama: ["Kakangku"],
        umur: [40],
        asal: ["Ngawi"]  
    },

    {
        id: [865452],
        nama: ["Rahma"],
        umur: [19],
        asal: ["Papua"]  
    }
];
 
var data = "";
isi.forEach(function(e) {
data += "<li>" + `${e.id}` + " bernama " + `${e.nama}` + " berumur " + `${e.umur}` + " dari " + `${e.asal}`;
});

$("#data").html(data)

$(".btn.HiToLo").click(function() { 

    isi.sort((a, b) => {
        return b.id - a.id;
    });
    var data = "";
    isi.forEach(function(e) {
    data += "<li>" + `${e.id}` + " bernama " + `${e.nama}` + " berumur " + `${e.umur}` + " dari " + `${e.asal}`;
});
    
    $("#data").html(data)
    
   });


   $(".btn.LoToHi").click(function() { 
   
       isi.sort((a, b) => {
           return a.id - b.id;
       });
       var data = "";
       isi.forEach(function(e) {
       data += "<li>" + `${e.id}` + " bernama " + `${e.nama}` + " berumur " + `${e.umur}` + " dari " + `${e.asal}`;
   });
       
       $("#data").html(data)
       
      });
   



