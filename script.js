//html const
const inp1 = document.querySelector('.ipt1');
const inp2 = document.querySelector('.ipt2');
const inp3 = document.querySelector('.ipt3');
const btn = document.querySelector('.button');
const pembungkus_awal = document.querySelector('.pembungkus-awal');
const go_back = document.querySelector('.go_back');
const pembungkus_main = document.querySelector('.pembungkus-main');
const btn_tebak = document.querySelector('.btn_tebak');
const ipt_tebak = document.querySelector('.ipt_tebak');
const main_desc = document.querySelector('.main_desc');
const pembungkus_gif = document.querySelector('.pembungkus_gambar_random');
let div = document.querySelector('.Tebakan_notif');
const correct_number = document.querySelector('.correct_number')


//filter only number
inp1.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
});
inp2.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
});
inp3.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
});
ipt_tebak.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
});

//variable for the game start
let value_nyawa;
let start_number;
let end_number;
let number_being_guess;
let tebakan_user;
let originalContent = main_desc.innerHTML;


//function for random number
function random_number_guess(str_num, end_num){
    let multipler_num = end_num - str_num;
    let math_random = Math.floor(Math.random() * (end_num - str_num + 1)) + str_num;
    return math_random;
}

//function Tebakan_notif pop up
function add_p(desc){
    let p = document.createElement('p');
    p.style.fontFamily= "Creepster", 'system-ui';
    p.style.fontSize = '2vh';
    p.textContent= desc;
    div.append(p);
    div.scrollTop = div.scrollHeight;
    if (desc == 0){
        div.innerHTML = "";
    }
}

//add evenlistener for logic to start
btn.addEventListener('click', function(){
    value_nyawa = Number(inp1.value);
    start_number = Number(inp2.value);
    end_number = Number(inp3.value);    
    number_being_guess = random_number_guess(start_number,end_number);

    
    if (
    typeof value_nyawa === 'number' &&
    typeof start_number === 'number' &&
    typeof end_number === 'number' &&
    value_nyawa > 0 &&
    start_number >= 0 &&
    end_number >= 1 &&
    end_number > start_number){
        pembungkus_awal.style.display = 'none';
        pembungkus_main.style.display = 'block';
        //console.log(number_being_guess);
    }else{
        alert("Please input the correct number!");
    }

});

// tebak button listener
btn_tebak.addEventListener('click', function(){
    tebakan_user = Number(ipt_tebak.value);
    start_number = Number(inp2.value);
    end_number = Number(inp3.value);    
    value_nyawa--;
    if (value_nyawa === 0){
        //console.log('game over');
        pembungkus_main.style.display = 'none';
        main_desc.innerHTML = 'Game Over';
        ambilData('Game Over')
        correct_number.innerHTML = `${number_being_guess} is the correct number`
        correct_number.style.display ='block';
        
    }   
    if(tebakan_user > end_number || tebakan_user < start_number){
        add_p(`outside range of ${start_number} to ${end_number}`);
    }
    else if(tebakan_user === number_being_guess){
        console.log('correct');
        ambilData('win');
        main_desc.innerHTML = 'You Win';
        pembungkus_main.style.display = 'none';
    }
    else if(tebakan_user > number_being_guess){
        add_p(`${tebakan_user} is down ⬇️`);
        console.log('down');
    }
    else if(tebakan_user < number_being_guess){
        add_p(`${tebakan_user} is up ⬆️`);
        console.log('up')
    }
});

//reset function
go_back.addEventListener('click', function(){
    pembungkus_awal.style.display ='';
    pembungkus_main.style.display = 'none';
    main_desc.innerHTML = originalContent ;
    add_p(0);
    pembungkus_gif.innerHTML = '';
    div.style.display = '';
    correct_number.style.display ='none';
});



//randomized function
function randomized_gif(){
    let random = Math.floor(Math.random() * 5) - 1;
    return Number(random);
}



//fetch win game-over
async function ambilData(query) { 
const apiKey = 'nT6dHkcK1TTVG3oACLWXqduXZnaKNnFK';
let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
div.style.display = 'none';
  try { 
    const respon = await fetch(url);
    const hasil = await respon.json();
    const daftar = hasil.data;
    const gifPertama = daftar[randomized_gif()];
    const urlGambar = gifPertama.images.fixed_height.url;
    pembungkus_gif.innerHTML += `<img src="${urlGambar}" alt="GIF">`;
  } catch (error) {
    console.error("Waduh, ada masalah:", error);
  }
}

