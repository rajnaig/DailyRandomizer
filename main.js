const { createApp } = Vue;

createApp({
    data() {
        return {
            coworkers: [
                {
                    name: "Robi",
                    image: "https://example.com/john-smith.jpg",
                    style:"success"
                },
                {
                    name: "Barni",
                    image: "https://example.com/jane-doe.jpg",
                    icon: "\u2615",
                    style:"success"
                },
                {
                    name: "Ádám",
                    image: "https://example.com/jane-doe.jpg",
                    style:"danger",
                    icon: "\uD83D\uDC3C"
                },
                {
                    name: "Laci",
                    image: "https://example.com/jane-doe.jpg",
                    style:"success"
                },
                {
                    name: "Peti",
                    image: "https://example.com/jane-doe.jpg",
                    style:"warning",
                    icon: "\ud83c\udf4c"
                },
                {
                    name: "Kakas",
                    image: "https://example.com/jane-doe.jpg",
                    icon: "\u{1F413}",
                    style:"danger"

                },
                {
                    name: "Zoli",
                    image: "https://example.com/jane-doe.jpg",
                    style:"warning",
                    icon:   "\uD83E\uDD44"
                },
                {
                    name: "Gábor",
                    image: "https://example.com/jane-doe.jpg",
                    icon: "\uD83E\uDD20",
                    style:"warning"
                },

            ],
            quotes: [
                {
                    quote: "Code is like humor. When you have to explain it, it's bad.",
                    author: "Cory House"
                },
                {
                    quote: "First, solve the problem. Then, write the code.",
                    author: "John Johnson"
                },
                {
                    quote: "If at first, you don't succeed; call it version 1.0",
                    author: "Unknown"
                },
                {
                    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
                    author: "Bill Gates"
                },
                {
                    quote: "Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?’",
                    author: "Steve McConnell"
                },
                {
                    quote: "Debugging is like being a detective in a crime movie where you are also the murderer.",
                    author: "Filipe Fortes"
                },
                {
                    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
                    author: "Harold Abelson"
                },
                {
                    quote: "Programming is the art of telling a computer what to do through a series of instructions.",
                    author: "Unknown"
                },
                {
                    quote: "The best code is no code at all.",
                    author: "Jeff Atwood"
                },
                {
                    quote: "Programs are meant to be read by humans and only incidentally for computers to execute.",
                    author: "Hal Abelson and Gerald Jay Sussman"
                },
                {
                    quote: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
                    author: "Mosher's Law of Software Engineering"
                },
                {
                    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
                    author: "Patrick McKenzie"
                },
                {
                    quote: "The best way to predict the future is to invent it.",
                    author: "Alan Kay"
                },
                {
                    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
                    author: "C.A.R. Hoare"
                },
                {
                    quote: "In software, the most beautiful code is the code that doesn't exist.",
                    author: "Unknown"
                },
                {
                    quote: "It's not a bug – it's an undocumented feature.",
                    author: "Unknown"
                },
                {
                    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
                    author: "Arthur C. Clarke"
                },
                {
                    quote: "The most important part of writing a program is designing the data structures.",
                    author: "Dan Bricklin"
                },
                {
                    quote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
                    author: "Antoine de Saint-Exupéry"
                },
                {
                    quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
                    author: "Doug Linder"
                }	
            ]
        };
    },

    created() {
        this.shuffleCoworkerArray();
    },
    computed: {
    },
    

    methods: {
        shuffleCoworkerArray() {
            this.coworkers = this.coworkers.sort(() => Math.random() - 0.5);
        },
         getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            return this.quotes[randomIndex];
          }
    },
    // mounted() {
    //     const { quote, author } = getRandomQuote();
    //     this.quote = quote;
    //     this.author = author;
    //   }
}).mount("#app");