class TestDataGenerator {
    //static variables for login
    static generatedEmail;
    static generatedPassword;
    static generatedZipCode;
    static generatedAddress;
    static generatedCity;
    static generatedCompany

    constructor(driver) {
        this.driver = driver;


        //first names array
        this.firstNames = [
            "John", "Jane", "Michael", "Sarah", "David", "Emily", "Daniel", "Laura", "James", "Sophia",
            "William", "Olivia", "Benjamin", "Isabella", "Lucas", "Amelia", "Alexander", "Mia", "Ethan", "Charlotte",
            "Henry", "Ella", "Jacob", "Madeline", "Samuel", "Harper", "Nathan", "Grace", "Matthew", "Avery",
            "Leo", "Scarlett", "Jack", "Lily", "Sebastian", "Zoey", "Gabriel", "Victoria", "Samuel", "Chloe",
            "Owen", "Audrey", "Daniel", "Zoe", "Aiden", "Hannah", "Elijah", "Addison", "Ryan", "Natalie",
            "Joseph", "Hannah", "Isaac", "Lucy", "Luke", "Sadie", "Caleb", "Stella", "Jack", "Sophie",
            "Wyatt", "Megan", "Jack", "Madelyn", "Caleb", "Ella", "Andrew", "Ava", "Mason", "Layla",
            "Carter", "Zara", "Julian", "Grace", "Max", "Kylie", "Landon", "Layla", "Cooper", "Charlotte",
            "Eli", "Victoria", "Charlie", "Luna", "Ezra", "Caroline", "Austin", "Sienna", "Grayson", "Nora",
            "Daniel", "Camila", "Thomas", "Ruby", "Nicholas", "Ivy", "Henry", "Penelope", "Simon", "Emma"
        ];
        //last names array
        this.lastNames = [
            "Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
            "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
            "Lee", "Perez", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Young", "Allen",
            "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Carter", "Mitchell",
            "Perez", "Roberts", "Evans", "Turner", "Gonzalez", "Phillips", "Campbell", "Parker", "Collins", "Stewart",
            "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper",
            "Richardson", "Cox", "Ward", "Wood", "James", "Hughes", "Green", "Kelley", "Simpson", "Woods",
            "George", "Washington", "Kennedy", "Chavez", "Stevens", "Burgess", "Foster", "Graham", "Duncan", "Hunter",
            "Murray", "Garrett", "Lane", "Russell", "Fox", "Hicks", "Ramos", "Wagner", "Hansen", "Bradley",
            "Carson", "Porter", "Hunter", "Hicks", "Johnston", "Williamson", "Banks", "Meyer", "Bennett", "Dean",
            "Stevenson", "Arnold", "Curtis", "Sanders", "Fisher", "Harrison", "Holly", "Hunt", "Keller", "Vasquez"
        ];

        this._illinoisCities = ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield",
            "Elgin", "Peoria", "Champaign", "Waukegan", "Cicero", "Bloomington",
            "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook",
            "Palatine", "Skokie", "Des Plaines", "Orland Park", "Tinley Park",
            "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates",
            "Oak Park", "Downers Grove", "Elmhurst", "Glenview", "DeKalb", "Lombard",
            "Moline", "Buffalo Grove", "Bartlett", "Urbana", "Crystal Lake", "Quincy",
            "Streamwood", "Carol Stream", "Romeoville", "Plainfield", "Hanover Park",
            "Carpentersville", "Wheeling", "Park Ridge", "Addison", "Calumet City"];

        //street types array
        this._streetTypes = ["St.", "Ave.", "Blvd.", "Rd.", "Ln.", "Dr.", "Ct.", "Pl."];

        //company names array
        this._companyNames = [
            "Nimbus Solutions",     "BluePeak Industries", "Quantum Arc",       "IronNest Technologies", "Velora Systems",
            "NovaHive",             "Cobalt Edge",         "EchoForge Inc.",    "Skylynx Corp",          "TitanLeaf",
            "DriftMind Labs",       "Crimson Harbor",      "GlideSphere",       "BrightCore Group",      "Axion Pulse",
            "Zenith Vale",          "Frostbyte Innovations","Lucent Orbit",     "Vertex Bloom",          "JetBridge Tech",
            "SolarRush Co.",        "Vortex Pathways",     "NeonSprout",        "IronFlare Ltd.",        "Stratus Grid",
            "Lumen Quarry",         "VantaCraft",          "CrystalRoot Dynamics","Hyperlane Systems",   "SableWave",
            "Radiant Vault",        "ForgeFront",          "Nextora Ventures",  "PhaseLoop Inc.",        "Silken Prism",
            "KairoTech",            "StormPeak Industries","Thornbyte",         "DeepNova",              "Graviton Labs",
            "MirageMint",           "BrightSilica",        "Omnisource",        "TracePoint",            "Blazeworks",
            "NeuroSage",            "Everphase",           "Veltrix",           "Spectra Bloom",         "Ironshore Dynamics"
        ];


    }

    //random item function
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }


    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    shuffleString(string) {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = this.getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array.join('');
    }

    // generate a password
    generateRandomPassword() {
        if (TestDataGenerator.generatedPassword) {
            return TestDataGenerator.generatedPassword;
        }
        const numbers = "0123456789";
        const stokerPart = "Stoker";

        // Generate a random numeric sequence
        let numericPart = '';
        for (let i = 0; i < 3; i++) {
            numericPart += numbers.charAt(this.getRandomInt(numbers.length));
        }
        numericPart += '_'; // Static underscore

        // Shuffle the numeric part
        const shuffledNumericPart = this.shuffleString(numericPart);
        TestDataGenerator.generatedPassword = stokerPart + shuffledNumericPart;
        return TestDataGenerator.generatedPassword;
    }

    //generate random name
    getRandomName() {
        const firstName = this.getRandomItem(this.firstNames);
        const lastName = this.getRandomItem(this.lastNames);
        return { firstName, lastName };
    }

    //generate random company
    getRandomCompany() {
        return this.getRandomItem(this._companyNames);
    }

    //generate random string
    generateRandomString(characters, length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(this.getRandomInt(characters.length));
        }
        return result;
    }

    generateRandomEmailAddress(length) {
        if (TestDataGenerator.generatedEmail) {
            return TestDataGenerator.generatedEmail;
        }
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        TestDataGenerator.generatedEmail = randomString + "@example.com";
        return TestDataGenerator.generatedEmail;
    }
    //generate random too short email address
    generateRandomTooShortEmailAddress(length) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        return randomString + "@e.com";
    }

    //generate random too long email address
    generateRandomTooLongEmailAddress(length) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        return randomString + "@dffdsddesrxasadsadssfdhghgsdfdsasgfujyyryytiukjkjnvcsasqweweteyttsdsdsfsdfdgdfdfdsdsdyudfidsdfdghjda.com";
    }

    getRandomPostalOrderNumber() {
        const minZip = 60000; // Starting zip code for Illinois
        const maxZip = 89999; // Ending zip code range
        TestDataGenerator.generatedZipCode = Math.floor(minZip + Math.random() * (maxZip - minZip + 1));
        return TestDataGenerator.generatedZipCode;
    }

    generateRandomAddress(length) {
        if (length < 1) {
            throw new Error("Street name length must be at least 1.");
        }

        const streetNumber = Math.floor(Math.random() * 9999) + 1; // Street number between 1 and 9999
        const streetName = this.generateRandomString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", length);
        const streetTypes = ["Street", "Avenue", "Boulevard", "Drive", "Court", "Place", "Lane", "Road"]; // Define STREET_TYPES
        const streetType = this._streetTypes[Math.floor(Math.random() * this._streetTypes.length)];
        TestDataGenerator.generatedAddress = `${streetNumber} ${streetName} ${streetType}`
        return TestDataGenerator.generatedAddress;
    }

    getRandomCity() {
        const randomIndex = Math.floor(Math.random() * this._illinoisCities.length);
        TestDataGenerator.generatedCity = this._illinoisCities[randomIndex]
        return TestDataGenerator.generatedCity ;
    }

}

module.exports = { TestDataGenerator };