// create table view data object
var data = [
	{title:'Tab Groups', hasChild:true, test:'../examples/tab_groups.js'},
	{title:'Tabs', hasChild:true, test:'../examples/tabs.js'},
	{title:'Window Properties', hasChild:true, test:'../examples/window_properties.js'},
	{title:'Window NavBar', hasChild:true, test:'../examples/window_navbar.js'},
	{title:'Window Toolbar', hasChild:true, test:'../examples/window_toolbar.js'},
	{title:'Window Layout', hasChild:true, test:'../examples/window_layout.js'},
	{title:'Window (Standalone)', hasChild:true, test:'../examples/window_standalone.js'},
	{title:'Window Constructor', hasChild:true, test:'../examples/window_constructor.js'},
	{title:'Window Events', hasChild:true, test:'../examples/window_events.js'},
	{title:'Views', hasChild:true, test:'../examples/views.js'},
	{title:'Animation', hasChild:true, test:'../examples/animation.js'},
	{title:'Custom Events', hasChild:true, test:'../examples/custom_events.js'},

];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title,
			backgroundColor:'#fff'
		});
		Titanium.UI.currentTab.open(win,{animated:true})
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);

//
//  ADD EVENT LISTENERS FOR CUSTOM EVENTS
//
var win = Titanium.UI.createWindow({
	height:30,
	width:250,
	bottom:110,
	borderRadius:10
});

var view = Titanium.UI.createView({
	backgroundColor:'#000',
	opacity:0.7,
	height:30,
	width:250,
	borderRadius:10
});

var label = Titanium.UI.createLabel({
	color:'#fff',
	font:{fontSize:13},
	textAlign:'center'
});
win.add(view);
win.add(label);

Titanium.App.addEventListener('event_one', function(e)
{
	label.text = 'base_ui.js: event one, array length = ' + e.data.length;
	win.open();
	setTimeout(function()
	{
		win.close({opacity:0,duration:500});
	},1000);
});

Titanium.App.addEventListener('event_two', function(e)
{
	label.text = 'base_ui.js: event two, name = ' + e.name;
	win.open();
	setTimeout(function()
	{
		win.close({opacity:0,duration:500});
	},1000);
	
});

