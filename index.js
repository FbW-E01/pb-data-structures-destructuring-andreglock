const fruit = 'banana';
const vegetable = 'cucumber';
const food = [ 'bread', 'cakes', 'pizza'];
const [bread, cakes, pizza] = food;
console.log('1:', fruit, vegetable, food, bread, cakes, pizza);

const costumes = {
    fran: 'witch',
    frank: 'drunk',
    ian: 'soldier',
}

const {fran} = costumes;
const {frank} = costumes;
const {ian} = costumes;
console.log('2:', fran, frank, ian);

const bandInfo = {
    band: `Regina Spektor`,
    nationality: `American-Russian`,
    genre: `indie-pop`,
    greatestHit: `Us`,
};

function printBand({band, nationality, genre, greatestHit}) {
    console.log(`3: ${band} is an ${nationality} band. They make ${genre} music and their greatest hit is "${greatestHit}".`);
};

printBand(bandInfo);

