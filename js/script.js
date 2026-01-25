// A global object to hold the music player's controls
let musicPlayer = {};

$(document).ready(function() {

    // =========================================================================
    // IMPORTANT: CONFIGURE YOUR FILES HERE
    // =========================================================================
    const imageFiles = [
        "photo1.png",
        "photo2.png",
        "photo3.png",
        "photo4.png"
    ];

    const videoData = [
        { id: "1drBt9LScns", platform: "youtube" },
        { id: "qCAaK7T6rck", platform: "youtube" },
        { id: "jxzLelZ6fRY", platform: "youtube" },
        { id: "-LzJcfFUfSI", platform: "youtube" },
        { id: "AVPQf-AqI9w", platform: "youtube" },
        { id: "eWA-dSwpIro", platform: "youtube" },
        { id: "sk5KwRYplpw", platform: "youtube" }
    ];

    const musicTracks = [
        { title: "Roller Coaster", file: "Todd Salpen - Roller Coaster.mp3", artwork: "art-roller-coaster.jpg" },
        { title: "Genesis", file: "Todd Salpen - Genesis.mp3", artwork: "art-genesis.jpg" },
        { title: "Infiltrator", file: "Todd Salpen - Infiltrator.mp3", artwork: "art-infiltrator.jpg" },
        { title: "In Between", file: "Todd Salpen - In Between.mp3", artwork: "art-in-between.jpg" },
        { title: "Detroit Sunrise", file: "Todd Salpen - Detroit Sunrise.mp3", artwork: "art-detroit-sunrise.jpg" },
        { title: "Synthetic Nights", file: "Todd Salpen - Synthetic Nights.mp3", artwork: "art-synthetic-nights.jpg" }
    ];

    // =========================================================================
    // INITIALIZATION
    // =========================================================================

    populateCarousel(imageFiles);
    initializeMusicPlayer(musicTracks);
    initializeMobileMenu();
    startIntroAnimation();
    populateVideoCarousel(videoData);

    // =========================================================================
    // INTRO ANIMATION SEQUENCE
    // =========================================================================
    function startIntroAnimation() {
        const animatedLogo = $('#animated-logo');
        const loadingScreen = $('#loading-screen');
        setTimeout(() => animatedLogo.addClass('fading-out'), 500);
        setTimeout(() => {
            const headerLogo = $('<img>', { id: 'header-logo', src: animatedLogo.attr('src'), alt: 'Artist Logo' });
            $('#main-nav').prepend(headerLogo);
            loadingScreen.css('opacity', '0');
            $('#menu-items, .page-section, #music-player').addClass('visible');
            $('body').css('overflow-y', 'auto');
            setTimeout(() => loadingScreen.remove(), 1000);
        }, 2000);
    }

    // =========================================================================
    // MOBILE NAVIGATION
    // =========================================================================
    function initializeMobileMenu() {
        $('#hamburger-btn').on('click', () => $('#mobile-nav-overlay').addClass('active'));
        $('#close-nav-btn, #mobile-menu-items a').on('click', () => $('#mobile-nav-overlay').removeClass('active'));
    }

    // =========================================================================
    // PHOTO CAROUSEL
    // =========================================================================
    function populateCarousel(images) {
        const carouselInner = $('#photoCarousel .carousel-inner');
        const carouselIndicators = $('#photoCarousel .carousel-indicators');
        carouselInner.empty();
        carouselIndicators.empty();
        images.forEach((imageFile, index) => {
            const isActive = index === 0 ? 'active' : '';
            carouselIndicators.append(`<button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="${index}" class="${isActive}" aria-current="${isActive ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>`);
            carouselInner.append(`<div class="carousel-item ${isActive}"><img src="photos/${imageFile}" class="d-block w-100" alt="Gallery image ${index + 1}"></div>`);
        });
    }

    // =========================================================================
    // VIDEO CAROUSEL
    // =========================================================================
    let videoPlayers = [];
    function populateVideoCarousel(videos) {
        const carouselInner = $('#video-carousel-inner');
        videos.forEach((video, index) => {
            const isActive = index === 0 ? 'active' : '';
            carouselInner.append(`<div class="carousel-item ${isActive}"><div class="video-responsive"><div id="video-player-${video.id}"></div></div></div>`);
        });
    }

    window.onYouTubeIframeAPIReady = function() {
        videoData.forEach(video => {
            if (video.platform === 'youtube') {
                const player = new YT.Player(`video-player-${video.id}`, {
                    height: '360',
                    width: '640',
                    videoId: video.id,
                    playerVars: { 'playsinline': 1, 'modestbranding': 1, 'rel': 0 },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
                videoPlayers.push(player);
            }
        });
    };

    function onPlayerReady(event) {
        const iframe = event.target.getIframe();
        $(iframe).attr('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && musicPlayer.pauseTrack) {
            musicPlayer.pauseTrack();
        }
    }

    $('#videoCarousel').on('slide.bs.carousel', function(e) {
        const videoIndex = e.from;
        if (videoPlayers[videoIndex] && typeof videoPlayers[videoIndex].stopVideo === 'function') {
            videoPlayers[videoIndex].stopVideo();
        }
    });

    // =========================================================================
    // MUSIC PLAYER
    // =========================================================================
    function initializeMusicPlayer(tracks) {
        let currentTrackIndex = 0, isPlaying = false;
        const audio = new Audio();

        // UPDATED: Added largeTrackTitle to the UI object
        const ui = {
            playPause: $('#play-pause-btn').add('#large-play-pause-btn'),
            next: $('#next-btn').add('#large-next-btn'),
            prev: $('#prev-btn').add('#large-prev-btn'),
            artwork: $('#track-artwork'),
            title: $('#track-title'),
            largeTrackTitle: $('#large-track-title'), // NEW
            progress: $('#progress'),
            progressBar: $('#progress-bar'),
            playerBar: $('#music-player'),
            largeArtworkOverlay: $('#large-artwork-overlay'),
            largeArtworkImg: $('#large-artwork-img'),
            closeArtworkBtn: $('#close-artwork-btn')
        };
        let hoverTimer = null;

        function loadTrack(trackIndex) {
            const track = tracks[trackIndex];
            audio.src = `music/${track.file}`;

            // UPDATED: Set both the small and large track titles
            ui.title.text(track.title);
            ui.largeTrackTitle.text(track.title);

            audio.load();
            const artworkSrc = track.artwork ? `img/artwork/${track.artwork}` : 'img/default-artwork.png';
            ui.artwork.attr('src', artworkSrc);

            if (ui.largeArtworkOverlay.hasClass('active')) {
                ui.largeArtworkImg.attr('src', artworkSrc);
            }
        }

        function playTrack() {
            isPlaying = true;
            audio.play();
            ui.playPause.html('<i class="fas fa-pause"></i>');
        }

        function pauseTrack() {
            isPlaying = false;
            audio.pause();
            ui.playPause.html('<i class="fas fa-play"></i>');
        }
        musicPlayer.pauseTrack = pauseTrack;

        const togglePlayPause = () => isPlaying ? pauseTrack() : playTrack();
        const nextTrack = () => { currentTrackIndex = (currentTrackIndex + 1) % tracks.length; loadTrack(currentTrackIndex); playTrack(); };
        const prevTrack = () => { currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; loadTrack(currentTrackIndex); playTrack(); };
        const updateProgress = () => { if (audio.duration) ui.progress.css('width', `${(audio.currentTime / audio.duration) * 100}%`); };
        const setProgress = (e) => { if (audio.duration) audio.currentTime = (e.offsetX / ui.progressBar.width()) * audio.duration; };

        // UPDATED: Also set the title when the artwork view is first opened
        const showLargeArtwork = () => {
            ui.largeArtworkImg.attr('src', ui.artwork.attr('src'));
            ui.largeTrackTitle.text(ui.title.text()); // Ensure title is in sync
            ui.largeArtworkOverlay.addClass('active');
        };
        const hideLargeArtwork = () => ui.largeArtworkOverlay.removeClass('active');

        ui.playPause.on('click', togglePlayPause);
        ui.next.on('click', nextTrack);
        ui.prev.on('click', prevTrack);
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', nextTrack);
        ui.progressBar.on('click', setProgress);
        ui.playerBar.on('mouseenter', () => { hoverTimer = setTimeout(showLargeArtwork, 5000); });
        ui.playerBar.on('mouseleave', () => clearTimeout(hoverTimer));
        ui.closeArtworkBtn.on('click', hideLargeArtwork);

        if (tracks.length > 0) loadTrack(currentTrackIndex);
        else { ui.title.text("No tracks loaded"); ui.playPause.add(ui.next).add(ui.prev).prop('disabled', true); }
    }
});