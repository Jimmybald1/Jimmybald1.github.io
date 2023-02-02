var defaultsettings = {
	"prestige_speed": 3.3,
	"prestige_power": 11.3,
	"prestige_ballCost": -66,
	"prestige_speedCost": -66,
	"prestige_powerCost": -66,

	"cards_speed_value": 2,
	"cards_speed_active": true,
	"cards_power_value": 4,
	"cards_power_active": true,
	"cards_qc_value": 5,
	"cards_qc_active": true,
	"cards_spec_value": 4,
	"cards_spec_active": true,
	"cards_catalyst_value": 5.5,
	"cards_catalyst_active": true,
	"cards_shieldpen_value": 20,
	"cards_shieldpen_active": true,

	"perks_speed": 4,
	"perks_power": 4,
	"perks_ballCost": -60,
	"perks_speedCost": -60,
	"perks_powerCost": -60,

	"boosts_ph_active": true,

	"badges_basic": 400,
	"badges_sniper": 400,
	"badges_splash": 400,
	"badges_poison": 400,
	"badges_demo": 400,
	"badges_scatter": 400,
	"badges_pierce": 400,
	"badges_cash": 400,
	"badges_sword": 400,
	"badges_fire": 400,
	"badges_lightning": 400,

	"skillstree_poison_speed": 1.15,
	"skillstree_poison_enrage": 2,
	"skillstree_demo_enrage": 3,
	"skillstree_lightning_power": 1.4,
	"skillstree_lightning_speed": 1.1,
};

var defaulttabs = [{
	"id": "tab0",
	"name": "Tab0",
	"settings": structuredClone(defaultsettings),
	"global_settings_active": true,
	"all_settings_active": false,
	
	"base_type": null,
	"base_amount": null,
	"base_speedLevel": null,
	"base_powerLevel": null,

	"175_type": null,
	"175_amount": null,
	"175_speedLevel": null,
	"175_powerLevel": null,

	"7500_type": "poison",
	"7500_amount": 50,
	"7500_speedLevel": 99,
	"7500_powerLevel": 115,

	"175k_type": null,
	"175k_amount": null,
	"175k_speedLevel": null,
	"175k_powerLevel": null,

	"15m_type": "cash",
	"15m_amount": 50,
	"15m_speedLevel": 99,
	"15m_powerLevel": 103,

	"400b_type": null,
	"400b_amount": null,
	"400b_speedLevel": null,
	"400b_powerLevel": null,

	"10q_type": "sword",
	"10q_amount": 5,
	"10q_speedLevel": 71,
	"10q_powerLevel": 71,

	"10s_type": "lightning",
	"10s_amount": 50,
	"10s_speedLevel": 40,
	"10s_powerLevel": 51,

	"100o_type": "demo",
	"100o_amount": 25,
	"100o_speedLevel": 25,
	"100o_powerLevel": 25,

	"5aa_type": null,
	"5aa_amount": null,
	"5aa_speedLevel": null,
	"5aa_powerLevel": null,

	"80ac_type": null,
	"80ac_amount": null,
	"80ac_speedLevel": null,
	"80ac_powerLevel": null,
}];

var slots = [
	"base",
	"175",
	"7500",
	"175k",
	"15m",
	"400b",
	"10q",
	"10s",
	"100o",
	"5aa",
	"80ac"
];

var basestats = {
	"base": {
		"basic": {
			"speed": 1.0000,
			"power": 1.00
		}
	},
	"175": {
		"sniper": {
			"speed": 1.3750,
			"power": 4.20
		},
		"splash": {
			"speed": 0.8250,
			"power": 4.00
		}
	},
	"7500": {
		"sniper": {
			"speed": 1.5000,
			"power": 15.75
		},
		"splash": {
			"speed": 0.9000,
			"power": 15.00
		},
		"poison": {
			"speed": 1.0800,
			"power": 1.50
		},
		"demo": {
			"speed": 0.5400,
			"power": 300.00
		}
	},
	"175k": {
		"sniper": {
			"speed": 1.6250,
			"power": 63.00
		},
		"splash": {
			"speed": 0.9750,
			"power": 60.00
		},
		"poison": {
			"speed": 1.1700,
			"power": 1.65
		},
		"demo": {
			"speed": 0.5850,
			"power": 1200.00
		},
		"scatter": {
			"speed": 1.3000,
			"power": 60.00
		}
	},
	"15m": {
		"sniper": {
			"speed": 1.7500,
			"power": 210.00
		},
		"splash": {
			"speed": 1.0500,
			"power": 200.00
		},
		"poison": {
			"speed": 1.2600,
			"power": 1.85
		},
		"demo": {
			"speed": 0.6300,
			"power": 4000.00
		},
		"scatter": {
			"speed": 1.4000,
			"power": 200.00
		},
		"pierce": {
			"speed": 1.4000,
			"power": 200.00
		},
		"cash": {
			"speed": 1.5400,
			"power": 0.35
		}
	},
	"400b": {
		"sniper": {
			"speed": 1.9375,
			"power": 945.00
		},
		"splash": {
			"speed": 1.1625,
			"power": 900.00
		},
		"poison": {
			"speed": 1.3950,
			"power": 2.10
		},
		"demo": {
			"speed": 0.6975,
			"power": 18000.00
		},
		"scatter": {
			"speed": 1.5500,
			"power": 900.00
		},
		"pierce": {
			"speed": 1.5500,
			"power": 900.00
		},
		"cash": {
			"speed": 1.7050,
			"power": 0.39
		},
		"sword": {
			"speed": 1.9375,
			"power": 1170.00
		},
		"fire": {
			"speed": 1.9375,
			"power": 900.00
		},
		"lightning": {
			"speed": 1.3175,
			"power": 900.00
		}
	},
	"10q": {
		"sniper": {
			"speed": 2.1875,
			"power": 2730.00
		},
		"splash": {
			"speed": 1.3125,
			"power": 2600.00
		},
		"poison": {
			"speed": 1.5750,
			"power": 2.35
		},
		"demo": {
			"speed": 0.7875,
			"power": 52000.00
		},
		"scatter": {
			"speed": 1.7500,
			"power": 2600.00
		},
		"pierce": {
			"speed": 1.7500,
			"power": 2600.00
		},
		"cash": {
			"speed": 1.9250,
			"power": 0.43
		},
		"sword": {
			"speed": 2.1875,
			"power": 3380.00
		},
		"fire": {
			"speed": 2.1875,
			"power": 2600.00
		},
		"lightning": {
			"speed": 1.4875,
			"power": 2600.00
		}
	},
	"10s": {
		"sniper": {
			"speed": 2.3750,
			"power": 12600.00
		},
		"splash": {
			"speed": 1.4250,
			"power": 12000.00
		},
		"poison": {
			"speed": 1.7100,
			"power": 2.70
		},
		"demo": {
			"speed": 0.8550,
			"power": 240000.00
		},
		"scatter": {
			"speed": 1.9000,
			"power": 12000.00
		},
		"pierce": {
			"speed": 1.9000,
			"power": 12000.00
		},
		"cash": {
			"speed": 2.0900,
			"power": 0.50
		},
		"sword": {
			"speed": 2.3750,
			"power": 15600.00
		},
		"fire": {
			"speed": 2.3750,
			"power": 12000.00
		},
		"lightning": {
			"speed": 1.6150,
			"power": 12000.00
		}
	},
	"100o": {
		"sniper": {
			"speed": 2.5625,
			"power": 84000.00
		},
		"splash": {
			"speed": 1.5375,
			"power": 80000.00
		},
		"poison": {
			"speed": 1.8450,
			"power": 3.10
		},
		"demo": {
			"speed": 0.9225,
			"power": 1600000.00
		},
		"scatter": {
			"speed": 2.0500,
			"power": 80000.00
		},
		"pierce": {
			"speed": 2.0500,
			"power": 80000.00
		},
		"cash": {
			"speed": 2.2550,
			"power": 0.58
		},
		"sword": {
			"speed": 2.5625,
			"power": 104000.00
		},
		"fire": {
			"speed": 2.5625,
			"power": 80000.00
		},
		"lightning": {
			"speed": 1.7425,
			"power": 80000.00
		}
	},
	"5aa": {
		"sniper": {
			"speed": 2.7500,
			"power": 756000.00
		},
		"splash": {
			"speed": 1.6500,
			"power": 720000.00
		},
		"poison": {
			"speed": 1.9800,
			"power": 3.25
		},
		"demo": {
			"speed": 0.9900,
			"power": 14400000.00
		},
		"scatter": {
			"speed": 2.200,
			"power": 720000.00
		},
		"pierce": {
			"speed": 2.200,
			"power": 720000.00
		},
		"cash": {
			"speed": 2.4200,
			"power": 0.65
		},
		"sword": {
			"speed": 2.7500,
			"power": 936000.00
		},
		"fire": {
			"speed": 2.7500,
			"power": 720000.00
		},
		"lightning": {
			"speed": 1.8700,
			"power": 720000.00
		}
	},
	"80ac": {
		"sniper": {
			"speed": 2.9375,
			"power": 6050000.00
		},
		"splash": {
			"speed": 1.7625,
			"power": 5760000.00
		},
		"poison": {
			"speed": 2.1150,
			"power": 3.40
		},
		"demo": {
			"speed": 1.0575,
			"power": 115200000.00
		},
		"scatter": {
			"speed": 2.3500,
			"power": 5760000.00
		},
		"pierce": {
			"speed": 2.3500,
			"power": 5760000.00
		},
		"cash": {
			"speed": 2.5850,
			"power": 0.69
		},
		"sword": {
			"speed": 2.9375,
			"power": 7490000.00
		},
		"fire": {
			"speed": 2.9375,
			"power": 5760000.00
		},
		"lightning": {
			"speed": 1.9975,
			"power": 5760000.00
		}
	}
};

var speedbasestats = {
	"basic": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"sniper": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"splash": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"poison": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"demo": {
		"increment": 0.33039,
		"modifier": 0.99446999
	},
	"scatter": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"pierce": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"cash": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"sword": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"fire": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"lightning": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
};

var powerbasestats = {
	"basic": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"sniper": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"splash": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"poison": {
		"increment": 0.434783,
		"modifier": 0.9925
	},
	"demo": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"scatter": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"pierce": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"cash": {
		"increment": 0.434783,
		"modifier": 0.9967
	},
	"sword": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"fire": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"lightning": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
};

var basecosts = {
	"base": {
		"buy": 0,
		"ball": 6,
		"speed": 6,
		"power": 10
	},
	"175": {
		"buy": 175,
		"ball": 175,
		"speed": 200,
		"power": 200
	},
	"7500": {
		"buy": 7500,
		"ball": 7500,
		"speed": 7500,
		"power": 7500
	},
	"175k": {
		"buy": 175e3,
		"ball": 175e3,
		"speed": 175e3,
		"power": 175e3
	},
	"15m": {
		"buy": 15e6,
		"ball": 15e6,
		"speed": 15e6,
		"power": 15e6
	},
	"400b": {
		"buy": 400e9,
		"ball": 400e9,
		"speed": 400e9,
		"power": 400e9
	},
	"10q": {
		"buy": 10e15,
		"ball": 10e15,
		"speed": 10e15,
		"power": 10e15
	},
	"10s": {
		"buy": 10e21,
		"ball": 10e21,
		"speed": 10e21,
		"power": 10e21
	},
	"100o": {
		"buy": 100e27,
		"ball": 100e27,
		"speed": 100e27,
		"power": 100e27
	},
	"5aa": {
		"buy": 5e36,
		"ball": 5e36,
		"speed": 5e36,
		"power": 5e36
	},
	"80ac": {
		"buy": 80e42,
		"ball": 80e42,
		"speed": 80e42,
		"power": 80e42
	}
}

var brickmult = [
	{
		"level": 1,
		"mult": 1,
		"cumulative": 1,
	},
	{
		"level": 75,
		"mult": 1.2,
		"cumulative": 1.2,
	},
	{
		"level": 100,
		"mult": 1.25,
		"cumulative": 1.5,
	},
	{
		"level": 150,
		"mult": 1.4,
		"cumulative": 2.1,
	},
	{
		"level": 200,
		"mult": 1.5,
		"cumulative": 3.15,
	},
	{
		"level": 250,
		"mult": 1.6,
		"cumulative": 5.04,
	},
	{
		"level": 300,
		"mult": 1.7,
		"cumulative": 8.568,
	},
	{
		"level": 400,
		"mult": 1.8,
		"cumulative": 15.4224,
	},
	{
		"level": 500,
		"mult": 2,
		"cumulative": 30.8448,
	},
	{
		"level": 750,
		"mult": 2.5,
		"cumulative": 77.112,
	},
	{
		"level": 1000,
		"mult": 2.5,
		"cumulative": 192.78,
	},
	{
		"level": 1500,
		"mult": 2.5,
		"cumulative": 481.95,
	},
	{
		"level": 2500,
		"mult": 3,
		"cumulative": 1445.85,
	},
	{
		"level": 5000,
		"mult": 3,
		"cumulative": 4337.55,
	},
	{
		"level": 7500,
		"mult": 3.5,
		"cumulative": 15181.425,
	},
	{
		"level": 10000,
		"mult": 3.5,
		"cumulative": 53134.9875,
	},
	{
		"level": 15000,
		"mult": 4,
		"cumulative": 212539.95,
	},
	{
		"level": 20000,
		"mult": 4,
		"cumulative": 850159.8,
	},
	{
		"level": 25000,
		"mult": 4,
		"cumulative": 3400639.2,
	},
	{
		"level": 30000,
		"mult": 4,
		"cumulative": 13602556.8,
	},
	{
		"level": 40000,
		"mult": 4,
		"cumulative": 54410227.2,
	},
	{
		"level": 50000,
		"mult": 4,
		"cumulative": 217640908.8,
	},
	{
		"level": 75000,
		"mult": 4,
		"cumulative": 870563635.2,
	},
	{
		"level": 100000,
		"mult": 5,
		"cumulative": 4352818176,
	},
	{
		"level": 125000,
		"mult": 6,
		"cumulative": 26116909056,
	},
	{
		"level": 150000,
		"mult": 7,
		"cumulative": 182818363392,
	},
	{
		"level": 175000,
		"mult": 8,
		"cumulative": 1462546907136,
	},
	{
		"level": 200000,
		"mult": 9,
		"cumulative": 13162922164224,
	},
]