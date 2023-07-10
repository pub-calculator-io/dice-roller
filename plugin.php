<?php
/*
Plugin Name: Dice Roller by Calculator.iO
Plugin URI: https://www.calculator.io/dice-roller/
Description: This online dice roller uses random number generation to create a digital dice rolling experience with all sorts of beneficial uses.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_dice_roller
*/

if (!function_exists('add_shortcode')) return "No direct call for Dice Roller by Calculator.iO";

function display_ci_dice_roller(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/dice-roller/" target="_blank"><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48"></a> Dice Roller</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_dice_roller_iframe"></iframe></div>';
}

add_shortcode( 'ci_dice_roller', 'display_ci_dice_roller' );