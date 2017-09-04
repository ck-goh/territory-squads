const territories = {
    'p1t1': {
        name: 'Rebel Base',
        phase: 1,
        stars: [885000, 6580000, 45600000],
        missions: {
            rewards: [24000, 51000, 91000, 144000, 211000, 291000],
            combat: [
                { name: 'Sector 12', requires: 'Light Side (2-star)' },
                { name: 'Sector 11', requires: 'Light Side (2-star)' }
            ]
        }
    },
    'p2t1': {
        name: 'Ion Cannon',
        phase: 2,
        stars: [1900000, 19800000, 55000000],
        missions: {
            rewards: [43000, 72000, 115000, 172000, 243000, 329000],
            combat: [
                { name: "Ion Cannon Perimeter", requires: "Light Side (3-Star)" },
                { name: "Sector 10", requires: "Rebels (3-Star)\n[c][f0ff23]Hoth Rebel Soldier[-][/c]" }
            ]
        }
    },
    'p2t2': {
        name: 'Overlook',
        phase: 2,
        stars: [1900000, 15400000, 43800000],
        missions: {
            rewards: [43000, 72000, 115000, 172000, 243000, 329000],
            combat: [
                { name: "Sector 9", requires: "Light Side (3-Star)" },
            ]
        }
    },
    'p3t1': {
        name: 'Rear Airspace',
        phase: 3,
        stars: [1920000, 16500000, 26300000],
        missions: {
            rewards: [96000, 203000, 371000],
            combat: [
                { name: "Rear Air Combat Zone", requires: "Light Side (3-Star)" },
            ]
        }
    },
    'p3t2': {
        name: 'Rear Trenches',
        phase: 3,
        stars: [3510000, 27600000, 64800000],
        missions: {
            rewards: [65000, 96000, 142000, 203000, 280000, 372000],
            combat: [
                { name: "Rear Trenches Perimeter", requires: "Light Side (4-Star)" },
                { name: "Sector 8", requires: "Rebels (4-Star)\n[c][f0ff23]Hoth Rebel Scout[-][/c]" },
            ]
        }
    },
    'p3t3': {
        name: 'Power Generator',
        phase: 3,
        stars: [3510000, 265000, 96000, 142000, 203000, 280000, 372000],
        missions: {
            rewards: [65000, 96000, 142000, 203000, 280000, 372000],
            combat: [
                { name: "Sector 7", requires: "Light Side (4-Star)" },
            ]
        }
    },
    'p4t1': {
        name: 'Forward Airspace',
        phase: 4,
        stars: [2176000, 18700000, 29800000],
        missions: {
            rewards: [76000, 111000, 163000, 232000, 319000, 423000],
            combat: [
                { name: "Forward Air Combat Zone", requires: "Light Side (4-Star)" },
            ]
        }
    },
    'p4t2': {
        name: 'Forward Trenches',
        phase: 4,
        stars: [5220000, 34700000, 78100000],
        missions: {
            rewards: [76000, 111000, 163000, 232000, 319000, 423000],
            combat: [
                { name: "Forward Trenches Perimeter", requires: "Light Side (5-Star)" },
                { name: "Sector 6", requires: "Rebels (5-Star)\n[c][f0ff23]Hoth Rebel Soldier[-][/c]" },
            ]
        }
    },
    'p4t3': {
        name: 'Outer Pass',
        phase: 4,
        stars: [5220000, 28300000, 62600000],
        missions: {
            rewards: [76000, 111000, 163000, 232000, 319000, 423000],
            combat: [
                { name: "Sector 5", requires: "Light Side (5-Star)" },
            ]
        }
    },
    'p5t1': {
        name: 'Contested Airspace',
        phase: 5,
        stars: [18000000, 34000000, 50000000],
        missions: {
            rewards: [90000, 128000, 185000, 261000, 356000, 470000],
            combat: [
                { name: "Contested Air Combat Zone", requires: "Light Side (5-Star)" },
            ]
        }
    },
    'p5t2': {
        name: 'Snowfields',
        phase: 5,
        stars: [14100000, 49300000, 89800000],
        missions: {
            rewards: [90000, 128000, 185000, 261000, 356000, 470000],
            combat: [
                { name: "Snowfield Perimeter", requires: "Light Side (6-Star)" },
                { name: "Sector 4", requires: "Rebels (6-Star)\n[c][f0ff23]Hoth Rebel Scout[-][/c]" },
            ]
        }
    },
    'p5t3': {
        name: 'Forward Stronghold',
        phase: 5,
        stars: [11100000, 41000000, 71600000],
        missions: {
            rewards: [90000, 128000, 185000, 261000, 356000, 470000],
            combat: [
                { name: "Sector 3", requires: "Light Side (6-Star)" },
            ]
        }
    },
    'p6t1': {
        name: 'Imperial Fleet Staging Area',
        phase: 6,
        stars: [21600000, 40800000, 60000000],
        missions: {
            rewards: [152000, 191000, 249000, 327000, 424000, 541000],
            combat: [
                { name: "Imperial Air Combat Zone", requires: "Light Side (6-Star)" },
            ]
        }
    },
    'p6t2': {
        name: 'Imperial Flank',
        phase: 6,
        stars: [31000000, 72000000, 100000000],
        missions: {
            rewards: [152000, 191000, 249000, 327000, 424000, 541000],
            combat: [
                { name: "Imperial Flank Perimeter", requires: "Light Side (7-Star)" },
                { name: "Sector 2", requires: "Rebels (7-Star)" },
            ]
        }
    },
    'p6t3': {
        name: 'Imperial Landing',
        phase: 6,
        stars: [26400000, 59300000, 81500000],
        missions: {
            rewards: [152000, 191000, 249000, 327000, 424000, 541000],
            combat: [
                { name: "Sector 1", requires: "Light Side (7-Star)" },
            ]
        }
    }
};
$(() => fetch("https://ck-goh.github.io/swgoh-data/units.json").then(r => r.json()).then(units => {
    const num = n => {
        if (isNaN(n)) {
            return "Unknown";
        }
        else {
            return d3.format(",")(n);
        }
    };
    const portrait = (container, t, s) => {
        container.attr('title', t);
        container.selectAll("*").remove();
        const unit = units[t];
        if (unit === undefined) {
            container.text(t);
            return;
        }
        const port = container.append('div').classed('portrait', true);
        port.append('img').attr('src', 'https://swgoh.gg/static/img/assets/' + unit.texture + '.png');
        port.append('div').classed('border', true);
        for (var i = 1; i <= s; i++) {
            port.append('div').attr('class', 'star star-' + i).text('⭐');
        }
        port.append('div').classed('name', true).text(t);
    };
    const mkrequires = s => s.replace('\n', '<br>')
        .replace(/\[c\]\[([0-9a-f]{6})\](.*?)\[-\]\[\/c\]/, '<span style="color: #$1">$2</span>');
    //{ name: "Sector 10", requires: "Rebels (3-Star)\n[c][f0ff23]Hoth Rebel Soldier[-][/c]" }
    const selectT = t => {
        const territory = territories[t];
        $('#territory').text(territory.name);
        $('#power-1').text(num(territory.stars[0]));
        $('#power-2').text(num(territory.stars[1]));
        $('#power-3').text(num(territory.stars[2]));
        const ms = d3.select('#missions tbody').selectAll('tr').data(territory.missions.combat);
        ms.exit().remove();
        const rows = ms.enter().append('tr')
            .html('<th></th><td class="requires"></td><td class="rewards"></td>')
            .merge(ms);
        rows.select('th').text(d => d.name);
        rows.select('td.requires').html(d => mkrequires(d.requires));
        rows.select('td.rewards').text(territory.missions.rewards[5]);
    };
    selectT('p1t1');
    d3.selectAll('svg path').on('click', function () {
        d3.selectAll('svg path').classed('active', false);
        d3.select(this).classed('active', true);
        selectT(d3.select(this).attr('id'));
    });
    d3.selectAll('#guild').on('enter', () => {
        const guildlink = d3.select('#guild').property("value");
        fetch(guildlink).then(r => r.body()).then(html => {
            console.log("got it");
        });
    });
}));
