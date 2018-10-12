var mydiv = $(".terminal");
mydiv.scrollTop(mydiv.prop("scrollHeight"));
var commands = ["help", "clear", "exit", "skills", "interests", "personality", "bitcoin", "travel", "learning", "joke", "music"];
var inputReady = true;
var input = $('.about-input');
input.focus();
$('.container').on('click', function(e) {
    input.focus();
});

input.on('keyup', function(e) {
    $('.new-output').text(input.val());
    // console.log(inputReady);
});

$('.about-form').on('submit', function(e) {
    e.preventDefault();
    var val = $(this).children($('.about-input')).val().toLowerCase();
    var href;

    if (val === 'kittens') {
        showKittens();
    } else if (val === 'help') {
        showHelp();
    } else if (val === 'skills') {
        showSkills();
    } else if (val === 'music') {
        playSong()
    } else if (val === 'joke') {
        getJoke()
    } else if (val === 'exit') {
        exit();
    } else if (val === 'clear') {
        resetForm();
		location.reload();
    } else {
        resetForm();
    }
});

function exit() {
	
	setTimeout(function() {
		window.location = "../index.html";
    }, 3000);	
    
}

function playSong() {
    var audio = new Audio('../music/song.mp3');
    audio.play();
    resetForm();
}

function scrollToBottom(id) {
   var div = document.getElementById(id);
   div.scrollTop = div.scrollHeight - div.clientHeight;
}

function resetForm(withKittens) {
	
	
    var message = "Sorry that command is not recognized."
    var input = $('.about-input');
	var val = input.val().toLowerCase();
    if (val === "kittens") {
        $('.kittens').removeClass('kittens');
        message = "Huzzzzzah Kittehs!"
    } else if (commands.indexOf(val) > -1)  {
        message = ""
    }

    $('.new-output').removeClass('new-output');
    input.val('');
    $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

    $('.new-output').velocity(
        'scroll'
    ), {
        duration: 100
    }
}



function showHelp() {
	
 	
	$('.terminal').append('<p class="prompt">'+ commands.toString() +'</p>');
    resetForm();

}

function showSkills() {
	
	$('.terminal').append('<img class="terminal-img" src="../img/Stack-Developer.jpg">');
	$('.terminal').append('<p class="prompt">I\'m a jacks-of-all-trades</p>');
    $('.terminal').append('<p class="prompt">I\'m knowledgeable in every level of how the web works.</p>');
	$('.terminal').append('<p class="prompt">From setting up and configuring Linux servers, writing server-side APIs, diving into the client-side JavaScript powering an application, and turning a “design eye” to the CSS</p>');
    $('.terminal').append('<p class="prompt">Back-end development is my preference because I love manipulating data</p>');
	$('.terminal').append('<p class="prompt">Computer science gives you far more leverage to change the world than any other study in our age.</p>');
	$('.terminal').append('<a href="https://embed.stackshare.io/stacks/embed/487d00c580ca76909bfc9feb0a1653" class="prompt">See my tech stack</a>');	
    resetForm();
	$('.terminal').velocity("scroll", { container: $(".new-output") });
	scrollToBottom();

}

function getJoke() {


	
	setTimeout(function() {
        var joke;

        $.get('https://geek-jokes.sameerkumar.website/api', function(result) {
            joke = result;
            $('.terminal').append('<p class="prompt">' + joke + '</p><p class="prompt output new-output"></p>');
            resetForm();
        });
    });

}

function showKittens() {
    $('.terminal').append('<p class="prompt">Okay.. You asked for it!</p>');
	
	$('.new-output').velocity(
        'scroll'
    ), {
        duration: 100
    }

    setTimeout(function() {
        var gif;
        $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function(result) {
            gif = result.data.image_url;
            $('.terminal').append('<img class="kitten-gif" src="' + gif + '"">');
            resetForm(true);
        });
    });


}

function textEffect(line) {
    var alpha = [';', '.', ',', ':', ';', '~', '`'];
    var animationSpeed = 10;
    var index = 0;
    var string = line.text();
    var splitString = string.split("");
    var copyString = splitString.slice(0);

    var emptyString = copyString.map(function(el) {
        return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
    })

    emptyString = shuffle(emptyString);

    $.each(copyString, function(i, el) {
        var newChar = emptyString[i];
        toUnderscore(copyString, line, newChar);

        setTimeout(function() {
            fromUnderscore(copyString, splitString, newChar, line);
        }, i * animationSpeed);
    })
}

function toUnderscore(copyString, line, newChar) {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
}

function fromUnderscore(copyString, splitString, newChar, line) {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
}


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};