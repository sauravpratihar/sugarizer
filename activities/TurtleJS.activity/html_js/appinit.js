/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

var global_tracker = new GlobalVarsTracker();
var user_vars_tracker = new UserVarsTracker();
var block_tracker = new BlockTracker();
var palette_tracker = new PaletteTracker();
var dock_tracker = new DockTracker();
var draw_stage = new DrawStage('container2', $(window).width() - 5, $(window).height() - 62);
//var draw_stage = new DrawStage('container2', 2000, 2000);
var image_tracker = new BlockImageTracker();

var error_message_displayer = new ErrorMessage([0, 0], draw_stage.layer);

block_tracker.set_palette_tracker(palette_tracker);

global_tracker.add_var('block_tracker', block_tracker);
global_tracker.add_var('draw_stage', draw_stage);
global_tracker.add_var('palette_tracker', palette_tracker);
global_tracker.add_var('dock_tracker', dock_tracker);
global_tracker.add_var('i18n_tracker', i18n_tracker);
global_tracker.add_var('block_image_tracker', image_tracker);
global_tracker.add_var('user_vars_tracker', user_vars_tracker);

var basic1 = new BasicBlockPalette(495, 200, '#FFD000', draw_stage.palette_layer, new BasicBlockDesc(), global_tracker);
palette_tracker.add_palette(basic1);

var pen_palette = new PenPalette(640, 160, '#FFD000', draw_stage.palette_layer, new PenPaletteDesc(), global_tracker);
palette_tracker.add_palette(pen_palette);

var colors_palette = new ColorsPalette(550, 160, '#FFD000', draw_stage.palette_layer, new ColorsPaletteDesc(), global_tracker);
palette_tracker.add_palette(colors_palette);

var flow_palette = new FlowPalette(575, 160, '#FFD000', draw_stage.palette_layer, new FlowPaletteDesc(), global_tracker);
palette_tracker.add_palette(flow_palette);

var numbers_palette = new NumbersPalette(475, 150, '#FFD000', draw_stage.palette_layer, new NumbersPaletteDesc(), global_tracker);
palette_tracker.add_palette(numbers_palette);

var blocks_palette = new BlocksPalette(475, 150, '#FFD000', draw_stage.palette_layer, new BlocksPaletteDesc(), global_tracker);
palette_tracker.add_palette(blocks_palette);
