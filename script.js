        const img = document.querySelector("img");
        const music =  document.querySelector("audio");
        const play = document.getElementById("play");
        const title = document.getElementById("title");
        const artist = document.getElementById("artist");
        const next = document.getElementById("next");
        const prev = document.getElementById("prev");
        let playing  = false;
        const playmusic = ()=>{
            playing = true;
            music.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            
            img.classList.add("anime");
            
        };
        const pausemusic=  ()=>{
            playing = false;
            music.pause();
            play.classList.remove("fa-pause");
            play.classList.add("fa-play");
            
            img.classList.remove("anime");
            
        };

        play.addEventListener("click", ()=>{
            if(playing){
                pausemusic();
            }
            else{
                playmusic();
            }
        })


        const songs = [{
            name: "m-1",
            title: "Ram Ram",
            artist: "MC Square",
        },
        {
            name: "m-3",
            title: "New Life",
            artist: "King",
        },
        {
            name: "m-4",
            title: "Tere Vaste",
            artist: "Varun Jain",
        },
        {
            name: "m-5",
            title: "Phir Aur Kya Chahiye",
            artist: "Arijit Singh",
        },
        {
            name: "Baari Barsi",
            title: "Baari Barsi",
            artist: "Shahid Mallya, Harsimran Singh",
        },
        {
            name: "Issa Vibe",
            title: "Issa Vibe",
            artist: "Badshah",
        },
        {
            name: "Real Talk",
            title: "Real Talk",
            artist: "GD47",
        },
        {
            name: "Saara Zamaana",
            title: "Saara Zamaana",
            artist: "Khussh",
        },
        {
            name: "Gangster",
            title: "Gangster",
            artist: " Zubeen Garg",
        },
    ]

        const loadsong =(songs)=>{
            title.textContent = songs.title;
            name.textContent = songs.name;
            artist.textContent = songs.artist;
            music.src = "music/" + songs.name + ".mp3";
        }
        index= 0;
    // loadsong(songs[2]);
    const nextsong = () =>{
        index = (index+1) % songs.length;
    loadsong(songs[index]);
    playmusic();

}
    const prevsong = () =>{
        index--;
    loadsong(songs[index]);
    playmusic();
}
    next.addEventListener("click",nextsong);
    prev.addEventListener("click",prevsong);
        