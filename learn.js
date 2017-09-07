(function(){
    var wordSet = {
        "fee": "a fixed charge for a privilege or for professional services",
        "heritage": "that which is inherited",
        "kit": "gear consisting of a set of articles or tools for a specified purpose",
        "motto": "a favorite saying of a sect or political group",
        "muffin": "a sweet quick bread baked in a cup-shaped pan",
        "prestigious": "having an illustrious reputation; respected",
        "propaganda": "information that is spread to promote some cause",
        "ultimately": "as the end result of a succession or process",
        "butler": "a manservant who has charge of wines and the table",
        "buzz": "the sound of rapid vibration",
        "casserole": "large deep dish in which food can be cooked and served",
        "decent": "socially or conventionally correct; refined or virtuous",
        "invoice": "an itemized statement of money owed for goods or services",
        "monarch": "a nation's ruler usually by hereditary right",
        "portray": "represent abstractly, for example in a painting",
        "racket": "a sports implement used to strike a ball in various games",
        "reckon": "expect, believe, or suppose",
        "recruit": "cause to assemble or enlist in the military",
        "roast": "cook with dry heat, usually in an oven",
        "shift": "move very slightly",
        "stiff": "incapable of or resistant to bending",
        "tantrum": "a display of bad temper",
        "throne": "the chair of state for a monarch, bishop, etc.",
        "weed": "any plant that crowds out cultivated plants",
        "zoom": "the act of rising upward into the air",
        "alliance": "the state of being confederated",
        "apothecary": "a health professional trained in the art of preparing drugs",
        "asylum": "a shelter from danger or hardship",
        "banish": "expel, as if by official decree",
        "exile": "the act of expelling a person from their native land",
        "fiercely": "in a physically fierce manner",
        "friar": "male member of a religious order originally relying on alms",
        "insane": "afflicted with or characteristic of mental derangement",
        "nobleman": "a titled peer of the realm",
        "rancour": "a feeling of deep and bitter anger and ill-will",
        "stab": "poke or thrust abruptly",
        "vial": "a small bottle that contains a drug",
        "vineyard": "a farm of grapevines where wine grapes are produced",
        "weep": "shed tears because of sadness, rage, or pain",
        "windowsill": "the sill of a window",
        "woe": "misery resulting from affliction",
        "wretched": "deserving or inciting pity",
        "battered": "damaged by blows or hard usage",
        "chore": "a specific piece of work required to be done",
        "confront": "oppose, as in hostility or a competition",
        "dilemma": "state of uncertainty in a choice between unfavorable options",
        "dump": "a piece of land where waste materials are dumped",
        "era": "a period marked by distinctive character",
        "fairground": "an open area for holding fairs or exhibitions or circuses",
        "menace": "something that is a source of danger",
        "naive": "marked by or showing unaffected simplicity",
        "punk": "a performer or enthusiast of an alienated rock subculture",
        "stepfather": "the husband of your mother by a subsequent marriage",
        "strip": "take off or remove",
        "thrift": "extreme care in spending money",
        "wardrobe": "a piece of furniture that provides storage space for clothes",
        "woodwork": "work made of wood",
        "breakthrough": "the act of making an important discovery",
        "centenarian": "being at least 100 years old",
        "controversial": "marked by or capable of arousing disagreement",
        "curvature": "the property possessed by the curving of a line or surface",
        "evacuate": "move out of an unsafe location into safety",
        "limb": "one of the jointed appendages of an animal",
        "marvel": "be amazed at",
        "permafrost": "ground that is permanently frozen",
        "pill": "a dose of medicine in the form of a small pellet",
        "realist": "a person who accepts the world as it literally is",
        "reassure": "cause to feel confident",
        "regrow": "grow anew or continue growth after an injury or interruption",
        "revulsion": "intense aversion",
        "sensor": "any device that receives a signal or stimulus (as heat or pressure or light or motion etc.) and responds to it in a distinctive manner",
        "spine": "the series of vertebrae forming the axis of the skeleton and protecting the spinal cord",
        "tropical": "relating to part of the Earth's surface with hot climate",
        "vigorous": "characterized by forceful and energetic action or activity",
        "cashmere": "the wool of a type of goat from India",
        "cattle": "domesticated cows as a group",
        "cosy": "enjoying or affording comforting warmth and shelter especially in a small space",
        "crumble": "break or fall apart into fragments",
        "curly": "(of hair) having curls or waves",
        "dome": "a concave shape whose concavity faces downward",
        "dominant": "most frequent or common",
        "gravitate": "move toward",
        "homecoming": "a coming to or returning home",
        "hut": "small crude shelter used as a dwelling",
        "hyperactive": "more engaged than normal",
        "immense": "unusually great in size or amount or extent or scope",
        "lentil": "widely cultivated Eurasian annual herb grown for its edible flattened seeds that are cooked like peas and also ground into meal and for its leafy stalks that are used as fodder",
        "linen": "a fabric woven with fibers from the flax plant",
        "orchard": "garden consisting of a small cultivated wood",
        "panoramic": "as from an altitude or distance",
        "premises": "land and the buildings on it",
        "prosecute": "conduct legal proceedings against a defendant",
        "sentimental": "marked by tender, romantic, or nostalgic emotion",
        "terrace": "usually paved outdoor area adjoining a residence",
        "turmeric": "widely cultivated tropical plant of India having yellow flowers and a large aromatic deep yellow rhizome; source of a condiment and a yellow dye",
        "woollen": "of or related to or made of wool",
        "chamber": "a natural or artificial enclosed space",
        "chaos": "formless state of matter before the creation of the cosmos",
        "downpour": "a heavy rain",
        "eternity": "time without end",
        "euphoria": "a feeling of great elation",
        "goblet": "a drinking glass with a base and stem",
        "loathe": "find repugnant",
        "longhand": "having words written out in full by hand",
        "medieval": "relating to or belonging to the Middle Ages",
        "mob": "a disorderly crowd of people",
        "obsession": "an unhealthy and compulsive preoccupation with something",
        "phoenix": "a legendary bird that burned to death and emerged reborn",
        "rivalry": "the act of competing as for profit or a prize",
        "twinkly": "smiling with happiness or optimism",
        "ascent": "a movement upward",
        "canoe": "a small, light boat propelled with a paddle",
        "catapult": "an engine providing medieval artillery used during sieges",
        "ferry": "a boat transporting people or vehicles over a body of water",
        "hollow": "not solid; having a space or gap or cavity",
        "fuss": "an excited state of agitation",
        "kneel": "rest one's weight on one's knees",
        "maiden": "an unmarried girl (especially a virgin)",
        "voyage": "a journey to some distant place",
        "oyster": "marine mollusks having a rough irregular shell",
        "perish": "pass from physical life",
        "prosperous": "in fortunate circumstances financially",
        "psychotherapist": "a therapist who deals with mental and emotional disorders",
        "raft": "a flat float that can be used for transport",
        "snorkel": "device allowing a swimmer to breathe while face down",
        "steerage": "the act of steering a ship",
        "sumptuous": "rich and superior in quality",
        "trek": "any long and difficult trip",
        "tribesman": "someone who lives in a tribe",
        "tune": "a succession of notes forming a distinctive sequence",
        "buddy": "a close friend who accompanies his mates in their activities",
        "convict": "find or declare guilty",
        "grin": "to draw back the lips and reveal the teeth, in a smile, grimace, or snarl",
        "outburst": "an unrestrained expression of emotion",
        "truant": "one who is absent from school without permission",
        "scruffy": "shabby and untidy",
        "stop dead": "stop moving or become immobilized",
        "stunned": "dazed or knocked unconscious by a heavy blow",
        "amenity": "pleasantness resulting from agreeable conditions",
        "arch": "a curved masonry construction for spanning an opening",
        "depict": "give a description of",
        "distinctive": "of a feature that helps to identify a person or thing",
        "feat": "a notable achievement",
        "float": "be on or below a liquid surface and not sink to the bottom",
        "gig": "a booking for musicians",
        "glide": "move smoothly and effortlessly",
        "mouth": "the opening through which food is taken in",
        "penthouse": "an apartment located on the top floors of a building",
        "thriving": "very lively and profitable",
        "trace": "an indication that something has been present",
        "transistor": "a semiconductor device capable of amplification",
        "triumph": "a successful ending of a struggle or contest",
        "acquaintance": "personal knowledge or information about someone or something",
        "agitated": "physically disturbed or set in motion",
        "burgle": "enter and rob a dwelling",
        "candlestick": "a holder with sockets for candles",
        "crow": "a black bird having a raucous call",
        "culprit": "someone or something responsible for harm or wrongdoing",
        "gamble": "take a risk in the hope of a favorable outcome",
        "intruder": "someone who enters a place or situation without permission",
        "lump": "a compact mass",
        "ransack": "search thoroughly",
        "sole": "the underside of the foot",
        "spike": "a long, thin sharp-pointed implement (wood or metal)",
        "threshold": "the starting point for a new state or experience",
        "wobbly": "inclined to shake as from weakness or defect",
        "absurd": "inconsistent with reason or logic or common sense",
        "agnostic": "a person who claims the existence of God is unknowable",
        "bid": "propose a payment",
        "bulk": "the property possessed by a large mass",
        "contradict": "prove negative; show to be false",
        "creationism": "the literal belief in the account of Creation given in the Book of Genesis",
        "evolve": "undergo development",
        "gossip": "light informal conversation for social occasions",
        "healer": "a person skilled in a particular type of therapy",
        "heresy": "a belief that rejects the orthodox tenets of a religion",
        "heretical": "departing from accepted beliefs or standards",
        "hip": "either side of the body below the waist and above the thigh",
        "hurl": "throw forcefully",
        "lawbreaker": "someone who violates the law",
        "mediocre": "moderate to inferior in quality",
        "mesmerize": "attract strongly, as if with a magnet",
        "migraine": "a severe, recurring headache",
        "militant": "engaged in war",
        "notion": "a general inclusive concept",
        "railing": "a barrier consisting of a horizontal bar and supports",
        "rational": "consistent with or based on or using reason",
        "riot": "a state of disorder involving group violence",
        "spill": "flow, run or fall out and become lost",
        "suffragette": "a woman advocate of women's right to vote",
        "unverifiable": "(of e.g. evidence) not objective or easily verified"
    };

    var crossWordSet = [];
    var wordsCount = 20;

    function CrosswordGenerator(wordsSet) {
        this.wordsSet = {};
        this.crossword = null;

        if (this.__checkWordSet(wordsSet)) {
            this.wordsSet = wordsSet;
        }
    }

    CrosswordGenerator.prototype = Object.create({});
    CrosswordGenerator.prototype.constructor = CrosswordGenerator;
    CrosswordGenerator.prototype.__checkWordSet = function(wordsSet) {
        if (!(typeof wordsSet === 'object')) {
            return false;
        }

        var valid = true;
        var wordRegexp = /^[^\s-_~!@#$%^&*()'",.]+$/;

        for(var word in wordsSet) {
            if (!wordsSet.hasOwnProperty(word)) {
                continue;
            }

            if (!wordRegexp.test(word) || (typeof wordsSet[word] !== 'string')) {
                valid = false;
            }
        }

        return valid;
    };
    CrosswordGenerator.prototype.setWordsSet = function (wordsSet) {
        if (this.__checkWordSet(wordsSet)) {
            this.wordsSet = wordsSet;
            this.crossword = null;
        }
    };
    CrosswordGenerator.prototype.getWordsSet = function () {
        return Object.create(this.wordsSet);
    };
    CrosswordGenerator.prototype.__wordsLettersStat = function () {
        var wordsStat = {};
        var globalLettersStat = {};
        var index = 0;

        for (var wordIndex in this.wordsSet) {
            if (!this.wordsSet.hasOwnProperty(wordIndex)) {
                continue;
            }

            var localLettersStat = {};
            var wordLetters = this.wordsSet[wordIndex].split('');

            for (index in wordLetters) {
                if (undefined !== localLettersStat[wordLetters[index]]) {
                    localLettersStat[wordLetters[index]]++;
                } else {
                    localLettersStat[wordLetters[index]] = 1;
                }

                if (undefined !== globalLettersStat[wordLetters[index]]) {
                    globalLettersStat[wordLetters[index]]++;
                } else {
                    globalLettersStat[wordLetters[index]] = 1;
                }
            }

            wordsStat[this.wordsSet[wordIndex]] = localLettersStat;
        }

        return {
            words: wordsStat,
            global: globalLettersStat
        };
    };
    CrosswordGenerator.prototype.__getWordsRating = function (letterStat) {
        console.log(letterStat);
        var wordsRating = [];

        for (var wordIndex in this.wordsSet) {
            if (!this.wordsSet.hasOwnProperty(wordIndex)) {
                continue;
            }

            var wordLength = this.wordsSet[wordIndex].length;
            var wordRating = wordLength;
            var letterIndex = 0;

            for (var letter in letterStat.global) {
                if (Object.keys(letterStat.words[this.wordsSet[wordIndex]]).indexOf(letter) < 0) {
                    continue;
                }

                wordRating += Math.round(letterStat.global[letter] * Math.sqrt(
                    Math.abs(1 - (letterIndex - wordLength/2)/wordLength))
                );
                letterIndex++;
            }

            wordsRating.push({
                word: this.wordsSet[wordIndex],
                rating: wordRating
            });
        }

        wordsRating.sort(function (a, b) {
            if (a.rating < b.rating) {
                return 1;
            }

            if (a.rating > b.rating) {
                return -1;
            }

            return 0;
        });

        return wordsRating;
    };
    CrosswordGenerator.prototype.__getWordsTerminators = function () {
        var terminators = {};

        for (var wordIndex in this.wordsSet) {
            if (!this.wordsSet.hasOwnProperty(wordIndex)) {
                continue;
            }

            var word = this.wordsSet[wordIndex];
            var wordTerminators = [];

            for (var innerWordIndex in this.wordsSet) {
                if ((this.wordsSet[innerWordIndex].indexOf(word[0]) >= 0 ||
                    this.wordsSet[innerWordIndex].indexOf(word[word.length - 1]) >= 0) &&
                    this.wordsSet[innerWordIndex] !== word
                ) {
                    wordTerminators.push(this.wordsSet[innerWordIndex]);
                }
            }
            terminators[word] = wordTerminators;
        }

        return terminators;
    };
    CrosswordGenerator.prototype.__getWordsIntersections = function () {
        var intersections = {};

        for (var wordIndex in this.wordsSet) {
            if (!this.wordsSet.hasOwnProperty(wordIndex)) {
                continue;
            }

            var word = this.wordsSet[wordIndex];
            var wordLetters = word.split('');
            var wordIntersections = [];

            for (var innerWordIndex in this.wordsSet) {
                if (!this.wordsSet.hasOwnProperty(innerWordIndex)) {
                    continue;
                }

                var innerWord = this.wordsSet[innerWordIndex];
                var innerWordLetters = innerWord.split('');

                for (var letterIndex in innerWordLetters) {
                    if (!innerWordLetters.hasOwnProperty(letterIndex)) {
                        continue;
                    }

                    if (wordLetters.indexOf(innerWordLetters[letterIndex]) >= 0 &&
                        innerWord !== word
                    ) {
                        wordIntersections.push(innerWord);
                    }
                }


            }
            intersections[word] = wordIntersections;
        }

        return intersections;
    };

    CrosswordGenerator.prototype.generate = function () {
        var letterStat = this.__wordsLettersStat();
        var wordsRating = this.__getWordsRating(letterStat);
        var wordsTerminators = this.__getWordsTerminators();
        var wordsIntersections = this.__getWordsIntersections();


        console.log('wordsRating', wordsRating);
        console.log('wordsTerminators', wordsTerminators);
        console.log('wordsIntersections', wordsIntersections);
    };


    var words = [];
    var wordsList = Object.keys(wordSet);

    for (var i = 1; i < 20; i++) {
        do {
            var word = wordsList[wordsList.length * Math.random() << 0];
        } while (!words.indexOf(word) < 0);
        words.push(word);
    }

    console.log(words);
    window.cg = new CrosswordGenerator(words);
    window.cg.generate();
})();