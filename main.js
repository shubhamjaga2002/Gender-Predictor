const button = document.getElementById('btn');
const output = document.getElementById('gender');


const genderDetails = async () => {
    const input_box = document.getElementById('input').value;

    if(input_box === ""){
        output.innerHTML ="First Enter Your Name";
        output.style.color = "red";
        return;               
    }

    const url = `https://api.genderize.io/?name=${input_box}`;

   try{
    let response = await fetch(url);
    let result = await response.json();

    output.innerHTML = `${result.name} is <strong>${result.gender}</strong> with <strong>${result.probability * 100}% </strong> certainty.`;
    // document.write(result.gender + " with ");
    // document.write(result.probability * 100 + "% certainty ");        

   } catch (error){
    alert("Error fetching data: " + error)
   }

   
};
btn.addEventListener("click", genderDetails);
