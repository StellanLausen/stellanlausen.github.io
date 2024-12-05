const facts = [
    {
        fact: "Stille Nacht, heilige Nacht ist eines der bekanntesten Weihnachtslieder der Welt und gilt als Inbegriff des Weihnachtsbrauchtums im deutschen Sprachraum."
    },
    {
        fact: "\"O Tannenbaum\" war mal ein Liebeslied"
    },
    {
        fact: "Rudolph, das Rentier ist schon 85 Jahre alt Der rotnasige Rudolph, das wohl bekannteste Rentier der Welt, wurde als Protagonist für das Weihnachts-Malbuch eines amerikanischen Kaufhauses im Jahr 1939 erschaffen."
    },
    {
      fact: "Das Weihnachtslied \"Stille Nacht, heilige Nacht\" stammt aus dem Jahre 1816 vom damaligen Hilfspfarrer Joseph Mohr und wurde in über 300 Sprachen und Dialekte aus aller Welt übersetzt."
    },
    {
        fact: "Im italienischen Gubbio in Umbrien steht der höchste Weihnachtsbaum der Welt: Er ist 450 Meter breit und 750 hoch - eine K​onstruktion aus Lichterketten. Auf seinem Gipfel leuchtet ein 1000 Quadratmeter großer Komet. Der leuchtende Mega-Baum wurde 1991 ins Guinness-Buch der Rekorde aufgenommen."
    },
    {
        fact: "1839 erfand der deutsche Theologe und Sozialpädagoge Johann Hinrich Wichern den Adventskranz. Damals nicht nur mit 4 großen, weißen Kerzen für die Sonntage, sondern auch 19 kleinen, roten Kerzen für die Wochentage dazwischen. In den ersten Jahren allerdings noch ohne Tannengrün."
    },
]

let iterateFacts = 0;

$('.document').ready(function() {

    $('.fact').text(facts[iterateFacts].fact);

    $('.next-btn').click(function () {

        iterateFacts < facts.length-1 ? iterateFacts++ : iterateFacts = 0
        $('.fact').text(facts[iterateFacts].fact);
    });

});