var faker = require('faker');

function generateMovies () {
    var movies = [];
    for (let id = 0; id < 50; id++) {
        var name = faker.name.firstName();
        var type = "NORMAL";
        var releaseYear = faker.random.number();
        
        movies.push({
            "id": id,
            "name": name,
            "type": type,
            "releaseYear": releaseYear,
        })
    }

    return {"movies": movies}
}

module.exports = generateMovies;