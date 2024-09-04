document.addEventListener('DOMContentLoaded', function() {
    // Function to get 1st and 10th of Moharram in Hijri and corresponding Gregorian dates for next 10 years
    function getMoharramDatesForNext10Years() {
        var currentHijriYear = HijriDate.fromGregorian(new Date()).getYear();
        var results = [];

        for (var i = 0; i < 10; i++) {
            var hijriYear = currentHijriYear + i;
            
            // 1st Moharram
            var firstMoharramHijri = new HijriDate(hijriYear, 0, 1); // Month 0 is Moharram, day 1
            var firstMoharramGregorian = firstMoharramHijri.toGregorian();

            // 10th Moharram
            var tenthMoharramHijri = new HijriDate(hijriYear, 0, 10); // Month 0 is Moharram, day 10
            var tenthMoharramGregorian = tenthMoharramHijri.toGregorian();

            results.push({
                hijriYear: hijriYear,
                firstMoharramHijri: firstMoharramHijri,
                firstMoharramGregorian: firstMoharramGregorian,
                tenthMoharramHijri: tenthMoharramHijri,
                tenthMoharramGregorian: tenthMoharramGregorian
            });
        }

        return results;
    }

    // Function to display the Moharram dates
    function displayMoharramDates() {
        var datesList = getMoharramDatesForNext10Years();
        var output = '';

        datesList.forEach(function(dates) {
            output += 'Hijri Year: ' + dates.hijriYear + '<br>';
            output += '1st Moharram (Hijri): ' + dates.firstMoharramHijri.getDate() + ' ' +
                      HijriDate.getMonthName(dates.firstMoharramHijri.getMonth()) + ' ' +
                      dates.firstMoharramHijri.getYear() + ' - Gregorian: ' +
                      dates.firstMoharramGregorian.toDateString() + '<br>';
            output += '10th Moharram (Hijri): ' + dates.tenthMoharramHijri.getDate() + ' ' +
                      HijriDate.getMonthName(dates.tenthMoharramHijri.getMonth()) + ' ' +
                      dates.tenthMoharramHijri.getYear() + ' - Gregorian: ' +
                      dates.tenthMoharramGregorian.toDateString() + '<br><br>';
        });

        document.getElementById('moharram-dates').innerHTML = output;
    }

    // Call the display function when the page loads
    displayMoharramDates();
});
