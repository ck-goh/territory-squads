const territories = {
    'p1t1': {
        name: 'Rebel Base',
        phase: 1,
        stars: [885000, 6580000, 45600000],
        missions: [
            { name: 'Sector 12', type: 'combat', tiers: [
                    { stars: 3, units: 3, requires: ['Rebels'], rewards: [14700, 2200] },
                    { stars: 6, units: 4, requires: ['Rebels', 'Hoth Rebel Scout'], rewards: [140000, 9400] },
                    { stars: 7, units: 5, requires: ['Rebels', 'Hoth Rebel Scout', 'Hoth Rebel Soldier'], rewards: [233000, 11800] }
                ] },
            { name: 'Sector 11', type: 'combat', tiers: [
                    { stars: 3, units: 3, requires: ['Light Side'], rewards: [14700, 2200] },
                    { stars: 6, units: 4, requires: ['Light Side'], rewards: [140000, 9400] },
                    { stars: 7, units: 5, requires: ['Light Side'], rewards: [233000, 11800] }
                ] },
        ]
    },
    'p2t1': {
        name: 'Ion Cannon',
        phase: 2,
        stars: [1900000, 19800000, 55000000],
        missions: []
    },
    'p2t2': {
        name: 'Overlook',
        phase: 2,
        stars: [1900000, 15400000, 43800000],
        missions: []
    },
    'p3t1': {
        name: 'Rear Airspace',
        phase: 3,
        stars: [1920000, 16500000, 26300000],
        missions: []
    },
    'p3t2': {
        name: 'Rear Trenches',
        phase: 3,
        stars: [3510000, 27600000, 64800000],
        missions: []
    },
    'p3t3': {
        name: 'Power Generator',
        phase: 3,
        stars: [3510000, 22400000, 52200000],
        missions: []
    },
    'p4t1': {
        name: 'Forward Airspace',
        phase: 4,
        stars: [2176000, 18700000, 29800000],
        missions: []
    },
    'p4t2': {
        name: 'Forward Trenches',
        phase: 4,
        stars: [5220000, 34700000, 78100000],
        missions: []
    },
    'p4t3': {
        name: 'Outer Pass',
        phase: 4,
        stars: [5220000, 28300000, 62600000],
        missions: []
    },
    'p5t1': {
        name: 'Contested Airspace',
        phase: 5,
        stars: [18000000, 34000000, 50000000],
        missions: []
    },
    'p5t2': {
        name: 'Snowfields',
        phase: 5,
        stars: [14100000, 49300000, 89800000],
        missions: []
    },
    'p5t3': {
        name: 'Forward Stronghold',
        phase: 5,
        stars: [11100000, 41000000, 71600000],
        missions: []
    },
    'p6t1': {
        name: 'Imperial Fleet Staging Area',
        phase: 6,
        stars: [21600000, 40800000, 60000000],
        missions: []
    },
    'p6t2': {
        name: 'Imperial Flank',
        phase: 6,
        stars: [31000000, 72000000, 100000000],
        missions: []
    },
    'p6t3': {
        name: 'Imperial Landing',
        phase: 6,
        stars: [26400000, 59300000, 81500000],
        missions: []
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
    const selectT = t => {
        const territory = territories[t];
        $('#territory').text(territory.name);
        $('#power-1').text(num(territory.stars[0]));
        $('#power-2').text(num(territory.stars[1]));
        $('#power-3').text(num(territory.stars[2]));
        const ms = d3.select('#missions tbody').selectAll('tr').data(territory.missions);
        ms.exit().remove();
        const rows = ms.enter().append('tr')
            .html('<th></th><td class="tier"></td><td class="tier"></td><td class="tier"></td><td></td>')
            .merge(ms);
        rows.each(function (d) { d3.select(this).classed('mission-' + d.type, true); });
        rows.select('th').text(d => d.name);
        //rows.selectAll('td.tier').data(d => d.tiers).html(t => t.join('<br>'));
        //rows.selectAll('td:last-child').data(d => d.tiers).html(t => t.join('<br>'));
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
