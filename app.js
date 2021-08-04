function generateIdCard(event){
    event.preventDefault();
    const studentName = document.getElementById("student-Name").value;
   const targetName = document.getElementById("generated-name");
   targetName.innerHTML = studentName;

   const collegeName = document.getElementById("college-name").value;
   const targeteCollegName = document.getElementById("generated-col-name");
   targeteCollegName.innerHTML = collegeName;

   const location = document.getElementById("locationg").value;
   const targetLocation = document.getElementById("tarlocation");
   targetLocation.innerHTML = location;

   const generateIdCardsk = document.getElementById("sks");
   generateIdCardsk.style.display = "block";



}

  function previewImage(event) {
    console.log("event",event);
    const output = document.getElementById("output-image");
    output.src = URL.createObjectURL(event.target.file[0]);
  }


    

    


