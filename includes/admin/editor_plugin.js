(
	function(){

		tinymce.create(
			"tinymce.plugins.LightShortcodes",
			{
				init: function(d,e) {},
				createControl:function(d,e)
				{

					var ed = tinymce.activeEditor;

					if(d=="ls_shortcodes_button"){

						d=e.createMenuButton( "ls_shortcodes_button",{
							title: ed.getLang('ls_shortcodes.insert'),
							icons: false
							});

							var a=this;d.onRenderMenu.add(function(c,b){

								
								/** Working shortcode starting here 
								* default: a.addImmediate(b, ed.getLang('ls_shortcodes.ls_button'),'' );
								* --------------------------------------- */
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_button'),'[ls_button color="blue" url="#" title="themes" icon_left="twitter" target="_blank" size="large" display="block"]Button Text[/ls_button]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_box'),'[ls_box color="green" width="50%" text_align="left" margin_bottom="50px" margin_top="50px"]Alert Box Text[/ls_box]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_icon'),'[ls_icon type="image"]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_highlight'),'[ls_highlight color="green"]text to highlight[/ls_highlight]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_divider'),'[ls_divider type="dashed" color="green"]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_accordion'),'[ls_accordion][ls_accordion_section title="Section #1"]Section 1 text[/ls_accordion_section][ls_accordion_section title="Section #2"]Section 2 text[/ls_accordion_section][ls_accordion_section title="Section #3"]Section 3 text[/ls_accordion_section][/ls_accordion]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_toggle'),'[ls_toggle title="Toggle Title"]Toggle text[/ls_toggle]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_tabs'),'[ls_tabgroup][ls_tab title="Tab #1"]Tab 1 text [/ls_tab][ls_tab title="Tab #2"]Tab 2 text[/ls_tab][/ls_tabgroup]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_googlemaps'),'[ls_googlemap location="new york,usa" zoom="5" title="New York" height="500"]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_pricingtables'),'[ls_pricing plan="Premium" cost="$200" per="per month" button_url="#" button_text="Sign Up" button_color="green" button_target="self" button_rel="nofollow"] <li>Item 1</li> <li>Item 2</li> [/ls_pricing]' );
								
								
								c=b.addMenu({title:ed.getLang('ls_shortcodes.ls_grids')});
									a.addImmediate(c, ed.getLang('ls_shortcodes.ls_grids_two_cols'),"[one_half_first] This is the first column [/one_half_first][one_half_last] This is the first column [/one_half_last]" );
									a.addImmediate(c, ed.getLang('ls_shortcodes.ls_grids_three_cols'),'[one_third_first] This is the first column [/one_third_first][one_third] This is the second column [/one_third][one_third_last] This is the third and last column [/one_third_last]' );
									
									a.addImmediate(c, ed.getLang('ls_shortcodes.ls_grids_four_cols'),'[one_fourth_first] This is the first column [/one_fourth_first][one_fourth] This is the second column [/one_fourth][one_fourth] This is the third column [/one_fourth][one_fourth_last] This is the fourth and last column [/one_fourth_last]' );
									
									a.addImmediate(c, ed.getLang('ls_shortcodes.ls_grids_six_cols'),'[one_sixth_first] This is the first column [/one_sixth_first][one_sixth] This is the second column [/one_sixth][one_sixth] This is the third column [/one_sixth][one_sixth] This is the fourth column [/one_sixth][one_sixth] This is the fifth column [/one_sixth][one_sixth_last] This is the sixth and last column [/one_sixth_last]' );
									
								
								// a.addImmediate(b, ed.getLang('ls_shortcodes.ls_button'),'' );
								
								
								/** End of working shortcode button
								* --------------------------------------- */
								
								// b.addSeparator(); // Used to create a line separator
								

							});
						return d

					} // End IF Statement

					return null
				},

				addImmediate:function(d,e,a){d.add({title:e,onclick:function(){tinyMCE.activeEditor.execCommand( "mceInsertContent",false,a)}})}

			}
		);

		tinymce.PluginManager.add( "LightShortcodes", tinymce.plugins.LightShortcodes);
	}
)();