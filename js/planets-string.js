(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     *
     *
     *
     */

    console.log(planetsArray.join('<br>'));

    //**OR**
   const planetsWithBrs= planetsArray.join('<br>');

        // <ul>
        //     <li>Mercury</li>
        //     <li>Venus</li>
        //     <li>Earth</li>
        //     <li>Mars</li>
        //     <li>Jupiter</li>
        //     <li>Saturn</li>
        //     <li>Neptune</li>
        //     <li>Uranus</li>
        // </ul>

   const planetsList = `<u><li>${planetsArray.join('</li><li>')}</li></ul>`
    console.log(planetsList)


   // document.write(planetsWithBrs)
    document.write(planetsList)


})();