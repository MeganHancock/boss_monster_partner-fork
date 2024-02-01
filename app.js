console.log('js loaded')

const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss() {
    console.log('test')
    let combinedAttackDmg = 0
    heroes.forEach(hero => combinedAttackDmg += hero.damage)
    boss.health -= combinedAttackDmg
    if (boss.health <= 0) {
        boss.maxHealth += 10
        boss.health = 100
    }
    console.log('boss health', boss.health)
    console.log('boss max health', boss.maxHealth)

    // console.log(combinedAttackDmg)
    drawBoss()

}
function bossFightBack() {



    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health <= 0) {
            hero.health = 0
        }
        console.log('hero health', hero.health)

    }
    )
    drawBoss()
}

function drawBoss() {
    const bossElement = document.getElementById('boss')
    const bossStatsElement = bossElement.querySelector('.stats')

    bossStatsElement.innerText = 'HP: ${ boss.maxHealth }%'
}

drawBoss()
// setInterval(bossFightBack, 500)