let $messageContainer = $("#messageContainer");
let $textArea = $("#textArea");
let $sendBtn = $("#sendBtn");

// Generated by ChatGPT
let computerWelcome = [
  "Welcome to this chat demo! Please note that this is a demonstration and does not have AI capabilities.",
  "You may use the text area below to send messages into the chat.",
];

// Generated by ChatGPT
let computerReplies = [
  "Oh, Hello there! Did you know that an octopus has three hearts? Imagine the heartbreak!",
  "How are you doing? Speaking of feelings, did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "What plans do you have today? Here's an idea: A day on Venus is longer than a year on Venus. Think about that next time you complain about long days!",
  "It's a beautiful day, isn't it? Kind of like how it's always a beautiful day somewhere on Earth. That's because it takes 8 minutes and 20 seconds for light to travel from the Sun to Earth!",
  "Chatbots can be fun, you know. We might not be great at parties, but at least we don't spill our drinks!",
  "I hope you're having a fantastic day! Here's something to make it even better: What do you call fake spaghetti? An impasta!",
  "Did you ever hear about the claustrophobic astronaut? He just needed a little space.",
  "How's your day going? Here's a random fact for you: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
  "Got any weekend plans? How about learning to juggle? After all, juggling can improve your hand-eye coordination. Who knew?",
  "If you're ever feeling down, just remember that sea otters hold hands when they sleep to keep from drifting apart. Isn't that adorable?",
  "Ever wonder why flamingos are pink? It's because of their diet! They eat algae and crustaceans that contain pigments, which turn their feathers pink. So, you are what you eat!",
  "Here's a thought: If you could fold a piece of paper 42 times, it would reach the moon. Too bad most paper can only be folded about 7 or 8 times!",
];

function displayWelcomeMessage() {
  computerWelcome.forEach((str) => {
    console.log(str);
    appendMessageElement(str, "computer");
  });
}

function getRandomComputerReply() {
  const randomIndex = Math.floor(Math.random() * computerReplies.length);
  return computerReplies[randomIndex];
}

function appendMessageElement(message, type) {
  const timestamp = new Date().toLocaleTimeString();
  const $message = $(`
    <div class="${type}-message">
      <span>
        ${message}
      </span>
      <div class="timestamp">${timestamp}</div>
    </div>
  `);

  $messageContainer.append($message);

  /* Adapted from https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
  and https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
  */
  $messageContainer.scrollTop($messageContainer.prop("scrollHeight"));
}

$sendBtn.on("click", () => {
  const userMessage = $textArea.val().trim();
  if (userMessage) {
    appendMessageElement(userMessage, "user");

    // Computer responds with random reply
    setTimeout(() => {
      appendMessageElement(getRandomComputerReply(), "computer");
    }, 1000);
  }
});

// Initialization
$(document).ready(() => {
  displayWelcomeMessage();
});
