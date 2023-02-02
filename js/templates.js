var table_template = '<div class="text-center">\
	<table class="table table-dark table-hover table-right" style="width: 950px;">\
		<thead>\
			<th style="width: 50px">Slot</th>\
			<th style="width: 110px">Ball Type</th>\
			<th style="width: 55px">Nr. Balls</th>\
			<th style="width: 55px">Ball Speed</th>\
			<th style="width: 55px">Ball Power</th>\
			<th style="width: 75px">Speed</th>\
			<th style="width: 75px">Power</th>\
			<th style="width: 75px">Cost</th>\
			<th style="width: 100px" id="%tab%_header_dmg_poison">Damage w/<br>?? Poison</th>\
			<th style="width: 100px">Last 1shot<br>Brick Level</th>\
			<th style="width: 100px">Last 1shot<br>Hex Level</th>\
			<th style="width: 100px">Last 1shot<br>Shield Hex</th>\
		</thead>\
		<tr>\
			<th>Base</th>\
			<td>\
				<select id="%tab%_base_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="basic">Basic</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_base_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_base_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_base_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_base_speed"></td>\
			<td id="%tab%_base_power"></td>\
			<td id="%tab%_base_cost"></td>\
			<td id="%tab%_base_dmg_poison"></td>\
			<td id="%tab%_base_1shot_brick"></td>\
			<td id="%tab%_base_1shot_hex"></td>\
			<td id="%tab%_base_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>175</th>\
			<td>\
				<select id="%tab%_175_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_175_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_175_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_175_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_175_speed"></td>\
			<td id="%tab%_175_power"></td>\
			<td id="%tab%_175_cost"></td>\
			<td id="%tab%_175_dmg_poison"></td>\
			<td id="%tab%_175_1shot_brick"></td>\
			<td id="%tab%_175_1shot_hex"></td>\
			<td id="%tab%_175_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>7.5k</th>\
			<td>\
				<select id="%tab%_7500_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_7500_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_7500_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_7500_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_7500_speed"></td>\
			<td id="%tab%_7500_power"></td>\
			<td id="%tab%_7500_cost"></td>\
			<td id="%tab%_7500_dmg_poison"></td>\
			<td id="%tab%_7500_1shot_brick"></td>\
			<td id="%tab%_7500_1shot_hex"></td>\
			<td id="%tab%_7500_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>175K</th>\
			<td>\
				<select id="%tab%_175k_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_175k_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_175k_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_175k_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_175k_speed"></td>\
			<td id="%tab%_175k_power"></td>\
			<td id="%tab%_175k_cost"></td>\
			<td id="%tab%_175k_dmg_poison"></td>\
			<td id="%tab%_175k_1shot_brick"></td>\
			<td id="%tab%_175k_1shot_hex"></td>\
			<td id="%tab%_175k_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>15M</th>\
			<td>\
				<select id="%tab%_15m_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_15m_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_15m_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_15m_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_15m_speed"></td>\
			<td id="%tab%_15m_power"></td>\
			<td id="%tab%_15m_cost"></td>\
			<td id="%tab%_15m_dmg_poison"></td>\
			<td id="%tab%_15m_1shot_brick"></td>\
			<td id="%tab%_15m_1shot_hex"></td>\
			<td id="%tab%_15m_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>400B</th>\
			<td>\
				<select id="%tab%_400b_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
					<option value="sword">Sword</option>\
					<option value="fire">Fire</option>\
					<option value="lightning">Lightning</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_400b_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_400b_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_400b_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_400b_speed"></td>\
			<td id="%tab%_400b_power"></td>\
			<td id="%tab%_400b_cost"></td>\
			<td id="%tab%_400b_dmg_poison"></td>\
			<td id="%tab%_400b_1shot_brick"></td>\
			<td id="%tab%_400b_1shot_hex"></td>\
			<td id="%tab%_400b_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>10q</th>\
			<td>\
				<select id="%tab%_10q_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
					<option value="sword">Sword</option>\
					<option value="fire">Fire</option>\
					<option value="lightning">Lightning</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_10q_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_10q_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_10q_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_10q_speed"></td>\
			<td id="%tab%_10q_power"></td>\
			<td id="%tab%_10q_cost"></td>\
			<td id="%tab%_10q_dmg_poison"></td>\
			<td id="%tab%_10q_1shot_brick"></td>\
			<td id="%tab%_10q_1shot_hex"></td>\
			<td id="%tab%_10q_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>10s</th>\
			<td>\
				<select id="%tab%_10s_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
					<option value="sword">Sword</option>\
					<option value="fire">Fire</option>\
					<option value="lightning">Lightning</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_10s_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_10s_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_10s_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_10s_speed"></td>\
			<td id="%tab%_10s_power"></td>\
			<td id="%tab%_10s_cost"></td>\
			<td id="%tab%_10s_dmg_poison"></td>\
			<td id="%tab%_10s_1shot_brick"></td>\
			<td id="%tab%_10s_1shot_hex"></td>\
			<td id="%tab%_10s_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>100O</th>\
			<td>\
				<select id="%tab%_100o_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
					<option value="sword">Sword</option>\
					<option value="fire">Fire</option>\
					<option value="lightning">Lightning</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_100o_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_100o_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_100o_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_100o_speed"></td>\
			<td id="%tab%_100o_power"></td>\
			<td id="%tab%_100o_cost"></td>\
			<td id="%tab%_100o_dmg_poison"></td>\
			<td id="%tab%_100o_1shot_brick"></td>\
			<td id="%tab%_100o_1shot_hex"></td>\
			<td id="%tab%_100o_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>5aa</th>\
			<td>\
				<select id="%tab%_5aa_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
					<option value="sword">Sword</option>\
					<option value="fire">Fire</option>\
					<option value="lightning">Lightning</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_5aa_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_5aa_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_5aa_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_5aa_speed"></td>\
			<td id="%tab%_5aa_power"></td>\
			<td id="%tab%_5aa_cost"></td>\
			<td id="%tab%_5aa_dmg_poison"></td>\
			<td id="%tab%_5aa_1shot_brick"></td>\
			<td id="%tab%_5aa_1shot_hex"></td>\
			<td id="%tab%_5aa_1shot_shield"></td>\
		</tr>\
		<tr>\
			<th>80ac</th>\
			<td>\
				<select id="%tab%_80ac_type" onchange="handleCalculatorChange(event)">\
					<option value="null"></option>\
					<option value="sniper">Sniper</option>\
					<option value="splash">Splash</option>\
					<option value="poison">Poison</option>\
					<option value="demo">Demo</option>\
					<option value="scatter">Scatter</option>\
					<option value="pierce">Pierce</option>\
					<option value="cash">Cash</option>\
					<option value="sword">Sword</option>\
					<option value="fire">Fire</option>\
					<option value="lightning">Lightning</option>\
				</select>\
			</td>\
			<td><input type="number" id="%tab%_80ac_amount" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_80ac_speedLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td><input type="number" id="%tab%_80ac_powerLevel" onchange="handleCalculatorChange(event)" /></td>\
			<td id="%tab%_80ac_speed"></td>\
			<td id="%tab%_80ac_power"></td>\
			<td id="%tab%_80ac_cost"></td>\
			<td id="%tab%_80ac_dmg_poison"></td>\
			<td id="%tab%_80ac_1shot_brick"></td>\
			<td id="%tab%_80ac_1shot_hex"></td>\
			<td id="%tab%_80ac_1shot_shield"></td>\
		</tr>\
		<tr>\
			<td></td>\
			<td></td>\
			<td></td>\
			<td></td>\
			<td></td>\
			<td></td>\
			<td></td>\
			<td id="%tab%_totalcost"></td>\
			<td></td>\
			<td></td>\
			<td></td>\
			<td></td>\
		</tr>\
	</table>\
	<div class="text-left" style="margin-left: 5px">\
		<label for="%tab%_global_settings_active">\
			<input id="%tab%_global_settings_active" type="checkbox" onchange="handleCalculatorChange(event)" />Use Global Settings\
		</label>\
		<br>\
		<label for="%tab%_all_settings_active">\
			<input id="%tab%_all_settings_active" type="checkbox" onchange="handleShowAllSettingsToggle(event)" />Show All Settings\
		</label>\
	</div>\
	<table id="%tab%_mini_settings" class="table table-dark table-hover" style="width: 320px;">\
		<thead class="%tab%_togglerow">\
			<th style="width: 120px;">Prestige</th>\
			<th style="width: 40px">Value</th>\
			<th style="width: 20px"></th>\
		</thead>\
		<tr class="%tab%_togglerow">\
			<td style="text-align: center;">Ball Speed</td>\
			<td><input type="number" id="%tab%_prestige_speed" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Power</td>\
			<td><input type="number" id="%tab%_prestige_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>New Ball Cost</td>\
			<td><input type="number" id="%tab%_prestige_ballCost" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Speed Cost</td>\
			<td><input type="number" id="%tab%_prestige_speedCost" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Power Cost</td>\
			<td><input type="number" id="%tab%_prestige_powerCost" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<thead>\
			<th style="width: 120px">Cards</th>\
			<th style="width: 40px">Value</th>\
			<th style="width: 20px">Active?</th>\
		</thead>\
		<tr class="%tab%_togglerow">\
			<td>Ball Speed</td>\
			<td><input type="number" id="%tab%_cards_speed_value" onchange="handleSettingsChange(event)" /></td>\
			<td><input type="checkbox" id="%tab%_cards_speed_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Power</td>\
			<td><input type="number" id="%tab%_cards_power_value" onchange="handleSettingsChange(event)" /></td>\
			<td><input type="checkbox" id="%tab%_cards_power_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr>\
			<td>Quality Control</td>\
			<td><input type="number" id="%tab%_cards_qc_value" onchange="handleSettingsChange(event)" /></td>\
			<td><input type="checkbox" id="%tab%_cards_qc_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Spec.</td>\
			<td><input type="number" id="%tab%_cards_spec_value" onchange="handleSettingsChange(event)" /></td>\
			<td><input type="checkbox" id="%tab%_cards_spec_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Catalyst</td>\
			<td><input type="number" id="%tab%_cards_catalyst_value" onchange="handleSettingsChange(event)" /></td>\
			<td><input type="checkbox" id="%tab%_cards_catalyst_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Shield Pen.</td>\
			<td><input type="number" id="%tab%_cards_shieldpen_value" onchange="handleSettingsChange(event)" /></td>\
			<td><input type="checkbox" id="%tab%_cards_shieldpen_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<thead>\
			<th>Perks</th>\
			<th>Value</th>\
			<th></th>\
		</thead>\
		<tr>\
			<td>Ball Speed</td>\
			<td><input type="number" id="%tab%_perks_speed" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr>\
			<td>Ball Power</td>\
			<td><input type="number" id="%tab%_perks_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>New Ball Cost</td>\
			<td><input type="number" id="%tab%_perks_ballCost" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Speed Cost</td>\
			<td><input type="number" id="%tab%_perks_speedCost" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Ball Power Cost</td>\
			<td><input type="number" id="%tab%_perks_powerCost" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<thead>\
			<th>Boosts</th>\
			<th></th>\
			<th>Active?</th>\
		</thead>\
		<tr>\
			<td>Power Hungry</td>\
			<td></td>\
			<td><input type="checkbox" id="%tab%_boosts_ph_active" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<thead class="%tab%_togglerow">\
			<th>Badges</th>\
			<th>Value</th>\
			<th></th>\
		</thead>\
		<tr class="%tab%_togglerow">\
			<td>Basic</td>\
			<td><input type="number" id="%tab%_badges_basic" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Sniper</td>\
			<td><input type="number" id="%tab%_badges_sniper" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Splash</td>\
			<td><input type="number" id="%tab%_badges_splash" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Poison</td>\
			<td><input type="number" id="%tab%_badges_poison" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Demo</td>\
			<td><input type="number" id="%tab%_badges_demo" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Scatter</td>\
			<td><input type="number" id="%tab%_badges_scatter" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Pierce</td>\
			<td><input type="number" id="%tab%_badges_pierce" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Cash</td>\
			<td><input type="number" id="%tab%_badges_cash" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Sword</td>\
			<td><input type="number" id="%tab%_badges_sword" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Fire</td>\
			<td><input type="number" id="%tab%_badges_fire" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Lightning</td>\
			<td><input type="number" id="%tab%_badges_lightning" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<thead class="%tab%_togglerow">\
			<th>Skills Tree</th>\
			<th>Value</th>\
			<th></th>\
		</thead>\
		<tr class="%tab%_togglerow">\
			<td>Basic Speed</td>\
			<td><input type="number" id="%tab%_skillstree_basic_speed" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Basic Power</td>\
			<td><input type="number" id="%tab%_skillstree_basic_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Poison Speed</td>\
			<td><input type="number" id="%tab%_skillstree_poison_speed" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Poison Enrage</td>\
			<td><input type="number" id="%tab%_skillstree_poison_enrage" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Demo Enrage</td>\
			<td><input type="number" id="%tab%_skillstree_demo_enrage" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Pierce Power</td>\
			<td><input type="number" id="%tab%_skillstree_pierce_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Sword Power</td>\
			<td><input type="number" id="%tab%_skillstree_sword_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Sword Speed</td>\
			<td><input type="number" id="%tab%_skillstree_sword_speed" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Fire Power</td>\
			<td><input type="number" id="%tab%_skillstree_fire_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Lightning Power</td>\
			<td><input type="number" id="%tab%_skillstree_lightning_power" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
		<tr class="%tab%_togglerow">\
			<td>Lightning Speed</td>\
			<td><input type="number" id="%tab%_skillstree_lightning_speed" onchange="handleSettingsChange(event)" /></td>\
		</tr>\
	</table>\
</div>';
		
var navbar_template = '<li id="%tab%_id" class="%active%">\
	<a id="%tab%_name" data-toggle="tab" href="#%tab%" onclick="handleTabChange(event)">%tabname%\
	<input id="%tab%_edit" type="button" onclick="handleTabEdit(event)" value="✎" />\
	<input id="%tab%_remove" type="button" onclick="handleTabRemove(event)" value="X" />\
</a></li>'